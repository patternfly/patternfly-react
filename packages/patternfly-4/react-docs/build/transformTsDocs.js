const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '../ts-docs/ts-output.json');

const data = JSON.parse(fs.readFileSync(src));
// restructure data.children to data.data, since gatsby-transformer-json sets children to empty array and this data would be lost otherwise
data.data = data.children;
delete data.children;

fs.writeFileSync(src, JSON.stringify(data, null, 2));
