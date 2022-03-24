---
id: Card
section: components
cssPrefix: pf-c-card
propComponents: ['Card', 'CardHeader', 'CardHeaderMain', 'CardTitle', 'CardBody', 'CardFooter', 'CardExpandableContent']
ouia: true
---

import pfLogo from './pfLogo.svg';
import pfLogoSmall from './pf-logo-small.svg';

## Examples

### Basic

```ts file='./CardBasic.tsx'
```

### With modifiers

```ts file='./CardWithModifiers.tsx'
```

### With image and actions

```ts file='./CardWithImageAndActions.tsx'
```

### Header in card head

```ts file='./CardHeaderInCardHead.tsx'
```

### Only actions in card head (no header/footer)

```ts file='./CardOnlyActionsInCardHead.tsx'
```

### Only image in card head

```ts file='./CardOnlyImageInCardHead.tsx'
```

### With no footer

```ts file='./CardWithNoFooter.tsx'
```

### With no header

```ts file='./CardWithNoHeader.tsx'
```

### With only a body section

```ts file='./CardWithOnlyBodySection.tsx'
```

### With multiple body sections

```ts file='./CardWithMultipleBodySections.tsx'
```

### With only a body section that fills

```ts file='./CardWithBodySectionFills.tsx'
```

### Selectable

Note: The listbox role on the containing div of this examples is needed because the cards have the option role via their `isOption` prop, and options are required to be inside a listbox. See the [option role documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/option_role) from MDN for more information.

The cards need to be options in order to effectively communicate that they're selectable (and what their current selection state is) for those using assistive technologies (such as screen readers).

```ts file='./CardSelectable.tsx'
```

### With heading element

```ts file='./CardWithHeadingElement.tsx'
```

### Expandable

```ts file='./CardExpandable.tsx'
```

### Expandable with icon

```ts file='./CardExpandableWithIcon.tsx'
```

### Legacy selectable

```ts file='./CardLegacySelectable.tsx'
```
