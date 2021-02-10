---
id: Date picker
section: components
---

## Demos

### Date range picker

Intended to be used as a filter. After selecting a start date the next day is automatically selected.

```js
import { Split, SplitItem, DatePicker, isValidDate, yyyyMMddFormat } from '@patternfly/react-core';

DateRangePicker = () => {
  const [from, setFrom] = React.useState();
  const [to, setTo] = React.useState();

  const toValidator = date => isValidDate(from) && date >= from ? '' : 'To date must be less than from date';
  const onFromChange = (_str, date) => {
    setFrom(new Date(date));
    if (isValidDate(date)) {
      date.setDate(date.getDate() + 1);
      setTo(yyyyMMddFormat(date));
    }
    else {
      setTo('');
    }
  };

  return (
    <Split>
      <SplitItem>
        <DatePicker
          onChange={onFromChange}
          aria-label="Start date"
        />
      </SplitItem>
      <SplitItem style={{ padding: '6px 12px 0 12px' }}>
        to
      </SplitItem>
      <SplitItem>
        <DatePicker
          value={to}
          onChange={date => setTo(date)}
          isDisabled={!isValidDate(from)}
          rangeStart={from}
          validators={[toValidator]}
          aria-label="End date"
        />
      </SplitItem>
    </Split>
  );
}
```

