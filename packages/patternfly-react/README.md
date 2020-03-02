# patternfly-react

This package provides Core PatternFly React components for PatternFly 3.

### Prerequisite

#### Node Environment

This project currently supports Node [Active LTS](https://github.com/nodejs/Release#release-schedule) releases. Please stay current with Node Active LTS when developing patternfly-react.

For example, to develop with Node 8, use the following:

```
nvm install 10
nvm use 10
```

This project also requires a Yarn version of >=1.6.0. The latest version can be installed [here](https://yarnpkg.com/).

### Installing

```
yarn add patternfly-react
```

or

```
npm install patternfly-react --save
```

### Usage

```javascript
import { Alert } from 'patternfly-react';
```

#### Styling with LESS:

Example with LESS:

```
@import "~bootstrap/less/variables";
@import "~patternfly/dist/less/variables";
@import "~patternfly-react/dist/less/patternfly-react.less";
```

#### Using patterfly-react Sass files

As an alernative to consuming the `patternfly-react.css` file (found in `dist/css`), you can build patternfly-react styles into your css by including the Sass partials from `dist/sass`. The partial `_patternfly-react.scss` will pull in all the partials required for the patternfly-react components. When using the patternfly-react Sass files, you **MUST** include bootstrap and patternfly variables and mixins. An example of the required imports can be found in [patternfly-react.scss](./packages/patternfly-3/patternfly-react/sass/patternfly-react.scss).

### Building

```
yarn build
```

Note the build scripts for this are located in the root package.json under `yarn build`.

### Testing

Testing is done at the root of this repo. To only run the patternfly-react tests:

```
yarn test packages/patternfly-react
```

### Publishing

```
yarn publish
```

### Storybook UI Development

This project uses [React Storybook](https://storybook.js.org/) to test and demo new PaternFly 3React UI components. You can view our current storybook [here](http://patternfly-react.surge.sh/).

How to use Storybook locally:

```
yarn install
yarn start
```
