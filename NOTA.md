> Este arquivo e **gerado automaticamente** pelo CI a cada push na branch `main`.
> Nao edite a mao: o proximo commit do CI sobrescreve. Para ver a rodada no Actions:
> https://github.com/ORG/REPO/actions/workflows/pam-ci.yml

## Nota PAM I — Babuínos do note.js (gestão MEI)

![](https://img.shields.io/static/v1?label=Nota%20PAM%20I&message=MB&color=green)

**Nota atual: MB** · 84% (84/100 pontos) · rodada de 2026-11-10 01:28:45 · commit `local`

Legenda: I = Insuficiente (0–25%) · R = Regular (25–50%) · B = Bom (50–75%) · MB = Muito bom (75–100%)

| Fase | Peso | Pontos | Situação |
|---|---|---|---|
| Fase 1 — Estrutura | 1x (10 pts) | 8/10 | em desenvolvimento |
| Fase 2 — AsyncStorage | 1x (15 pts) | 12/15 | em desenvolvimento |
| Fase 3 — SQLite | 2x (30 pts) | 28/30 | em desenvolvimento |
| Fase 4 — Versão Final (SQLite + UX + Dispositivo) | 3x (45 pts) | 36/45 | em desenvolvimento |

## Resumo dos Testes Funcionais (Execução Real em Runtime Node + SQLite)

| Teste Funcional SQLite (Fase 4) | Resultado | Detalhes da Execução |
|---|---|---|
| Schema / Inicialização (`CREATE TABLE`) | PASSOU | Tabelas criadas no SQLite: `clientes` |
| Adicionar (`INSERT INTO`) | PASSOU | Inserção SQLite verificada em memória (`inserts=7` em `clientes`) |
| Listar + Filtrar (`SELECT` + `WHERE`) | PASSOU | Leitura e filtro SQLite verificados (`selects=15, where=10`) |
| Editar (`UPDATE`) | PASSOU | Atualização SQLite verificada (`updates=2` em `clientes`) |
| Excluir (`DELETE FROM`) | PASSOU | Exclusão SQLite confirmada (`deletes=2` em `clientes`) |

## Checklist validado

### Fase 1 — Estrutura do projeto (8/10 pts · peso 1x)

- [x] **(+1 pts)** README.md existe e fala do projeto/grupo — `README.md`
- [x] **(+1 pts)** Arquivo principal do app existe (App.js) — `App.js`
- [x] **(+1 pts)** package.json existe com a dependência "expo" — `expo ~57.0.32`
- [x] **(+1 pts)** Existe tela de LISTAGEM — `src/Lista.js`
- [x] **(+1 pts)** Existem dados iniciais (seed) em arquivo de dados — `banco.js`
- [ ] **(+1 pts)** Existe tela de FORMULÁRIO — `—`
- [x] **(+1 pts)** Existe tela de DETALHE — `src/Detalhe.js`
- [ ] **(+1 pts)** Dependências importadas existem no package.json (app não quebra ao abrir) — `react, react-native`
- [x] **(+1 pts)** app.json identifica o app (name/slug preenchidos) — `app.json`
- [x] **(+1 pts)** Projeto tem pelo menos 2 arquivos de tela/código — `4 arquivos de tela`

### Fase 2 — Persistência com AsyncStorage (12/15 pts · peso 1x)

- [x] **(+1 pts)** Dependência async-storage está no package.json (ou migrado p/ expo-sqlite) — `no package.json`
- [x] **(+1 pts)** Existe import do AsyncStorage (ou SQLite) no código — `src/Lista.js`
- [x] **(+1 pts)** Storage faz leitura (AsyncStorage.getItem ou SELECT) — `src/Lista.js`
- [x] **(+1 pts)** Storage grava dados (AsyncStorage.setItem ou INSERT) — `src/Lista.js`
- [x] **(+1 pts)** Existe função de CARREGAR a lista (carregar/load/listar/get) — `banco.js`
- [x] **(+1 pts)** Existe função de ADICIONAR/CADASTRAR (adicionar/salvar/inserir/create) — `banco.js`
- [x] **(+1 pts)** Existe busca por id (buscar/find/getItem/getFirst) — `banco.js`
- [x] **(+1 pts)** Existe função de EXCLUIR/remover — `banco.js`
- [ ] **(+1 pts)** Formulário lê entradas com TextInput — `—`
- [ ] **(+1 pts)** Formulário salva chamando adicionar/salvar — `—`
- [x] **(+1 pts)** Lista é alimentada a partir do storage/banco — `src/Lista.js`
- [x] **(+1 pts)** Tela de detalhe usa busca/dados do storage/banco — `src/Detalhe.js`
- [x] **(+1 pts)** Exclusão usa confirmação (Alert.alert) — `Detalhe.js`
- [x] **(+1 pts)** Dados iniciais/seed são gravados na 1ª execução — `src/Lista.js`
- [ ] **(+1 pts)** Formulário valida campos (trim/length/vazio) — `—`

### Fase 3 — Banco de dados SQLite (28/30 pts · peso 2x)

- [x] **(+2 pts)** Dependência expo-sqlite está no package.json — `no package.json`
- [x] **(+2 pts)** Existe import do expo-sqlite — `banco.js`
- [x] **(+2 pts)** Existe arquivo de banco de dados — `banco.js`
- [x] **(+2 pts)** Cria a tabela com CREATE TABLE IF NOT EXISTS — `banco.js`
- [x] **(+2 pts)** Insere dados com INSERT INTO — `banco.js`
- [x] **(+2 pts)** Consulta com SELECT — `banco.js`
- [x] **(+2 pts)** Atualiza com UPDATE — `banco.js`
- [x] **(+2 pts)** Exclui com DELETE FROM — `banco.js`
- [x] **(+2 pts)** Usa filtros com WHERE — `banco.js`
- [x] **(+2 pts)** Banco aberto com openDatabaseAsync/openDatabaseSync/openDatabase — `banco.js`
- [x] **(+2 pts)** Tela de lista carrega dados do banco — `src/Lista.js`
- [ ] **(+2 pts)** Formulário salva no banco (INSERT/runAsync/runSync) — `—`
- [x] **(+2 pts)** Detalhe busca no banco com WHERE/SELECT — `src/Detalhe.js`
- [x] **(+2 pts)** Usa async/await corretamente (mais de 2 await) — `banco.js`
- [x] **(+2 pts)** Banco possui dados iniciais (seed inserido em SQL) — `banco.js`

### Fase 4 — Versão Final: SQLite Exclusivo, UX, Dispositivo e Entrega (36/45 pts · peso 3x)

- [ ] **(+3 pts)** SQLite exclusivo: fluxo das telas usa SQLite sem depender de AsyncStorage p/ dados críticos — `FALTA migrar telas 100% para SQLite (remover AsyncStorage do CRUD principal)`
- [x] **(+3 pts)** [Teste Funcional SQLite] Banco abre e cria a(s) tabela(s) em memória (CREATE TABLE) — `Tabela(s) criada(s) no motor SQLite: clientes`
- [x] **(+3 pts)** [Teste Funcional SQLite] Fluxo de ADICIONAR insere registro real no banco (INSERT INTO) — `INSERT executado com sucesso no SQLite (7 inserção/ões em clientes)`
- [x] **(+3 pts)** [Teste Funcional SQLite] Fluxo de LISTAR e FILTRAR retorna dados reais (SELECT + WHERE) — `SELECT (15x) + WHERE (10x) validados em clientes`
- [x] **(+3 pts)** [Teste Funcional SQLite] Fluxo de EDITAR atualiza registro existente no banco (UPDATE) — `UPDATE executado e verificado no SQLite (2x em clientes)`
- [x] **(+3 pts)** [Teste Funcional SQLite] Fluxo de EXCLUIR remove registro do banco (DELETE FROM) — `DELETE executado e confirmado no SQLite (2x em clientes)`
- [x] **(+3 pts)** Recurso do dispositivo: pacote nativo no package.json (notifications, image-picker, location) ou justificativa — `expo-notifications`
- [x] **(+3 pts)** Recurso do dispositivo: uso da API nativa no código (notificação, foto ou GPS) ou justificativa — `App.js`
- [x] **(+3 pts)** UX: Loading ao carregar a lista do SQLite (ActivityIndicator + estado loading/carregando) — `Detalhe.js (Detalhe.js)`
- [x] **(+3 pts)** UX: Empty State quando não houver registros (mensagem amigável + ícone/emoji/ilustração) — `Lista.js`
- [x] **(+3 pts)** UX: Mensagem de erro amigável se falhar ao CARREGAR dados (try/catch com feedback) — `Detalhe.js`
- [x] **(+3 pts)** UX: Mensagem de erro amigável e validação se falhar ao SALVAR/EXCLUIR (try/catch + Alert/.trim) — `Detalhe.js + validação .trim()`
- [ ] **(+3 pts)** Organização do código: separação em pastas por responsabilidade (screens/app, database/data, components) — `FALTA separar código em pastas (ex.: screens/, database/, components/)`
- [ ] **(+3 pts)** Interface consistente: FlatList (keyExtractor + renderItem) e estilização StyleSheet.create — `FALTA FlatList com keyExtractor/renderItem e StyleSheet.create consistente`
- [x] **(+3 pts)** Entrega: repositório limpo (.gitignore sem node_modules) e README com instruções/Expo Go/APK — `README.md (75 linhas) + .gitignore`

## Para evoluir a nota

Os itens **desmarcados** acima são exatamente o que falta no projeto. Cada rodada deste CI (a cada push) executa os testes estáticos e funcionais, recalcula e atualiza a nota — o artefato `nota-pam` sempre mostra o valor mais recente.
