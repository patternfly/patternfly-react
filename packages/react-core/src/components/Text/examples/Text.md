---
id: Text
section: components
cssPrefix: pf-v5-c-content
propComponents: ['TextContent', 'Text', 'TextList', 'TextListItem']
---

The `Text` component provides simple, built-in styling for putting common blocks of HTML elements together. It establishes the block of content and styling within it for the elements listed in the `component` property(`h1` through `h6`, `p`, `a`, `small`, `blockquote` and `pre`), as well as the text component suite (`TextContent`, `TextList`, `TextListItem`).

Other components are not supported as children of `Text`, and may cause styling overrides or other conflicts. For example, the `List` and `Title` components are meant for more complex use cases and should not be nested inside `Text` for simple blocks - `TextList` and `Text` with the `component="h1"` property should be used instead. Instead of `Divider`, `Text` expects to contain an `hr` which it styles as a divider.

## Examples

### Headings

```ts file="./TextHeadings.tsx"

```

### Body

```ts file="./TextBody.tsx"

```

Text components such as Text, TextList, TextListItem need to be placed within a TextContent

### Unordered list

```ts file="./TextUnorderedList.tsx"

```

### Ordered list

```ts file="./TextOrderedList.tsx"

```

### Plain list

```ts file="./TextPlainList.tsx"

```

### Description list

```ts file="./TextDescriptionList.tsx"

```

### Visited

```ts file="./TextVisited.tsx"

```
