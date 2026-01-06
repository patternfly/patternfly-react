import { useState } from 'react';
import {
  Flex,
  FlexItem,
  InputGroup,
  InputGroupItem,
  DatePicker,
  isValidDate,
  TimePicker,
  yyyyMMddFormat
} from '@patternfly/react-core';

export const DateTimeRangePicker: React.FunctionComponent = () => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  const toValidator = (date) =>
    isValidDate(from) && yyyyMMddFormat(date) >= yyyyMMddFormat(from)
      ? ''
      : 'The "to" date must be after the "from" date';

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
};
