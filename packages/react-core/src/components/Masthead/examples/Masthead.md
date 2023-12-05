---
id: Masthead
section: components
cssPrefix: pf-v5-c-masthead
propComponents: ['Masthead', 'MastheadToggle', 'MastheadMain', 'MastheadBrand', 'MastheadContent']
---

import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import { Link } from '@reach/router';
import pfIcon from '../../assets/PF-HorizontalLogo-Color.svg';

`Masthead` should contain the following components to maintain proper layout and formatting: `MastheadToggle`, `MastheadMain`, and `MastheadContent`.

`MastheadMain` represents the smaller area taken up by a logo, and will typically contain a `MastheadBrand`. `MastheadContent` represents the main portion of the masthead area and will typically contain a `Toolbar` or other menu-like content such as `Dropdown`.

## Examples

### Basic

```ts file="./MastheadBasic.tsx"
```

### Basic with mixed content

```ts file="./MastheadBasicMixedContent.tsx"
```

### Display inline

```ts file="./MastheadDisplayInline.tsx"
```

### Display stack

```ts file="./MastheadDisplayStack.tsx"
```

### Display stack, display inline responsive

```ts file="./MastheadDisplayStackInlineResponsive.tsx"
```

### Inset

```ts file="./MastheadInsets.tsx"
```

### With icon router link

```ts file="./MastheadIconRouterLink.tsx"
```
