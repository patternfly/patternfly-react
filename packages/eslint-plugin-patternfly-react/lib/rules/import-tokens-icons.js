/**
 * @param specifier module specifier
 * @param moduleName module name (@patternfly or @rh-felt react-tokens/react-icons)
 * @returns string of non-treeshaken import
 */
function makeImport(specifier, moduleName) {
  if (moduleName.endsWith('createIcon') && /^@(patternfly|rh-felt)\/react-icons/.test(moduleName)) {
    const scope = moduleName.split('/')[0];
    return `import { ${specifier.local.name} } from '${scope}/react-icons/dist/esm/createIcon';`;
  }
  let res = `import ${specifier.local.name} from '`;
  res += moduleName.replace(/\/dist\/(js|esm)/, '');
  res += '/dist/esm';
  if (moduleName.includes('icon')) {
    res += '/icons/';
    res += specifier.imported.name.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`).replace(/^-/, '');
  } else {
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
        if (/@(patternfly|rh-felt)\/react-(tokens|icons)(\/dist\/(js|esm))?/.test(node.source.value)) {
          const esmSpecifiers = node.specifiers.filter(
            (specifier) =>
              specifier.type === 'ImportSpecifier' &&
              !(
                /^@(patternfly|rh-felt)\/react-icons/.test(node.source.value) &&
                node.source.value.endsWith('/dist/esm/createIcon')
              )
          );
          if (esmSpecifiers.length > 0) {
            context.report({
              node,
              message: `Importing from the barrel ${node.source.value} file will blow up CJS bundle sizes. Import directly from dist/esm file instead.`,
              fix(fixer) {
                return fixer.replaceText(
                  node,
                  esmSpecifiers.map((spec) => makeImport(spec, node.source.value)).join('\n')
                );
              }
            });
          }
        }
      }
    };
  }
};
