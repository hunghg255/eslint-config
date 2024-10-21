import prettierConfig from 'eslint-config-prettier'

/**
 * Turns off all rules that are unnecessary or might conflict with Prettier.
 *
 * Notice that this config does not run `prettier` as an ESLint rule, so you
 * have to run `pretter` separately for formatting.
 */
export function prettier() {
  /** @type {import('eslint').Linter.Config[]} */
  const config = [
    {
      name: 'prettier',
      rules: {
        ...prettierConfig.rules,
      },
    },
  ]

  return config
}
