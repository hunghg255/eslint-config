# @hunghg255/eslint-config

## Usage Reactjs

### Install

```bash
npm i -D @hunghg255/eslint-config-react
```

### Config `.eslintrc`

```json
{
  "extends": "@hunghg255/eslint-config-react"
}
```

## Usage Typescript

### Install

```bash
npm i -D @hunghg255/eslint-config-ts
```

### Config `.eslintrc`

```json
{
  "extends": "@hunghg255/eslint-config-ts"
}
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

