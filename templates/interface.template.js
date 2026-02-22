function getInterfaceTemplate() {
    return `
public interface \${TM_FILENAME_BASE} {

}
`;
}

module.exports = getInterfaceTemplate;