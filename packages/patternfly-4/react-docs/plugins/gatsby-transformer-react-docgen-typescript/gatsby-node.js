const reactDocgen = require('react-docgen');

function isSource(node) {
  if (
    !node ||
    node.relativePath.indexOf('/example') !== -1 ||
    node.relativePath.indexOf('.docs') !== -1 ||
    node.relativePath.indexOf('.md') !== -1
  )
    return false;

  return true;
}

function canParse(node) {
  return node && (isTSX(node) || isJSX(node)) && isSource(node);
}

function isTSX(node) {
  return (
    node.internal.mediaType === `application/typescript` ||
    node.internal.mediaType === `text/tsx` ||
    node.extension === 'tsx'
  );
}

function isJSX(node) {
  return node.internal.mediaType === `application/javascript` || node.internal.mediaType === `text/jsx`;
}

function flattenProps(props) {
  const res = [];
  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      value.name = key;
      res.push(value);
    });
  }

  return res;
}

// Docs https://www.gatsbyjs.org/docs/actions/#createNode
async function onCreateNode({ node, actions, loadNodeContent, createNodeId, createContentDigest }) {
  if (!canParse(node)) return;

  const sourceText = await loadNodeContent(node);
  let parsed = null;
  try {
    parsed = reactDocgen.parse(sourceText, null, null, {
      filename: node.absolutePath
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    // console.warn('No component found in', node.absolutePath);
  }

  // TabContent.tsx is being a pain so check for parsed.displayName
  if (parsed && parsed.displayName) {
    const metadataNode = {
      name: parsed.displayName,
      relativePath: node.relativePath,
      description: parsed.description,
      props: flattenProps(parsed.props),
      path: node.relativePath,
      basePath: node.relativePath.split('/')[0],
      id: createNodeId(`${node.id}imunique${node.relativePath}`),
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(node),
        type: `ComponentMetadata`
      }
    };
    actions.createNode(metadataNode);
    actions.createParentChildLink({ parent: node, child: metadataNode });
  }
}

exports.onCreateNode = onCreateNode;

// Add types fetched in `mdx.js` query in case no files are passed to infer from
exports.createSchemaCustomization = ({ actions }) => {
  const typeDefs = `
    type TypeType @noInfer {
      name: String
    }
    type TsType @noInfer {
      name: String
      raw: String
    }
    type defaultValue @noInfer {
      value: String
    }
    type PropsType @noInfer {
      name: String!
      description: String
      required: Boolean
      type: TypeType
      tsType: TsType
      defaultValue: defaultValue
    }
    type ComponentMetadata implements Node @noInfer {
      name: String!
      props: [PropsType]
    }
  `;
  actions.createTypes(typeDefs);
}
