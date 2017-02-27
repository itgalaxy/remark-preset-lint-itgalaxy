# remark-preset-lint-itgalaxy

[![NPM version](https://img.shields.io/npm/v/remark-preset-lint-itgalaxy.svg)](https://www.npmjs.org/package/remark-preset-lint-itgalaxy) 
[![Travis Build Status](https://img.shields.io/travis/itgalaxy/remark-preset-lint-itgalaxy/master.svg?label=build)](https://travis-ci.org/itgalaxy/remark-preset-lint-itgalaxy) 
[![dependencies Status](https://david-dm.org/itgalaxy/remark-preset-lint-itgalaxy/status.svg)](https://david-dm.org/itgalaxy/remark-preset-lint-itgalaxy)
[![devDependencies Status](https://david-dm.org/itgalaxy/remark-preset-lint-itgalaxy/dev-status.svg)](https://david-dm.org/itgalaxy/remark-preset-lint-itgalaxy?type=dev)

Itgalaxy’s remark sharable preset for linting markdown.

## Installation

You'll first need to install [Remark](https://github.com/wooorm/remark) and [RemarkLint](https://github.com/wooorm/remark-lint):

```shell
$ npm i remark-cli remark-lint --save-dev
```

Next, install `remark-preset-lint-itgalaxy`:

```shell
$ npm install remark-preset-lint-itgalaxy --save-dev
```

**Note:** If you installed Remark and RemarkLint globally (using the `-g` flag) 
then you must also install `remark-preset-lint-itgalaxy` globally.

## Usage

Add preset to `package.json`:

```json
{
    "remarkConfig": {
        "presets": [
            "remark-preset-lint-itgalaxy"
        ]
    }
}
```

Run lint:

```shell
remark .
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
