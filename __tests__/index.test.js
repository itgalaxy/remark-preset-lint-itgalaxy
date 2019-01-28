const config = require("..");
const remark = require("remark");
const globby = require("globby");
const path = require("path");
const fs = require("fs");
const vfile = require("vfile");

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

describe("remark-preset-lint-itgalaxy", () => {
  it("should have property `plugin`", () => {
    expect(isObject(config.plugins)).toBe(true);
  });

  it("should have rules in property `lint` in `plugin` property", () => {
    expect(Object.keys(config.plugins)).not.toHaveLength(0);
  });

  it("should have property `settings`", () => {
    expect(isObject(config.settings)).toBe(true);
  });

  it("should have no error on valid syntax", () =>
    globby(["fixtures/**/*.md"], {
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
            new Promise((resolve, reject) => {
              // Remove `remark-validate-links`, because it doesn't work not on CLI
              config.plugins.splice(3, 1);

              const file = vfile({
                path: filePath,
                contents: contents.toString()
              });

              return remark()
                .use(config.plugins)
                .process(file, (error, lintedFile) => {
                  if (error) {
                    return reject(error);
                  }

                  return resolve(lintedFile);
                });
            }).then(file => {
              expect(file.messages).toHaveLength(0);

              return true;
            })
          )
        )
      )
    ));
});
