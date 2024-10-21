import type { ESLint } from 'eslint'

declare module 'eslint-plugin-react-hooks' {
  const plugin: ESLint.Plugin
  export default plugin
}
