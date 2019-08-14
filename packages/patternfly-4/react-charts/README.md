# @patternfly/react-charts

![npm badge](https://img.shields.io/npm/v/@patternfly/react-charts.svg?style=for-the-badge)

This package provides PatternFly charting components for [PatternFly 4][patternfly-4].

### Installing

```sh
yarn add @patternfly/react-charts
```

or

```sh
npm install @patternfly/react-charts --save
```

# Usage

#### Pre-requisites

It's strongly advised to use the PatternFly Base CSS in your whole project, or some components may diverge in appearance:

```javascript
import '@patternfly/react-core/dist/styles/base.css';
```

#### Example Component Usage

```javascript
import React from 'react';
import { Area } from '@patternfly/react-charts';

export default <Area />;

<Area data={[{ x: 1, y: 1 }, { x: 2, y: 2 }]} />;
```

All css related to each component is provided alongside it. There is no component level CSS to import.

### Building

To build just react-charts:

```sh
yarn run lerna run build --scope=@patternfly/react-charts
```


### Testing

To only run the patternfly-react tests:

```sh
yarn test packages/patternfly-4/react-charts
```

[patternfly-4]: https://github.com/patternfly/patternfly