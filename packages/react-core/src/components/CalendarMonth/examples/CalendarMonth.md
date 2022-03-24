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

In this example, there are two dates selected: the first is a range start date and the second is a range end date. As you hover over dates that take place _after_ the range start date, a style is applied to show which dates are included in that range. This style will persist as you continue to hover within the calendar, even after selecting a range end date.

This example only allows updating of the range end date, though it does not prevent selecting a date prior to the range start date. Preventing a range end date that occurs prior to the range start date, or adding the ability to update the range start date, is functionality that would need to be added manually.

The "Range Selection" text is not a part of the component and is only present for demonstration purposes.

```ts file="./CalendarMonthDateRange.tsx"
```
