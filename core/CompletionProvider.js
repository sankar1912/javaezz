const vscode = require('vscode');
const SnippetManager = require('./SnippetManager');
const snippets = require('../snippets');

class CompletionProvider {

    static register(context) {
        const manager = new SnippetManager(snippets);

        const provider = vscode.languages.registerCompletionItemProvider(
            { language: 'java', scheme: 'file' },
            {
                provideCompletionItems() {
                    return manager.getCompletionItems();
                }
            }
        );

        context.subscriptions.push(provider);
    }
}

module.exports = CompletionProvider;