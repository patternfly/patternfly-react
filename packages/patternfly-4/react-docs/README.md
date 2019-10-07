# React-docs

## Writing your docs

Gatsby recursively scans all `../../patternfly-4` directories for *.md files. Your Markdown file can have the following frontmatter:
```
---
title: '(required) title of the page'
cssPrefix: '(optional) the cssPrefix from @patternfly/patternfly (i.e. pf-c-nav)'
section: '(optional, default=components) the section the page should be generated under'
fullscreen: (optional, default=false) if the page should be rendered as-is
---
```

Your Markdown file will have its JS code blocks converted to live-editable components via [`react-live`](https://github.com/FormidableLabs/react-live):
`````

import { requiredDeps } from '@patternfly/any-webpack-alias-in-gatsby-node.js'
import localDep from './examples/exampleDep.js'

```js title=Title-describing-example
<p>Hello, world!</p>
```
`````

Remember that you are unable to use experimental language features like [class properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) as [Buble](https://github.com/bublejs/buble) does not support them.

## About Gatsby

Gatsby is a static site generator that doubles as a hot-module reloader for building our docs. This is an grandious way to use our own components in our docs.

We have to more or less build our own version of [React Styleguidist](https://github.com/styleguidist/react-styleguidist). We can't just use [React Styleguidist](https://github.com/styleguidist/react-styleguidist) because [patternfly-next](https://github.com/patternfly/patternfly-next) and [patternfly-org](https://github.com/patternfly/patternfly-org) also uses Gatsby for their docs and the two are currently being merged and styled at [v2.patternfly.org](v2.patternfly.org).

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where we which Gatsby plugins to include. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
  - We include our own plugin `gatsby-transformer-react-docgen-typescript` for transforming component source files into metadata via [React Docgen](https://github.com/reactjs/react-docgen) and [React Docgen Typescript](https://github.com/styleguidist/react-docgen-typescript).
  - We use `gatsby-mdx` to parse the *.md files into React Functional Components. We use the generated HTML _except for in <code> tags_, where we instead use our own `components/componentDocs/liveEdit.js` component.

2.  **`gatsby-node.js`**: This file is the secondary copnfiguration file for a Gatsby site. It expects usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/). We use it just to enumerate which pages to create based off of data loaded from the `gatsby-transformer-remark` plugin.

3.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any).


You will most likely **NOT** learn Gatsby just by reading our code. Instead, **for most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process quite quickly.
