function makeImport(specifier, moduleName) {
  let res = `import ${specifier.local.name} from '`;
  res += moduleName.replace(/\/dist\/(js|esm)/, '');
  res += '/dist/js';
  if (moduleName.includes('icon')) {
    res += '/icons/';
    res += specifier.imported.name
      .replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)
      .replace(/^-/, '');
  }
  else {
    res += `/${specifier.imported.name}`;
  }
  res += "';";

  return res;
}

module.exports = {
  meta: {
    docs: {
      description: 'Do not rely on ESM treeshaking for icons and tokens',
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
    return {
      ImportDeclaration(node) {
        if (/@patternfly\/react-(tokens|icons)(\/dist\/(js|esm))?/.test(node.source.value)) {
          const esmSpecifiers = node.specifiers.filter(specifier => specifier.type === 'ImportSpecifier');
          if (esmSpecifiers.length > 0) {
            context.report({
              node,
              message: `Importing from the barrel ${node.source.value} file will blow up CJS bundle sizes. Import directly from dist/js file instead.`,
              fix(fixer) {
                return fixer.replaceText(
                  node,
                  esmSpecifiers.map(spec => makeImport(spec, node.source.value)).join('\n')
                );
              }
            });
          }
        }
      }
    };
  }
};
