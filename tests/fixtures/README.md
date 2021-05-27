# [Insteria](https://gitlab.itgalaxy.company/itgalaxy/insteria/tree/master)

[![Build status](https://gitlab.itgalaxy.company/itgalaxy/insteria/badges/master/build.svg)](https://gitlab.itgalaxy.company/itgalaxy/insteria/commits/master)
[![Coverage report](https://gitlab.itgalaxy.company/itgalaxy/insteria/badges/master/coverage.svg)](https://gitlab.itgalaxy.company/itgalaxy/insteria/commits/master)
[![Dependency Status](https://gemnasium.com/8a3f2fe3812670b73bb276953fe6cac5.svg)](https://gemnasium.com/17d18be2d33b7a89746221fced9ac945)

Insteria is a WordPress starter theme with a modern development workflow.

## Table of contents

- [Features](#features)
- [Requirements](#requirements)
- [Browser Support](#browser-support)
- [Theme installation](#theme-installation)
- [Theme setup](#theme-setup)
- [Testing](#testing)
- [FAQ](#faq)
- [Contribution](#contribution)
- [Changelog](#changelog)
- [Copyright and license](#copyright-and-license)

## Features

- [Sass](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) for
  stylesheets. [Postcss-cssnext](https://github.com/MoOx/postcss-cssnext) and
  [css-modules](https://github.com/css-modules/css-modules) are also supported
  for pure css in stylesheets.

- Latest ES syntax for JavaScript. Automatically determine the Babel plugins and
  polyfills you need based on your supported environments
  [babel-preset-env](https://github.com/babel/babel-preset-env).

- [Webpack](https://webpack.github.io) for compiling assets, optimizing images,
  and concatenating and minifying files.

- [Browsersync](http://www.browsersync.io) for synchronized browser testing.

- CSS [Bootstrap 3](http://getbootstrap.com) framework.

- [Font Awesome](http://fontawesome.io).

## Requirements

- [WordPress](https://wordpress.org) >= 4.8.0 **(don't use older versions
  `WordPress`, it's not stable and unsecurity)**

- [PHP](http://php.net/manual/en/install.php) >= 7.x.x

- [Composer](https://getcomposer.org/download) >= 1.x.x

- [Node.js](http://nodejs.org) >= 6.11.x

- [npm](https://www.npmjs.com) >= 3.x.x

## Browser Support

[See browserlist](LICENSE.md).

Also you can run command to get list of latest versions supported browsers:

```shell
npm run analysis:browserslist
```

## Theme installation

Several quick start options are available:

- [Download the latest release](https://gitlab.itgalaxy.company/itgalaxy/insteria/repository/archive.zip?ref=master).
- Clone the repo `git clone`

### Install dependencies

From the command line on your host machine (not on your Vagrant development
box), navigate to the theme directory then run:

First install `composer` dependencies:

```shell
composer install
```

Second install `npm` dependencies:

```shell
npm install
```

You now have all the necessary dependencies to run the build process.

### The First build process

Now run the development build process:

```shell
npm run build:dev
```

That's all.

## Theme setup

Edit [src/lib/setup.php](LICENSE.md) to enable or disable theme features, setup
navigation menus and sidebars.

Edit [src/lib/image-sizes.php](LICENSE.md) to setup post thumbnail sizes.

Edit [src/lib/scripts.php](LICENSE.md) to setup scripts and styles.

Actions and filters contains in classes into [src/lib/Hooked](LICENSE.md)
directory. For new action and filter need to create new class.

## Commands

### Build and Watch

- `npm run build:dev` - compile the files for development.

- `npm run build` (alias `npm run build:prod`) - compile and optimize the files
  for production.

- `npm run watch` - don’t want to manually recompile the files after every
  change.

### Linting

- `npm run lint` - run linters against your files.

Also your can run specific linters:

- `npm run lint:eslint` - run linters against your files.
- `npm run lint:stylelint` - run linters against your files.
- `npm run lint:remark` - run linters against your files.

See the [package.json](LICENSE.md) to determine all possible commands.

### Analysis

- `npm run analysis:browserslist` - see that browsers supported.
- `npm run analysis:cloc` - copy/paste detector for programming source code..

See the [package.json](LICENSE.md) to determine all possible commands.

### Testing

- `npm run test` - run tests, before tests starts linting.
- `npm run test-only` - run only tests.

## About tests

We have two difference directories for tests:

- `tests` (in root project directory) - stored `phpunit` tests.
- `**/__tests__` (in each directory contain javascript) - stored `ava` tests.

### Ava

Coming soon...

### Karma

Coming soon...

### WordPress and phpunit

It takes a little preparation to run the tests.

Optional.

- Code Coverage Analysis.

  Before you can use the code coverage analysis features in PHPUnit, you should
  read the [Xdebug](https://xdebug.org) installation guide.

1.  Run `mysql` as `root`.

    ```shell
    mysql -uroot # also your can run `sudo mysql`
    ```

2.  Create temporary testing user.

    ```shell
    CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
    GRANT ALL ON db.* TO 'user'@'localhost';
    ```

3.  Run `phpunit`.

    ```shell
    composer test
    ```

4.  After running the tests, you can delete temporary testing user.

    Run `mysql` as `root` (see above). And run:

    ```shell
    DROP USER 'user'@'localhost';
    ```

## FAQ

### Why do we use two package managers

Unfortunately, there's nothing we can do here. `WordPress` written on `php`, but
most popular and great tools written on `javascript`.

### Why is it important to follow the code style

This simplifies the interaction between team members, spends less time and
simplifies maintenance the code.

### Why tests are important

This not only guarantees that the written code works as expected, it allows to
see different possibilities of its use.

> Line that was wrapped.

```js
var foo = 1;
```

999.  bar
1000. foo

Combined emphasis with **two asterisks and _one asterisks_**.

<!-- lint disable rule-style -->

---

## [Contribution](LICENSE.md)

## [Changelog](LICENSE.md)

## Copyright and license

Code and documentation copyright 2014-2017 Itgalaxy, Inc. Code released under
[the MIT license](LICENSE.md). Docs released under
[Creative Commons](LICENSE.md).
