# patternfly-react

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-green.svg?style=for-the-badge)](https://lernajs.io/)
![PatternFly 3 npm badge](https://img.shields.io/npm/v/patternfly-react.svg?label=PF3%20Core&style=for-the-badge)
![PatternFly 4 npm badge](https://img.shields.io/npm/v/@patternfly/react-core.svg?label=PF4%20Core&style=for-the-badge)

[PatternFly](https://www.patternfly.org/v4/) is an open source design system built to drive consistency and unify teams. This repo provides a set of React UI components for it.

## Getting Started

PatternFly React is a React Component library offered as PatternFly 3 and PatternFly 4.

### PatternFly 4

```sh
npm install --save @patternfly/react-core
```

or

```sh
yarn add @patternfly/react-core
```

Example usage:

```javascript
import React from 'react';
import { Button } from '@patternfly/react-core';

export const MyComponent = props => (
  <Button>This is an interactive PatternFly 4 styled button!</Button>
);
```

#### Applying Red Hat Fonts (Optional) 
If you would like to use Red Hat fonts instead of Overpass, simply add the class `.pf-m-redhat-font` to an element that wraps your application (ideally `<html>` or `<body>`) to adopt the CSS changes that introduce the Red Hat fonts into PatternFly.


### PatternFly 3

```sh
npm install --save patternfly-react
```

or

```sh
yarn add patternfly-react
```

```javascript
import React from 'react';
import { Button } from 'patternfly-react';

export const MyComponent = props => (
  <Button>This is an interactive PatternFly 3 styled button!</Button>
);
```

## Contributing

If you are interested in contributing to PatternFly React, please see the [Contributing Guide](./CONTRIBUTING.md).

### Code of Conduct

This project is governed by the [Contributor Covenant version 1.4](https://www.contributor-covenant.org/version/1/4/code-of-conduct.html). All contributors and participants agree to abide by its terms. To report violations, send an email to patternfly@redhat.com.
