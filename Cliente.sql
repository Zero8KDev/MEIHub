CREATE TABLE IF NOT EXISTS clientes (
    id          TEXT PRIMARY KEY NOT NULL,
    nome        TEXT NOT NULL,
    servico     TEXT,
    status      TEXT NOT NULL DEFAULT 'Em dia'
                CHECK (status IN ('Em dia', 'Pendente', 'Atrasado')),
    email       TEXT,
    telefone    TEXT,
    desde       TEXT,
    valorMensal TEXT
);

-- Dados iniciais. INSERT OR IGNORE evita duplicações ao executar novamente.
INSERT OR IGNORE INTO clientes
(id, nome, servico, status, email, telefone, desde, valorMensal)
VALUES
('1', 'Ana Costa', 'Consultoria mensal', 'Em dia', 'ana.costa@email.com', '(11) 98765-4321', 'Março 2024', 'R$ 1.200,00'),
('2', 'Bruno Martins', 'Identidade visual', 'Em dia', 'bruno.martins@email.com', '(11) 97654-3210', 'Janeiro 2025', 'R$ 850,00'),
('3', 'Clara Lima', 'Gestão de conteúdo', 'Em dia', 'clara.lima@email.com', '(11) 96543-2109', 'Junho 2024', 'R$ 950,00'),
('4', 'Diego Santos', 'Manutenção do site', 'Em dia', 'diego.santos@email.com', '(11) 95432-1098', 'Agosto 2024', 'R$ 700,00'),
('5', 'Estúdio Flora', 'Projeto avulso', 'Em dia', 'contato@estudioflora.com', '(11) 94321-0987', 'Fevereiro 2025', 'R$ 1.500,00');
