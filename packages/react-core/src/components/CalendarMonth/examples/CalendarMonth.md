---
id: Calendar month
section: components
cssPrefix: pf-c-calendar-month
propComponents: ['CalendarMonth', 'CalendarFormat']
beta: true
---

## Examples

### Default

```ts file="./CalendarMonthDefault.tsx"
```

### Selectable date

```ts file="./CalendarMonthSelectableDate.tsx"
```

### Date range

In this example, there are two dates selected: the first is a range start date (via the `rangeStart` prop) and the second is a range end date (via the `date` prop). For the purposes of this example, these dates are static and cannot be updated.

Additionally, any dates prior to the range start date are disabled by passing in an array of functions to the `validators` prop. In this case a single function is passed in, which checks whether a date is greater than or equal to the range start date.

```ts file="./CalendarMonthDateRange.tsx"
```
