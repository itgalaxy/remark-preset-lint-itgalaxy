/* eslint quotes: ["error", "single"] */

const config = require('../index');
const test = require('ava');
const remark = require('remark');
const globby = require('globby');
const path = require('path');
const fs = require('fs');

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

test('should have property `plugin`', t => {
    t.true(isObject(config.plugins), 'plugin is object');
});

test('should have rules in property `lint` in `plugin` property', t => {
    t.true(Object.keys(config.plugins).length > 0, 'exist rules');
});

test('should have property `settings`', t => {
    t.true(isObject(config.settings), 'settings is object');
});

test('should have no error on valid syntax', t => {
    t.plan(2);

    return globby(['fixtures/**/*.md'], {
        absolute: true,
        cwd: path.dirname(__filename)
    }).then(filePaths =>
        Promise.all(
            filePaths.map(filePath =>
                new Promise((resolve, reject) =>
                    fs.readFile(filePath, (error, contents) => {
                        if (error) {
                            return reject(error);
                        }

                        return resolve(contents);
                    })
                ).then(contents =>
                    new Promise((resolve, reject) =>
                        remark()
                            .use(config.plugins)
                            .process(contents.toString(), (error, file) => {
                                if (error) {
                                    return reject(error);
                                }

                                return resolve(file);
                            })
                    ).then(file => {
                        t.true(
                            file.messages.length === 0,
                            `no lint error in ${filePath}`
                        );

                        return true;
                    })
                )
            )
        )
    );
});
