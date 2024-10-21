// @ts-check

import plugin from 'eslint-plugin-no-only-tests'

export function noOnlyTests() {
  /** @type {import('eslint').Linter.Config[]} */
  const config = [
    {
      name: 'no-only-tests',
      plugins: {
        'no-only-tests': plugin,
      },
      rules: {
        'no-only-tests/no-only-tests': 'error',
      },
    },
  ]

  return config
}
