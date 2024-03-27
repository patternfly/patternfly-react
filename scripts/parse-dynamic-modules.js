/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const ts = require('typescript');

/** @type {ts.CompilerOptions} */
const defaultCompilerOptions = {
  target: ts.ScriptTarget.ES2020,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
  allowJs: true,
  strict: false,
  esModuleInterop: true,
  skipLibCheck: true,
  noEmit: true
};

/**
 * Map all exports of the given index module to their corresponding dynamic modules.
 *
 * Example: `@patternfly/react-core` package provides ESModules index at `dist/esm/index.js`
 * which exports Alert component related code & types via `dist/esm/components/Alert/index.js`
 * module.
 *
 * Given the example above, this function should return a mapping like so:
 * ```js
 * {
 *   Alert: 'dist/dynamic/components/Alert',
 *   AlertProps: 'dist/dynamic/components/Alert',
 *   AlertContext: 'dist/dynamic/components/Alert',
 *   // ...
 * }
 * ```
 *
 * The above mapping can be used when generating import statements like so:
 * ```ts
 * import { Alert } from '@patternfly/react-core/dist/dynamic/components/Alert';
 * ```
 *
 * It may happen that the same export is provided by multiple dynamic modules; in such case,
 * the resolution favors non-deprecated modules with most specific file paths, for example
 * `dist/dynamic/components/Wizard/hooks` is favored over `dist/dynamic/components/Wizard`.
 *
 * If the referenced index module does not exist, an empty object is returned.
 *
 * @param {string} basePath
 * @param {string} indexModule
 * @param {string} resolutionField
 * @param {ts.CompilerOptions} tsCompilerOptions
 * @returns {Record<string, string>}
 */
const getDynamicModuleMap = (
  basePath,
  indexModule = 'dist/esm/index.js',
  resolutionField = 'module',
  tsCompilerOptions = defaultCompilerOptions
) => {
  if (!path.isAbsolute(basePath)) {
    throw new Error('Package base path must be absolute');
  }

  const indexModulePath = path.resolve(basePath, indexModule);

  if (!fs.existsSync(indexModulePath)) {
    return {};
  }

  /** @type {Record<string, string>} */
  const dynamicModulePathToPkgDir = glob.sync(`${basePath}/dist/dynamic/**/package.json`).reduce((acc, pkgFile) => {
    const pkg = require(pkgFile);
    const pkgModule = pkg[resolutionField];

    if (!pkgModule) {
      throw new Error(`Missing field ${resolutionField} in ${pkgFile}`);
    }

    const pkgResolvedPath = path.resolve(path.dirname(pkgFile), pkgModule);
    const pkgRelativePath = path.dirname(path.relative(basePath, pkgFile));

    acc[pkgResolvedPath] = pkgRelativePath;

    return acc;
  }, {});

  const dynamicModulePaths = Object.keys(dynamicModulePathToPkgDir);
  const compilerHost = ts.createCompilerHost(tsCompilerOptions);
  const program = ts.createProgram([indexModulePath, ...dynamicModulePaths], tsCompilerOptions, compilerHost);
  const errorDiagnostics = ts.getPreEmitDiagnostics(program).filter((d) => d.category === ts.DiagnosticCategory.Error);

  if (errorDiagnostics.length > 0) {
    const { getCanonicalFileName, getCurrentDirectory, getNewLine } = compilerHost;

    console.error(
      ts.formatDiagnostics(errorDiagnostics, {
        getCanonicalFileName,
        getCurrentDirectory,
        getNewLine
      })
    );

    throw new Error(`Detected TypeScript errors while parsing modules at ${basePath}`);
  }

  const typeChecker = program.getTypeChecker();

  /** @param {ts.SourceFile} sourceFile */
  const getExportNames = (sourceFile) =>
    typeChecker.getExportsOfModule(typeChecker.getSymbolAtLocation(sourceFile)).map((symbol) => symbol.getName());

  const indexModuleExports = getExportNames(program.getSourceFile(indexModulePath));

  /** @type {Record<string, string[]>} */
  const dynamicModuleExports = dynamicModulePaths.reduce((acc, modulePath) => {
    acc[modulePath] = getExportNames(program.getSourceFile(modulePath));
    return acc;
  }, {});

  /** @param {string[]} modulePaths */
  const getMostSpecificModulePath = (modulePaths) =>
    modulePaths.reduce((acc, p) => {
      const pathSpecificity = p.split(path.sep).length;
      const currSpecificity = acc.split(path.sep).length;

      if (pathSpecificity > currSpecificity) {
        return p;
      }

      if (pathSpecificity === currSpecificity) {
        return !p.endsWith('index.js') && acc.endsWith('index.js') ? p : acc;
      }

      return acc;
    }, '');

  return indexModuleExports.reduce((acc, exportName) => {
    const foundModulePaths = Object.keys(dynamicModuleExports).filter((modulePath) =>
      dynamicModuleExports[modulePath].includes(exportName)
    );

    if (foundModulePaths.length > 0) {
      const nonDeprecatedModulePaths = foundModulePaths.filter(
        (modulePath) => !modulePath.split(path.sep).includes('deprecated')
      );

      const targetModulePath = getMostSpecificModulePath(
        nonDeprecatedModulePaths.length > 0 ? nonDeprecatedModulePaths : foundModulePaths
      );

      acc[exportName] = dynamicModulePathToPkgDir[targetModulePath];
    }

    return acc;
  }, {});
};

module.exports = getDynamicModuleMap;
