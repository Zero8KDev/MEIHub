# MEIHub

<!-- PAM-CI-NOTA-INICIO -->
### Nota atual (automática) — Babuínos do note.js (gestão MEI)

[![CI](https://github.com/Zero8KDev/MEIHub/actions/workflows/pam-ci.yml/badge.svg)](https://github.com/Zero8KDev/MEIHub/actions/workflows/pam-ci.yml) [![Nota](https://img.shields.io/badge/Nota%20PAM%20I-MB-green)](https://github.com/Zero8KDev/MEIHub/actions/workflows/pam-ci.yml)

**MB** — Muito bom · **80%** (44/55 pontos) · atualizado em 2026-10-19 20:12

| Fase | Pontos |
|------|--------|
| Fase 1 — Estrutura | 8/10 |
| Fase 2 — AsyncStorage | 12/15 |
| Fase 3 — SQLite | 24/30 |

Checklist item a item em [NOTA.md](NOTA.md) · [ver a rodada mais recente no Actions](https://github.com/Zero8KDev/MEIHub/actions/workflows/pam-ci.yml)
<!-- PAM-CI-NOTA-FIM -->

Babuínos do note.js — Projeto PAM I

---

> [!IMPORTANT]
> **Sua inscrição foi aceita!** Bem-vindos ao Trabalho em Grupo de PAM I.
> Abaixo estão as fichas de entrega e os links das aulas que vocês vão precisar.

## Integrantes

- Gustavo Graciano
- Davi Benite Buer
- Diego Ferreira

## Tema

Gestão de clientes, serviços e agendamentos para MEIs e pequenos prestadores de serviços.

## Como rodar o projeto

Projeto criado com [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) (Expo / React Native).

1. Instale/alinha as dependências do projeto

   ```bash
   npm install
   npx expo install expo-sqlite
   ```

2. Inicie o app

   ```bash
   npx expo start
   ```

3. Abra no seu dispositivo ou emulador:
   - **Expo Go**: escaneie o QR Code exibido no terminal
   - **Web**: pressione `w` no terminal (requer `react-dom` e `react-native-web`)
   - **Android emulador**: pressione `a`
   - **iOS simulator**: pressione `i`

## Fase 3 — SQLite

Os dados de clientes são armazenados localmente no banco `meihub.db`, usando `expo-sqlite`. O arquivo `src/banco.js` cria a tabela na primeira abertura e insere clientes iniciais quando a tabela está vazia. A listagem usa `SELECT` com filtros `WHERE`; o cadastro usa `INSERT`; a edição/status usa `UPDATE`; e a exclusão usa `DELETE`. O arquivo `src/Cliente.sql` contém o esquema e os dados iniciais para consulta.

Depois de instalar a dependência, inicie com `npx expo start`. Se estiver com o servidor já aberto, pare-o e inicie novamente.

## Fichas de Entrega

| Fase | Descrição | Prazo | Link |
|------|-----------|-------|------|
| Fase 1 | Proposta do projeto + app com duas telas | Aula 20 + início do Bimestre 3 | [fase1.md](https://github.com/Etec-Bento-Quirino/Programacao-Aplicativos-Moveis-I/blob/main/modulo-08-projeto-final/fase1.md) |
| Fase 2 | Formulário + persistência com AsyncStorage | 14/09/2026 | [fase2.md](https://github.com/Etec-Bento-Quirino/Programacao-Aplicativos-Moveis-I/blob/main/modulo-08-projeto-final/fase2.md) |
| Fase 3 | SQLite + CRUD completo | 19/10/2026 | [fase3.md](https://github.com/Etec-Bento-Quirino/Programacao-Aplicativos-Moveis-I/blob/main/modulo-08-projeto-final/fase3.md) |
| Fase 4 | Versão final + apresentação | 16/11/2026 | [fase4.md](https://github.com/Etec-Bento-Quirino/Programacao-Aplicativos-Moveis-I/blob/main/modulo-08-projeto-final/fase4.md) |

## Aulas Relevantes

- [Aula 03 - Layouts e componentes](https://etec-bento-quirino.github.io/Programacao-Aplicativos-Moveis-I/modulo-02-fundamentos-ui/aula-03-layouts-e-componentes/)
- [Aula 04 - Texto, botões e ícones](https://etec-bento-quirino.github.io/Programacao-Aplicativos-Moveis-I/modulo-02-fundamentos-ui/aula-04-texto-botoes-e-icones/)
- [Aula 05 - Listas e ScrollView](https://etec-bento-quirino.github.io/Programacao-Aplicativos-Moveis-I/modulo-02-fundamentos-ui/aula-05-listas-e-scrollview/)
- [Aula 06 - Navegação entre telas](https://etec-bento-quirino.github.io/Programacao-Aplicativos-Moveis-I/modulo-03-navegacao-formularios/aula-06-navegacao-entre-telas/)
- [Aula 07 - Formulários](https://etec-bento-quirino.github.io/Programacao-Aplicativos-Moveis-I/modulo-03-navegacao-formularios/aula-07-formularios/)
- [Aula 10 - Notificações](https://etec-bento-quirino.github.io/Programacao-Aplicativos-Moveis-I/modulo-03-navegacao-formularios/aula-10-notificacoes/)
- [Aula 11 - Estado com hooks](https://etec-bento-quirino.github.io/Programacao-Aplicativos-Moveis-I/modulo-04-estado-gerenciamento/aula-11-estado-com-hooks/)
- [Aula 13 - AsyncStorage](https://etec-bento-quirino.github.io/Programacao-Aplicativos-Moveis-I/modulo-04-estado-gerenciamento/aula-13-asyncstorage/)
- [Aula 14 - SQLite introdução](https://etec-bento-quirino.github.io/Programacao-Aplicativos-Moveis-I/modulo-05-banco-dados/aula-14-sqlite-introducao/)
- [Aula 15 - SQLite CRUD](https://etec-bento-quirino.github.io/Programacao-Aplicativos-Moveis-I/modulo-05-banco-dados/aula-15-sqlite-crud/)
- [Aula 16 - SQLite + formulários](https://etec-bento-quirino.github.io/Programacao-Aplicativos-Moveis-I/modulo-05-banco-dados/aula-16-sqlite-formularios/)
- [Aula 18 - Boas práticas de UX](https://etec-bento-quirino.github.io/Programacao-Aplicativos-Moveis-I/modulo-07-boas-praticas-ux/aula-18-boas-praticas-de-ux/)

---

> [!TIP]
> Material completo do curso: [PAM I](https://etec-bento-quirino.github.io/Programacao-Aplicativos-Moveis-I/)


---

## Colaboração por integrante

> *Excluídos: commits do professor Jackson Sá (wendelmax), `github-actions[bot]` e `dependabot[bot]`. Contagem com base em `git log --no-merges`.*

| # | Integrante | Commits | Participação |
|---|------------|---------|--------------|
| 1 | Davi-Buer | 7 | 43.8% ████████░░░░░░░░░░░░ |
| 2 | Zero8Kdev | 5 | 31.2% ██████░░░░░░░░░░░░░░ |
| 3 | ShyShy | 3 | 18.8% ███░░░░░░░░░░░░░░░░░ |
| 4 | Diego Ferreira | 1 | 6.2% █░░░░░░░░░░░░░░░░░░░ |

**Total de commits considerados:** 16
