# @patternfly/browserslist-config

This package provides the definition of the browsers PatternFly React supports.
It uses [`browserslist`](https://github.com/browserslist/browserslist#browserslist-) API so it can be used in tools like `eslint`, `babel`, `postcss`, `autoprefixer` and more.

### Installing

```
yarn add -D @patternfly/browserslist-config
```

or

```
npm install @patternfly/browserslist-config --save-dev
```

### Usage

Add `browserslist` field in your `package.json` file:

```diff
{
+  "browserslist": [
+    "extends @patternfly/browserslist-config"
+  ]
}
```

### Integrate with babel

To make babel read your browserslist-config and replace `core-js` instances with spesific polyfills, use the `@babel/preset-env` preset with `"useBuiltIns": "entry"` param:

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
}
```

Learn more about entry built-ins: https://babeljs.io/docs/en/next/babel-preset-env.html#usebuiltins

### Integrate with eslint

The eslint integration is seemless and should work out of the box if you are already using the `eslint-plugin-patternfly-react` package.

If not, install the [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat) plugin.
