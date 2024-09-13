---
id: Content
section: components
cssPrefix: pf-v6-c-content
propComponents: ['Content']
---

The `<Content>` component allows you to establish a block of HTML content and apply simple, built-in styling. `<Content>` can be used for any element supported by the `component` property (including `h1` through `h6`, `hr`, `p`, `a`, `small`, `blockquote`, and `pre`).

You cannot nest other components within `<Content>`, and doing so can cause styling overrides or other conflicts. Instead, you can use the `<Content>` component's properties to achieve the same results.

For example, to create a level 1 heading, you should pass `component="h1"` to `<Content>`, instead of nesting a `<Title>` component within `<Content>`. Similarly, when you need to add a divider to a page, you should utilize the `hr` property of `<Content>` (which is styled as a divider), rather than using a separate `<Divider>` component.

## Examples

HTML elements wrapped by `<Content>` are styled by the content component.

### Content as a wrapper

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

### Editorial content

Editorial styling increases the font size of body text and small text by 1 tier, where body text becomes "lg" and small text becomes "md". To applying editorial styling, use `isEditorial`.

```ts file="./ContentEditorial.tsx"

```
