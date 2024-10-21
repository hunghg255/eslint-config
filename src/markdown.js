// @ts-check

import markdownPlugin from '@eslint/markdown'

import { GLOB_MARKDOWN, GLOB_SRC, GLOB_VUE } from './shared.js'

export function markdown() {
  const recommended = markdownPlugin.configs?.processor

  /** @type {import('eslint').Linter.Config[]} */
  const recommendedConfig = Array.isArray(recommended)
    ? recommended
    : (() => {
        throw new Error(
          '[@hunghg255/eslint-config] markdown recommended is not an array',
        )
      })()

  /** @type {import('eslint').Linter.Config[]} */
  const config = [
    ...recommendedConfig,

    {
      files: [`${GLOB_MARKDOWN}/${GLOB_SRC}`, `${GLOB_MARKDOWN}/${GLOB_VUE}`],
      languageOptions: {
        parserOptions: {
          projectService: null,
        },
      },
      rules: {
        // Disable type-aware TypeScript rules, because the code blocks are not
        // part of a compilable `tsconfig.json` project.
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',

        // Disable some import rules because they are not working well with
        // twoslash ---cut--- imports.
        'import/first': 'off',
        'import/order': 'off',

        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
      },
    },
  ]

  return config
}
