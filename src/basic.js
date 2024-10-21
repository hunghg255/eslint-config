// @ts-check

import { antfu } from './antfu.js'
import { ignores } from './ignores.js'
import { imports } from './imports.js'
import { noOnlyTests } from './no-only-tests.js'
import { packageJson } from './package-json.js'
import { prettier } from './prettier.js'
import { typescript } from './typescript.js'
import { unicorn } from './unicorn.js'

export function basic() {
  /** @type {import('eslint').Linter.Config[]} */
  const config = [
    ...ignores(),
    ...typescript(),
    ...imports(),
    ...packageJson(),
    ...unicorn(),
    ...antfu(),
    ...noOnlyTests(),
    ...prettier(),
  ]

  return config
}
