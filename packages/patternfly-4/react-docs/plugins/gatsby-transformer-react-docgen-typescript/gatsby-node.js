const docgenTypescript = require('react-docgen-typescript').withDefaultConfig()
const docgenJavascript = require('react-docgen')

function isSource(node) {
  if (!node ||
    node.relativePath.indexOf('/example') !== -1 ||
    node.relativePath.indexOf('.docs') !== -1)
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

async function onCreateNode({
  node,
  actions,
  loadNodeContent,
  createNodeId,
  createContentDigest,
}) {
  const { createNode, createParentChildLink } = actions

  if (!canParse(node)) return

  // Docs https://www.gatsbyjs.org/docs/actions/#createNode
  function registerNode(node, result) {
    const metadataNode = {
      ...result,
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
    createNode(metadataNode)
    createParentChildLink({ parent: node, child: metadataNode })
  }

  const sourceText = await loadNodeContent(node);
  let parsed = null;
  try {
    if (isTSX(node)) {
      // console.log('parsing', node.absolutePath)
      parsed = docgenTypescript.parse(node.absolutePath)[0];
    }
    else if (isJSX(node)) {
      parsed = docgenJavascript.parse(sourceText);
    }
  } catch (err) {
    console.warn("No component found in", node.absolutePath);
  }

  if (parsed) {
    registerNode(node, {
      name: parsed.displayName,
      description: parsed.description,
      props: flattenProps(parsed.props)
    });
  }
}

exports.onCreateNode = onCreateNode
