const vscode = require('vscode');

function createSoutCompletion() {
    const item = new vscode.CompletionItem(
        'sout',
        vscode.CompletionItemKind.Snippet
    );

    item.insertText = new vscode.SnippetString(
        'System.out.println($1);'
    );

    item.detail = 'JavaEzz';
    item.documentation = 'Print to console';
    item.sortText = '0001';

    return item;
}

module.exports = createSoutCompletion;