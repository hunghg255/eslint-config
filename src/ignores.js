import gitignore from 'eslint-config-flat-gitignore'

import { GLOB_EXCLUDE } from './shared.js'

export function ignores() {
  /** @type {import('eslint').Linter.Config[]} */
  const config = [{ ignores: [...GLOB_EXCLUDE] }, gitignore()]

  return config
}
