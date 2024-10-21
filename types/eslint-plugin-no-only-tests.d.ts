import type { ESLint } from 'eslint'

declare module 'eslint-plugin-no-only-tests' {
  const plugin: ESLint.Plugin
  export default plugin
}
