const vscode = require('vscode');

function createInterfaceCompletion() {
    const item = new vscode.CompletionItem(
        'ci',
        vscode.CompletionItemKind.Snippet
    );

    item.insertText = new vscode.SnippetString(
`public interface \${TM_FILENAME_BASE} {

}`
    );

    item.detail = 'JavaEzz';
    item.documentation = 'Create interface from file name';
    item.sortText = '0003';

    return item;
}

module.exports = createInterfaceCompletion;