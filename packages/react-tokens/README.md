# @patternfly/react-tokens

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

## Examples

```js
import t_global_background_color_primary_default from '@patternfly/react-tokens/dist/esm/t_global_background_color_primary_default';
```

#### Each token as three properties

- `name`: The CSS custom property name.
- `value`: The default value for the custom property.
- `var`: The property name wrapped in `var()`.

```js
import t_global_background_color_primary_default from '@patternfly/react-tokens/dist/esm/t_global_background_color_primary_default';

t_global_background_color_primary_default.name === '--pf-t--global--background--color--primary--default'; // true
t_global_background_color_primary_default.value === '#fff'; // true
t_global_background_color_primary_default.var === 'var(--pf-t--global--background--color--primary--default)'; // true
```

[token-page]: https://react-staging.patternfly.org/developer-resources/global-css-variables
