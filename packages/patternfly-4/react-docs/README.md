# React-docs

Gatsby is a static site generator that doubles as a hot-module reloader for building our docs.

We have to more or less build our own version of [React Styleguidist](https://github.com/styleguidist/react-styleguidist). To enable hot-module reloading and other async efficiences, we have to build our own data pipeline and transformations through Gatsby's GraphQL. 

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
  - We include our own plugins for transforming component source files into metadata via [React Docgen](https://github.com/reactjs/react-docgen) and [React Docgen Typescript](https://github.com/styleguidist/react-docgen-typescript).

2.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

3.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.


Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.