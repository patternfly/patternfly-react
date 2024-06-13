---
id: Content
section: components
cssPrefix: pf-v5-c-content
propComponents: ['Content']
---

The `<Content>` component provides simple, built-in styling for putting common blocks of HTML elements together. It establishes the block of content and styling within it for the elements listed in the `component` property - `h1` through `h6`, `p`, `a`, `small`, `blockquote`, `pre`, `hr`, list components (`ul`, `ol`, `dl`) and list items (`li`, `dt`, `dd`).

If you use <Content> without a component property, it will style all its child elements. If you want to style only a single element, e.g. `h1`, use `<Content component="h1">`.

To prevent styling issues, you should use `<Content>` component's properties instead of using seperate components. For example, rather than nesting the `<List>` and `<Title>` components within `<Content>`, you should use `<Content component="ul">` and `<Content component="h1">` or nest html elements within `<Content>`. Similarly, when you need to add a divider, rather than passing in a separate `<Divider>` component, you should use `<Content component="hr">`, which will be styled as a divider.

## Examples

### Content as a styling wrapper

```ts file="./ContentWrapper.tsx"

```

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

### Link and visited link

```ts file="./ContentVisited.tsx"

```
