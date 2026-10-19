> Este arquivo e **gerado automaticamente** pelo CI a cada push na branch `main`.
> Nao edite a mao: o proximo commit do CI sobrescreve. Para ver a rodada no Actions:
> https://github.com/Zero8KDev/MEIHub/actions/workflows/pam-ci.yml

## Nota PAM I — Babuínos do note.js (gestão MEI)

![](https://img.shields.io/static/v1?label=Nota%20PAM%20I&message=MB&color=green)

**Nota atual: MB** · 80% (44/55 pontos) · rodada de 2026-10-19 20:12:29 · commit `579dddc`

Legenda: I = Insuficiente (0–25%) · R = Regular (25–50%) · B = Bom (50–75%) · MB = Muito bom (75–100%)

| Fase | Pontos | Situação |
|---|---|---|
| Fase 1 — Estrutura | 8/10 | em desenvolvimento |
| Fase 2 — AsyncStorage | 12/15 | em desenvolvimento |
| Fase 3 — SQLite | 24/30 | em desenvolvimento |

## Checklist validado

### Fase 1 — Estrutura do projeto (8/10 pts)

- [x] **(+1 pts)** README.md existe e fala do projeto/grupo — `README.md`
- [x] **(+1 pts)** Arquivo principal do app existe (App.js) — `App.js`
- [x] **(+1 pts)** package.json existe com a dependência "expo" — `expo ^57.0.15`
- [x] **(+1 pts)** Existe tela de LISTAGEM — `src/Lista.js`
- [x] **(+1 pts)** Existem dados iniciais (seed) em arquivo de dados — `Detalhe.js`
- [ ] **(+1 pts)** Existe tela de FORMULÁRIO — `—`
- [x] **(+1 pts)** Existe tela de DETALHE — `src/Detalhe.js`
- [ ] **(+1 pts)** Dependências importadas existem no package.json (app não quebra ao abrir) — `react, react-native`
- [x] **(+1 pts)** app.json identifica o app (name/slug preenchidos) — `app.json`
- [x] **(+1 pts)** Projeto tem pelo menos 2 arquivos de tela/código — `4 arquivos de tela`

### Fase 2 — Persistência com AsyncStorage (12/15 pts)

- [x] **(+1 pts)** Dependência async-storage está no package.json — `no package.json`
- [x] **(+1 pts)** Existe import do AsyncStorage no código — `pam-ci.mjs`
- [x] **(+1 pts)** Storage faz leitura com AsyncStorage.getItem — `pam-ci.mjs`
- [x] **(+1 pts)** Storage grava com AsyncStorage.setItem — `pam-ci.mjs`
- [x] **(+1 pts)** Existe função de CARREGAR a lista (carregar/load) — `Detalhe.js`
- [x] **(+1 pts)** Existe função de ADICIONAR/CADASTRAR — `Detalhe.js`
- [x] **(+1 pts)** Existe busca por id (buscar/find/getItem) — `Detalhe.js`
- [x] **(+1 pts)** Existe função de EXCLUIR/remover — `Detalhe.js`
- [ ] **(+1 pts)** Formulário lê entradas com TextInput — `—`
- [ ] **(+1 pts)** Formulário salva chamando adicionar/salvar — `—`
- [x] **(+1 pts)** Lista é alimentada a partir do storage — `src/Lista.js`
- [x] **(+1 pts)** Tela de detalhe usa busca/dados do storage — `src/Detalhe.js`
- [x] **(+1 pts)** Exclusão usa confirmação (Alert.alert) — `Detalhe.js`
- [x] **(+1 pts)** Dados iniciais/seed são gravados na 1ª execução — `pam-ci.mjs`
- [ ] **(+1 pts)** Formulário valida campos (trim/length/vazio) — `—`

### Fase 3 — Banco de dados SQLite (24/30 pts)

- [x] **(+2x2 pts)** Dependência expo-sqlite está no package.json — `no package.json`
- [x] **(+2x2 pts)** Existe import do expo-sqlite — `banco.js`
- [x] **(+2x2 pts)** Existe arquivo de banco de dados — `banco.js`
- [x] **(+2x2 pts)** Cria a tabela com CREATE TABLE IF NOT EXISTS — `banco.js`
- [x] **(+2x2 pts)** Insere dados com INSERT INTO — `banco.js`
- [x] **(+2x2 pts)** Consulta com SELECT — `banco.js`
- [x] **(+2x2 pts)** Atualiza com UPDATE — `banco.js`
- [x] **(+2x2 pts)** Exclui com DELETE FROM — `banco.js`
- [x] **(+2x2 pts)** Usa filtros com WHERE — `banco.js`
- [x] **(+2x2 pts)** Banco aberto com openDatabaseAsync/openDatabase — `banco.js`
- [ ] **(+2x2 pts)** Tela de lista carrega dados do banco — `src/Lista.js`
- [ ] **(+2x2 pts)** Formulário salva no banco (INSERT/runAsync) — `—`
- [ ] **(+2x2 pts)** Detalhe busca no banco com WHERE/SELECT — `src/Detalhe.js`
- [x] **(+2x2 pts)** Usa async/await corretamente (mais de 2 await) — `Detalhe.js`
- [x] **(+2x2 pts)** Banco possui dados iniciais (seed inserido em SQL) — `banco.js`

## Para evoluir a nota

Os itens **desmarcados** acima são exatamente o que falta no projeto. Cada rodada deste CI (a cada push) recalcula e atualiza a nota — o artefato `nota-pam` sempre mostra o valor mais recente.
