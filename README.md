# remark-preset-lint-itgalaxy

[![NPM version](https://img.shields.io/npm/v/remark-preset-lint-itgalaxy.svg)](https://www.npmjs.org/package/remark-preset-lint-itgalaxy)
[![Build Status](https://github.com/itgalaxy/remark-preset-lint-itgalaxy/workflows/remark-preset-lint-itgalaxy/badge.svg)](https://github.com/itgalaxy/remark-preset-lint-itgalaxy/actions)
[![dependencies Status](https://david-dm.org/itgalaxy/remark-preset-lint-itgalaxy/status.svg)](https://david-dm.org/itgalaxy/remark-preset-lint-itgalaxy)
[![devDependencies Status](https://david-dm.org/itgalaxy/remark-preset-lint-itgalaxy/dev-status.svg)](https://david-dm.org/itgalaxy/remark-preset-lint-itgalaxy?type=dev)

Itgalaxy’s remark sharable preset for linting markdown.

## Installation

You'll first need to install [remark-cli](https://github.com/wooorm/remark/tree/master/packages/remark-cli) and [remark-lint](https://github.com/wooorm/remark-lint):

```shell
$ npm i remark-cli remark-lint --save-dev
```

Next, install `remark-preset-lint-itgalaxy`:

```shell
$ npm install remark-preset-lint-itgalaxy --save-dev
```

## Usage

**Configurations do not contain stylistic rules. We use [prettier](https://github.com/prettier/prettier) for this purpose.**

Add preset to `package.json`:

```json
{
  "remarkConfig": {
    "presets": ["remark-preset-lint-itgalaxy"]
  }
}
```

Run lint:

```shell
node_modules/.bin/remark .
```

## Changelog

[CHANGELOG](./CHANGELOG.md)

## License

[MIT](./LICENSE)
