# AGENTS.md

React Native (Expo SDK 57) app for managing MEI/small-service clients and appointments (Brazilian school project, PAM I). UI text and code comments are in Portuguese.

## Commands

`package.json` has **no scripts and no `main` field**, and there is **no `app.json`/`app.config.js`**. Run Expo directly:

- `npx expo start` — dev server (Expo Go / emulator)
- No test, lint, build, or typecheck tooling is configured. Verify by running the app in Expo.

## Structure

- `App.js` — entrypoint. Defines the native-stack navigator with screens `Lista` (title `MEIHub`) and `Detalhe`.
- Navigation is `@react-navigation/native` + `native-stack`; plain `.js` (no TypeScript), 4-space indentation.
- `src/Lista.js` — list screen. Contains the hard-coded `clientes` array (the current data model: `id`, `iniciais`, `nome`, `servico`, `status`, `email`, `telefone`, `desde`, `valorMensal`). Navigation sends the **entire client object** via `route.params.cliente`.
- `src/Detalhe.js` — detail screen. Reads `route.params.cliente`; buttons "Enviar mensagem"/"Editar cliente" are placeholders using `alert()`.

## Gotchas

- There is **no `app.json`/`app.config.js`** in the repo. If Expo complains about missing config or the app name, one must be created.
- Each screen file has a **duplicate `import { StyleSheet } ...` mid-file** and an exported `styles` object (lines ~82 in `Lista.js`, ~108 in `Detalhe.js`). Existing UI components render with hard-coded/plain styles, not `styles.*`. Match this pattern when editing.
- Data is **fixed mock data** in `Lista.js`, not yet persisted. README's fase table (AsyncStorage in fase 2, SQLite CRUD in fase 3) describes planned work not yet implemented — don't assume SQLite/AsyncStorage code exists.
- Keep UI copy and code comments in Portuguese to match the repo.
