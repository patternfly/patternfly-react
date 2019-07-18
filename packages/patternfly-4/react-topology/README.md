# @patternfly/react-topology

![npm badge](https://img.shields.io/npm/v/@patternfly/react-topology.svg?style=for-the-badge)

This package provides Topology View components based on [PatternFly 4][patternfly-4]


### Installing

```
yarn add @patternfly/react-topology
```

or

```
npm install @patternfly/react-topology --save
```

## Usage

It's strongly advised to use the PatternFly Base CSS in your whole project, or some components may diverge in appearance:

```javascript
import '@patternfly/react-core/dist/styles/base.css';
```

#### Example Component Usage

```javascript
import React from 'react';
... TBD
```

### Building

To build just react-tokens, run `yarn run lerna run build --scope=@patternfly/react-topology`.

### Testing

Testing is done at the root of this repo. To only run the @patternfly/react-topology tests:

```
yarn test packages/patternfly-4/react-topology
```

[patternfly-4]: https://github.com/patternfly/patternfly-next
[docs]: https://patternfly-react.surge.sh/patternfly-4
