---
id: Truncate
section: components
cssPrefix: pf-v6-c-truncate
propComponents: [Truncate]
---

import './TruncateExamples.css';

## Examples

The default behavior of the `Truncate` component is to truncate based on whether the content can fit within the width of its parent container, and to prevent text from wrapping. The following examples that use this default behavior render the `<Truncate>` component inside a resizable container, allowing you to see how the parent container width affects the truncation.

### Default

By default content will be truncated at its end when it cannot fit entirely inside its parent container.

```ts file="./TruncateDefault.tsx"

```

### Middle

When passing a `position` property with a value of "middle", the position of the truncation will change based on the parent container's width and the amount of `trailingNumChars` passed in. The `trailingNumChars` will always be displayed, while the rest of the content will be truncated based on the parent container width.

```ts file="./TruncateMiddle.tsx"

```

### Start

You can truncate content at its start by passing the `position` property with a value of "start". This can be useful if you have several strings to truncate that have similar text at the start, but unique text at the end that you want to have visible.

```ts file="./TruncateStart.tsx"

```

### With custom tooltip position

You can customize the position of the `<Tooltip>` that is rendered by passing in the `tooltipPosition` property. The following example overrides the default "top" position with a "bottom" position.

```ts file="./TruncateCustomTooltipPosition.tsx"

```

### Based on max characters

Rather than observing container width, you can have truncation be based on a maximum amount of characters that should always be displayed via the `maxCharsDisplayed` property. While the content's parent container width will not have an affect on whether truncation occurs, it will affect whether the content wraps. This property must be set to a value larger than `0`, otherwise the component will fall back to observing container width.

Truncating based on a maximum amount of characters will truncate the content at the end by default. When the `position` property is set to "middle", the truncation will split the content as evenly as possible, providing a more "true middle" truncation.

```ts file="./TruncateMaxChars.tsx"

```

### With links

To truncate link text, you can pass the `href` property in.

```ts file="./TruncateLinks.tsx"

```
