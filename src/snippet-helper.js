var snippetHelper = {};
(function () {
    snippetHelper.loadSnippet = function (filename, ext) {
        jQuery.get('snippets/' + filename + '.' + ext, function (data) {
            var element = $('#' + filename + '-' + ext);
            if (ext === 'html') {
                element.addClass('language-markup');
            }
            if (ext === 'js') {
                element.addClass('language-javascript');
            }
            if (ext === 'css') {
                element.addClass('language-css');
            }
            element.text(data);
            if (Prism) {
                Prism.highlightAll();
            }
        });
    }
    snippetHelper.loadSnippets = function (snippets) {
        $.each(snippets, function (idx, snippet) {
            $.each(snippet.ext.toLowerCase().split(','), function (idx, ext) {
                snippetHelper.loadSnippet(snippet.code, ext)
            });
        });
    }
}());
