const getInterfaceTemplate = require('../templates/interface.template');

module.exports = {
    prefix: "ci",
    body: getInterfaceTemplate(),
    description: "Create interface using file name",
    sortOrder: "0003"
};