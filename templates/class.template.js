function getClassTemplate() {
    return `
public class \${TM_FILENAME_BASE} {

    public \${TM_FILENAME_BASE}() {

    }

}
`;
}

module.exports = getClassTemplate;