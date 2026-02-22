const CompletionProvider = require('./core/CompletionProvider');

function activate(context) {
    CompletionProvider.register(context);
    console.log("JavaEzz Activated (Enterprise Mode)");
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};