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

You can further modify the styling of the card's content by using the properties outlined below. In this example, you can enable each modifier by selecting its respective checkbox.

Most modifiers can be used in combination with each other, except for `isCompact` and `isLarge`, since they are contradictory.

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

You can include header images within `<CardHeaderMain>` and header actions within `<CardActions>`. The following example includes an image using the [Brand](/components/brand) component, and also includes a kebab dropdown and a checkbox in `<CardActions>`.

`<CardActions>` includes the `hasNoOffset` property, which is `false` by default. When `hasNoOffset` is `false`, a negative margin is applied to help align default-sized card titles with `<CardActions>`. 

You may use `hasNoOffset` to remove this negative margin, which better aligns `<CardActions>` in implementations that use large card titles or tall header images, for example. 

Select the "actions hasNoOffset" checkbox in the example below to illustrate this behavior.

```ts file='./CardWithImageAndActions.tsx'
```

### Title inline with images and actions

Moving `<CardTitle>` within the `<CardHeader>` will style it inline with any images or actions.

```ts file='./CardHeaderInCardHead.tsx'
```

### Card header without title

`<CardActions>` can be placed in the card header even without a `<CardTitle>`.

Images can also be placed in the card header within `<CardHeaderMain>` without a `<CardTitle>`.

```ts file='./CardOnlyActionsInCardHead.tsx'
```

### With HTML heading element

You may use the `component` property to place the card's title within an HTML heading element.

```ts file='./CardWithHeadingElement.tsx'
```

### With multiple body sections

You may use multiple body sections to visually separate blocks of content.

```ts file='./CardWithMultipleBodySections.tsx'
```

### With a primary body section that fills

`<CardBody>` sections will fill the available height of the card when `isFilled` equals `{true}`, which is the default value. Set `isFilled` to `{false}` to disable this behavior for one or more body sections. The remaining available height of the card will be split between any `<CardBody>` section that does not set `isFilled` to `{false}`.

A common use case of this is to set all but one body section to `isFilled={false}` so that a primary body section fills the available space of the card as seen in the example below. This example has 3 `<CardBody>` sections, two of which set `isFilled` to `{false}`. The third `<CardBody>` fills the remaining height of the card. 

```ts file='./CardWithBodySectionFills.tsx'
```

### Selectable cards

Selectable cards can only be selected one at a time, and are intended for use with [primary-detail layout](/demos/primary-detail).

```ts file='./CardSelectable.tsx'
```

### Legacy selectable cards

The following example shows a legacy implementation of selectable cards. This example uses the `isSelectable` property instead of `isSelectableRaised`, which is the current recommendation for implementation. `isSelectable` applies selectable styling, but does not apply raised styling on hover and selection as `isSelectableRaised` does.

```ts file='./CardLegacySelectable.tsx'
```

### Selectable card accessibility features

The following cards demonstrate how the `hasSelectableInput` and `onSelectableInputChange` properties improve accessibility for selectable cards.

The first card sets `hasSelectableInput` to true, which renders a checkbox input that is only visible to, and navigable by, screen readers. This input communicates to assistive technology users that a card is selectable, and if so, also communicates the current selection state.

By default, this input will have an aria-label that corresponds to the `<CardTitle>`. If this isn't defined, then you must pass a custom aria-label using the `selectableInputAriaLabel` property.

The first card passes an onChange callback to `onSelectableInputChange` to enable the selection/deselection of the associated card via checkbox input.

The second card does not set `hasSelectableInput` to true, so neither the input nor the selection state is communicated to users of assistive technologies. 

We recommend navigating this example using a screen reader to best understand both cards.

```ts file='./CardSelectableA11yHighlight.tsx'
```

### Expandable cards

A card can be made expandable using the `isExpanded` property. In the collapsed state, only the card header is shown, and the user can click the caret to view the rest of the card content. 

Place any content that you want to be hidden within the `<CardExpandableContent>` component.

```ts file='./CardExpandable.tsx'
```

### Expandable with icon

An image can be placed in the card header to show users an icon beside the expansion caret.

```ts file='./CardExpandableWithIcon.tsx'
```
