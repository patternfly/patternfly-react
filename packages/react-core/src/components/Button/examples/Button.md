---
id: Button
section: components
cssPrefix: pf-c-button
propComponents: ['Button']
ouia: true
---

import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';
import { Link } from '@reach/router';

## Variants

PatternFly supports several button styling variants to be used in different scenarios as needed. The following button variants can be assigned using the `variant` prop.

```ts file="./ButtonVariations.tsx"
```

| Variant | Description|
| --- | ---|
| Primary | Primary buttons are the most visually prominent variant. Use for the most important call to action.|
| Secondary | Secondary buttons are less visually prominant than primary buttons. Use for general actions on a page that require less emphasis than primary buttons. |
| Tertiary | Tertiary buttons are the least visually prominent variant. Use to retain a classic button format with less emphasis than primary or secondary buttons.  |
| Danger | Danger buttons may be used for actions that are potentially destructive or difficult/impossible to undo. Danger is an independent variant, but all button variants may use the the `isDanger` prop to apply similar styling. |
| Warning | Warning buttons may be used for actions that change an important setting or behavior, but not in a destructive or irreversible way. |
| Link | Links are labeled, but have no background or border. Use for actions that require less emphasis, actions that navigate users to another page within the same window, and/or actions that navigate to external pages in a new window. Links may be placed inline with text using the `isInline` prop.|
| Plain | Plain buttons have no styling and are intended to be labeled with icons. |
| Control | Control buttons can be labeled with text or icons. Primarily intended to be paired with other controls in an [input group](https://www.patternfly.org/v4/components/input-group). | 

### Disabled buttons

To indicate that an action is currently unavailable, all button variations can be disabled using the `isDisabled` prop.

```ts file="./ButtonDisabled.tsx"
```

### Progress indicators

Progress indicators can be added to buttons to identify that an action is in progress after a click. 

```ts file="./ButtonProgress.tsx"
```

### Small buttons

To fit into tight spaces, primary, secondary. tertiary, danger, and warning button variations can be made smaller using the `isSmall` prop.

```ts file="./ButtonSmall.tsx"
```

### Call to action (CTA) buttons

CTA buttons and links direct users to complete an action. Primary, secondary, tertiary, and link button variants can be styled as CTAs using the `isLarge` prop. 

```ts file="./ButtonCallToAction.tsx"
```

### Block level buttons

Block level buttons span the full width of the parent element and can be enabled using the `isBlock` prop.

```ts file="./ButtonBlock.tsx"
```

## Links 

### Links as buttons

Buttons that link to another resource may take the form of primary, secondary, tertiary, or link variants. Use `component="a"` and an `href` prop to designate the button's target link.

```ts file="./ButtonLinks.tsx"
```

### Inline link as span

Inline links should use `component="span"` and the `isInline` prop to wrap inline with surrounding text.

```ts file="./ButtonInlineSpanLink.tsx"
```

### Router link

Router links can be used for in-app linking in React environments to prevent page reloading.

```ts file="./ButtonRouterLink.tsx"
```

## Aria buttons

Accessible Rich Internet Applications (ARIA) is a set of roles and attributes specified by the [World Wide Web Consortium](https://www.w3.org/WAI/standards-guidelines/aria/). ARIA defines ways to make web content and web applications more accessible to people with disabilities.

### Aria disabled buttons

Buttons that are aria disabled are similar to normal disabled buttons, except they can receive focus. Every button variant can be aria disabled using the `isAriaDisabled` prop.

```ts file="./ButtonAriaDisabled.tsx"
```

### Aria disabled button with tooltip

Unlike normal disabled buttons, aria disabled buttons can support tooltips.

```ts file="./ButtonAriaDisabledTooltip.tsx"
```

### Aria disabled link as button with tooltip

Aria disabled buttons can operate as links, which also support tooltips.

```ts file="./ButtonAriaDisabledLinkTooltip.tsx"
```