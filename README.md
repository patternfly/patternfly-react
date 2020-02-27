# PatternFly React

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-green.svg?style=for-the-badge)](https://lernajs.io/)
[![PatternFly 3 npm badge](https://img.shields.io/npm/v/patternfly-react.svg?label=PF3%20Core&style=for-the-badge)](https://www.npmjs.com/package/patternfly-react)
[![PatternFly 4 npm badge](https://img.shields.io/npm/v/@patternfly/react-core.svg?label=PF4%20Core&style=for-the-badge)](https://www.npmjs.com/package/@patternfly/react-core)
[![CodeCov](https://img.shields.io/codecov/c/gh/patternfly/patternfly-react?style=for-the-badge)](https://codecov.io/gh/patternfly/patternfly-react)

This project provides a set of React components for the [PatternFly project](https://patternfly.org).  

**Community:** [PatternFly website](https://www.patternfly.org) | [Slack](https://slack.patternfly.org) | [Medium](https://medium.com/patternfly) | [Mailing list](https://www.redhat.com/mailman/listinfo/patternfly)

### Table of contents
1. [PatternFly React packages](#patternfly-react-packages)
2. [Setup](#Setup)
3. [Contribution guidelines](#Contribution-guidelines)
4. [License](#License)

Using PatternFly 3?  Take a look at the [PatternFly 3 React component information](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-3/patternfly-react/README.md).

### PatternFly React packages

| Package link | Description |
| --- | --- |
| **:blue_heart: Core packages** |
| &nbsp;&nbsp;[@patternfly/react-core](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-core) | Core set of components |
| &nbsp;&nbsp;[@patternfly/react-table](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-table) | Table components | 
| &nbsp;&nbsp;[@patternfly/react-charts](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-charts) | Chart components
| &nbsp;&nbsp;[@patternfly/react-icons](https://github.com/patternfly/patternfly-react/tree/master/packages/react-icons) | Icon components |
| &nbsp;&nbsp;[@patternfly/react-styles](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-styles) | PatternFly CSS styles |
| &nbsp;&nbsp;[@patternfly/react-tokens](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-tokens) | PatternFly CSS variable tokens |
| &nbsp;&nbsp;[@patternfly/react-topology](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-topology) | Topology components |
| **:open_file_folder: Supporting packages** |
| &nbsp;&nbsp;[@patternfly/react-docs](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-docs) | Gatsby documentation site for components |
| &nbsp;&nbsp;[@patternfly/react-integration](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-integration) | Cypress integration tests |
| **:family: Extension packages** *community supported* | 
| &nbsp;&nbsp;[@patternfly/react-catalog-view-extension](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-catalog-view-extension) | Catalog view extension |
| &nbsp;&nbsp;[@patternfly/react-virtualized-extension](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-virtualized-extension) | Table and list row virtualization extension |
| **:x: Deprecated packages** |
| &nbsp;&nbsp;[@patternfly/react-inline-edit-extension](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-inline-edit-extension) | Table inline edit extension |
| &nbsp;&nbsp;[@patternfly/react-styled-system](https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-styled-system) | Styled system component prototype |
| &nbsp;&nbsp;[@patternfly/react-codemods](https://github.com/patternfly/patternfly-react/tree/master/packages/react-codemods) | Codemods for upgrading PatternFly 3 components |

### Setup

Before you begin, check out this [overview of PatternFly](http://patternfly.org/v4/get-started/about) to get familiar with the basic elements of the design system.

#### Install a package manager
Install a package manager before using the PatternFly libraries.

* [Use npm](https://nodejs.org/en/download)
* [Use Yarn](https://yarnpkg.com/en/docs/getting-started)


#### Start with PatternFly React Seed
If you want to start with your existing project, skip to [Install and configure PatternFly React](#install-and-configure-patternfly-react).

[PatternFly React seed](https://github.com/patternfly/patternfly-react-seed) is an open source build scaffolding utility. It gives developers a jump-start when creating new projects that will use PatternFly.


1. **Fork the project**

  * TypeScript: [Fork and clone the PatternFly React Seed project](https://github.com/patternfly/patternfly-react-seed).
  * JavaScript: [Fork and clone the JavaScript branch of the PatternFly React Seed project](https://github.com/patternfly/patternfly-react-seed/tree/javascript).

    For more information about how to fork and clone a repo, [view GitHub Help](https://help.github.com/articles/fork-a-repo/).

2. **Install the project**

    Follow the steps outlined in the [PatternFly React Seed README](https://github.com/patternfly/patternfly-react-seed#quick-start) to install.

#### Install and configure PatternFly React
* Using npm, run the following command to install:
  ```
  npm install @patternfly/react-core --save
  ```

  **OR**

* Using yarn, run the following command to install:
  ```
  yarn add @patternfly/react-core
  ```
  
    Once the library is installed, use the specific [setup instructions](#library-packages) for that library to access the components it contains.  

### Contribution guidelines
All React contributors must first be [PatternFly community contributors](https://www.patternfly.org/v4/contribute/about). If you're already a PatternFly community contributor, check out the [React contribution guidelines](https://github.com/patternfly/patternfly-react/tree/master/CONTRIBUTING.md) to make React contributions.

### License
PatternFly React is licensed under the [MIT License](https://github.com/patternfly/patternfly-react/tree/master/LICENSE).

