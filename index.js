"use strict";

module.exports = {
  plugins: [
    /* eslint-disable global-require */
    require("remark-lint"),
    require("remark-comment-config"),
    [require("remark-lint-code-block-style"), "fenced"],
    require("remark-lint-fenced-code-flag"),
    [require("remark-lint-file-extension"), "md"],
    require("remark-lint-final-definition"),
    require("remark-lint-first-heading-level"),
    require("remark-lint-heading-increment"),
    require("remark-lint-no-auto-link-without-protocol"),
    require("remark-lint-no-duplicate-definitions"),
    require("remark-lint-no-duplicate-headings-in-section"),
    require("remark-lint-no-emphasis-as-heading"),
    require("remark-lint-no-empty-url"),
    require("remark-lint-no-file-name-articles"),
    require("remark-lint-no-file-name-consecutive-dashes"),
    [
      require("remark-lint-no-file-name-irregular-characters"),
      "\\\\.a-zA-Z0-9-_"
    ],
    require("remark-lint-no-file-name-mixed-case"),
    require("remark-lint-no-file-name-outer-dashes"),
    require("remark-lint-no-heading-like-paragraph"),
    [require("remark-lint-no-heading-punctuation"), ".,;:"],
    require("remark-lint-no-html"),
    require("remark-lint-no-inline-padding"),
    require("remark-lint-no-literal-urls"),
    require("remark-lint-no-multiple-toplevel-headings"),
    require("remark-lint-no-reference-like-url"),
    require("remark-lint-no-shell-dollars"),
    require("remark-lint-no-shortcut-reference-image"),
    require("remark-lint-no-shortcut-reference-link"),
    require("remark-lint-no-undefined-references"),
    require("remark-lint-no-unused-definitions"),
    [require("remark-lint-ordered-list-marker-value"), "ordered"],
    require("remark-lint-no-url-trailing-slash"),
    require("remark-validate-links")
    /* eslint-enable global-require */
  ]
};
