const createSoutCompletion = require('./sout');
const createClassCompletion = require('./class');
const createInterfaceCompletion = require('./interface');

function getAllCompletions() {
    return [
        createSoutCompletion(),
        createClassCompletion(),
        createInterfaceCompletion()
    ];
}

module.exports = getAllCompletions;