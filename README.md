# remark-preset-lint-itgalaxy

[![NPM version](https://img.shields.io/npm/v/remark-preset-lint-itgalaxy.svg)](https://www.npmjs.org/package/remark-preset-lint-itgalaxy)
[![Travis Build Status](https://img.shields.io/travis/itgalaxy/remark-preset-lint-itgalaxy/master.svg?label=build)](https://travis-ci.org/itgalaxy/remark-preset-lint-itgalaxy)
[![dependencies Status](https://david-dm.org/itgalaxy/remark-preset-lint-itgalaxy/status.svg)](https://david-dm.org/itgalaxy/remark-preset-lint-itgalaxy)
[![devDependencies Status](https://david-dm.org/itgalaxy/remark-preset-lint-itgalaxy/dev-status.svg)](https://david-dm.org/itgalaxy/remark-preset-lint-itgalaxy?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/itgalaxy/remark-preset-lint-itgalaxy.svg)](https://greenkeeper.io)

Itgalaxy’s remark sharable preset for linting markdown.

## Installation

You'll first need to install
[remark-cli](https://github.com/wooorm/remark/tree/master/packages/remark-cli)
and [remark-lint](https://github.com/wooorm/remark-lint):

```shell
$ npm i remark-cli remark-lint --save-dev
```

Next, install `remark-preset-lint-itgalaxy`:

```shell
$ npm install remark-preset-lint-itgalaxy --save-dev
```

## Usage

**Configurations do not contain stylistic rules. We use
[prettier](https://github.com/prettier/prettier) for this purpose.**

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

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
