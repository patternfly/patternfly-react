const path = require('path');
const fs = require('fs');


function isExample(node) {
  if (!node || !node.relativePath || node.relativePath.indexOf('/example') === -1)
    return false;

  return true;
}

function isJSX(node) {
  return node.internal.mediaType === `application/javascript` ||
    node.internal.mediaType === `text/jsx`
}

function isImage(node) {
  return (/gif|jpe?g|tiff|png|svg$/i).test(node.extension)
}

function canParse(node) {
  return node && isExample(node) && (isJSX(node) || isImage(node));
}

let imports = {};
// Docs https://www.gatsbyjs.org/docs/actions/#createNode
exports.onCreateNode = ({ node, actions, createNodeId, createContentDigest }) => {
  if (!canParse(node)) return

  const extension = path.extname(node.absolutePath);
  const importName = path.basename(node.absolutePath, extension)
    .replace('-', '')
    .replace('_', '')
    .replace('.', '')
    .trim();

  if (imports[importName])
    console.warn(`Import ${importName} from ${node.absolutePath} also appears in ${imports[importName].path}`);

  imports[importName] = {
    importString: `export { default as ${importName} } from '${node.absolutePath}';\n`,
    path: node.absolutePath
  };

  let importString = '';
  Object.values(imports).forEach(imp => importString += imp.importString);

  fs.writeFileSync('./.cache/example_index.js', importString);

  const metadataNode = {
    importName: importName,
    path: node.relativePath,
    basePath: node.relativePath.split('/')[0],
    id: createNodeId(`${node.id}imunique${node.relativePath}`),
    children: [],
    parent: node.id,
    internal: {
      contentDigest: createContentDigest(node),
      type: `ComponentExamples`,
    },
  }
  actions.createNode(metadataNode)
  actions.createParentChildLink({ parent: node, child: metadataNode })
};
