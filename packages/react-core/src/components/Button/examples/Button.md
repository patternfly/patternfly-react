---
id: Button
section: components
cssPrefix: pf-v6-c-button
propComponents: ['Button', 'BadgeCountObject']
ouia: true
---

import { Fragment, useState } from 'react';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import UploadIcon from '@patternfly/react-icons/dist/esm/icons/upload-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';

## Examples

### Variant examples

PatternFly supports several button styling variants to be used in different scenarios as needed. The following button variants can be assigned using the `variant` property.

```ts file="./ButtonVariations.tsx"

```

| Variant   | Description                                                                                                                                                                                                                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary   | Primary buttons are the most visually prominent variant. Use for the most important call to action.                                                                                                                                                                                                      |
| Secondary | Secondary buttons are less visually prominant than primary buttons. Use for general actions on a page that require less emphasis than primary buttons.                                                                                                                                                   |
| Tertiary  | Tertiary buttons are the least visually prominent variant. Use to retain a classic button format with less emphasis than primary or secondary buttons.                                                                                                                                                   |
| Danger    | Danger buttons may be used for actions that are potentially destructive or difficult/impossible to undo. Danger is an independent variant, but all button variants may use the the `isDanger` property to apply similar styling.                                                                         |
| Warning   | Warning buttons may be used for actions that change an important setting or behavior, but not in a destructive or irreversible way.                                                                                                                                                                      |
| Link      | Links are labeled, but have no background or border. Use for actions that require less emphasis, actions that navigate users to another page within the same window, and/or actions that navigate to external pages in a new window. Links may be placed inline with text using the `isInline` property. |
| Plain     | Plain buttons have no styling and are intended to be labeled with icons.                                                                                                                                                                                                                                 |
| Control   | Control buttons can be labeled with text or icons. Primarily intended to be paired with other controls in an [input group](/components/input-group).                                                                                                                                                     |
| Stateful  | Stateful buttons are ideal for displaying the state of notifications. They have 3 states: `read`, `unread` and `attention`.                                                                                                                                                                              |

### Disabled buttons

To indicate that an action is currently unavailable, all button variations can be disabled using the `isDisabled` property.

```ts file="./ButtonDisabled.tsx"

```

### Small buttons

To fit into tight spaces, primary, secondary, tertiary, danger, and warning button variations can be made smaller using the `"sm"` value for the `size` property.

```ts file="./ButtonSmall.tsx"

```

### Call to action (CTA) buttons

CTA buttons and links direct users to complete an action. Primary, secondary, tertiary, and link button variants can be styled as CTAs using the `"lg"` value for the `size` property.

```ts file="./ButtonCallToAction.tsx"

```

### Block level buttons

Block level buttons span the full width of the parent element and can be enabled using the `isBlock` property.

```ts file="./ButtonBlock.tsx"

```

### Progress indicators

Progress indicators can be added to buttons to identify that an action is in progress after a click.

```ts file="./ButtonProgress.tsx"

```

### Links as buttons

Buttons that link to another resource may take the form of primary, secondary, tertiary, or link variants. Use `component="a"` and an `href` property to designate the button's target link.

```ts file="./ButtonLinks.tsx"

```

### Inline link as span

Inline links should use `component="span"` and the `isInline` property to wrap inline with surrounding text.

```ts file="./ButtonInlineSpanLink.tsx"

```

### Custom component

In addition to being able to pass a string to the `component` property, you can provide more fine-tuned customization by passing a callback that returns a component.

```ts file="./ButtonCustomComponent.tsx"

```

### Aria-disabled examples

[Accessible Rich Internet Applications (ARIA)](https://www.w3.org/WAI/standards-guidelines/aria/) is a set of roles and attributes specified by the World Wide Web Consortium. ARIA defines ways to make web content and web applications more accessible to people with disabilities.

Buttons that are aria-disabled are similar to normal disabled buttons, except they can receive focus. Every button variant can be aria-disabled using the `isAriaDisabled` property.

Unlike normal disabled buttons, aria-disabled buttons can support tooltips. Furthermore, aria-disabled buttons can operate as links, which also support tooltips.

```ts file="./ButtonAriaDisabled.tsx"

```

### Button with count

Buttons can display a `count` in the form of a badge to indicate some value or number by passing in the `countOptions` prop as a `BadgeCountObject` object. The `BadgeCountObject` object will handle `count`, `isRead`, and `className` props for the badge count.

```ts file="./ButtonWithCount.tsx"

```

### Plain with no padding

To display a plain/icon button inline with text, use `noPadding` prop in addition to `variant="plain"`.

```ts file="./ButtonPlainHasNoPadding.tsx"

```

### Stateful

Stateful buttons are ideal for displaying the state of notifications. Use `variant="stateful"` alongside with the `state` property, which can have these 3 values: `read`, `unread` (used as default) and `attention` (which means unread and requires attention).

```ts file="./ButtonStateful.tsx"

```

### Circle buttons

Pass `isCircle` to a button to modify its styling from simply rounded corners to complete circles. Circle buttons are intended for buttons that only contain an icon and adequate accessible naming.

```ts file="./ButtonCircle.tsx"

```

## Animated examples

The following `<Button>` implementations have animations built into them. When using one of the following implementations, the `icon` property will be overridden due to the animations needing specific icons internally.

### Favorite

You can pass both the `isFavorite` and `variant="plain"` properties into the `<Button>` to create a favorite button. Passing the `isFavorited` property will determine the current favorited state and update styling accordingly.

```ts file = "./ButtonFavorite.tsx"

```

### Settings

For a "settings" button with animations on hover and focus, you can pass the `isSettings` property into either a `variant="plain"` or `variant="control"` button.

```ts file="./ButtonSettings.tsx"

```

### Hamburger

For a "hamburger" button (`fa-bars`) that will animate based on the `hamburgerVariant` property, you can pass the `isHamburger` property. This will render the default icon for a hamburger button, and updating the `hamburgerVariant` property with a value of either "expand" or "collapse" will change the icon accordingly with an animation on hover and focus.

When used within a PatternFly `<Masthead>`, the animations and icon updates will occur automatically. See one of our [full screen page demos](/components/page/react-demos) to see this in action.

```ts file="./ButtonHamburger.tsx"

```

## Using router links

Router links can be used for in-app linking in React environments to prevent page reloading. To use a `Link` component from a router package, you can follow our [custom component example](#custom-component) and pass a callback to the `component` property of the `Button`:

```nolive
<Button variant="link" component={(props: any) => <Link {...props} to="#" />}>
  Router link
</Button>
```
