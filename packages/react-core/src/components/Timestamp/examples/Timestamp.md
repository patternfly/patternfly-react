---
id: Timestamp
section: components
cssPrefix: pf-c-timestamp
propComponents: ['Timestamp', 'TimestampTooltip']
beta: true
---

## Examples

### Default

By default, a timestamp will display the current date and time based on the current locale if the `date` prop is not passed in.

```ts file="./TimestampDefault.tsx"
```

### Basic formats

The format of the displayed content can be customized by passing in the `dateFormat` and/or `timeFormat` props. Passing in only one of the props will display only the date or time, depending on which prop is passed in. The possible options are "full", "long", "medium", and "short".

You can also pass in the `displaySuffix` prop to display a custom suffix at the end of the displayed content. This will not override a timezone that is already displayed from the applied time format.

```ts file="./TimestampBasicFormats.tsx"
```

### Custom format

The format of the displayed content can be further customized by passing in the `customFormat` prop. Read [datetime format options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) for a list of options that can be passed in.

```ts file="./TimestampCustomFormat.tsx"
```

### Default tooltip

To render a tooltip that displays the timestamp content as a UTC time, you can pass in the `tooltip` prop with a variant of "default". The format of the default tooltip content will match the format of the timestamp content.

You can customize the suffix of this default tooltip variant by passing in `suffix` to the `tooltip` prop.

```ts file="./TimestampDefaultTooltip.tsx"
```

### Custom content

To display custom content, such as a relative time or prefacing text, you can pass in content to the `children` prop.

When also rendering a default tooltip with the `tooltip` prop, you can pass in the `dateFormat` and/or `timeFormat` props to customize the tooltip content without affecting the custom timestamp content.

```ts file="TimestampCustomContent.tsx"
```

### Custom tooltip

By passing in `variant="custom"` and `content` to the `tooltip` prop, you can display custom content within the timestamp's tooltip.

```ts file="TimestampCustomTooltip.tsx"
```
