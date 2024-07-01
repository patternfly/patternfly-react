---
id: Content
section: components
cssPrefix: pf-v5-c-content
propComponents: ['TextContent', 'Text', 'TextList', 'TextListItem']
---

The `<Text>` component provides simple, built-in styling for putting common blocks of HTML elements together. It establishes the block of content and styling within it for the elements listed in the `component` property(`h1` through `h6`, `p`, `a`, `small`, `blockquote`, and `pre`), as well as the text component suite `<TextList>`, and `<TextListItem>`. `TextContent` may be used as a container for the text components, but nesting them inside `<TextContent>` is not required.

You cannot nest other components within `<Text>`, and doing so can cause styling overrides or other conflicts. Instead, you can use the `<Text>` component's properties to achieve the same results.

For example, rather than nesting the `<List>` and `<Title>` components within `<Text>`, you should pass `component="h1"` into the `<TextList>` and `<Text>` components. Similarly, when you need to add a divider , rather than passing in a separate `<Divider>` component, you should utilize the `hr` property that `<Text>` supports, which will be styled as a divider.

## Examples

### Headings

```ts file="./ContentHeadings.tsx"

```

### Body

```ts file="./ContentBody.tsx"

```

### Unordered list

```ts file="./ContentUnorderedList.tsx"

```

### Ordered list

```ts file="./ContentOrderedList.tsx"

```

### Plain list

```ts file="./ContentPlainList.tsx"

```

### Description list

```ts file="./ContentDescriptionList.tsx"

```

Text components such as Text, TextList, TextListItem can be placed within a TextContent to provide styling for html elements, and additional styling options applied to the children.

### Wrapped in TextContent

```ts file="./ContentWrapper.tsx"

```

### Link and visited link

```ts file="./ContentVisited.tsx"

```
