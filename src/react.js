// @ts-check

import stylisticJsx from '@stylistic/eslint-plugin-jsx'

import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

import { GLOB_TS, GLOB_TSX } from './shared.js'

/** @type {import('eslint').Linter.Config} */
const reactRecommended = reactPlugin.configs.flat.recommended

export function react() {
  /** @type {import('eslint').Linter.Config[]} */
  const config = [
    {
      ...reactRecommended,
      name: 'react',
      files: [GLOB_TS, GLOB_TSX],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        ...reactRecommended.rules,
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },

    {
      name: 'react-hooks',
      files: [GLOB_TS, GLOB_TSX],
      plugins: {
        'react-hooks': reactHooksPlugin,
      },
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    },

    {
      name: '@stylistic/jsx',
      files: [GLOB_TS, GLOB_TSX],
      plugins: {
        '@stylistic/jsx': stylisticJsx
      },
      rules: {
        '@stylistic/jsx/jsx-closing-bracket-location': [1, 'tag-aligned'],
        '@stylistic/jsx/jsx-indent-props': [2, 'tab'],
        '@stylistic/jsx/jsx-max-props-per-line': [1],
        '@stylistic/jsx/jsx-sort-props': [1, { multiline: 'last' }]
      }
    },
  ]

  return config
}
