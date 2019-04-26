const fs = require('fs')
const docgenJavascript = require('react-docgen')

function isSource(node) {
  if (!node ||
    node.relativePath.indexOf('/example') !== -1 ||
    node.relativePath.indexOf('.docs') !== -1 ||
    node.relativePath.indexOf('.md') !== -1)
    return false;

  return true;
}

function canParse(node) {
  return node && (isTSX(node) || isJSX(node)) && isSource(node)
}

function isTSX(node) {
  return node.internal.mediaType === `application/typescript` ||
    node.internal.mediaType === `text/tsx` ||
    node.extension === 'tsx'
}

function isJSX(node) {
  return node.internal.mediaType === `application/javascript` ||
    node.internal.mediaType === `text/jsx`
}

function flattenProps(props) {
  let res = [];
  if (props) {
    Object.entries(props).forEach(
      ([key, value]) => {
        value.name = key;
        res.push(value);
      });
  }

  return res;
}

// Docs https://www.gatsbyjs.org/docs/actions/#createNode
async function onCreateNode({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}) {
  if (!canParse(node)) return

  const sourceText = await loadNodeContent(node);
  let parsed = null;
  try {
    if (isTSX(node)) {
      // Load up the already transpiled file
      const transpiledPath = node.absolutePath
        .replace(/react-(.*)\/src/, 'react-$1/dist/esm')
        .replace(/\.tsx?$/, '.js');
      const jsText = fs.readFileSync(transpiledPath, 'utf8');
      parsed = docgenJavascript.parse(jsText);
    }
    else if (isJSX(node)) {
      parsed = docgenJavascript.parse(sourceText);
    }
  } catch (err) {
    console.warn('No component found in', node.absolutePath);
  }

  if (parsed) {
    const metadataNode = {
      name: parsed.displayName,
      description: parsed.description,
      props: flattenProps(parsed.props),
      path: node.relativePath,
      basePath: node.relativePath.split('/')[0],
      id: createNodeId(`${node.id}imunique${node.relativePath}`),
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(node),
        type: `ComponentMetadata`,
      },
    }
    actions.createNode(metadataNode)
    actions.createParentChildLink({ parent: node, child: metadataNode })
  }
}

exports.onCreateNode = onCreateNode
