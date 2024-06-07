# @patternfly/react-icons

PatternFly Icons as React Components.

## Usage 

```jsx
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

const closeIcon = <TimesIcon />;
```

For a list of the available icons please refer to the [PatternFly react docs](https://react-staging.patternfly.org/icons)

## Styling icons

All icons from @patternfly/react-icons have the HTML class `pf-v6-svg` applied and CSS styles applied via @patternfly/react-styles.

If not using @patternfly/react-icons in conjunction with @patternfly/react-styles, then the following generic styles will need to be applied to the icons: `height="1em", style="vertical-align: -0.125em;" width="1em"`

If using @patternfly/react-icons in conjunction with @patternfly/react-core, icons can be further styled by wrapping an icon from 
@patternfly/react-icons in a PatternFly icon component.

## Adding icons

Icons for this package are generated from the `@fortawesome/free-solid-svg-icons` package. To add more to what is generated, modify the [icons.js](./build/icons.js) file in the build folder.

If you have some custom icon defined by svg path the best way to add such icon to this repository is to add its path definition in [pfIcons.js](./build/pfIcons.js) file in the build folder.
```JS
module.exports = {
  pfIcons: {
    // ... other icon defintions
    bigPlus: {width: 1024, height: 1024, svgPathData: 'M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z'}
  }
}
```

## Tree shaking

Ensure optimization.sideEffects is set to true within your Webpack config:
```JS
optimization: {
  sideEffects: true
}
```

Use ESM module imports to enable tree shaking with no additional setup required.
```JS
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
```

To enable tree shaking with named imports for CJS modules, utilize [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports) and update a babel.config.js file to utilize the plugin:
```JS
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "transform-imports",
      {
        "@patternfly/react-icons": {
          transform: (importName, matches) => `@patternfly/react-icons/dist/js/icons/${importName.split(/(?=[A-Z])/).join('-').toLowerCase()}`,
          preventFullImport: true
        }
      }
    ]
  ]
}
```

