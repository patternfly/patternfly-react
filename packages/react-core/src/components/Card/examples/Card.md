---
id: Card
section: components
cssPrefix: pf-c-card
propComponents: ['Card', 'CardActions', 'CardHeader', 'CardHeaderMain', 'CardTitle', 'CardBody', 'CardFooter', 'CardExpandableContent']
ouia: true
---

import pfLogo from './pfLogo.svg';
import pfLogoSmall from './pf-logo-small.svg';


## Examples 

### Basic cards

Basic cards typically have a `<CardTitle>`, `<CardBody>` and `<CardFooter>`. You may omit these components as needed, but it is recommended to at least include a `<CardBody>` to provide details about the card item.

```ts file='./CardBasic.tsx'
```

### Modifiers

You can further modify the styling of the card's content by using the properties in the following example. In the example, you can enable each modifier by selecting its respective checkbox.

Most modifiers can be used in combination with each other, with the exception of `isCompact` and `isLarge`, since they are contradictory.

```ts file='./CardWithModifiers.tsx'
```

| Modifier | Description |
| --- | --- |
| isCompact | Modifies the card to include compact styling. Should not be used with isLarge. |
| isFlat | Modifies the card to include flat styling. |
| isRounded | Modifies the card to include rounded border styling. |
| isLarge | Modifies the card to be large. Should not be used with isCompact. |
| isFullHeight | Modifies the card so that it fills the total available height of its container. |
| isPlain | Modifies the card to include plain styling, which removes the border and background. | 


### Header images and actions

You can include header images using `<Brand>` within `<CardHeaderMain>` and you can include header actions within `<CardActions>`.

```ts file='./CardWithImageAndActions.tsx'
```

### Title inline with images and actions

Moving `<CardTitle>` within the `CardHeader` component will style it in line with any images or actions.

```ts file='./CardHeaderInCardHead.tsx'
```

### Only actions in card head (no header/footer)

You may place `<CardActions>` in `<CardHeader>` even if you're only using `<CardBody>`.

```ts file='./CardOnlyActionsInCardHead.tsx'
```

### With HTML heading element

You may use the `component` property to place the card's title within an HTML heading element.

```ts file='./CardWithHeadingElement.tsx'
```

### With multiple body sections

You may use multiple body sections to visually separate different sections of content.

```ts file='./CardWithMultipleBodySections.tsx'
```

### With a body section that fills

Use the `isFilled` property to let the body content fill the height of the card.

```ts file='./CardWithBodySectionFills.tsx'
```

### Selectable cards

Selectable cards can only be selected one at a time, and are intended for use with [primary-detail layout](/demos/primary-detail).

```ts file='./CardSelectable.tsx'
```

### Legacy selectable cards

The following example shows a legacy implementation of selectable cards. This example uses the `isSelectable` property instead of `isSelectableRaised`, which is the current recommendation for implementation. `isSelectable` applies selectable styling, but does not apply raised styling on hover and selection the way that `isSelectableRaised` does.

```ts file='./CardLegacySelectable.tsx'
```

### Selectable card accessibility features

The following cards demonstrate how the `hasSelectableInput` and `onSelectableInputChange` properties improve accessibility for selectable cards.

The first card sets `hasSelectableInput` to true, which renders a checkbox input that is only visible to, and navigable by, screen readers. This input communicates to assistive technology users that a card is selectable, and if so, it communicates the current selection state as well.

By default, this input will have an aria-label that corresponds to the `<CardTitle>`. If this isn't defined, then you must pass a custom aria-label using the `selectableInputAriaLabel` property.

The first card passes an onchange callback to `onSelectableInputChange` in order to enable the selection/deselection of the associated card via checkbox input.

The second card does not set `hasSelectableInput` to true, so neither the input nor the selection state is communicated to users of assistive technologies. 

We recommend navigating this example using a screen reader to best understand both cards.

```ts file='./CardSelectableA11yHighlight.tsx'
```

### Expandable cards

A card can be made expandable using the `isExpanded` property. In the collapsed state, only the card header is shown, and the user can click the caret to view the rest of the card content. 

The hidden content should be contained within the `CardExpandableContent` component.

```ts file='./CardExpandable.tsx'
```

### Expandable with icon

An image can also be included in the card header prior to expansion.

```ts file='./CardExpandableWithIcon.tsx'
```