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

When using a timestamp in this manner, the value passed into the `datetime` prop must match the date and time of the current locale. The following example shows one way you can achieve this.

```ts file="./TimestampDefault.tsx"
```

### Basic formats

The format of the displayed content can be changed by passing in the `dateFormat` and/or `timeFormat` prop. Passing in only one of the props will display only the date or time, depending on which prop is passed in. The possible options are "full", "long", "medium", and "short".

You can also pass in the `timeZoneSuffix` prop to display a timezone suffix at the end of the displayed content. This will not override a timezone that is already displayed from the `timeFormat` prop.

```ts file="./TimestampBasicFormats.tsx"
```

### Custom format

The format of the displayed content can be further customized by passing in the `customFormat` prop. Read [datetime format options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) for a list of options that can be passed in.

```ts file="./TimestampCustomFormat.tsx"
```

### UTC tooltip

To render a tooltip that displays the timestamp content as a UTC time, you can pass in the `hasUTCTooltip` prop. The format of this tooltip will match the format of the timestamp itself.

You can customize the suffix of the UTC tooltip by passing in the `utcSuffix` prop.

```ts file="./TimestampUTCTooltip.tsx"
```

### Custom content

To display custom content, such as a relative time or prefacing text, you can pass content to the `children` prop.

```ts file="TimestampCustomContent.tsx"
```

### Custom tooltip

By passing in the `tooltipContent` prop, you can display custom content within the timestamp's tooltip.

```ts file="TimestampCustomTooltip.tsx"
```
