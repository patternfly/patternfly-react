---
id: Text
section: components
cssPrefix: pf-v5-c-content
propComponents: ['TextContent', 'Text', 'TextList', 'TextListItem']
---

The `<Text>` component provides simple, built-in styling for putting common blocks of HTML elements together. It establishes the block of content and styling within it for the elements listed in the `component` property(`h1` through `h6`, `p`, `a`, `small`, `blockquote`, and `pre`), as well as the text component suite (`<TextContent>`, `<TextList>`, and `<TextListItem>`).

You cannot nest other components within `<Text>`, and doing so can cause styling overrides or other conflicts. Instead, you can use the `<Text>` component's properties to achieve the same results.

For example, rather than nesting the `<List>` and `<Title>` components within `<Text>`, you should pass `component="h1"` into the `<TextList>` and `<Text>` components. Similarly, when you need to add a divider , rather than passing in a separate `<Divider>` component, you should utilize the `hr` property that `<Text>` supports, which will be styled as a divider.

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
