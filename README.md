# @hunghg255/eslint-config

A set of ESLint shareable configs for TypeScript projects.

- Out of the box support for TypeScript, React, and Markdown
- Sort your imports
- Sort your fields in `package.json`
- Prefer top-level function declarations over function expressions

## Install

```
$ npm install -D eslint prettier @hunghg255/eslint-config
```

## Usage

### Config ESLint

You will need to use the new ["flat" ESLint configuration](https://eslint.org/docs/latest/use/configure/configuration-files-new) (i.e. `eslint.config.js`).

In your `eslint.config.js` file, add the following to extend the basic config:

```js
// eslint.config.js
import { basic } from '@hunghg255/eslint-config';

export default [...basic()];
```

If you want to use the React config, you can do the following:

```js
// eslint.config.js
import { basic, react } from '@hunghg255/eslint-config';

export default [...basic(), ...react()];
```

If you want to use the Vue config, you can do the following:

```js
// eslint.config.js
import { basic, vue } from '@hunghg255/eslint-config';

export default [...basic(), ...vue()];
```

If you want to use the check the code blocks in markdown files, you can do the following:

```js
// eslint.config.js
import { basic, markdown } from '@hunghg255/eslint-config';

export default [...basic(), ...markdown()];
```

### Add script for package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "check": "prettier --check .",
    "fix": "eslint --fix . && prettier --write ."
  }
}
```

### Add `.prettierignore`

Add a [`.prettierignore`](https://prettier.io/docs/en/ignore.html#ignoring-files-prettierignore) file in the root of your project. You can copy the `.prettierignore` file from this project.

### VS Code integration

If you are using VS Code, you and install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), then add the following to your VS Code settings:

```json
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## Inspired by

- https://github.com/antfu/eslint-config
- https://github.com/sxzz/eslint-config
