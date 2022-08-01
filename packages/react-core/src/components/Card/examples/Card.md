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

Basic cards typically have a `<CardTitle>`, `<CardBody>` and `<CardFooter>`, though only a body is required. 

```ts file='./CardBasic.tsx'
```

### With no header

Omit `<CardTitle>` if a header is unnecessary. 

```ts file='./CardWithNoHeader.tsx'
```

### With no footer

Omit `<CardFooter>` if a footer is unnecessary.

```ts file='./CardWithNoFooter.tsx'
```

### Modifiers

You can further modify the styling of the card's content by using the following properties:

```ts file='./CardWithModifiers.tsx'
```

### Header variations

To help define the contents of a card, headers may contain images, a title, and an actions menu represented by a right-aligned kabob.

The `CardHeader` component allows the addition of these features by using the `CardHeaderMain` and `CardActions` subcomponents. 


### Title inline with images and actions

Moving `<CardTitle>` within the `CardHeader` component will style it inline with any images or actions.

```ts file='./CardHeaderInCardHead.tsx'
```

### With HTML heading element

You may use the `component` property to place the card's title within an HTML heading element.

```ts file='./CardWithHeadingElement.tsx'
```

### Images and actions

You can include header images using `<Brand>` within `<CardHeaderMain>` and you can include header actions within `<CardActions>`.

```ts file='./CardWithImageAndActions.tsx'
```

### Only actions in card head (no header/footer)

You may place `<CardActions>` in `<CardHeader>` even if you're only using `<CardBody>`.

```ts file='./CardOnlyActionsInCardHead.tsx'
```

### Footer variations

Use the `<CardFooter>` prop to provide additional information at the bottom of the card. This is an optional feature.

### Body variations

`<CardBody>` provides details about the item and can include any combination of static text and/or active content. This is a required feature. PatternFly supports a few different body variations, outlined below. 

### With only a body section

`<CardBody>` may be used on its own if `<CardTitle>` and `<CardFooter>` aren't needed. 

```ts file='./CardWithOnlyBodySection.tsx'
```

### With multiple body sections

You may use multiple body sections.

```ts file='./CardWithMultipleBodySections.tsx'
```

### With a body section that fills

Use the `isFilled` property to let the body content fill the height of the card.

```ts file='./CardWithBodySectionFills.tsx'
```

### Selectable cards

PatternFly supports two types of selectable cards: 

1. Multi-select cards, which support multiple selections via a checkbox. 

2. Selectable cards, which can only be selected one at a time.

```ts file='./CardSelectable.tsx'
```

### Legacy 

PatternFly currently supports an updated version of selectable cards, but an example of our legacy selectable card is included below.

```ts file='./CardLegacySelectable.tsx'
```

### Accessibility features

The following cards demonstrate how the `hasSelectableInput` and `onSelectableInputChange` properties improve accessibility for selectable cards.

The first card sets `hasSelectableInput` to true, which renders a checkbox input that is only visible to, and navigable by, screen readers. This input communicates to assistive technology users that a card is selectable, and if so, it communicates the current selection state as well.

By default this input will have an aria-label that corresponds to the `<CardTitle>`. If this isn't defined, then you must pass a custom aria-label using the `selectableInputAriaLabel` property.

The first card passes an onchange callback to `onSelectableInputChange` in order to enable the selection/deselection of the associated card via checkbox input.

The second card does not set `hasSelectableInput` to true, so neither the input or the selection state is not visible to screen readers.

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