---
id: Content
section: components
cssPrefix: pf-v6-c-content
propComponents: ['Content',]
---

The `<Content>` component provides simple, built-in styling for putting common blocks of HTML elements together. It establishes the block of content and styling within it for the elements listed in the `component` property(`h1` through `h6`, `hr`, `p`, `a`, `small`, `blockquote`, and `pre`).

You cannot nest other components within `<Content>`, and doing so can cause styling overrides or other conflicts. Instead, you can use the `<Content>` component's properties to achieve the same results.

For example, rather than nesting the `<List>` and `<Title>` components within `<Content>`, you should pass `component="h1"` into the `<Content>` component. Similarly, when you need to add a divider , rather than passing in a separate `<Divider>` component, you should utilize the `hr` property that `<Content>` supports, which will be styled as a divider.

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

 Html elements wrapped by `<Content>` are styled by the Content component.

### Wrapped in TextContent

```ts file="./ContentWrapper.tsx"

```

### Link and visited link

```ts file="./ContentVisited.tsx"

```
