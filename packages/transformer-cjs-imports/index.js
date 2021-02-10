// https://levelup.gitconnected.com/writing-typescript-custom-ast-transformer-part-2-5322c2b1660e
const ts = require('typescript');

/**
 * We import `@patternfly/react-[tokens,icons]/dist/js` to avoid parsing massive modules
 * as well as for cross-module imports with types to `@patternfly/react-core`.
 * HOWEVER we would like for the ESM output to reference `@patternfly/react-[]/dist/esm`
 * for better tree-shaking and smaller bundlers.
 * A large offender of this is Tooltip's Popover helper.
 *
 * @param {object} context TS context
 */
function transformerCJSImports(context) {
  // Only transform for ESM build
  if (context.getCompilerOptions().target !== 2) {
    return node => node;
  }
  /**
   * If a node is an import, change its moduleSpecifier
   * Otherwise iterate over all its childern.
   *
   * @param {object} node TS Node
   */
  function visit(node) {
    if (ts.isImportDeclaration(node) && /@patternfly\/.*\/dist\/js/.test(node.moduleSpecifier.text)) {
      const newNode = ts.getMutableClone(node);
      const newPath = node.moduleSpecifier.text.replace(/dist\/js/, 'dist/esm');
      newNode.moduleSpecifier = ts.createStringLiteral(newPath);
      return newNode;
    }
    return ts.visitEachChild(node, child => visit(child), context);
  }
  return node => ts.visitNode(node, visit);
}

module.exports = () => ({
  before: transformerCJSImports
});
