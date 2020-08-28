const path = require('path');

module.exports = (sourceMD, sourceProps) => {
  // Theme pages
  const themePagesPath = require.resolve('theme-patternfly-org/package.json').replace('package.json', 'pages');
  sourceMD(path.join(themePagesPath, '*.md'), 'pages-overview');

  // React props
  const reactCorePath = require.resolve('@patternfly/react-core/package.json').replace('package.json', 'src');
  const reactTablePath = require.resolve('@patternfly/react-table/package.json').replace('package.json', 'src');
  const reactChartsPath = require.resolve('@patternfly/react-charts/package.json').replace('package.json', 'src');
  const reactDateTimePath = require.resolve('@patternfly/react-date-time/package.json').replace('package.json', 'src');
  const reactPropsIgnore = '**/*.test.tsx';
  sourceProps(path.join(reactCorePath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactTablePath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactChartsPath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactDateTimePath, '/**/*.tsx'), reactPropsIgnore);

  // React MD
  sourceMD(path.join(reactCorePath, '/**/examples/*.md'), 'react');
  sourceMD(path.join(reactCorePath, '/**/demos/**/*.md'), 'react-demos');

  // React-table MD
  sourceMD(path.join(reactTablePath, '/**/examples/*.md'), 'react');
  sourceMD(path.join(reactTablePath, '/**/demos/*.md'), 'react-demos');

  // Charts MD (no demos yet)
  sourceMD(path.join(reactChartsPath, '/**/examples/*.md'), 'react');

  // Date-time MD (no demos yet)
  sourceMD(path.join(reactDateTimePath, '/**/examples/*.md'), 'react');

  // Release notes
  sourceMD(require.resolve('@patternfly/react-docs/RELEASE-NOTES.md'), 'react');

  // Upgrade guide
  sourceMD(require.resolve('@patternfly/react-docs/UPGRADE-GUIDE.md'), 'react');
};
