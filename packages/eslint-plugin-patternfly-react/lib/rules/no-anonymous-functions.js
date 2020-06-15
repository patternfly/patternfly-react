// https://astexplorer.net/#/gist/60c119aa79dab3a3e438cc762d21490f/e2cdd0547688a64eff1d8964156cfd8fce55d21d
module.exports = {
  meta: {
    docs: {
      description:
        "Don't use anonmous functions without a displayName so Enzyme and React devtools show component name",
      category: 'Possible Errors',
      recommended: false
    },
    fixable: 'code',
    schema: [
      {
        type: 'object',
        properties: {},
        additionalProperties: true
      }
    ]
  },
  create(context) {
    return {
      ExportNamedDeclaration(node) {
        if (!node.declaration || node.declaration.type !== 'VariableDeclaration') {
          return;
        }
        const declaration = node.declaration.declarations['0'];
        if (!declaration || !declaration.init || declaration.init.type !== 'ArrowFunctionExpression') {
          return;
        }
        const typeAnnotation = declaration.id.typeAnnotation;
        if (
          typeAnnotation &&
          typeAnnotation.typeAnnotation &&
          typeAnnotation.typeAnnotation.typeName &&
          typeAnnotation.typeAnnotation.typeName.left &&
          typeAnnotation.typeAnnotation.typeName.left.name === 'React' &&
          ['FunctionComponent', 'FC', 'SFC'].includes(typeAnnotation.typeAnnotation.typeName.right.name)
        ) {
          context.report({
            node,
            message: `${declaration.id.name}: Do not use an anonymous arrow function export. Use a named function export instead.`,
            fix(fixer) {
              const declarationNode = context.getSourceCode().getFirstToken(node.declaration);
              const initBody = declaration.init.body;
              const equalsToken = context.getSourceCode().getTokenAfter(declaration.id);
              const fixes = [
                fixer.replaceText(declarationNode, 'function'), // export (const|var) -> export function
                fixer.remove(typeAnnotation), // remove : React.FunctionComponent<AboutModalBoxCloseButtonProps>
                fixer.remove(equalsToken) // remove =
              ];
              // () => (<div></div>) -> function() { return (<div></div>) }
              const arrow = context
                .getSourceCode()
                .getTokensBefore(initBody, 2)
                .find(token => token.value === '=>');
              fixes.push(fixer.replaceText(arrow, initBody.type === 'JSXElement' ? '{\nreturn ' : ''));

              if (initBody.type === 'JSXElement') {
                const expressionEnd = context.getSourceCode().getTokenAfter(initBody);
                fixes.push(fixer.insertTextAfter(expressionEnd, '}'));
              }
              return fixes;
            }
          });
        }
      }
    };
  }
};
