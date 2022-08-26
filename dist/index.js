'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var myPlugin = function myPlugin(editor) {
    var id = 'my-first-block';
    editor.BlockManager.add(id, {
        category: 'Basic predefined blocks',
        label: 'Very Simple block',
        content: '<div class="my-block">This is a simple block</div>'
    });
};

exports.default = myPlugin;