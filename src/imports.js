// @ts-check

import * as importPlugin from 'eslint-plugin-import-x';
import unusedImports from 'eslint-plugin-unused-imports';

export function imports() {
  /** @type {import('eslint').Linter.Config[]} */
  const config = [
    {
      name: 'import',
      plugins: {
        // @ts-expect-error incorrect type
        import: importPlugin,
        'unused-imports': unusedImports,
      },
      settings: {
        'import-x/resolver': {
          // You will also need to install and configure the TypeScript resolver
          // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
          typescript: true,
          node: true,
        },
      },
      rules: {
        // External modules must be declared in the package.json. Only enforced in CI.
        'import/no-extraneous-dependencies': process.env.CI ? 'error' : 'off',
        'import/first': 'warn',
        'import/no-mutable-exports': 'warn',
        'import/no-useless-path-segments': 'warn',
        'import/newline-after-import': 'warn',
        // Disable `no-duplicates` because of the following bug
        // https://github.com/un-ts/eslint-plugin-import-x/issues/167
        // 'import/no-duplicates': [
        //   'warn',
        //   { 'prefer-inline': true },
        // ],
        'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            'vars': 'all',
            'varsIgnorePattern': '^_',
            'args': 'after-used',
            'argsIgnorePattern': '^_',
          },
        ],
        'import/order': [
          'warn',
          {
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            pathGroupsExcludedImportTypes: ['react'],
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@+(symbols)',
                group: 'internal',
              },
              {
                pattern:
                  '@+(api|apis|components|features|compositions|directives|enums|interfaces|layouts|layout|configs|constants|hoc|store|modules|types|services|utils|views|hooks)/**',
                group: 'internal',
              },
              {
                pattern: '@/**',
                group: 'internal',
              },
              {
                pattern: '*.scss',
                group: 'index',
                patternOptions: { matchBase: true },
              },
            ],
          },
        ],
      },
    },
  ];

  return config;
}
