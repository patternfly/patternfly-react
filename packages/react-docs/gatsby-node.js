const path = require(`path`);
const pascalCase = require('pascal-case');
const paramCase = require('param-case');
const fs = require('fs-extra'); //eslint-disable-line

exports.modifyWebpackConfig = ({ config, stage }) => {
  const oldCSSLoader = config._loaders.css;
  const pfStylesTest = /patternfly-next.*(components|layouts|utilities).*\.css$/;
  config.removeLoader('css');
  if (oldCSSLoader.config.loaders && oldCSSLoader.config.loaders.includes('postcss')) {
    oldCSSLoader.config.loaders.splice(oldCSSLoader.config.loaders.indexOf('postcss'), 1);
  }
  config
    .loader('pf-styles', {
      test: pfStylesTest,
      loaders: ['babel-loader', require.resolve('@patternfly/react-styles/loader')]
    })
    .loader('css', {
      ...oldCSSLoader.config,
      exclude: pfStylesTest
    });

  config.merge({
    resolve: {
      alias: {
        '@patternfly/react-core': path.resolve(__dirname, '../react-core/src'),
        '@patternfly/react-styles': path.resolve(__dirname, '../react-styles/src'),
        react: path.resolve(__dirname, 'node_modules/react'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom')
      }
    }
  });

  return config;
};

const componentPathRegEx = /(components|layouts)\//;

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'SitePage' && componentPathRegEx.test(node.path)) {
    const pathLabel = node.path
      .split('/')
      .filter(Boolean)
      .pop();

    createNodeField({
      node,
      name: 'label',
      value: pascalCase(pathLabel)
    });
  }
};

exports.createPages = async ({ boundActionCreators, graphql }) => {
  const {
    data: { docs, examples }
  } = await graphql(`
    fragment DocFile on File {
      relativePath
      absolutePath
      base
      name
    }

    query AllDocsFiles {
      docs: allFile(filter: { absolutePath: { glob: "**/*.docs.js" } }) {
        edges {
          node {
            ...DocFile
          }
        }
      }
      examples: allFile(filter: { relativePath: { glob: "**/examples/!(*.styles).js" } }) {
        edges {
          node {
            ...DocFile
          }
        }
      }
    }
  `);
  const docsComponentPath = path.resolve(__dirname, './src/components/componentDocs');
  docs.edges.forEach(({ node: doc }) => {
    const filePath = path.resolve(__dirname, '.tmp', doc.base);
    const content = `
    import React from 'react';
    import docs from '${doc.absolutePath}';
    import ComponentDocs from '${docsComponentPath}';

    export default () => <ComponentDocs {...docs} />
    `;
    fs.outputFileSync(filePath, content);
    boundActionCreators.createPage({
      path: `/${path.dirname(doc.relativePath).toLowerCase()}`,
      component: filePath
    });
  });

  examples.edges.forEach(({ node: example }) => {
    const examplePath = `/${path.dirname(example.relativePath).toLowerCase()}/${paramCase(example.name)}`;

    boundActionCreators.createPage({
      path: examplePath,
      layout: 'example',
      component: example.absolutePath
    });
  });
};

exports.modifyBabelrc = ({ stage, babelrc }) => {
  babelrc.plugins.push(require.resolve('babel-plugin-react-docgen'));
  return babelrc;
};
