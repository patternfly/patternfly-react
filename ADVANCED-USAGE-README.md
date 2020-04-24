# PatternFly React
This README covers advanced usage topics for PatternFly React users.  

### Table of contents
1. [Applying Red Hat Fonts](#Applying-Red-Hat-fonts)
2. [Tree shaking](#Tree-shaking)

## Applying Red Hat fonts
If you would like to use Red Hat fonts instead of Overpass, simply add the class `.pf-m-redhat-font` to an element that wraps your application (ideally `<html>` or `<body>`) to adopt the CSS changes that introduce the Red Hat fonts into PatternFly.


## Tree shaking

Ensure optimization.sideEffects is set to true within your Webpack config:
```JS
optimization: {
  sideEffects: true
}
```

Use ESM module imports to enable tree shaking with no additional setup required.
```JS
import { TimesIcon } from '@patternfly/react-icons';
```

To enable tree shaking with named imports for CJS modules, utilize [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports) and update a babel.config.js file to utilize the plugin: 
```JS
require.extensions['.css'] = () => undefined;
const components = require('@patternfly/react-core/dist/js/components');
const beta = require('@patternfly/react-core/dist/js/beta');
const layouts = require('@patternfly/react-core/dist/js/layouts');

module.exports = {
  presets: ["@babel/preset-react"],
  plugins: [
    [
      "transform-imports",
      {
        "@patternfly/react-core": {
          transform: (importName, matches) => {
            let res = '@patternfly/react-core/dist/js/';
            if (components[importName]) {
              res += 'components';
            } else if (beta[importName]) {
              res += 'beta';
            } else if (layouts[importName]) {
              res += 'layouts';
            }

            res += `/${importName}/${importName}.js`;
            return res;
          },
          preventFullImport: true,
          skipDefaultConversion: true
        }
      }
    ]
  ]
}
```
