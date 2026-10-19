import * as SQLite from 'expo-sqlite';

const NOME_BANCO = 'meihub.db';

let bancoPromise;

export async function abrirBanco() {
    if (!bancoPromise) {
        bancoPromise = SQLite.openDatabaseAsync(NOME_BANCO);
    }

    const banco = await bancoPromise;

    await banco.execAsync(`
        PRAGMA journal_mode = WAL;

        CREATE TABLE IF NOT EXISTS clientes (
            id TEXT PRIMARY KEY NOT NULL,
            nome TEXT NOT NULL,
            servico TEXT,
            status TEXT NOT NULL DEFAULT 'Em dia'
                CHECK (status IN ('Em dia', 'Pendente', 'Atrasado')),
            email TEXT,
            telefone TEXT,
            desde TEXT,
            valorMensal TEXT
        );
    `);

    await inserirDadosIniciais(banco);
    return banco;
}

async function inserirDadosIniciais(banco) {
    const quantidade = await banco.getFirstAsync(
        'SELECT COUNT(*) AS total FROM clientes'
    );

    if (quantidade.total > 0) return;

    const clientesIniciais = [
        ['1', 'Ana Costa', 'Consultoria mensal', 'Em dia', 'ana.costa@email.com', '(11) 98765-4321', 'Março 2024', 'R$ 1.200,00'],
        ['2', 'Bruno Martins', 'Identidade visual', 'Em dia', 'bruno.martins@email.com', '(11) 97654-3210', 'Janeiro 2025', 'R$ 850,00'],
        ['3', 'Clara Lima', 'Gestão de conteúdo', 'Em dia', 'clara.lima@email.com', '(11) 96543-2109', 'Junho 2024', 'R$ 950,00'],
        ['4', 'Diego Santos', 'Manutenção do site', 'Em dia', 'diego.santos@email.com', '(11) 95432-1098', 'Agosto 2024', 'R$ 700,00'],
        ['5', 'Estúdio Flora', 'Projeto avulso', 'Em dia', 'contato@estudioflora.com', '(11) 94321-0987', 'Fevereiro 2025', 'R$ 1.500,00']
    ];

    for (const cliente of clientesIniciais) {
        await banco.runAsync(
            `INSERT OR IGNORE INTO clientes
            (id, nome, servico, status, email, telefone, desde, valorMensal)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            cliente
        );
    }
}

export async function listarClientes(busca = '', status = 'Todos') {
    const banco = await abrirBanco();
    const termo = `%${busca.trim()}%`;

    if (status === 'Todos') {
        return banco.getAllAsync(
            'SELECT * FROM clientes WHERE nome LIKE ? ORDER BY nome COLLATE NOCASE',
            [termo]
        );
    }

    return banco.getAllAsync(
        'SELECT * FROM clientes WHERE nome LIKE ? AND status = ? ORDER BY nome COLLATE NOCASE',
        [termo, status]
    );
}

export async function buscarClientePorId(id) {
    const banco = await abrirBanco();
    return banco.getFirstAsync(
        'SELECT * FROM clientes WHERE id = ?',
        [String(id)]
    );
}

export async function adicionarCliente(cliente) {
    const banco = await abrirBanco();
    await banco.runAsync(
        `INSERT INTO clientes
        (id, nome, servico, status, email, telefone, desde, valorMensal)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            String(cliente.id),
            cliente.nome.trim(),
            cliente.servico || '',
            cliente.status || 'Em dia',
            cliente.email || '',
            cliente.telefone || '',
            cliente.desde || '',
            cliente.valorMensal || ''
        ]
    );
    return buscarClientePorId(cliente.id);
}

export async function atualizarCliente(cliente) {
    const banco = await abrirBanco();
    await banco.runAsync(
        `UPDATE clientes SET
            nome = ?, servico = ?, status = ?, email = ?,
            telefone = ?, desde = ?, valorMensal = ?
        WHERE id = ?`,
        [
            cliente.nome.trim(),
            cliente.servico || '',
            cliente.status || 'Em dia',
            cliente.email || '',
            cliente.telefone || '',
            cliente.desde || '',
            cliente.valorMensal || '',
            String(cliente.id)
        ]
    );
    return buscarClientePorId(cliente.id);
}

export async function excluirCliente(id) {
    const banco = await abrirBanco();
    const resultado = await banco.runAsync(
        'DELETE FROM clientes WHERE id = ?',
        [String(id)]
    );
    return resultado.changes;
}
