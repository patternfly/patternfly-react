const fs = require('fs');
const path = require('path');
const docgenJavascript = require('react-docgen');
const typedoc = require('typedoc');

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
    if (isJSX(node)) {
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

async function sourceNodes (
  { actions, createNodeId, createContentDigest },
  configOptions
) {
  const processTypeDoc = generated => {
    const nodeId = createNodeId(`typedoc-default`);
    return {
      modules: generated.children,
      id: nodeId,
      internal: {
        type: 'Typedoc',
        contentDigest: createContentDigest(generated)
      }
    };
  }

  const { typedoc: typedocOptions } = configOptions;
  const app = new typedoc.Application({
    tsconfig: typedocOptions.tsconfig,
    ignoreCompilerErrors: true,
  });
  const expanded = app.expandInputFiles(typedocOptions.src)
    .filter(fname =>
      !fname.match(/.d.ts$/) &&
      !fname.match(/index.tsx?$/) &&
      !fname.match(/.*helpers.*/) &&
      !fname.match(/.test.tsx?$/));
  console.log('expanded', expanded);
  const project = app.convert(expanded);

  let generated = false;
  if (project) {
    const generatedFile = path.join(__dirname, '.cache', 'typedoc.json');
    generated = app.generateJson(project, generatedFile);
    const nodeData = processTypeDoc(JSON.parse(fs.readFileSync(generatedFile, 'utf-8')));
    actions.createNode(nodeData);
  } else {
    console.error('Failed to generate TS proptypes');
  }

  return Promise.resolve(generated);
};

exports.onCreateNode = onCreateNode;
exports.sourceNodes = sourceNodes;
