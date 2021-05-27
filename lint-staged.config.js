"use strict";

module.exports = {
  "*.{js,mjs,jsx}": [
    "eslint --report-unused-disable-directives --ignore-path .gitignore",
    "prettier --list-different --ignore-path .gitignore",
  ],
  "**/*.{md,markdown,mdown,mkdn,mkd,mdwn,mkdown,ron}": [
    "remark -f -q --ignore-path .gitignore --ignore-pattern '**/fixtures/**'",
    "prettier --list-different --ignore-path .gitignore",
  ],
  "*.{yml,yaml}": ["prettier --list-different --ignore-path .gitignore"],
};
