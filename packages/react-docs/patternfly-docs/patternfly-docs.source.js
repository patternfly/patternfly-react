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
  const reactDragDropPath = require.resolve('@patternfly/react-drag-drop/package.json').replace('package.json', 'src');
  const reactTemplatesPath = require.resolve('@patternfly/react-templates/package.json').replace('package.json', 'src');
  const reactPropsIgnore = '**/*.test.tsx';

  sourceProps(path.join(reactCorePath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactTablePath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactChartsPath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactCodeEditorPath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactDragDropPath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactTemplatesPath, '/**/*.tsx'), reactPropsIgnore);

  // React MD
  sourceMD(path.join(reactCorePath, '/components/**/examples/*.md'), 'react');
  sourceMD(path.join(reactCorePath, '/layouts/**/examples/*.md'), 'react');
  sourceMD(path.join(reactCorePath, '/next/components/**/examples/*.md'), 'react-next');
  sourceMD(path.join(reactCorePath, '/deprecated/components/**/examples/*.md'), 'react-deprecated');
  sourceMD(path.join(reactCorePath, '/**/demos/**/*.md'), 'react-demos');

  // React-table MD
  sourceMD(path.join(reactTablePath, '/components/**/examples/*.md'), 'react');
  sourceMD(path.join(reactTablePath, '/deprecated/components/**/examples/*.md'), 'react-deprecated');
  sourceMD(path.join(reactTablePath, '/**/demos/*.md'), 'react-demos');

  // Charts MD (no demos yet)
  sourceMD(path.join(reactChartsPath, '/**/examples/*.md'), 'react');

  // Code Editor MD
  sourceMD(path.join(reactCodeEditorPath, '/**/examples/*.md'), 'react');

  // Drag drop MD
  sourceMD(path.join(reactDragDropPath, '/**/examples/*.md'), 'react-next');

  // Templates MD
  sourceMD(path.join(reactTemplatesPath, '/**/examples/*.md'), 'react');

  // OUIA MD
  sourceMD(path.join(reactCorePath, 'helpers/OUIA/OUIA.md'), 'react');
};
