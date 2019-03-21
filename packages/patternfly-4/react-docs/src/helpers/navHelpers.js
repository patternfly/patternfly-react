const path = require("path")

exports.getPagePath = (filename) => {
    const extension = path.extname(filename);
    const componentName = path.basename(filename, extension).toLowerCase().trim();
    return `/components/${componentName}`
}
exports.getParentFolder = (filename) => {
    const split = filename.split('/');
    return split[split.length - 2]; // i.e. 'Alert' in '/ff/ff/Alert/AlertSomething.js'
}