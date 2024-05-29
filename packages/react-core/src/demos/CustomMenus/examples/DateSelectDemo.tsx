import React from 'react';
import { MenuToggle, Select, SelectList, SelectOption, Timestamp } from '@patternfly/react-core';

export const DateSelectDemo: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<number>(0);
  const menuRef = React.useRef<HTMLDivElement>();

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const monthStrings = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const dateString = (date: Date) => `${monthStrings[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  const date = new Date();

  const toggleText = {
    0: 'Today ',
    1: 'Yesterday ',
    2: 'Last 7 days ',
    3: 'Last 14 days '
  };

  const getDateNDaysBefore = (date: Date, days: number) => new Date(new Date().setDate(date.getDate() - days));

  const dates = {
    0: date,
    1: getDateNDaysBefore(date, 1),
    2: getDateNDaysBefore(date, 7),
    3: getDateNDaysBefore(date, 14)
  };

  const dateText = {
    0: <Timestamp date={dates[0]}>({dateString(dates[0])})</Timestamp>,
    1: <Timestamp date={dates[1]}>({dateString(dates[1])})</Timestamp>,
    2: (
      <>
        <Timestamp date={dates[2]}>
          ({dateString(dates[2])}
          &nbsp;-&nbsp;
        </Timestamp>
        <Timestamp date={date}>{dateString(date)})</Timestamp>
      </>
    ),
    3: (
      <>
        <Timestamp date={dates[3]}>
          ({dateString(dates[3])}
          &nbsp;-&nbsp;
        </Timestamp>
        <Timestamp date={date}>{dateString(date)})</Timestamp>
      </>
    )
  };

  return (
    <Select
      isOpen={isOpen}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      toggle={(toggleRef) => (
        <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen} style={{ minWidth: '250px' }}>
          <span style={{ verticalAlign: 'middle', marginRight: '8px' }}>{toggleText[selected]}</span>
          {dateText[selected]}
        </MenuToggle>
      )}
      ref={menuRef}
      onSelect={(_ev, value) => {
        setSelected(value as number);
        setIsOpen(false);
      }}
      selected={selected}
    >
      <SelectList>
        <SelectOption value={0}>Today</SelectOption>
        <SelectOption value={1}>Yesterday</SelectOption>
        <SelectOption value={2}>Last 7 days</SelectOption>
        <SelectOption value={3}>Last 14 days</SelectOption>
      </SelectList>
    </Select>
  );
};
