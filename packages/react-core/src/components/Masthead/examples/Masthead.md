---
id: Masthead
section: components
cssPrefix: pf-v6-c-masthead
propComponents: ['Masthead', 'MastheadToggle', 'MastheadMain', 'MastheadBrand', MastheadLogo, 'MastheadContent']
---

import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import { Link } from '@reach/router';
import pfIcon from '../../assets/PF-HorizontalLogo-Color.svg';

To maintain proper layout and formatting, a `<Masthead>` should contain both a `<MastheadMain>` and `<MastheadContent>` component.

 Mastheads contain the `<MastheadMain>` that wraps a `<PageToggleButton>` and `<MastheadBrand>`. The `<MastheadBrand>` wraps `<MastheadLogo>`. The masthead also contains  the page's header toolbar within `<MastheadContent>`.

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
