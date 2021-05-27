"use strict";

const path = require("path");
const fs = require("fs");
const remark = require("remark");
const globby = require("globby");
const vfile = require("vfile");
const config = require("..");

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        return reject(error);
      }

      return resolve(data);
    });
  });
}

function runRemark(filePath, data, localConfig) {
  return new Promise((resolve, reject) => {
    const file = vfile({
      path: filePath,
      contents: data.toString(),
    });

    remark()
      .use(localConfig.plugins)
      .process(file, (error, lintedFile) => {
        if (error) {
          return reject(error);
        }

        return resolve(lintedFile);
      });
  });
}

describe("remark-preset-lint-itgalaxy", () => {
  it("should have property `plugin`", () => {
    expect(isObject(config.plugins)).toBe(true);
  });

  it("should have rules in property `lint` in `plugin` property", () => {
    expect(Object.keys(config.plugins)).not.toHaveLength(0);
  });

  it("should match snapshots", async () => {
    const filePaths = await globby(["fixtures/**/*.{md,markdown}"], {
      absolute: true,
      cwd: path.dirname(__filename),
    });

    expect.assertions(filePaths.length);

    return Promise.all(
      filePaths.map(async (filePath) => {
        const data = await readFile(filePath);
        const newVFile = await runRemark(filePath, data, config);

        expect(
          newVFile.messages.map((message) => {
            message.name = path.relative(__dirname, message.name);

            return message;
          })
        ).toMatchSnapshot(path.relative(__dirname, filePath));
      })
    );
  });
});
