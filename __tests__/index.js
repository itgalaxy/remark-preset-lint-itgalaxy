/* eslint quotes: ["error", "single"] */

const config = require('../index');
const test = require('ava');
const remark = require('remark');
const lint = require('remark-lint');
const globby = require('globby');
const path = require('path');
const fs = require('fs');

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

test('should have property `plugin`', function (t) {
    t.true(isObject(config.plugins), 'plugin is object');
});

test('should have property `lint` in `plugin` property', function (t) {
    t.true(isObject(config.plugins.lint), 'lint is object');
});

test('should have rules in property `lint` in `plugin` property', function (t) {
    t.true(Object.keys(config.plugins.lint).length > 0, 'exist rules');
});

test('should have property `settings`', function (t) {
    t.true(isObject(config.settings), 'settings is object');
});

test('should have no error on valid syntax', function (t) {
    t.plan(2);

    return globby(['fixtures/**/*.md'], {
        absolute: true,
        cwd: path.dirname(__filename)
    })
        .then((filePaths) => {
            return Promise.all(filePaths.map(function (filePath) {
                return new Promise(function (resolve, reject) {
                    return fs.readFile(filePath, function (error, contents) {
                        if (error) {
                            return reject(error);
                        }

                        return resolve(contents);
                    });
                })
                    .then(function (contents) {
                        return new Promise((resolve, reject) => {
                            return remark()
                                .use(lint, config.plugins.lint)
                                .process(contents.toString(), (error, file) => {
                                    if (error) {
                                        return reject(error);
                                    }

                                    return resolve(file);
                                });
                        })
                            .then(function (file) {
                                t.true(file.messages.length === 0, `no lint error in ${filePath}`);
                            });
                    });
            }));
        });
});
