---
id: Brand
section: components
cssPrefix: null
propComponents: ['Brand']
---

import './Brand.css';
import pfLogo from '../../assets/PF-HorizontalLogo-Color.svg';
import pfLogoDark from '../../assets/PF-HorizontalLogo-Reverse.svg';
import pfLogoSm from '../../assets/PF-IconLogo-color.svg';
import pfLogoSmDark from '../../assets/PF-IconLogo-Reverse.svg';

## Examples

The brand component does not have any built-in theme support. If a brand should be dynamically styled, you must manually set up the necessary logic on your own.

These examples adjust styling when the PatternFly website is toggled between the light and dark theme.

### Basic

```ts file="./BrandBasic.tsx"
```

### Responsive

Passing `<source>` elements as children to `Brand` will change the component from an `<img>` to a `<picture>` element. The `src` and `alt` properties should still be passed to populate the fallback `img` of the brand.

```ts file="./BrandResponsive.tsx"
```
