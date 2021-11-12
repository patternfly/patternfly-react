---
id: Date and time picker
section: demos
beta: true
---

import OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/esm/icons/outlined-calendar-alt-icon';
import OutlinedClockIcon from '@patternfly/react-icons/dist/esm/icons/outlined-clock-icon';

## Demos

In this demo, learn how to use a [CalendarMonth](/components/calendar-month) component and a [Dropdown](/components/dropdown) component to compose a simple DateTimePicker. The input is read only, meaning that the following example does not cover pasting a copied date and time. Also, you can pick the time only from the predefined options and cannot change it in the input.

### Date and time picker

```js
import React from 'react';
import { Dropdown, DropdownToggle, DropdownItem, CalendarMonth, InputGroup, TextInput, Button, Popover } from '@patternfly/react-core';
import OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/esm/icons/outlined-calendar-alt-icon';
import OutlinedClockIcon from '@patternfly/react-icons/dist/esm/icons/outlined-clock-icon';

DateTimePicker = () => {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [isTimeOpen, setIsTimeOpen] = React.useState(false);
  const [valueDate, setValueDate] = React.useState("YYYY-MM-DD");
  const [valueTime, setValueTime] = React.useState("HH:MM");
  const times = Array.from(new Array(10), (_, i) => i + 8);
  const defaultTime = "0:00";
  const dateFormat = date => date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g,'-');

  const onToggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
    setIsTimeOpen(false);
  };

  const onToggleTime = ev => {
      setIsTimeOpen(!isTimeOpen);
      setIsCalendarOpen(false);
  };

  const onSelectCalendar = newValueDate => {
      const newValue = dateFormat(newValueDate);
      setValueDate(newValue);
      setIsCalendarOpen(!isCalendarOpen);
      // setting default time when it is not picked
      if (valueTime === "HH:MM") {
          setValueTime(defaultTime);
      }
  };

  const onSelectTime = ev => {
      setValueTime(ev.target.value);
      setIsTimeOpen(!isTimeOpen);
  };

  const timeOptions = times.map(time => (
      <DropdownItem key={time} component="button" value={`${time}:00`}>
        {`${time}:00`}
      </DropdownItem>
  ))
  const calendar = (
      <CalendarMonth
        date={valueDate}
        onChange={onSelectCalendar}
      />
  );
  const time = (
      <Dropdown
        onSelect={onSelectTime}
        toggle={
          <DropdownToggle toggleIndicator={null} onToggle={onToggleTime} style={{ padding: '6px 16px' }}>
            <OutlinedClockIcon />
          </DropdownToggle>
        }
        isOpen={isTimeOpen}
        dropdownItems={timeOptions}
    />
  );
  const calendarButton = (
      <Button variant="control" onClick={onToggleCalendar}>
          <OutlinedCalendarAltIcon />
      </Button>
  );
  return (
    <div style={{ width: '300px' }}>
        <Popover
            position="bottom"
            bodyContent={calendar}
            showClose={false}
            isVisible={isCalendarOpen}
            hasNoPadding
            hasAutoWidth
        >
            <InputGroup>
                <TextInput type="'datetime-local" id="date-time" value={valueDate + ' ' + valueTime} isReadOnly/>
                {calendarButton}
                {time}
            </InputGroup>
        </Popover>
    </div>
  );
};
```