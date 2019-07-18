# patternfly-react

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-green.svg?style=for-the-badge)](https://lernajs.io/)
![PatternFly 3 npm badge](https://img.shields.io/npm/v/patternfly-react.svg?label=PF3%20Core&style=for-the-badge)
![PatternFly 4 npm badge](https://img.shields.io/npm/v/@patternfly/react-core.svg?label=PF4%20Core&style=for-the-badge)

[PatternFly](https://www.patternfly.org/v4/) is an open source design system built to drive consistency and unify teams. This repo provides a set of React UI components for it.

## Intro

PatternFly React is a React Component library offered as PatternFly 3 and PatternFly 4.

### PatternFly 4
`npm install --save @patternfly/react-core`

`yarn add patternfly-react`

```javascript
import React from 'react';
import { Button } from '@patternfly/react-core';

export const MyComponent = props => (
  <Button>This is an interactive PatternFly 4 styled button!</Button>
);
```

### PatternFly 3

`npm install --save patternfly-react`

`yarn add patternfly-react`

```javascript
import React from 'react';
import { Button } from 'patternfly-react';

export const MyComponent = props => (
  <Button>This is an interactive PatternFly 3 styled button!</Button>
);
```

### Contributing Guide

If you are interested in contributing to PatternFly React, please see [Getting Started as a Contributor](https://github.com/patternfly/patternfly-react/wiki/Getting-Started-as-a-Contributor) and the [Contributing Guide](./CONTRIBUTING.md).

### Code of Conduct

This project is governed by the [Contributor Covenant version 1.4](https://www.contributor-covenant.org/version/1/4/code-of-conduct.html). All contributors and participants agree to abide by its terms. To report violations, send an email to patternfly@redhat.com.
