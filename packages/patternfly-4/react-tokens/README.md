# @patternfly/react-tokens

![npm badge](https://img.shields.io/npm/v/@patternfly/react-tokens.svg?style=for-the-badge)

## Installation

```bash
yarn add @patternfly/react-tokens
```

or

```bash
npm install --save @patternfly/react-tokens
```

## Usage

All Tokens and their corresponding values can be viewed on the
[PatternFly React Tokens][token-page] page.

#### Import tokens

```js
import { global_BackgroundColor_100 } from '@patternfly/react-tokens';
```

#### Each token as three properties

- `name`: The CSS custom property name.
- `value`: The default value for the custom property.
- `var`: The property name wrapped in `var()`.

```js
import { global_BackgroundColor_100 } from '@patternfly/react-tokens';

global_BackgroundColor_100.name === '--pf-global--BackgroundColor--100'; //true
global_BackgroundColor_100.value === '#fff'; // true
global_BackgroundColor_100.var === 'var(--pf-global--BackgroundColor--100)'; //true
```

### Building

To build just react-tokens, run `yarn run lerna run build --scope=@patternfly/react-tokens`.

### Testing

Testing is done at the root of this repo. To only run the patternfly-react tests:

```
yarn test packages/patternfly-4/react-tokens
```


[token-page]: https://patternfly-react.surge.sh/patternfly-4/tokens/Global%20CSS%20variables/
