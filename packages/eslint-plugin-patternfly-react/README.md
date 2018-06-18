# eslint-plugin-patternfly-react

This package provides PatternFly React all ESLint rules bundled together for use in PatternFly React and downstream applications.

### Installing

```
yarn add -D eslint-plugin-patternfly-react
```

or

```
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

```javascript
module.exports = {
  root: true,
  extends: ['plugin:patternfly-react/recommended']
};
```

### Building

```
yarn build
```

Note the build scripts for this are located in the root package.json under `yarn build`.

### Publishing

```
yarn publish
```
