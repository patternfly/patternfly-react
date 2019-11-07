const path = require('path');
const fs = require('fs');
const { extractExamples } = require('./helpers/extractExamples');
const { extractTableOfContents } = require('./helpers/extractTableOfContents');
const { createHandlebars } = require('./helpers/createHandlebars');
const { slugger } = require('./helpers/slugger');
const webpack = require('webpack');

// Add map PR-related environment variables to GraphQL
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const num = process.env.CIRCLE_PR_NUMBER || process.env.PR_NUMBER;
  const url = process.env.CIRCLE_PULL_REQUEST;
  // Docs https://www.gatsbyjs.org/docs/actions/#createNode
  actions.createNode({
    name: 'PR_INFO',
    num: num || '',
    url: url || '',
    id: createNodeId('PR_INFO'),
    parent: null,
    children: [],
    internal: {
      contentDigest: createContentDigest({ a: 'PR_INFO' }),
      type: 'EnvVars'
    }
  });
};

// Build URL an MDX page should be created at
// We support a `pages-*` source for Core, where we won't prefix the slug.
// This allows them to create urls like `/accessibility-guide`, etc.
const makeSlug = (source, section, componentName) => {
  let url = '';

  // We know these belong in the "documentation" section of the site
  if (['react', 'core'].includes(source)) {
    url += `/documentation/${source}`;
  } else if (!source.includes('pages-')) {
    url += `/${source}`;
  }

  if (section !== 'root') {
    url += `/${slugger(section)}`
  }

  url += `/${slugger(componentName)}`;

  return url;
}

let addedFileFieldsToSchema = false;
// Here we transform all the data we later need for `createPages`
// We handle creating slugs and navigation abstraction
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    // Parent comes from gatsby-source-filesystem definition in gatsby-config.js
    const parent = getNode(node.parent);
    const source = parent.sourceInstanceName;
    const componentName = path.basename(node.fileAbsolutePath, '.md');

    let { section = 'root', title, propComponents = [''] } = node.frontmatter;
    // Source determines sideNav context and some features like context switcher
    createNodeField({
      node,
      name: 'source',
      value: source.replace('pages-', '')
    });
    // Slug is the URL we create the page at
    createNodeField({
      node,
      name: 'slug',
      value: makeSlug(source, section, componentName).toLowerCase()
    });
    // What sideNav menu to include items under
    createNodeField({
      node,
      name: 'navSection',
      value: section.toLowerCase()
    });
    // The page's name to be used for context switching and the URL.
    // We don't make the assumption this will always be the last part of the URL
    // so that we can make changes to the slugger later.
    createNodeField({
      node,
      name: 'componentName',
      value: componentName.toLowerCase()
    });
    // The <h1> to put at the top of the page
    createNodeField({
      node,
      name: 'title',
      value: title
    });
    // We need to populate this for the query on `fields` in createPages
    createNodeField({
      node,
      name: 'propComponents',
      value: propComponents
    });
  } else if (node.internal.type === 'File') {
    if (!addedFileFieldsToSchema) {
      // This is just to add the Handlbars file fields
      // to the schema so GraphQL queries don't fail
      // TODO: Is there a way to do this in createSchemaCustomization?
      createNodeField({ node, name: 'name', value: '' });
      createNodeField({ node, name: 'partial', value: '' });
      createNodeField({ node, name: 'source', value: '' });
      createNodeField({ node, name: 'slug', value: '' });
      createNodeField({ node, name: 'title', value: '' });

      addedFileFieldsToSchema = true;
    }
    if (node.extension === 'hbs') {
      // Partial name has always come from file name in patternfly-next
      createNodeField({
        node,
        name: 'name',
        value: path.basename(node.absolutePath, '.hbs')
      });
      createNodeField({
        node,
        name: 'partial',
        value: fs.readFileSync(node.absolutePath, 'utf8')
      });
    }
  }
};

const createGlobalPages = actions => {
  actions.createPage({
    path: '/documentation/overview/global-css-variables',
    component: path.resolve(__dirname, `./pages/globalCSSVariables.js`),
    context: {
      navSection: 'overview',
      title: 'Global CSS variables',
      source: 'shared'
    }
  });
  actions.createPage({
    path: '/documentation/overview/red-hat-font',
    component: path.resolve(__dirname, `./pages/redHatFont.js`),
    context: {
      navSection: 'overview',
      title: 'Red Hat font',
      source: 'shared'
    }
  });
}

