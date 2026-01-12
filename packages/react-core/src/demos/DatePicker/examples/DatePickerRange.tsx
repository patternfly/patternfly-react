import { useState } from 'react';
import { Split, SplitItem, DatePicker, isValidDate, yyyyMMddFormat } from '@patternfly/react-core';

export const DatePickerRange: React.FunctionComponent = () => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  const toValidator = (date: Date) =>
    isValidDate(from) && date >= from ? '' : 'The "to" date must be after the "from" date';

  const onFromChange = (_event: React.MouseEvent<HTMLElement>, _value: string, date: Date) => {
    setFrom(new Date(date));
    if (isValidDate(date)) {
      date.setDate(date.getDate() + 1);
      setTo(yyyyMMddFormat(date));
    } else {
      setTo('');
    }
  };

  const onToChange = (_event: React.MouseEvent<HTMLElement>, _value: string, date: Date) => {
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
