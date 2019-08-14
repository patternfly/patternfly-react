# patternfly-react

This package provides Core PatternFly React components for PatternFly 3.

## Installing

```sh
yarn add patternfly-react
```

or

```sh
npm install patternfly-react --save
```

## Usage

```javascript
import { Alert } from 'patternfly-react';
```

### Styling with LESS:

Example with LESS:

```
@import "~bootstrap/less/variables";
@import "~patternfly/dist/less/variables";
@import "~patternfly-react/dist/less/patternfly-react.less";
```

### Using patterfly-react Sass files

As an alernative to consuming the `patternfly-react.css` file (found in `dist/css`), you can build patternfly-react styles into your css by including the Sass partials from `dist/sass`. The partial `_patternfly-react.scss` will pull in all the partials required for the patternfly-react components. When using the patternfly-react Sass files, you **MUST** include bootstrap and patternfly variables and mixins. An example of the required imports can be found in [patternfly-react.scss](./packages/patternfly-3/patternfly-react/sass/patternfly-react.scss).

## Contributing

All commands are run from the repo's root.

### Dev environment

This project uses [React Storybook](https://storybook.js.org/) to test and demo new PatternFly 3 React UI components. You can view our current storybook [here](http://patternfly-react.surge.sh/patternfly-3) or run them locally:

```sh
yarn start:pf3
```

### Building

To build just patternfly-react:

```sh
yarn run lerna run build --scope=@atternfly-react
```

### Testing

To only run the PF4 tests:

```sh
yarn test:pf3
```
