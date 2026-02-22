const getClassTemplate = require('../templates/class.template');

module.exports = {
    prefix: "cc",
    body: getClassTemplate(),
    description: "Create class using file name",
    sortOrder: "0002"
};