module.exports = {
  meta: {
    docs: {
      description: 'Force default import names to match specified values',
      category: 'Possible Errors',
      recommended: true
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
    const [importMap = {}] = context.options;
    return {
      ImportDeclaration(node) {
        const defaultImport = node.specifiers.find(spec => spec.type === 'ImportDefaultSpecifier');
        if (!defaultImport) {
          return;
        }
        const expectedName = importMap[node.source.value];
        const receivedName = defaultImport.local.name;
        if (expectedName && expectedName !== receivedName) {
          context.report({
            node,
            message: 'Expected default import to be named "{{ expected }}" but received "{{ received }}"',
            data: {
              expected: expectedName,
              received: receivedName
            },
            fix(fixer) {
              const [varDecl] = context.getDeclaredVariables(node);
              return [
                ...varDecl.references.map(ref => fixer.replaceText(ref.identifier, expectedName)),
                fixer.replaceText(defaultImport, expectedName)
              ];
            }
          });
        }
      }
    };
  }
};
