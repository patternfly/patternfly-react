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

### Date and time range picker

```js
import { Flex, FlexItem, InputGroup, DatePicker, isValidDate, TimePicker, yyyyMMddFormat, updateDateTime } from '@patternfly/react-core';

DateTimeRangePicker = () => {
  const [from, setFrom] = React.useState();
  const [to, setTo] = React.useState();

  const toValidator = date => {
    return isValidDate(from) && yyyyMMddFormat(date) >= yyyyMMddFormat(from) ? '' : 'To date must be less than from date';
  };
  
  const onFromDateChange = (_str, newFromDate) => {
    if (from) {
      newFromDate.setHours(from.getHours());
      newFromDate.setMinutes(from.getMinutes());
    }
    console.log(newFromDate);
    setFrom(new Date(newFromDate));
  };
  
  const onFromTimeChange = (time, hour, minute) => {
    if (from) {
      const updatedFromDate = new Date(from);
      updatedFromDate.setHours(hour);
      updatedFromDate.setMinutes(minute);
      console.log(updatedFromDate);
      setFrom(updatedFromDate);
    }
  };

  const onToDateChange = (_str, newToDate) => {
    if (to) {
      newToDate.setHours(to.getHours());
      newToDate.setMinutes(to.getMinutes());
    }
    console.log(newToDate);
    setTo(new Date(newToDate));
  };
  
  const onToTimeChange = (time, hour, minute) => {
    if (to) {
      const updatedToDate = new Date(to);
      updatedToDate.setHours(hour);
      updatedToDate.setMinutes(minute);
      console.log(updatedToDate);
      setTo(updatedToDate);
    }
  };

  return (
    <Flex direction={{default: 'column', lg: 'row'}}>
      <FlexItem>
        <InputGroup>
          <DatePicker
            onChange={onFromDateChange}
            aria-label="Start date"
          />
          <TimePicker 
            aria-label="Start time"
            style={{width: '150px'}} 
            onChange={onFromTimeChange} 
          />
        </InputGroup>
      </FlexItem>
      <FlexItem>
        to
      </FlexItem>
      <FlexItem>
        <InputGroup>
          <DatePicker
            value={to ? yyyyMMddFormat(to) : ''}
            onChange={onToDateChange}
            isDisabled={!isValidDate(from)}
            rangeStart={from}
            validators={[toValidator]}
            aria-label="End date"
          />
          <TimePicker style={{width: '150px'}} onChange={onToTimeChange} isDisabled={!isValidDate(from)}/>
        </InputGroup>
      </FlexItem>
    </Flex>
  );
}
```

