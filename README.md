[Snippet Helper Plugin](http://igorlino.github.io/snippet-helper/)
================================

The Snippet Helper utility library offers some methods to load code snippets into pages.

## Features

- Loads code snippets
- Supports Prism highlighting when available.
- Free to use under MIT

## Installation

Via [Bower](http://bower.io/):

```bash
bower install snippet-helper
```

Via [npm](https://www.npmjs.com/):

```bash
npm install snippet-helper
```

In a browser:

```html
<script src="snippet-helper.js"></script>
```

## Getting Started

Include jQuery and the plug-in on a page. Create the snippets that should be available under 'snippets' directory and call snippetHelper.loadSnippets

```html
<script type="text/javascript">
    var snippets = [
        {code:"code-ezp-05", ext:"html,js"},
        {code:"code-ezp-01", ext:"html"}
    ];
    $(document).ready(function () {
        loadSnippets(snippets);
    });
</script>
```

For more information on how to setup and customise, [check the examples](http://igorlino.github.io/snippet-helper/).

## License
Licensed under MIT license.
