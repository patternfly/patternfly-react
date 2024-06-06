---
id: Date picker
section: components
subsection: date-and-time
---

import { Modal as ModalDeprecated, ModalVariant as ModalVariantDeprecated } from '@patternfly/react-core/deprecated';

## Demos

### Date range picker

This is intended to be used as a filter. After selecting a start date, the next date is automatically selected.

```js
import { Split, SplitItem, DatePicker, isValidDate, yyyyMMddFormat } from '@patternfly/react-core';

DateRangePicker = () => {
  const [from, setFrom] = React.useState();
  const [to, setTo] = React.useState();

  const toValidator = (date) =>
    isValidDate(from) && date >= from ? '' : 'The "to" date must be after the "from" date';

  const onFromChange = (_event, _value, date) => {
    setFrom(new Date(date));
    if (isValidDate(date)) {
      date.setDate(date.getDate() + 1);
      setTo(yyyyMMddFormat(date));
    } else {
      setTo('');
    }
  };

  const onToChange = (_event, _value, date) => {
    if (isValidDate(date)) {
      setTo(yyyyMMddFormat(date));
    }
  };

  return (
    <Split>
      <SplitItem>
        <DatePicker onChange={onFromChange} aria-label="Start date" placeholder="YYYY-MM-DD" />
      </SplitItem>
      <SplitItem style={{ padding: '6px 12px 0 12px' }}>to</SplitItem>
      <SplitItem>
        <DatePicker
          value={to}
          onChange={onToChange}
          isDisabled={!isValidDate(from)}
          rangeStart={from}
          validators={[toValidator]}
          aria-label="End date"
          placeholder="YYYY-MM-DD"
        />
      </SplitItem>
    </Split>
  );
};
```

### Date and time pickers in modal

Modals trap focus and watch a few document level events. In order to place a date picker in a modal:

- To avoid the modal's escape press event handler from overruling the date picker's escape press handlers, use the `DatePickerRef` to close the calendar when it is open and the escape key is pressed.
- Append the calendar to the modal to keep it as close to the date picker in the DOM while maintaining correct layouts visually
  In order to place a time picker in the modal, its menu must be appended to the time picker's parent.

```ts file="./examples/DateTimePickerInModal.tsx"

```
