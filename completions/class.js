const vscode = require('vscode');

function createClassCompletion() {
    const item = new vscode.CompletionItem(
        'cc',
        vscode.CompletionItemKind.Snippet
    );

    item.insertText = new vscode.SnippetString(
`public class \${TM_FILENAME_BASE} {

    public \${TM_FILENAME_BASE}() {

    }

}`
    );

    item.detail = 'JavaEzz';
    item.documentation = 'Create class from file name';
    item.sortText = '0002';

    return item;
}

module.exports = createClassCompletion;