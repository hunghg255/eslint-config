import type { Linter } from 'eslint'

declare module 'eslint-plugin-vue' {
  const recommended: Linter.Config[]
  export default {
    configs: {
      'flat/recommended': recommended,
    },
  }
}
