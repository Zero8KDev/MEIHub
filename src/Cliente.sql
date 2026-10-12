CREATE TABLE IF NOT EXISTS clientes (
    id          TEXT PRIMARY KEY,
    nome        TEXT NOT NULL,
    servico     TEXT,
    status      TEXT NOT NULL DEFAULT 'Em dia'
                CHECK (status IN ('Em dia', 'Pendente', 'Atrasado')),
    email       TEXT,
    telefone    TEXT,
    desde       TEXT,
    valorMensal REAL
);