// https://astexplorer.net/#/gist/60c119aa79dab3a3e438cc762d21490f/e2cdd0547688a64eff1d8964156cfd8fce55d21d
module.exports = {
  meta: {
    docs: {
      description:
        "Don't use arrow functions or classes without a displayName so Enzyme and React devtools show component name",
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
        if (!node.declaration) {
          return;
        }
        const declaration = node.declaration.declarations
          ? node.declaration.declarations['0'] // Function component
          : node.declaration; // Class component
        if (!declaration) {
          return;
        }
        const displayName = declaration.id.name; // AboutModalBoxCloseButton

        // Handle arrow functions like `const AboutModalBoxCloseButton: React.FunctionComponent<AboutModalBoxCloseButtonProps> = ({`
        const typeAnnotation = declaration.id.typeAnnotation;
        if (
          typeAnnotation &&
          typeAnnotation.typeAnnotation &&
          typeAnnotation.typeAnnotation.typeName &&
          typeAnnotation.typeAnnotation.typeName.left &&
          typeAnnotation.typeAnnotation.typeName.left.name === 'React' &&
          ['FunctionComponent', 'FC', 'SFC'].includes(typeAnnotation.typeAnnotation.typeName.right.name)
        ) {
          const displayNameNode = context
            .getSourceCode()
            .ast.body.filter(n => n.type === 'ExpressionStatement')
            .filter(n => n.expression.left)
            .find(
              n => n.expression.left.object.name === displayName && n.expression.left.property.name === 'displayName'
            );
          if (!displayNameNode) {
            context.report({
              node,
              message: `${displayName}: All exported FunctionComponents must have a displayName.`,
              fix(fixer) {
                return fixer.insertTextAfter(node, `\n${displayName}.displayName = '${displayName}';`);
              }
            });
          }
        }
        // Handle class components like `class AlertGroup extends React.Component<AlertGroupProps, AlertGroupState> {`
        if (
          declaration.superClass &&
          declaration.superClass.object &&
          declaration.superClass.object.name === 'React' &&
          declaration.superClass.property.name === 'Component'
        ) {
          const classBody = declaration.body.body;
          const displayNameNode = classBody.find(n => n.type === 'ClassProperty' && n.key.name === 'displayName');
          if (!displayNameNode) {
            context.report({
              node,
              message: `${displayName}: All exported Components must have a displayName.`,
              fix(fixer) {
                return fixer.insertTextBefore(classBody[0], `static displayName = '${displayName}';\n`);
              }
            });
          }
        }
      }
    };
  }
};
