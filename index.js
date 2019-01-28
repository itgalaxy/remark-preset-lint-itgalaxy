"use strict";

module.exports = {
  plugins: [
    /* eslint-disable global-require */
    require("remark-lint"),
    require("remark-comment-config"),
    require("remark-validate-links"),
    [require("remark-lint-code-block-style"), "fenced"],
    require("remark-lint-fenced-code-flag"),
    [require("remark-lint-file-extension"), "md"],
    require("remark-lint-final-definition"),
    require("remark-lint-first-heading-level"),
    require("remark-lint-heading-increment"),
    require("remark-lint-maximum-heading-length"),
    require("remark-lint-no-blockquote-without-marker"),
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
    require("remark-lint-no-heading-punctuation"),
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
    [require("remark-lint-ordered-list-marker-style"), "."],
    [require("remark-lint-ordered-list-marker-value"), "ordered"],
    require("remark-lint-no-url-trailing-slash")
    /* eslint-enable global-require */
  ],
  settings: {
    bullet: "*",
    closeAtx: false,
    commonmark: false,
    emphasis: "_",
    entities: false,
    fence: "`",
    fences: true,
    gfm: true,
    incrementListMarker: true,
    listItemIndent: 1,
    looseTable: false,
    paddedTable: true,
    pedantic: false,
    rule: "-",
    ruleRepetition: 3,
    ruleSpaces: false,
    setext: false,
    spacedTable: true,
    strong: "*"
  }
};
