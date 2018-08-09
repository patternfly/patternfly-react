/* eslint-disable no-case-declarations */
import { declare } from '@babel/helper-plugin-utils';
import { dirname, extname, resolve } from 'path';
import resolveFrom from 'resolve-from';
import {
  cssToJS,
  getCSS,
  styleSheetToken,
  packageName,
  writeCSSJSFile,
  getRelativeImportPath,
  getCSSOutputPath
} from '../util';
import { StyleSheet } from '../../StyleSheet';

const defaultOptions = {
  extensions: ['.css'],
  srcDir: './src',
  useModules: false
};

export default declare(({ types: t }) => {
  const outputFiles = new Set();

  function getVariableName(path) {
    if (path.node.specifiers && path.node.specifiers[0] && path.node.specifiers[0].local) {
      return path.node.specifiers[0].local.name;
    }
    return null;
  }

  function getLastImportIndex(path) {
    let lastImportIndex = 0;
    path.container.forEach((p, i) => {
      if (t.isImportDeclaration(p)) {
        lastImportIndex = i;
      }
    });
    return lastImportIndex;
  }

  function getPackageImportIndex(path) {
    return path.container.findIndex(p => t.isImportDeclaration(p) && p.source.value === packageName);
  }

  function createStyleSheetImport(path) {
    return t.importDeclaration(
      [t.importSpecifier(t.identifier(`__PF__${styleSheetToken}`), t.identifier(styleSheetToken))],
      t.stringLiteral(packageName)
    );
  }

  function validateReferences(referencePaths, styleObject) {
    const nestedProperties = {
      modifier: 'modifiers'
    };
    referencePaths.forEach(rp => {
      if (!t.isMemberExpression(rp.parentPath.node)) {
        return;
      }
      const propName = rp.parentPath.node.property.name;
      if (Object.values(nestedProperties).includes(propName)) {
        const nestedNode = rp.parentPath.parentPath.node;
        if (!t.isMemberExpression(nestedNode)) {
          return;
        }
        const nestedPropertyName = nestedNode.property.name;
        if (!styleObject[propName][nestedPropertyName]) {
          throw rp.buildCodeFrameError(
            `${nestedPropertyName} is not a valid ${propName === nestedProperties.modifier ? 'modifier' : 'property'}`
          );
        }
      } else if (!styleObject[propName]) {
        throw rp.buildCodeFrameError(`${propName} does not exist`);
      }
    });
  }

  return {
    visitor: {
      ImportDeclaration(path, { file, opts = {} }) {
        const options = { ...defaultOptions, ...opts };
        const { value } = path.node.source;
        const ext = extname(value);
        if (options.extensions.includes(ext) && getVariableName(path)) {
          const rootPath = file.opts.sourceRoot || process.cwd();
          const scriptDirectory = dirname(resolve(file.opts.filename));
          const cssfilePath = resolveFrom(scriptDirectory, value);
          const cssString = getCSS(cssfilePath);
          const varName = getVariableName(path);
          const { bindings } = path.scope;
          const styleObject = StyleSheet.parse(cssString);

          validateReferences(bindings[varName].referencePaths, styleObject);

          if (!options.outDir) {
            let lastImportIndex = getLastImportIndex(path);
            let pfStylesImportIndex = getPackageImportIndex(path);

            if (pfStylesImportIndex === -1) {
              path.getSibling(lastImportIndex).insertAfter(createStyleSheetImport());
              lastImportIndex++;
              pfStylesImportIndex = lastImportIndex;
            }

            const pfStylesImportPath = path.getSibling(pfStylesImportIndex);
            let styleSheetSpecifier = pfStylesImportPath.node.specifiers.find(
              s => t.isImportSpecifier(s) && s.imported.name === styleSheetToken
            );
            if (!styleSheetSpecifier) {
              styleSheetSpecifier = t.importSpecifier(
                t.identifier(`__PF__${styleSheetToken}`),
                t.identifier(styleSheetToken)
              );
              pfStylesImportPath.node.specifiers.push(styleSheetSpecifier);
            }
            const varDeclaration = t.variableDeclaration('const', [
              t.variableDeclarator(
                t.identifier(varName),
                t.callExpression(
                  t.memberExpression(t.identifier(styleSheetSpecifier.local.name), t.identifier('parse')),
                  [t.stringLiteral(cssString)]
                )
              )
            ]);
            path.getSibling(lastImportIndex).insertAfter(varDeclaration);
            path.remove();
          } else {
            const { srcDir, outDir } = options;
            const cssOutputPath = getCSSOutputPath(outDir, rootPath, cssfilePath);

            const scriptOutputPath = resolve(file.opts.filename).replace(resolve(srcDir), outDir);

            if (!outputFiles.has(cssOutputPath)) {
              writeCSSJSFile(rootPath, cssfilePath, cssOutputPath, cssToJS(cssString, options.useModules));
              outputFiles.add(cssOutputPath);
            }

            path.node.source.value = getRelativeImportPath(scriptOutputPath, cssOutputPath);
          }
        }
      }
    }
  };
});
