const path = require('path');

module.exports = (baseSourceMD, sourceProps) => {
  const sourceMD = (basePath, ...props) => baseSourceMD(basePath.split(path.sep).join(path.posix.sep), ...props);

  // Theme pages
  const themePagesPath = require
    .resolve('@patternfly/documentation-framework/package.json')
    .replace('package.json', 'pages');
  sourceMD(path.join(themePagesPath, '*.md'), 'pages-overview');

  // React props
  const reactCorePath = require.resolve('@patternfly/react-core/package.json').replace('package.json', 'src');
  const reactTablePath = require.resolve('@patternfly/react-table/package.json').replace('package.json', 'src');
  const reactChartsPath = require.resolve('@patternfly/react-charts/package.json').replace('package.json', 'src');
  const reactCodeEditorPath = require
    .resolve('@patternfly/react-code-editor/package.json')
    .replace('package.json', 'src');
  const reactCatalogViewPath = require
    .resolve('@patternfly/react-catalog-view-extension/package.json')
    .replace('package.json', 'src');
  const reactVirtualizedPath = require
    .resolve('@patternfly/react-virtualized-extension/package.json')
    .replace('package.json', 'src');
  const reactConsolePath = require.resolve('@patternfly/react-console/package.json').replace('package.json', 'src');
  const reactLogViewerPath = require
    .resolve('@patternfly/react-log-viewer/package.json')
    .replace('package.json', 'src');
  const reactPropsIgnore = '**/*.test.tsx';

  sourceProps(path.join(reactCorePath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactTablePath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactChartsPath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactCodeEditorPath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactCatalogViewPath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactVirtualizedPath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactConsolePath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactLogViewerPath, '/**/*.tsx'), reactPropsIgnore);

  // React MD
  sourceMD(path.join(reactCorePath, '/components/**/examples/*.md'), 'react');
  sourceMD(path.join(reactCorePath, '/next/components/**/examples/*.md'), 'react-next');
  sourceMD(path.join(reactCorePath, '/**/demos/**/*.md'), 'react-demos');

  // React-table MD
  sourceMD(path.join(reactTablePath, '/**/TableComposable/examples/*.md'), 'react-composable');
  sourceMD(path.join(reactTablePath, '/**/demos/*.md'), 'react-demos');
  sourceMD(path.join(reactTablePath, '/**/Table/examples/*.md'), 'react-legacy');

  // Charts MD (no demos yet)
  sourceMD(path.join(reactChartsPath, '/**/examples/*.md'), 'react');

  // Catalog view MD
  sourceMD(path.join(reactCatalogViewPath, '/**/examples/*.md'), 'react');

  // Virtualized MD
  sourceMD(path.join(reactVirtualizedPath, '/**/examples/*.md'), 'react');

  // Consoles MD
  sourceMD(path.join(reactConsolePath, '/**/examples/*.md'), 'react');

  // Code Editor MD
  sourceMD(path.join(reactCodeEditorPath, '/**/examples/*.md'), 'react');

  // Log viewer MD
  sourceMD(path.join(reactLogViewerPath, '/**/examples/*.md'), 'react');
  sourceMD(path.join(reactLogViewerPath, '/**/demos/*.md'), 'react-demos');

  // Release notes
  sourceMD(require.resolve('@patternfly/react-docs/RELEASE-NOTES.md'), 'react');

  // Upgrade guide
  sourceMD(require.resolve('@patternfly/react-docs/UPGRADE-GUIDE.md'), 'react');

  // OUIA MD
  sourceMD(path.join(reactCorePath, 'helpers/OUIA/OUIA.md'), 'react');
};