exports.createPages = ({ actions, graphql }, pluginOptions) => graphql(`
  {
    docs: allMdx(filter: { fields: { source: { ne: "design-snippets" } } }) {
      nodes {
        id
        fileAbsolutePath
        mdxAST
        fields {
          slug
          source
          navSection
          title
          propComponents
          componentName
        }
      }
    }
    designSnippets: allMdx(filter: { fields: { source: { eq: "design-snippets" } } }) {
      nodes {
        id
        frontmatter {
          reactComponentName
          coreComponentName
        }
      }
    }
    pages: allFile(filter: { fields: { slug: { nin: ["", null] } } }) {
      nodes {
        absolutePath
        fields {
          slug
          source
          title
        }
      }
    }
    partials: allFile(filter: { fields: { name: { nin: ["", null] } } }) {
      nodes {
        fields {
          name
          partial
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const hbsInstance = createHandlebars(result.data.partials.nodes);
    const hiddenTitles = (pluginOptions.hiddenPages || []).map(title => title.toLowerCase());

    // Create our global pages
    createGlobalPages(actions);
    // Create our per-MDX file pages
    result.data.docs.nodes
      .concat(result.data.pages.nodes)
      .filter(node => !hiddenTitles.includes(node.fields.title.toLowerCase()))
      .forEach(node => {
        const { componentName, slug, navSection = null, title, source, propComponents = [''] } = node.fields;
        const fileRelativePath = path.relative(__dirname, node.absolutePath || node.fileAbsolutePath);
        // Process the MDX AST to dynamically create a TOC and per-example fullscreen pages
        const tableOfContents = extractTableOfContents(node.mdxAST);
        const examples = extractExamples(node.mdxAST, hbsInstance, fileRelativePath);

        // Not a huge fan of this component mapping disaster
        const designNode = result.data.designSnippets.nodes.find(
          node => node.frontmatter[`${source}ComponentName`] === componentName
        );
        
        // Create our dynamic templated pages
        actions.createPage({
          path: slug,
          component: node.absolutePath || path.resolve(__dirname, `./templates/mdx.js`),
          context: {
            // Required by template to fetch more MDX/React docgen data from GraphQL
            id: node.id,
            designId: designNode ? designNode.id : 'undefined',
            propComponents,
            // For dynamic TOC on templated page
            tableOfContents,
            // For sideNav GraphQL query and dynamic classNames in Example.js
            navSection,
            // For top of TOC
            title,
            // For top of TOC, dynamic classNames in Example.js, and some feature flags
            source,
            // To render static example HTML from patternfly-next
            htmlExamples: source === 'core' ? examples : undefined,
          }
        });

        // Create per-example fullscreen pages for documentation pages
        if (['core', 'react'].includes(source)) {
          let component;
          if (source === 'core') {
            component = path.resolve(__dirname, `./templates/fullscreenHtml.js`);
          }
          else if (source === 'react') {
            component = path.resolve(__dirname, `./templates/fullscreenMdx.js`);
          }
          
          Object.entries(examples).forEach(([key, example]) => {
              actions.createPage({
                path: `${slug}/${key}`,
                component,
                context: {
                  // To exclude fullscreen pages from sitemap
                  isFullscreen: true,
                  // The HTML or JSX to render
                  code: example
                }
              });
          });
        }
      });
  });

// https://www.gatsbyjs.org/docs/schema-customization/
exports.createSchemaCustomization = ({ actions }) => {
  // Define types for sideNav if any of core, react, or org aren't included
  const sideNavTypeDefs = `
    type SideNavItem @infer {
      section: String
      text: String
      path: String
    }
    type SideNav @infer {
      core: [SideNavItem]
      react: [SideNavItem]
      get_started: [SideNavItem]
      design_guidelines: [SideNavItem]
      contribute: [SideNavItem]
    }
    type TopNavItem @infer {
      text: String
      path: String
      contexts: [String]
    }
    type SitePluginOptions @infer {
      sideNav: SideNav
      topNavItems: [TopNavItem]
    }
    type SitePlugin implements Node @infer {
      pluginOptions: SitePluginOptions
    }
  `;
  actions.createTypes(sideNavTypeDefs);
}

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    // Turn off source-maps because dist sizes are huge
    actions.setWebpackConfig({
      devtool: false
    })
  }
  // Exclude CSS-in-JS styles included from React. They override
  // the patternfly.css styles
  actions.setWebpackConfig({
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/react-styles\/css\/.*\.css/, path.resolve(__dirname, './empty.css'))
    ]
  });
};
