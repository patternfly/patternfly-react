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

## Examples

### Variations

Each button variant has a particular function and should be implemented consistently across products.


```ts file="./ButtonVariations.tsx"
```

| Variation | Description|
| --- | ---|
| Primary | A primary button is the most prominent button on a page, used for the most important call to action on a page.|
| Secondary | Secondary buttons are buttons with less visual prominence than primary buttons. Use secondary buttons for general actions on a page, that don’t require as much emphasis as primary button actions. |
| Danger Secondary | If secondary buttons include destructive actions, use a dangery secondary button to indicate this risk.|
| Tertiary | Tertiary buttons are one the least visually prominent buttons and are designed to be less striking than a primary or secondary button, while still retaining a classic button format.  |
| Danger | Danger buttons are the most prominent of all the button options. Use danger buttons for actions a user can take that are potentially destructive or difficult/impossible to undo, like deleting or removing user data. |
| Warning | Warning buttons should be used when an action may chage an important setting or behavior, but not in a destructive or irreversible way. |
| Link | Links buttons are labeled buttons with no background or border. Link buttons can be used for actions that may not need as much emphasis, navigate users to another page within the same window, and/or avigate users to an external page. |
| External Link | ?|
| Inline Link | Inline text can be used as a link button.|
| Danger Link | Danger link are text based, but convey the same urgency as danger buttons.|

### Disabled

Disable buttons when the action cannot be completed. Every button variant can be disabled.

```ts file="./ButtonDisabled.tsx"
```

### Aria disabled

Aria disabled buttons are similar to normal disabled buttons, but can be focused so that a user may select the button using a keyboard. Every button variant can be aria disabled.

```ts file="./ButtonAriaDisabled.tsx"
```

### Aria disabled button with tooltip

Aria disabled buttons can support tooltips.

```ts file="./ButtonAriaDisabledTooltip.tsx"
```

### Aria disabled link as button with tooltip

Aria disabled buttons can operate as links, which support tooltips.

```ts file="./ButtonAriaDisabledLinkTooltip.tsx"
```

### Links as buttons

Buttons that link to another resource may take the form of primary, secondary, tertiary, or link variants.

```ts file="./ButtonLinks.tsx"
```

### Inline link as span

Inline links should be a span so that it wraps inline with surrounding text. 

```ts file="./ButtonInlineSpanLink.tsx"
```

### Block level

Block level buttons span the full width of the parent element. 

```ts file="./ButtonBlock.tsx"
```

### Types

```ts file="./ButtonTypes.tsx"
```

### Small

Primary, secondary. tertiary, danger, and warning button variants can be made smaller.

```ts file="./ButtonSmall.tsx"
```

### Call to action

Call To Action (CTA) buttons and links can be used to direct users to complete an action. CTA buttons support primary, secondary, tertiary, and link button variants. 

```ts file="./ButtonCallToAction.tsx"
```

### Progress

Progress indicators can be added to buttons to identify that an action is in progress after a click. 

```ts file="./ButtonProgress.tsx"
```

### Router link

Router links can be used for in-app linking in React environments to prevent page reloading.

```ts file="./ButtonRouterLink.tsx"
```

