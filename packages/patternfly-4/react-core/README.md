# @patternfly/react-core

![npm badge](https://img.shields.io/npm/v/@patternfly/react-core.svg?style=for-the-badge)

This package provides functionality and styles for essential PatternFly components. It depends on [PatternFly 4 CSS][patternfly-4]. The repo can be found [here][patternfly-repo].


### Installing

Use your favorite package manager to install our package from npm: 

`yarn add @patternfly/react-core`

`npm install @patternfly/react-core --save`

# Usage

#### Pre-requisites

It's strongly advised to use the PatternFly Base CSS in your whole project, or some components may diverge in appearance:

```javascript
import '@patternfly/react-core/dist/styles/base.css';
```

#### Example Component Usage

```javascript
import { Button } from '@patternfly/react-core';

export default <Button variant="primary">Button</Button>;
```

All css related to each component is provided within it. There is no component level CSS to import.

### Building

To build just react-core, run `yarn run lerna run build --scope=@patternfly/react-core`.

### Testing

Testing is done at the root of this repo. To only run the patternfly-react tests:

```
yarn test packages/patternfly-4/react-core
```

[patternfly-4]: https://pf4.patternfly.org
[patternfly-repo]: https://github.com/patternfly/patternfly-next
[docs]: https://patternfly-react.surge.sh/patternfly-4