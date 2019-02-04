# @patternfly/react-styled-system

## Warning: The StyledSystem components are experimental. Use at your own risk!

This package provides styled-system components using the [PatternFly 4][patternfly-4] theme.

### Prerequisite

#### Node Environment

This project currently supports Node [Active LTS](https://github.com/nodejs/Release#release-schedule) releases. Please stay current with Node Active LTS when developing patternfly-react.

For example, to develop with Node 8, use the following:

```
nvm install 8
nvm use 8
```

This project also requires a Yarn version of >=1.6.0. The latest version can be installed [here](https://yarnpkg.com/).

### Installing

```
yarn add @patternfly/react-styled-system
```

or

```
npm install @patternfly/react-styled-system --save
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
import { PatternFlyThemeProvider, StyledConstants, StyledBox, StyledText } from '@patternfly/react-styled-system';

class StyledStyles extends React.Component {
  render() {
    const { fonts, space, fontWeights, fontSizes, borders, colors } = StyledConstants;
    return (
      <PatternFlyThemeProvider>
        <React.Fragment>
          <StyledBox m={space.md} border={borders.md}>
            sets medium margin value
          </StyledBox>
          <StyledBox m={space.neg_sm} border={borders.md}>
            sets negative medium margin value
          </StyledBox>
          <StyledBox m="auto" border={borders.md}>
            sets margin auto
          </StyledBox>
          <StyledBox p={[space.xs, space.sm, space.md, space.lg]} height={50} border={borders.md}>
            This box has different paddings depending on the screen width
          </StyledBox>
          <StyledText fontFamily={fonts.monospace}>Monospace</StyledText>
          <StyledText fontSize={fontSizes.lg}>Large font size</StyledText>
          <StyledFlex px={space.md} py={space.xl} alignItems="center">
            <StyledBox color={colors.color_200}>Left Text</StyledBox>
            <StyledBox mx="auto" />
            <StyledBox color={colors.dark_200}>Right Text</StyledBox>
          </StyledFlex>
        </React.Fragment>
      </PatternFlyThemeProvider>
    );
  }
}
export default StyledStyles;
```

All css related to each component is provided alongside it. There is no component level CSS to import.

# Documentation

This project uses Gatsby. For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

A comprehensive list of components and detailed usage of each can be found on the [PatternFly React Docs][docs] website
You can also find how each component is meant to be used from a design perspective on the [PatternFly 4 Core][patternfly-4] website.

Note: All commands below assume you are on the root directory in this repository.

### Install

Run to install all the dependencies

```sh
yarn && yarn bootstrap && yarn build && yarn build:docs
```

### Running

To start the site locally.

```sh
yarn build && yarn start:pf4
```

### Building

To build the site.

```sh
yarn build:docs
```

# Contributing Components

This library makes use of the babel plugin from [@patternfly/react-styles](../react-styles/README.md) to enable providing the CSS alongside the components. This removes the need for consumers to use (style|css|sass)-loaders. For an example of using CSS from core you can reference [Button.js](./src/components/Button/Button.js). For any CSS not provided by core please use the `StyleSheet.create` utility from [@patternfly/react-styles](../react-styles/README.md). This will prevent collisions with any consumers, and allow the CSS to be bundled with the component.

### Building

```
yarn build
```

Note the build scripts for this are located in the root package.json under `yarn build`.

### Testing

Testing is done at the root of this repo. To only run the patternfly-react tests:

```
yarn test packages/patternfly-4/react-core
```

[patternfly-4]: https://github.com/patternfly/patternfly-next
[docs]: https://patternfly-react.surge.sh/patternfly-4
