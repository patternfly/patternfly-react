---
id: Card
section: components
cssPrefix: pf-v6-c-card
propComponents:
  [
    'Card',
    'CardHeader',
    'CardHeaderActionsObject',
    'CardHeaderSelectableActionsObject',
    'CardTitle',
    'CardBody',
    'CardFooter',
    'CardExpandableContent'
  ]
ouia: true
---

import pfLogo from '../../assets/PF-HorizontalLogo-Color.svg';
import pfLogoSmall from '../../assets/PF-IconLogo.svg';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';

## Examples

### Basic cards

Basic cards typically have a `<CardTitle>`, `<CardBody>` and `<CardFooter>`. You may omit these components as needed, but it is recommended to at least include a `<CardBody>` to provide details about the card item.

```ts file='./CardBasic.tsx'

```

### Secondary cards

You can apply secondary background color styling to a card by setting the `variant` property to `secondary`.

```ts file='./CardSecondary.tsx'

```

### Modifiers

You can further modify the styling of the card's content by using the properties outlined below. In this example, you can enable each modifier by selecting its respective checkbox.

Most modifiers can be used in combination with each other, except for `isCompact` and `isLarge`, since they are contradictory.

```ts file='./CardWithModifiers.tsx'

```

| Modifier     | Description                                                                          |
| ------------ | ------------------------------------------------------------------------------------ |
| isCompact    | Modifies the card to include compact styling. Should not be used with isLarge.       |
| isLarge      | Modifies the card to be large. Should not be used with isCompact.                    |
| isFullHeight | Modifies the card so that it fills the total available height of its container.      |
| isPlain      | Modifies the card to include plain styling, which removes the border and background. |

### Header images and actions

You can include header actions with the `actions` property of `<CardHeader>` . The following example includes an image using the [Brand](/components/brand) component, and also includes a kebab dropdown and a checkbox in `<CardHeader>` actions.

The `actions` property for `<CardHeader>` includes the `hasNoOffset` property, which is `false` by default. When `hasNoOffset` is `false`, a negative margin is applied to help align default-sized card titles with card actions.

You may use `hasNoOffset` to remove this negative margin, which better aligns card actions in implementations that use large card titles or tall header images, for example.

Select the "actions hasNoOffset" checkbox in the example below to illustrate this behavior.

```ts file='./CardWithImageAndActions.tsx'

```

### Title inline with images and actions

Moving `<CardTitle>` within the `<CardHeader>` will style it inline with any images or actions.

```ts file='./CardHeaderInCardHead.tsx'

```

### Card header without title

Card actions can be placed in the card header even without a `<CardTitle>`.

Images can also be placed in the card header without a `<CardTitle>`.

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

### Selectable

A selectable card can be selected by clicking anywhere within the card.

You must avoid rendering any other interactive content within the `<Card>` when it is meant to be selectable only. Refer to our [actionable and selectable example](#clickable-and-selectable-cards) if you need a card that is both selectable and has other interactive, actionable content.

```ts file='./CardSelectable.tsx'

```

### Single selectable

When a group of single selectable cards are related, you must pass the same `name` property to each card's `selectableActions` property.

```ts file='./CardSingleSelectable.tsx'

```

### Actionable

An actionable card can perform an action or navigate to a link by clicking anywhere within the card. To open a link in a new tab or window, pass the `isExternalLink` property to `selectableActions`.

You can pass the `isClicked` property to `<Card>` to convey that a card is the currently clicked one, such as when clicking a card would open a [primary-detail view](/patterns/primary-detail). This must not be used simply for "selection" of a card, and you should instead use our [selectable card](#selectable) or [single selectable card](#single-selectable).

When a card is meant to be actionable only, you must avoid rendering any other interactive content within the `<Card>`, similar to selectable cards.

```ts file='./CardClickable.tsx'

```

### Actionable and selectable

A card can be selectable and have additional interactive content by passing both the `isClickable` and `isSelectable` properties to `<Card>`. The following example shows how the actionable functionality can be rendered anywhere within a selectable card.

When passing interactive content to an actionable and selectable card that is disabled, you should also ensure the interactive content is disabled as well, if applicable.

```ts file='./CardClickableSelectable.tsx'

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

### Card with dividers

Dividers can be placed between sections of the card.

```ts file='./CardWithDividers.tsx'

```

## Cards as tiles

Sets of selectable cards can be used as tiles, which are static options that users can select.

They can be either single selectable or multi selectable, by passing the `variant` property to the `selectableActions` object. You can also toggle the visibility of the radio or checkbox by passing the `isHidden` property to the `selectableActions` object.

### Single selectable tiles

To prevent users from selecting more than 1 tile in a set, set `variant` to "single" within the `selectableActions` object of `<CardHeader>`.

```ts file='./CardTile.tsx'

```

### Multi selectable tiles

To allow users to select more than 1 tile in a set, do not set `variant` within the `selectableActions` object of `<CardHeader>`.

```ts file='./CardTileMulti.tsx'

```
