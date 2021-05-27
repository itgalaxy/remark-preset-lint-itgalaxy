# Tests

## remark-lint-code-block-style

<!-- Invalid -->

    alpha();

<!-- Valid -->

```
bravo();
```

## remark-lint-fenced-code-flag

<!-- Invalid -->

```alpha
bravo();
```

<!-- Valid -->

```
alpha();
```

## remark-lint-final-definition

<!-- Invalid -->

Paragraph.

[example]: http://example.com "Example Domain"

Another paragraph.

<!-- Valid -->

Paragraph.

[example]: http://example.com "Example Domain"

## remark-lint-heading-increment

<!-- Invalid -->

# Charlie

### Delta

<!-- Valid -->

### Alpha

#### Bravo

## remark-lint-no-duplicate-definitions

<!-- Invalid -->

[foo]: bar
[foo]: qux

<!-- Valid -->

[bar]: bar
[baz]: baz

## remark-lint-no-duplicate-headings-in-section

<!-- Invalid -->

### Foxtrot

#### Golf

#### Golf

<!-- Valid -->

### Alpha

#### Bravo

### Charlie

#### Bravo

#### Delta

##### Bravo

##### Echo

###### Bravo

## remark-lint-no-emphasis-as-heading

<!-- Invalid -->

*Foo*

Bar.

__Qux__

Quux.

<!-- Valid -->

### Foo

Bar.

## remark-lint-no-heading-like-paragraph

<!-- Invalid -->

####### Charlie

Delta.

<!-- Valid -->

###### Alpha

Bravo.

## remark-lint-no-heading-punctuation

<!-- Invalid -->

### Hello:

### Hello?

### Hello!

### Hello,

### Hello;

### Hello: Foo

### Hello? Foo

### Hello! Foo

### Hello, Foo

### Hello; Foo

<!-- Valid -->

### Hello

## remark-lint-no-html

<!-- Invalid -->

<h1>Hello</h1>

<!-- Valid -->

### Hello

<!--Comments are also OK-->

## remark-lint-no-inline-padding

<!-- Invalid -->

Alpha, * bravo *, _ charlie _, [ delta ](http://echo.fox/trot)

<!-- Valid -->

Alpha, *bravo*, _charlie_, [delta](http://echo.fox/trot)

## remark-lint-no-literal-urls

<!-- Invalid -->

http://foo.bar/baz

<!-- Valid -->

<http://foo.bar/baz>

## remark-lint-no-reference-like-url

<!-- Invalid -->

[Charlie](delta).

[delta]: https://example.com

<!-- Valid -->

[Alpha](http://example.com).

[bravo]: https://example.com

## remark-lint-no-shell-dollars

<!-- Invalid -->

```bash
$ echo a
$ echo a > file
```

<!-- Valid -->

```sh
echo a
echo a > file
```

```zsh
$ echo a
a
$ echo a > file
```

Some empty code:

```command
```

It’s fine to use dollars in non-shell code.

```js
$('div').remove();
```

## remark-lint-no-shortcut-reference-image

<!-- Invalid -->

![foo]

[foo]: http://foo.bar/baz.png

<!-- Valid -->

![foo][]

[foo]: http://foo.bar/baz.png

## remark-lint-no-shortcut-reference-link

<!-- Invalid -->

[foo]

[foo]: http://foo.bar/baz

<!-- Valid -->

[foo][]

[foo]: http://foo.bar/baz

## remark-lint-no-undefined-references

<!-- Invalid -->

[barrrrrrrr][]

<!-- Valid -->

[foo][]

[foo]: https://example.com

[foo]: https://example.com

## remark-lint-no-unused-definitions

<!-- Invalid -->

[barq]: https://example.com

<!-- Valid -->

[fooq][]

[fooq]: https://example.com

## remark-lint-no-empty-url

<!-- Invalid -->

[golf]().

![hotel]().

<!-- Valid -->

[alpha](http://bravo.com).

![charlie](http://delta.com/echo.png "foxtrott").

## remark-lint-no-url-trailing-slash

<!-- Invalid -->

[example.com](http://example.com/)

<!-- Valid -->

[example.com](http://example.com)

## remark-lint-no-auto-link-without-protocol

<!-- Invalid -->

<foo@bar.com>

<!-- Valid -->

<http://www.example.com>
<mailto:foo@bar.com>

Most Markdown vendors don’t recognize the following as a link:
<www.example.com>
