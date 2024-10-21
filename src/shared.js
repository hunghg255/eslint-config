// @ts-check

export const GLOB_SRC_EXT = '?([cm])[jt]s?(x)'
export const GLOB_SRC = '**/*.?([cm])[jt]s?(x)'

export const GLOB_JS = '**/*.?([cm])js'
export const GLOB_JSX = '**/*.?([cm])jsx'

export const GLOB_TS = '**/*.?([cm])ts'
export const GLOB_TSX = '**/*.?([cm])tsx'

export const GLOB_TEST = '**/*.(spec|test).?([cm])[jt]s?(x)'

export const GLOB_STYLE = '**/*.{c,le,sc}ss'
export const GLOB_CSS = '**/*.css'
export const GLOB_LESS = '**/*.less'
export const GLOB_SCSS = '**/*.scss'

export const GLOB_JSON = '**/*.json'
export const GLOB_JSON5 = '**/*.json5'
export const GLOB_JSONC = '**/*.jsonc'

export const GLOB_PACKAGE_JSON = '**/package.json'

export const GLOB_MARKDOWN = '**/*.md'
export const GLOB_VUE = '**/*.vue'
export const GLOB_YAML = '**/*.y?(a)ml'
export const GLOB_HTML = '**/*.htm?(l)'

export const GLOB_ALL_SRC = /** @type {const} */ ([
  GLOB_SRC,
  GLOB_STYLE,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_MARKDOWN,
  GLOB_VUE,
  GLOB_YAML,
  GLOB_HTML,
])

export const GLOB_NODE_MODULES = /** @type {const} */ ('**/node_modules')
export const GLOB_LOCKFILE = /** @type {const} */ ([
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
])
export const GLOB_EXCLUDE = /** @type {const} */ ([
  GLOB_NODE_MODULES,
  ...GLOB_LOCKFILE,

  '**/fixtures',
  '**/.changeset',
  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
])

export const EXTENSIONS = /** @type {const} */ ['ts', 'js']
  .flatMap((ext) => [ext, ext + 'x'])
  .flatMap((ext) => [ext, 'm' + ext, 'c' + ext])
  .flatMap((ext) => [ext, 'd.' + ext])
