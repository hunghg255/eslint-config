import stylisticEslint from '@stylistic/eslint-plugin' ;

export function stylistic() {
  /** @type {import('eslint').Linter.Config[]} */
  const config = [
    {
      name: 'stylistic',
      plugins: {
        '@stylistic': stylisticEslint
      },
      rules: {
        'indent': ['error', 2],
        '@stylistic/indent': ['error', 2],
        "@stylistic/semi-spacing": ["error", { "before": true, "after": false }],
        "@stylistic/no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 1 }],
        "@stylistic/function-call-argument-newline": ["error", "always"]
      }
    },
  ]

  return config
}
