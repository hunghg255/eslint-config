module.exports = {
  env: {
    es2020: true,
    browser: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.cjs'] },
      typescript: {}
    }
  },
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['tsconfig.json', 'tsconfig.*.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'extends',
              'compilerOptions',
              'references',
              'files',
              'include',
              'exclude',
            ],
          },
          {
            pathPattern: '^compilerOptions$',
            order: [
              /* Projects */
              'incremental',
              'composite',
              'tsBuildInfoFile',
              'disableSourceOfProjectReferenceRedirect',
              'disableSolutionSearching',
              'disableReferencedProjectLoad',
              /* Language and Environment */
              'target',
              'lib',
              'jsx',
              'experimentalDecorators',
              'emitDecoratorMetadata',
              'jsxFactory',
              'jsxFragmentFactory',
              'jsxImportSource',
              'reactNamespace',
              'noLib',
              'useDefineForClassFields',
              'moduleDetection',
              /* Modules */
              'module',
              'rootDirs',
              'moduleResolution',
              'baseUrl',
              'paths',
              'typeRoots',
              'types',
              'allowUmdGlobalAccess',
              'moduleSuffixes',
              'allowImportingTsExtensions',
              'resolvePackageJsonExports',
              'resolvePackageJsonImports',
              'customConditions',
              'resolveJsonModule',
              'allowArbitraryExtensions',
              'noResolve',
              /* JavaScript Support */
              'allowJs',
              'checkJs',
              'maxNodeModuleJsDepth',
              /* Emit */
              'declaration',
              'declarationMap',
              'emitDeclarationOnly',
              'sourceMap',
              'inlineSourceMap',
              'outFile',
              'outDir',
              'removeComments',
              'noEmit',
              'importHelpers',
              'importsNotUsedAsValues',
              'downlevelIteration',
              'sourceRoot',
              'mapRoot',
              'inlineSources',
              'emitBOM',
              'newLine',
              'stripInternal',
              'noEmitHelpers',
              'noEmitOnError',
              'preserveConstEnums',
              'declarationDir',
              'preserveValueImports',
              /* Interop Constraints */
              'isolatedModules',
              'verbatimModuleSyntax',
              'allowSyntheticDefaultImports',
              'esModuleInterop',
              'preserveSymlinks',
              'forceConsistentCasingInFileNames',
              /* Type Checking */
              'strict',
              'noImplicitAny',
              'strictNullChecks',
              'strictFunctionTypes',
              'strictBindCallApply',
              'strictPropertyInitialization',
              'noImplicitThis',
              'useUnknownInCatchVariables',
              'alwaysStrict',
              'noUnusedLocals',
              'noUnusedParameters',
              'exactOptionalPropertyTypes',
              'noImplicitReturns',
              'noFallthroughCasesInSwitch',
              'noUncheckedIndexedAccess',
              'noImplicitOverride',
              'noPropertyAccessFromIndexSignature',
              'allowUnusedLabels',
              'allowUnreachableCode',
              /* Completeness */
              'skipDefaultLibCheck',
              'skipLibCheck',
            ],
          },
        ],
      }
    }
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'no-console': 'warn',
    'react/jsx-key': 'error',
    'react/react-in-jsx-scope': "off",
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@+(symbols)',
            group: 'internal'
          },
          {
            pattern: '@+(api|components|features|compositions|directives|enums|interfaces|layouts|modules|types|services|utils|views|hooks)/**',
            group: 'internal'
          },
          {
            pattern: '@/**',
            group: 'internal'
          },
          {
            pattern: '*.scss',
            group: 'index',
            patternOptions: { matchBase: true }
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    // Imports should come first
    'import/first': 'error',
    // Other import rules
    'import/no-mutable-exports': 'error',
    // Allow unresolved imports
    'import/no-unresolved': 'off',
    semi: 0,
    'space-before-function-paren': 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'keyword-spacing': 0,
    'no-multiple-empty-lines': 0,
    'no-trailing-spaces': 0,
    'generator-star-spacing': 0,
    'space-infix-ops': 0,
    'comma-spacing': 0,
    'brace-style': 0,
    'space-in-parens': 0,
    'space-before-blocks': 0,
    'semi-spacing': 0,
    'object-property-newline': 0,
    'no-multi-spaces': 0,
    'key-spacing': 0,
    'eol-last': 0,
    'func-call-spacing': 0,
    'comma-style': 0,
    // Disable some unnecessary or conflicting rules
    'no-use-before-define': 'off',
    'unicorn/number-literal-case': 0,
    'unicorn/template-indent': 0,
    'unicorn/prevent-abbreviations': 0,
    'unicorn/no-await-expression-member': 0,
    'unicorn/no-useless-undefined': 0,
    'unicorn/no-array-push-push': 0,
    'unicorn/filename-case': 0,
    "unicorn/expiring-todo-comments": 0,
    camelcase: 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-empty-interface': 0,
    // Prefer const over let
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    // No single if in an "else" block
    'no-lonely-if': 'error',
    // Force curly braces for control flow,
    // including if blocks with a single statement
    curly: ['error', 'all'],
    // No async function without await
    'require-await': 'error',
    // Force dot notation when possible
    'dot-notation': 'error',
    // Force object shorthand where possible
    'object-shorthand': 'error',
    // No useless destructuring/importing/exporting renames
    'no-useless-rename': 'error'
  }
}
