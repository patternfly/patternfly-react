import React from 'react';
import {
  CalendarMonth,
  InputGroup,
  InputGroupItem,
  TextInput,
  Button,
  Popover,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/esm/icons/outlined-calendar-alt-icon';
import OutlinedClockIcon from '@patternfly/react-icons/dist/esm/icons/outlined-clock-icon';

export const DateTimePicker: React.FunctionComponent = () => {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [isTimeOpen, setIsTimeOpen] = React.useState(false);
  const [valueDate, setValueDate] = React.useState('MM-DD-YYYY');
  const [valueTime, setValueTime] = React.useState('HH:MM');
  const times = Array.from(new Array(10), (_, i) => i + 8);
  const defaultTime = '0:00';
  const dateFormat = (date: Date) =>
    date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');

  const onToggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
    setIsTimeOpen(false);
  };

  const onToggleTime = () => {
    setIsTimeOpen(!isTimeOpen);
    setIsCalendarOpen(false);
  };

  const onSelectCalendar = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>, newValueDate: Date) => {
    const newValue = dateFormat(newValueDate);
    setValueDate(newValue);
    setIsCalendarOpen(!isCalendarOpen);
    // setting default time when it is not picked
    if (valueTime === 'HH:MM') {
      setValueTime(defaultTime);
    }
  };

  const onSelectTime = (ev: React.MouseEvent<Element, MouseEvent> | undefined) => {
    setValueTime(ev?.currentTarget?.textContent as string);
    setIsTimeOpen(!isTimeOpen);
  };

  const timeOptions = times.map((time) => <DropdownItem key={time}>{`${time}:00`}</DropdownItem>);

  const calendar = <CalendarMonth date={new Date(valueDate)} onChange={onSelectCalendar} />;

  const time = (
    <Dropdown
      onSelect={onSelectTime}
      isOpen={isTimeOpen}
      onOpenChange={(isOpen: boolean) => setIsTimeOpen(isOpen)}
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        <MenuToggle
          ref={toggleRef}
          onClick={onToggleTime}
          isExpanded={isTimeOpen}
          aria-label="Time picker"
          icon={<OutlinedClockIcon aria-hidden="true" />}
        />
      )}
    >
      <DropdownList>{timeOptions}</DropdownList>
    </Dropdown>
  );

  const calendarButton = (
    <Button
      variant="control"
      aria-label="Toggle the calendar"
      onClick={onToggleCalendar}
      icon={<OutlinedCalendarAltIcon />}
    />
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
          <InputGroupItem>
            <TextInput
              type="text"
              id="date-time"
              aria-label="date and time picker demo"
              value={valueDate + ' ' + valueTime}
              readOnlyVariant="default"
            />
          </InputGroupItem>
          <InputGroupItem>{calendarButton}</InputGroupItem>
          <InputGroupItem>{time}</InputGroupItem>
        </InputGroup>
      </Popover>
    </div>
  );
};
