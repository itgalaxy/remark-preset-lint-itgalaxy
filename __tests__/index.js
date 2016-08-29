var config = require('../index');
var test = require('ava');
var remark = require('remark');
var lint = require('remark-lint');

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
    var validMarkdown = [
        '> Hello\n'
    ].join('\n');
    var runRemark = new Promise((resolve, reject) => {
        remark()
            .use(lint)
            .process(validMarkdown, (error, file) => {
                if (error) {
                    return reject(error);
                }

                return resolve(file);
            });
    });

    t.plan(1);

    return runRemark
        .then((file) => {
            t.true(file.messages.length === 0, 'no errors');
        });
});
