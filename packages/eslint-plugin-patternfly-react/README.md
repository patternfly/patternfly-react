# eslint-plugin-patternfly-react

This package provides PatternFly React all ESLint rules bundled together for use in PatternFly React and downstream applications.

### Installing

```sh
yarn add -D eslint-plugin-patternfly-react
```

or

```sh
npm install eslint-plugin-patternfly-react --save-dev
```

### Usage

Add eslint-plugin-patternfly-react to your `.eslintrc.json` or `.eslintrc.js`.

.eslintrc.json:

```json
{
  "plugins": ["plugin:patternfly-react/recommended"]
}
```

.eslintrc.js:

```js
module.exports = {
  root: true,
  extends: ['plugin:patternfly-react/recommended']
};
```
