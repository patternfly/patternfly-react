// https://levelup.gitconnected.com/writing-typescript-custom-ast-transformer-part-2-5322c2b1660e
const ts = require('typescript');

/**
 * We import `@patternfly/react-[tokens,icons]/dist/esm` to avoid parsing massive modules.
 * HOWEVER we would like for the CJS output to reference `@patternfly/react-[]/dist/cjs`
 * for better tree-shaking and smaller bundlers.
 * A large offender of this is Tooltip's Popover helper.
 *
 * @param {object} context TS context
 */
function transformerCJSImports(context) {
  // Only transform for CJS build
  // ESM: module = 5, CJS: module = 1
  if (context.getCompilerOptions().module !== 1) {
    return node => node;
  }
  /**
   * If a node is an import, change its moduleSpecifier
   * Otherwise iterate over all its childern.
   *
   * @param {object} node TS Node
   */
  function visit(node) {
    if (ts.isImportDeclaration(node) && /@patternfly\/.*\/dist\/esm/.test(node.moduleSpecifier.text)) {
      const newNode = ts.getMutableClone(node);
      const newPath = node.moduleSpecifier.text.replace(/dist\/esm/, 'dist/js');
      newNode.moduleSpecifier = ts.createStringLiteral(newPath, true);
      return newNode;
    }
    return ts.visitEachChild(node, child => visit(child), context);
  }
  return node => ts.visitNode(node, visit);
}

module.exports = () => ({
  before: transformerCJSImports
});