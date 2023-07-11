// https://levelup.gitconnected.com/writing-typescript-custom-ast-transformer-part-2-5322c2b1660e
import * as ts from 'typescript';

const transformer: ts.TransformerFactory<ts.SourceFile> = (context) => (sourceFile) => {
  // Only transform for ESM build
  // ESM: module = 5, CJS: module = 1
  if (context.getCompilerOptions().module !== 5) {
    return sourceFile;
  }

  /** @type { import("typescript").Visitor } */
  function visitor(node: ts.Node) {
    const { factory } = context;
    if (ts.isImportDeclaration(node)) {
      const text = node.moduleSpecifier.getFullText(sourceFile);

      if (/@patternfly\/react-styles\/css/.test(text)) {
        return factory.updateImportDeclaration(
          node,
          node.decorators,
          node.modifiers,
          node.importClause,
          factory.createStringLiteral(text.trim().replace(/"|'/g, '').replace(/$/, '.mjs'), true),
          undefined
        );
      }
    }

    return ts.visitEachChild(node, visitor, context);
  }
  return ts.visitNode(sourceFile, visitor);
};

module.exports = transformer;
