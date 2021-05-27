"use strict";

module.exports = {
  plugins: [
    // Need for linting
    require("remark-lint"),
    // Warn when code blocks do not adhere to a given style.
    // Warn for h7+ “headings”.
    //
    // ```md
    //     alpha();
    //
    // Paragraph.
    //
    //     bravo();
    // ```
    [require("remark-lint-code-block-style"), "fenced"],
    // Check fenced code block flags.
    //
    // ```md
    //
    // ```
    // alpha();
    // ```
    //
    // ```
    require("remark-lint-fenced-code-flag"),
    // Prefer `md` extension
    [require("remark-lint-file-extension"), "md"],
    // Warn when definitions are placed somewhere other than at the end of the file.
    //
    // ```md
    // Paragraph.
    //
    // [example]: http://example.com "Example Domain"
    //
    // Another paragraph.
    // ```
    require("remark-lint-final-definition"),
    // Warn when the first heading has a level other than a specified value.
    //
    // ```md
    // ## Bravo
    //
    // Paragraph.
    // ```
    require("remark-lint-first-heading-level"),
    // Warn when headings increment with more than 1 level at a time.
    //
    // ```md
    // # Charlie
    //
    // ### Delta
    // ```
    require("remark-lint-heading-increment"),
    // Warn for autolinks without protocol. Autolinks are URLs enclosed in `<` (less than) and `>` (greater than) characters.
    // From `remark-preset-lint-recommended`
    //
    // ```md
    // <foo@bar.com>
    // ```
    require("remark-lint-no-auto-link-without-protocol"),
    // Warn when blank lines without `>` (greater than) markers are found in a block quote.
    //
    // ```md
    // > Foo…
    // …bar…
    // > …baz.
    // ```
    require("remark-lint-no-blockquote-without-marker"),
    // Warn when duplicate definitions are found.
    // From `remark-preset-lint-recommended`
    //
    // ```md
    // [foo]: bar
    // [foo]: qux
    // ```
    require("remark-lint-no-duplicate-definitions"),
    // Warn when duplicate headings are found, but only when on the same level, “in” the same section.
    //
    // ```md
    // ## Foxtrot
    //
    // ### Golf
    //
    // ### Golf
    // ```
    require("remark-lint-no-duplicate-headings-in-section"),
    // Warn for empty URLs in links and images.
    //
    // ```md
    // [golf]().
    //
    // ![hotel]().
    // ```
    require("remark-lint-no-empty-url"),
    // Warn when file names contain consecutive dashes.
    // Bad: `plug--ins.md`
    require("remark-lint-no-file-name-consecutive-dashes"),
    // Warn when file names contain irregular characters: characters other than alphanumericals (a-zA-Z0-9), hyphen-minus (-), dots (., full stops) and `_`.
    [
      require("remark-lint-no-file-name-irregular-characters"),
      "\\\\.a-zA-Z0-9-_",
    ],
    // Warn when file names use mixed case: both upper- and lowercase characters.
    // Bad: `Readme.md`
    require("remark-lint-no-file-name-mixed-case"),
    // Warn when file names contain initial or final dashes (hyphen-minus, -).
    // Bad: `-readme.md` and `readme-.md`
    require("remark-lint-no-file-name-outer-dashes"),
    // Warn for h7+ “headings”.
    //
    // ```md
    // ####### Charlie
    // ```
    require("remark-lint-no-heading-like-paragraph"),
    // Warn when a heading ends with a group of characters.
    //
    // ```md
    // # Hello.
    //
    // # Hello,
    //
    // # Hello;
    //
    // # Hello:
    // ```
    [require("remark-lint-no-heading-punctuation"), ".,;:"],
    // Warn when HTML nodes are used.
    //
    // ```md
    // <h1>Hello</h1>
    // ```
    require("remark-lint-no-html"),
    // Warn when phrasing content is padded with spaces between their markers and content.
    // From `remark-preset-lint-recommended`
    //
    // ```md
    // Alpha [ bravo ](http://echo.fox/trot)
    // ```
    require("remark-lint-no-inline-padding"),
    // Warn for literal URLs in text. URLs are treated as links in some Markdown vendors, but not in others. To make sure they are always linked, wrap them in `<` (less than) and `>` (greater than).
    // From `remark-preset-lint-recommended`
    require("remark-lint-no-literal-urls"),
    // Do not use multiple top level headings
    //
    // ```md
    // # Foo
    //
    // # Bar
    // ```
    require("remark-lint-no-multiple-toplevel-headings"),
    // Warn when URLs are also defined identifiers.
    //
    // ```md
    // [Charlie](delta).
    //
    // [delta]: https://example.com
    // ```
    require("remark-lint-no-reference-like-url"),
    // Warn when shell code is prefixed by `$` (dollar sign) characters.
    //
    // ```md
    // ```sh
    // $ echo a
    // ```
    //
    // ```bash
    // $ echo a
    // $ echo a > file
    // ```
    // ```
    require("remark-lint-no-shell-dollars"),
    // Warn when shortcut reference images are used.
    // Shortcut references render as images when a definition is found, and as plain text without definition.
    // Sometimes, you don’t intend to create an image from the reference, but this rule still warns anyway.
    // In that case, you can escape the reference like so: !\[foo].
    // From `remark-preset-lint-recommended`
    //
    // ```md
    // ![foo]
    //
    // [foo]: http://foo.bar/baz.png
    // ```
    require("remark-lint-no-shortcut-reference-image"),
    // Warn when shortcut reference links are used.
    // From `remark-preset-lint-recommended`.
    //
    // ```md
    // [foo]
    //
    // [foo]: http://foo.bar/baz
    // ```
    require("remark-lint-no-shortcut-reference-link"),
    // Warn when references to undefined definitions are found.
    // From `remark-preset-lint-recommended`.
    //
    // ```md
    // [bar]
    //
    // [baz][]
    //
    // [text][qux]
    //
    // Spread [over
    // lines][]
    //
    // > in [a
    // > block quote][]
    //
    // [asd][a
    //
    // Can include [*emphasis*].
    //
    // Multiple pairs: [a][b][c].
    // ```
    require("remark-lint-no-undefined-references"),
    // Warn when unused definitions are found.
    // From `remark-preset-lint-recommended`.
    //
    // ```md
    // 1. Foo
    // 1. Bar
    // 1. Bar
    // ```
    require("remark-lint-no-unused-definitions"),
    // Warn when the list item marker values of ordered lists violate a given style.
    //
    // ```md
    // 1. Foo
    // 1. Bar
    // 1. Bar
    // ```
    [require("remark-lint-ordered-list-marker-value"), "ordered"],
    // Validate links.
    require("remark-validate-links"),
  ],
};
