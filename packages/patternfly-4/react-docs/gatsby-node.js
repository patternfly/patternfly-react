const path = require(`path`);
const fs = require('fs-extra'); //eslint-disable-line
const packageDirs = ['react-core', 'react-charts', 'react-styled-system', 'react-table'];

// Escape single quotes and backslashes in a file path
const escapeFilePath = filePath => filePath.replace(/[\\']/g, '\\$&');

exports.onCreateWebpackConfig = ({ stage, loaders, actions, plugins, getConfig }) => {
  // Enable hot reloading on source code changes
  const pfStylesTest = /patternfly-next.*(components|layouts|utilities).*\.css$/;
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: pfStylesTest,
          use: [{ loader: 'babel-loader' }, { loader: require.resolve('@patternfly/react-styles/loader') }]
        },
        {
          test: /\.css$/,
          use: [loaders.miniCssExtract(), loaders.css({ sourceMap: false, singleton: true })],
          exclude: pfStylesTest
        }
      ]
    },
    resolve: {
      alias: {
        '@patternfly/react-table': path.resolve(__dirname, '../react-table/src'),
        '@patternfly/react-charts': path.resolve(__dirname, '../react-charts/src'),
        '@patternfly/react-core': path.resolve(__dirname, '../react-core/src'),
        '@patternfly/react-styles': path.resolve(__dirname, '../react-styles/src'),
        '@patternfly/react-styled-system': path.resolve(__dirname, '../react-styled-system/src'),
        react: path.resolve(__dirname, 'node_modules/react'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom')
      }
    }
  });
  const configAfter = getConfig();
  configAfter.module.rules = configAfter.module.rules.filter(rule => rule.oneOf === undefined);
  const minimizer = [
    plugins.minifyJs({
      terserOptions: {
        // keep function names so that we can find the corresponding example components in src/components/componentDocs/componentDocs.js
        keep_fnames: true
      }
    }),
    plugins.minifyCss()
  ];
  if (!configAfter.optimization) {
    configAfter.optimization = {};
  }
  configAfter.optimization.minimizer = minimizer;

  actions.replaceWebpackConfig(configAfter);
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  const componentPathRegEx = /(components|layouts|demos)\//;
  if (node.internal.type === 'SitePage' && componentPathRegEx.test(node.path)) {
    const pathLabel = node.component
      .split('/')
      .pop()
      .split('.')
      .shift();

    createNodeField({
      node,
      name: 'label',
      value: pathLabel
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const {
    data: { docs, examples, exampleImages }
  } = await graphql(`
    fragment DocFile on File {
      relativePath
      relativeDirectory
      absolutePath
      base
      name
    }

    query AllDocsFiles {
      docs: allFile(filter: { sourceInstanceName: { eq: "components" }, absolutePath: { glob: "**/*.docs.js" } }) {
        edges {
          node {
            ...DocFile
          }
        }
      }
      examples: allFile(
        filter: { sourceInstanceName: { eq: "components" }, relativePath: { glob: "**/examples/!(*.styles).js" } }
      ) {
        edges {
          node {
            ...DocFile
          }
        }
      }
      exampleImages: allFile(
        filter: { sourceInstanceName: { eq: "components" }, extension: { regex: "/(png|svg|jpg)/" } }
      ) {
        edges {
          node {
            ...DocFile
          }
        }
      }
    }
  `);
  const docExports = [];
  const docsComponentPath = path.resolve(__dirname, './src/components/componentDocs');
  docs.edges.forEach(({ node: doc }) => {
    const filePath = path.resolve(__dirname, '.tmp', doc.base);

    const rawExamples = [];
    const packageDir = packageDirs.find(pkg => doc.absolutePath.indexOf(pkg) !== -1);

    // In Windows environments, paths use backslashes to separate directories;
    // Ensure that forward slashes are used to make it comparable
    const docIdentifier = doc.relativeDirectory.replace(/\\/g, '/');

    examples.edges.forEach(({ node: example }) => {
      // Replace backslashes with forward slashes as for `docIdentifier` above,
      // and remove `/example` postfix
      const exampleIdentifier = example.relativeDirectory
        .split(/[/\\]/)
        .slice(0, 2)
        .join('/');

      if (exampleIdentifier === docIdentifier) {
        const examplePath = `../../${packageDir}/src/${example.relativePath}`;
        rawExamples.push(
          `{name: '${example.name}', path: '${examplePath}', file: require('!!raw-loader!${examplePath}')}`
        );

        // also create another example for the full version of it
        const pathArr = examplePath.split('/');
        const exampleName = pathArr[pathArr.length - 1];
        const exampleFilePath = path.resolve(__dirname, '.tmp', 'examples', exampleName);
        const fullExample = `
        import React from 'react';
        import Example from '${example.absolutePath}';
        import ExampleLayout from '../../src/components/layouts/fullPage';

        export default () => <ExampleLayout><Example /></ExampleLayout>;
        `;
        fs.outputFileSync(exampleFilePath, fullExample);
        const newPath = `${path.dirname(example.relativePath.toLowerCase())}/${exampleName
          .slice(0, -3)
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .toLowerCase()}`;
        createPage({
          path: newPath,
          component: exampleFilePath
        });
      }
    });
    const allImages = [];
    exampleImages.edges.forEach(({ node: image }) => {
      const imagePath = `../../react-core/src/${image.relativePath}`;
      allImages.push(`{name: '${image.base}', file: require('${imagePath}')}`);
    });

    const content = `
    import React from 'react';
    import docs from '${doc.absolutePath}';
    import ComponentDocs from '${escapeFilePath(docsComponentPath)}';
    
    const rawExamples = [${rawExamples}];
    const images = [${allImages}];

    export const ${doc.base.split('.')[0].toLowerCase()}_docs = docs;
    export const ${doc.base.split('.')[0].toLowerCase()}_package = '${packageDir}';

    export default () => <ComponentDocs rawExamples={rawExamples} images={images} {...docs} />;
    `;

    docExports.push(
      `export { ${doc.base.split('.')[0].toLowerCase()}_docs, ${doc.base
        .split('.')[0]
        .toLowerCase()}_package } from './${doc.base}';`
    );

    fs.outputFileSync(filePath, content);
    // console.log(`page: /${path.dirname(doc.relativePath).toLowerCase()}, component: ${filePath}`);
    createPage({
      path: `/${path.dirname(doc.relativePath).toLowerCase()}`,
      component: filePath
    });
  });

  const indexFilePath = path.resolve(__dirname, '.tmp', 'index.js');
  fs.writeFileSync(indexFilePath, docExports.join('\n'));
};
