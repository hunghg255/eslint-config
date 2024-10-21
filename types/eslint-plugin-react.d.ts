import type { Linter } from 'eslint'

declare module 'eslint-plugin-react' {
  const recommended: Linter.Config
  export default {
    configs: {
      flat: {
        recommended,
      },
    },
  }
}
