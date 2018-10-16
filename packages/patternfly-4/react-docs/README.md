# PatternFly React Docs
This site uses gatsby.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).



### Note: All commands below assume you are on the root directory in this repository.
## Install
Run to install all the dependencies
```sh
lerna bootstrap
```

## Running
To start the site locally.
```sh
yarn build && yarn start:pf4
```

## Building
To build the site.
```sh
yarn build:site
```

## Live examples
### Disabling globally
You can turn off the functionality to live edit the examples globally by settings GATSBY_LIVE_EXAMPLES to false, either by editing [.env.development](./.env.development) and [.env.production](./.env.production) or by setting it in the CLI prior to starting the docs:
```sh
GATSBY_LIVE_EXAMPLES=false yarn start:pf4
```
### Other example settings
There are some special static fields you can specify in the example to change behavior:
```sh
// Sets the title for the example
static title = 'Example title';

// Sets the description for the example
static description = 'Example description';

// True by default, set to false to disable live editing for this example
static live = false;

// Pass imports into the liveScope object so it is available to the live editor.
// By default, the live editor only knows about React.*, react-core components, react-icons, and the react-styles css function
// If you have additional imports in your examples, they can be passed to the live editor scope like this:
static liveScope = { spacingStyles };

// Additional styles relevant to the example display can be added via a static field getContainerProps.
// getContainerProps is an import to a .js file that has content such as:
/*
import { css, StyleSheet } from '@patternfly/react-styles';
const styles = StyleSheet.create({
  demoLayout: {
    '& > .pf-c-alert': {
      marginBottom: '0.5rem'
    }
  }
});
export default () => ({ className: css(styles.demoLayout) });
*/
static getContainerProps = getContainerProps;

```
In the examples *.docs.js file, you can specify these properties:
```sh
// Main title for the examples
title: 'Alert',

// Components to display in the props table
components: {
  Alert
},

// Enums that need to be evaluated for the props table
enumValues: {
  'Object.values(AlertVariant)': Object.values(AlertVariant)
},

// The examples
examples: [SuccessExample, DangerExample, InfoExample, WarningExample],
// True to show links instead of inline examples, also turns live editing off

fullPageOnly: false
```
