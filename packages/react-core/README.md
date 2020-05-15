# PatternFly React - Core

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-green.svg?style=for-the-badge)](https://lernajs.io/)
[![PatternFly 4 npm badge](https://img.shields.io/npm/v/@patternfly/react-core.svg?label=React-Core&style=for-the-badge)](https://www.npmjs.com/package/@patternfly/react-core)
[![CodeCov](https://img.shields.io/codecov/c/gh/patternfly/patternfly-react?style=for-the-badge)](https://codecov.io/gh/patternfly/patternfly-react)

This project provides the React core components for the [PatternFly project](https://patternfly.org).  

**Community:** [PatternFly website](https://www.patternfly.org) | [Slack](https://slack.patternfly.org) | [Medium](https://medium.com/patternfly) | [Mailing list](https://www.redhat.com/mailman/listinfo/patternfly)

### Table of contents
1. [Setup](#Setup)
2. [Contribution guidelines](#Contribution-guidelines)
3. [License](#License)

### Setup

Before you begin, check out this [overview of PatternFly](http://patternfly.org/v4/get-started/about) to get familiar with the basic elements of the design system.  These instructions also assume that an existing React project is set up.  For more information on how to do this, please see our main [README](https://github.com/patternfly/patternfly-react/tree/master/README.md#setup).

#### Install the @patternfly/react-core NPM package
* Using npm, run the following command to install:
  ```
  npm install @patternfly/react-core --save
  ```

  **OR**

* Using yarn, run the following command to install:
  ```
  yarn add @patternfly/react-core
  ```
  
#### Project configuration
Each PatternFly component already contains the CSS related to the component.  In order to have consistent styles throughout the application, PatternFly Base CSS should be used in the project, or some components may diverge in appearance.  This import statement should be placed before your main application component is imported.

```javascript
import '@patternfly/react-core/dist/styles/base.css';
```

#### Example component usage

```javascript
import { Button } from '@patternfly/react-core';

export default <Button variant="primary">Button</Button>;
```

All component documentation is available on [PatternFly.org](https://www.patternfly.org/v4/documentation/react/components/aboutmodal).

#### Advanced usage
1. [Applying Overpass font](../../ADVANCED-USAGE-README.md#Applying-Overpass-font)
2. [Tree shaking](../../ADVANCED-USAGE-README.md#Tree-shaking)

### Contribution guidelines
All React contributors must first be [PatternFly community contributors](https://www.patternfly.org/v4/contribute/about). If you're already a PatternFly community contributor, check out the [React contribution guidelines](https://github.com/patternfly/patternfly-react/tree/master/CONTRIBUTING.md) to make React contributions.

### License
PatternFly React is licensed under the [MIT License](https://github.com/patternfly/patternfly-react/tree/master/LICENSE).
