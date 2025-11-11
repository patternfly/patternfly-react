---
id: Flex
cssPrefix: pf-v6-l-flex
section: foundations-and-styles
subsection: layouts
propComponents: ['Flex', 'FlexItem']
---

import './flex.css';

## Flex basics

### Basic

```ts file="FlexBasic.tsx"

```

### Nesting

```ts file="FlexNesting.tsx"

```

### Nested with items

```ts file="FlexNestedItems.tsx"

```

### Spacing

The flex layout provides two ways of spacing its direct children.

- [Spacing system](#flex-spacing)
  - The spacing system applies a margin between the flex layout's direct children to create space between items along the main axis only. The benefit of the spacing system is that it allows for variable spacing between direct children. Use the spacing system when individual flex items along the main axis require a different spacer than sibling items.
- [Gap spacing](#flex-gap-spacing)
  - Gap spacing uses flex `gap` to space the flex layout's direct children, and can be applied to space rows (`row-gap`), columns (`column-gap`), or both (`gap`). The benefit of gap spacing is that item wrapping is improved and improved item spacing that works better with CSS flex's logical layout properties. E.g., spacing in RTL layouts that rely on logical properties is improved. Use the gap system when all direct children should use the same spacer for rows, columns, or both.
  - **Note** using `gap` along the main axis will override any other spacing applied using the spacing system.

### Flex spacing

### Individually spaced

```ts file="FlexIndividuallySpaced.tsx"

```

### Spacing xl

```ts file="FlexSpacingXl.tsx"

```

### Spacing none

```ts file="FlexSpacingNone.tsx"

```

### Flex gap spacing

### Row gap

```ts file="FlexRowGap.tsx"

```

### Column gap

```ts file="FlexColumnGap.tsx"

```

### Gap

```ts file="FlexGap.tsx"

```

### Flex layout modifiers

### Default layout

```ts file="FlexDefaultLayout.tsx"

```

### Inline

```ts file="FlexInline.tsx"

```

### Using canGrow

```ts file="FlexCanGrow.tsx"

```

### Adjusting width

```ts file="FlexAdjustingWidth.tsx"

```

### Specifying column widths

```ts file="FlexColumnWidths.tsx"

```

## Column layout modifiers

### Column layout

```ts file="FlexColumnLayout.tsx"

```

### Stacking elements

```ts file="FlexStackingElements.tsx"

```

### Nesting elements in columns

```ts file="FlexNestingInColumns.tsx"

```

## Responsive layout modifiers

### Switching between direction column and row

```ts file="FlexSwitchingColumnRow.tsx"

```

### Controlling width of text

```ts file="FlexControlTextWidth.tsx"

```

## Flex alignment

### Aligning right

```ts file="FlexAligningRight.tsx"

```

### Align right on single item

```ts file="FlexAlignRightSingleItem.tsx"

```

### Align right on multiple groups

```ts file="FlexAlignRightMultipleGroups.tsx"

```

### Align adjacent content

```ts file="FlexAlignAdjacentContent.tsx"

```

### Align self flex end

```ts file="FlexAlignSelfFlexEnd.tsx"

```

### Align self center

```ts file="FlexAlignSelfCenter.tsx"

```

### Align self baseline

```ts file="FlexAlignSelfBaseline.tsx"

```

### Align self stretch

```ts file="FlexAlignSelfStretch.tsx"

```

## Flex justification

### Justify content flex end

```ts file="FlexJustifyContentEnd.tsx"

```

### Justify content space between

```ts file="FlexJustifyContentSpaceBetween.tsx"

```

### Justify content flex start

```ts file="FlexJustifyContentFlexStart.tsx"

```

## Flex item order

### First last ordering

```ts file="FlexFirstLastOrder.tsx"

```

### Responsive first last ordering

```ts file="FlexResponsiveFirstLastOrder.tsx"

```

### Ordering

```ts file="FlexOrdering.tsx"

```

### Responsive ordering

```ts file="FlexResponsiveOrdering.tsx"

```

### Alternative components

```ts file="FlexAlternative.tsx"

```
