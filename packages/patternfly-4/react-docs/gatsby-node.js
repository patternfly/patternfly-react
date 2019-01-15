const path = require(`path`);
const paramCase = require('param-case');
const fs = require('fs-extra'); //eslint-disable-line

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
          use: [loaders.miniCssExtract(), loaders.css({ importLoaders: 1 })],
          exclude: pfStylesTest
        }
      ]
    },
    resolve: {
      alias: {
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
    const getPackage = pkg => doc.absolutePath.indexOf(pkg) !== -1 && pkg;
    const packageDir = getPackage('react-core') || getPackage('react-charts') || getPackage('react-styled-system');
    examples.edges.forEach(({ node: example }) => {
      if (
        example.relativeDirectory
          .split('/')
          .slice(0, 2)
          .join('/') === doc.relativeDirectory
      ) {
        const examplePath = `../../${packageDir}/src/${example.relativePath}`;
        rawExamples.push(
          `{name: '${example.name}', path: '${examplePath}', file: require('!!raw-loader!${examplePath}')}`
        );
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
    import ComponentDocs from '${docsComponentPath}';
    
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
    createPage({
      path: `/${path.dirname(doc.relativePath).toLowerCase()}`,
      component: filePath
    });
  });

  const indexFilePath = path.resolve(__dirname, '.tmp', 'index.js');
  fs.writeFileSync(indexFilePath, docExports.join('\n'));

  examples.edges.forEach(({ node: example }) => {
    const examplePath = `/${path.dirname(example.relativePath).toLowerCase()}/${paramCase(example.name)}`;
    createPage({
      path: examplePath,
      layout: 'example',
      component: example.absolutePath
    });
  });
};
