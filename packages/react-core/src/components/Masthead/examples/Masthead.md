---
id: Masthead
section: components
cssPrefix: pf-v6-c-masthead
propComponents: ['Masthead', 'MastheadToggle', 'MastheadMain', 'MastheadBrand', MastheadLogo, 'MastheadContent']
---

import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import pfIcon from '../../assets/PF-HorizontalLogo-Color.svg';

To maintain proper layout and formatting, a `<Masthead>` should contain both a `<MastheadMain>` and `<MastheadContent>` component.

Mastheads contain the `<MastheadMain>` that wraps a `<PageToggleButton>` and `<MastheadBrand>`. The `<MastheadBrand>` wraps `<MastheadLogo>`. The masthead also contains the page's header toolbar within `<MastheadContent>`.

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

### Custom logo component

In addition to being able to pass a string to the `component` property of `MastheadLogo`, you can provide more fine-tuned customization by passing a callback that returns a component.


```ts file="./MastheadLogoCustomComponent.tsx"
```

## Using router links

Router links can be used for in-app linking in React environments to prevent page reloading. To use a `Link` component from a router package, you can follow our [custom logo component example](#custom-logo-component) and pass a callback to the `component` property of the `MastheadLogo`:

```nolive
<MastheadLogo component={(props) => <Link {...props} to="#" />}>
  <Brand ...brandProps />
</MastheadLogo>
```