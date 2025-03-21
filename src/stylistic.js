import stylisticEslint from '@stylistic/eslint-plugin';

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
        '@stylistic/semi-spacing': ['error'],
        '@stylistic/no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
        '@stylistic/block-spacing': ['error'],
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/semi': ['error', 'always'],
        '@stylistic/block-spacing': 'error',
        '@stylistic/brace-style': 'error',
        '@stylistic/space-before-blocks': 'error'
      }
    },
  ];

  return config;
}
