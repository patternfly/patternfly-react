---
id: Date picker
section: components
subsection: date-and-time
cssPrefix: pf-v6-c-date-picker
propComponents: ['DatePicker', 'CalendarFormat', 'DatePickerRef', 'DatePickerRequiredObject']
---

## Examples

### Basic

```ts file="./DatePickerBasic.tsx"

```

### Required

To require users to select a date before continuing, use the `requiredDateOptions.isRequired` property.

A required date picker will be invalid when the text input is empty and either the text input loses focus or the date picker popover is closed.

The error message can be customized via the `requiredDateOptions.emptyDateText` property.

```ts file="./DatePickerRequired.tsx"

```

### American format

```ts file="./DatePickerAmerican.tsx"

```

### Helper text

```ts file="./DatePickerHelperText.tsx"

```

### Min and max date

```ts file="./DatePickerMinMax.tsx"

```

### French

```ts file="./DatePickerFrench.tsx"

```

### Controlled

```ts file="./DatePickerControlled.tsx"

```

### Controlled required

```ts file="./DatePickerControlledRequired.tsx"

```

### Controlling the date picker calendar state

```ts file="./DatePickerControlledCalendar.tsx"

```
