# @patternfly/react-core

![npm badge](https://img.shields.io/npm/v/@patternfly/react-core.svg?style=for-the-badge)

This package provides functionality and styles for essential PatternFly components. It depends on [PatternFly 4 CSS][patternfly-4]. The repo can be found [here][patternfly-repo].


### Installing

Use your favorite package manager to install our package from npm: 

```sh
yarn add @patternfly/react-core
```

or

```sh
npm install @patternfly/react-core --save
```

## Usage

### Pre-requisites

It's strongly advised to use the PatternFly Base CSS in your whole project, or some components may diverge in appearance:

```javascript
import '@patternfly/react-core/dist/styles/base.css';
```

### Example Component Usage

```javascript
import { Button } from '@patternfly/react-core';

export default <Button variant="primary">Button</Button>;
```

All css related to each component is provided within it. There is no component level CSS to import.

## Contributing

All commands are run from the repo's root.

### Dev environment

This project uses [react-docs](../react-docs/README.md) to test and demo Patternfly4 components. You can view the current docs [here](http://patternfly-react.surge.sh/patternfly-4) or run them locally:

```sh
yarn start:pf4
```

### Building

To build just react-core:

```sh
yarn run lerna run build --scope=@patternfly/react-core
```

### Testing

To only run the PF4 tests:

```sh
yarn test:pf4
```

[patternfly-4]: https://pf4.patternfly.org
[patternfly-repo]: https://github.com/patternfly/patternfly-next
[docs]: https://patternfly-react.surge.sh/patternfly-4