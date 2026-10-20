# @rh-felt/react-icons

PatternFly Icons as React Components.

## Usage

```tsx
import RhMicronsCloseIcon from  '@rh-felt/react-icons/dist/esm/icons/rh-microns-close-icon';

const closeIcon = <RhMicronsCloseIcon />;
```

For a list of the available icons please refer to the [Felt React docs](https://rh-felt-react-staging.surge.sh/icons)

## Styling icons

All icons from @rh-felt/react-icons have the HTML class `pf-v6-svg` applied and CSS styles applied via @rh-felt/react-styles.

If not using @rh-felt/react-icons in conjunction with @rh-felt/react-styles, then the following generic styles will need to be applied to the icons: `height="1em", style="vertical-align: -0.125em;" width="1em"`

If using @rh-felt/react-icons in conjunction with @rh-felt/react-core, icons can be further styled by wrapping an icon from
@rh-felt/react-icons in a PatternFly icon component.

## Adding icons

Icons for this package are generated from the `@fortawesome/free-solid-svg-icons` package.

If you have some custom icon defined by an SVG path the best way to add such icon to this repository is to add its path definition in the [customIcons.mjs](./scripts/icons/customIcons.mjs) file.

```JS
export default {
    // ... other icon defintions
    bigPlus: {width: 1024, height: 1024, svgPathData: 'M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z'}
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
import RhMicronsCloseIcon from  '@rh-felt/react-icons/dist/esm/icons/rh-microns-close-icon';
```

To enable tree shaking with named imports for CJS modules, utilize [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports) and update a babel.config.js file to utilize the plugin:

```JS
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "transform-imports",
      {
        "@rh-felt/react-icons": {
          transform: (importName, matches) => `@rh-felt/react-icons/dist/js/icons/${importName.split(/(?=[A-Z])/).join('-').toLowerCase()}`,
          preventFullImport: true
        }
      }
    ]
  ]
}
```

## Static SVGs

All icons are also available as static SVG files in `@rh-felt/react-icons/dist/static`. The static SVGs include all the same attributes as the React components (viewBox, class names, etc.) to ensure visual consistency.

Static SVGs are useful when you need to:
- Use icons in non-React contexts, such as static HTML
- Reference icons via URL or file path

### Usage

You can import or reference static SVG files directly:

```jsx
// In HTML
<img src="/icons/static/rh-microns-close-icon.svg" alt="Close" />

// In CSS
.close-icon {
  background-image: url('/icons/static/rh-microns-close-icon.svg');
}

// Direct file path
import RhMicronsCloseIcon from '@rh-felt/react-icons/dist/static/rh-microns-close-icon.svg';
```
