"use strict";

module.exports = {
  "*.{js,mjs,jsx}": [
    "prettier --list-different --ignore-path .gitignore",
    "eslint --report-unused-disable-directives --ignore-path .gitignore",
    "git add"
  ],
  "**/*.{md,markdown,mdown,mkdn,mkd,mdwn,mkdown,ron}": [
    "prettier --list-different --ignore-path .gitignore",
    "remark -f -q --ignore-path .gitignore --ignore-pattern '**/fixtures/**'",
    "git add"
  ],
  "*.{yml,yaml}": [
    "prettier --list-different --ignore-path .gitignore",
    "git add"
  ]
};
