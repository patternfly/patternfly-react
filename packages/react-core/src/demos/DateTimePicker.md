---
id: Date and time picker
section: components
subsection: date-and-time
---

import OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/esm/icons/outlined-calendar-alt-icon';
import OutlinedClockIcon from '@patternfly/react-icons/dist/esm/icons/outlined-clock-icon';

## Demos

In this demo, learn how to use a [CalendarMonth](/components/date-and-time/calendar-month) component and a [Dropdown](/components/menus/dropdown) component to compose a simple DateTimePicker. The input is read only, meaning that the following example does not cover pasting a copied date and time. Also, you can pick the time only from the predefined options and cannot change it in the input.

### Date and time picker

```ts file="./examples/DateTimePicker/DateTimePicker.tsx"

```

### Date and time range picker

```js
import { Flex, FlexItem, InputGroup, InputGroupItem, DatePicker, isValidDate, TimePicker, yyyyMMddFormat, updateDateTime } from '@patternfly/react-core';

DateTimeRangePicker = () => {
  const [from, setFrom] = React.useState();
  const [to, setTo] = React.useState();

  const toValidator = (date) => {
    return isValidDate(from) && yyyyMMddFormat(date) >= yyyyMMddFormat(from)
      ? ''
      : 'The "to" date must be after the "from" date';
  };

  const onFromDateChange = (_event, inputDate, newFromDate) => {
    if (isValidDate(from) && isValidDate(newFromDate) && inputDate === yyyyMMddFormat(newFromDate)) {
      newFromDate.setHours(from.getHours());
      newFromDate.setMinutes(from.getMinutes());
    }
    if (isValidDate(newFromDate) && inputDate === yyyyMMddFormat(newFromDate)) {
      setFrom(new Date(newFromDate));
    }
  };

  const onFromTimeChange = (_event, time, hour, minute) => {
    if (isValidDate(from)) {
      const updatedFromDate = new Date(from);
      updatedFromDate.setHours(hour);
      updatedFromDate.setMinutes(minute);
      setFrom(updatedFromDate);
    }
  };

  const onToDateChange = (_event, inputDate, newToDate) => {
    if (isValidDate(to) && isValidDate(newToDate) && inputDate === yyyyMMddFormat(newToDate)) {
      newToDate.setHours(to.getHours());
      newToDate.setMinutes(to.getMinutes());
    }
    if (isValidDate(newToDate) && inputDate === yyyyMMddFormat(newToDate)) {
      setTo(newToDate);
    }
  };

  const onToTimeChange = (_event, time, hour, minute) => {
    if (isValidDate(to)) {
      const updatedToDate = new Date(to);
      updatedToDate.setHours(hour);
      updatedToDate.setMinutes(minute);
      setTo(updatedToDate);
    }
  };

  return (
    <Flex direction={{ default: 'column', lg: 'row' }}>
      <FlexItem>
        <InputGroup>
          <InputGroupItem>
            <DatePicker onChange={onFromDateChange} aria-label="Start date" placeholder="YYYY-MM-DD" />
          </InputGroupItem>
          <InputGroupItem>
            <TimePicker aria-label="Start time" style={{ width: '150px' }} onChange={onFromTimeChange} />
          </InputGroupItem>
        </InputGroup>
      </FlexItem>
      <FlexItem>to</FlexItem>
      <FlexItem>
        <InputGroup>
          <InputGroupItem>
            <DatePicker
              value={isValidDate(to) ? yyyyMMddFormat(to) : to}
              onChange={onToDateChange}
              isDisabled={!isValidDate(from)}
              rangeStart={from}
              validators={[toValidator]}
              aria-label="End date"
              placeholder="YYYY-MM-DD"
            />
          </InputGroupItem>
          <InputGroupItem>
            <TimePicker style={{ width: '150px' }} onChange={onToTimeChange} isDisabled={!isValidDate(from)} />
          </InputGroupItem>
        </InputGroup>
      </FlexItem>
    </Flex>
  );
}
```
