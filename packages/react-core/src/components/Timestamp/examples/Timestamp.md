---
id: Timestamp
section: components
cssPrefix: pf-c-timestamp
propComponents: ['Timestamp']
beta: true
---

## Examples

### Default

By default, a timestamp will display the current date and time based on the current locale if the `date` prop is not passed in.

The following example shows one way to build an ISO 8601 string with the current local date and time, which gets passed into the `datetime` prop. Alternatively, the current UTC date and time could be passed in using the `toISOString` method.

```ts file="./TimestampDefault.tsx"
```

### Basic formats

The format of the displayed content can be customized by passing in the `dateFormat` and/or `timeFormat` props. Passing in only one of the props will display only the date or time, depending on which prop is passed in. The possible options are "full", "long", "medium", and "short".

You can also pass in the `timeZoneSuffix` prop to display a custom timezone suffix at the end of the displayed content. This will not override a timezone that is already displayed from a `timeFormat` value of "full" or "long".

```ts file="./TimestampBasicFormats.tsx"
```

### Custom format

The format of the displayed content can be further customized by passing in the `customFormat` prop. Read [datetime format options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) for a list of options that can be passed in.

```ts file="./TimestampCustomFormat.tsx"
```

### UTC tooltip

To render a tooltip that displays the timestamp content as a UTC time, you can pass in the `hasUTCTooltip` prop. The format of the tooltip content will match the format of the timestamp content.

You can customize the suffix of the UTC tooltip by passing in the `utcSuffix` prop.

```ts file="./TimestampUTCTooltip.tsx"
```

### Custom content

To display custom content, such as a relative time or prefacing text, you can pass in content to the `children` prop.

When also passing in the `hasUTCTooltip` prop, you can pass in the `dateFormat` and/or `timeFormat` props to customize the tooltip content without affecting the custom timestamp content.

```ts file="TimestampCustomContent.tsx"
```

### Custom tooltip

By passing in the `tooltipContent` prop, you can display custom content within the timestamp's tooltip.

```ts file="TimestampCustomTooltip.tsx"
```
