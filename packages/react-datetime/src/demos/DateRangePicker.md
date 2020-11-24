---
id: Date picker
section: components
---

import { DatePicker, isValidDate } from '@patternfly/react-datetime';

## Demos

### Date range picker

This allows selecting a range as a filter. After selecting a start date the next day is automatically selected. Future dates are not allowed.

```js
import { DatePicker, isValidDate } from '@patternfly/react-datetime';

DateRangePicker = () => {
  const [from, setFrom] = React.useState();
  const [to, setTo] = React.useState();

  const tmpStyleHack = {
    width: '180px',
    display: 'inline-block'
  };

  const today = new Date();
  const fromValidator = date => date <= today ? '' : 'You cannot pick a future date';
  const toValidator = date => isValidDate(from) && date >= from && date <= today ? '' : 'To date must be less than from date';
  const onFromChange = (_str, date) => {
    if (isValidDate(date)) {
      setFrom(new Date(date));
      date.setDate(date.getDate() + 1);
      if (date > today) {
        date = today;
      }
      setTo(date.toISOString().substring(0, 10));
    }
  };

  return (
    <div>
      <DatePicker
        style={tmpStyleHack}
        onChange={onFromChange}
        validators={[fromValidator]}
      />
      {' to '}
      <DatePicker
        style={tmpStyleHack}
        value={to}
        onChange={date => setTo(date)}
        isDisabled={!isValidDate(from)}
        rangeStart={from}
        validators={[toValidator]}
      />
    </div>
  );
}
```

