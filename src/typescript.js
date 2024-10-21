// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

import { GLOB_JS, GLOB_JSX, GLOB_TEST, GLOB_TS, GLOB_TSX } from './shared.js'

export { tseslint }

export function typescript() {
  const rules = [...tseslint.configs.recommended, ...tseslint.configs.stylistic]
    .map((config) => config.rules || {})
    .reduce((acc, cur) => ({ ...acc, ...cur }), {})

  /** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
  const config = [
    eslint.configs.recommended,
    {
      name: 'typescript',
      files: [GLOB_TS, GLOB_TSX, GLOB_JS, GLOB_JSX],
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          projectService: true,
          sourceType: 'module',
          ecmaVersion: 'latest',
        },
      },
      plugins: {
        '@typescript-eslint': tseslint.plugin,
      },
      rules: {
        ...rules,

        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/prefer-optional-chain': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            fixStyle: 'inline-type-imports',
          },
        ],
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        '@typescript-eslint/no-unnecessary-parameter-property-assignment':
          'warn',
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-extra-semi': 'off',
        '@typescript-eslint/prefer-function-type': 'warn',

        '@typescript-eslint/no-misused-promises': [
          'error',
          { checksVoidReturn: false },
        ],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/unbound-method': 'error',

        // `type T1 = T0` and `interface T2 extends T0 {}` have the same meaning
        // but different behavior in TypeScript type checking. `T1` and `T0` are
        // the same type, while `T2` is different than `T0`. We allow `interface
        // T2 extends T0 {}` explicitly.
        '@typescript-eslint/no-empty-object-type': [
          'error',
          {
            allowInterfaces: 'with-single-extends',
          },
        ],

        // TODO: We should set the rule below to error in the future
        '@typescript-eslint/require-await': 'warn',
      },
    },
    {
      name: 'typescript-js',
      files: [GLOB_JS, GLOB_JSX],
      rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      name: 'typescript-test',
      files: [GLOB_TEST],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ]

  /** @type {import('eslint').Linter.Config[]} */
  // @ts-expect-error: unmatched type
  const configTyped = config

  return configTyped
}
