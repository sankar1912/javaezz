const vscode = require('vscode');

class SnippetManager {
    constructor(snippets) {
        this.snippets = snippets;
    }

    getCompletionItems() {
        return this.snippets.map(snippet => {
            const item = new vscode.CompletionItem(
                snippet.prefix,
                vscode.CompletionItemKind.Snippet
            );

            item.insertText = new vscode.SnippetString(snippet.body);
            item.detail = "JavaEzz";
            item.documentation = snippet.description;
            item.sortText = snippet.sortOrder || "9999";

            return item;
        });
    }
}

module.exports = SnippetManager;