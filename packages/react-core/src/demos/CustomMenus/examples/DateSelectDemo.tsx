import React from 'react';
import { MenuToggle, Select, SelectList, SelectOption } from '@patternfly/react-core';
import text from '@patternfly/react-styles/css/utilities/Text/text';

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

  const dateText = {
    0: <small className={text.color_200}>({dateString(date)})</small>,
    1: (
      <small className={text.color_200}>
        ({dateString(new Date(new Date().setDate(date.getDate() - 1)))} - {dateString(date)})
      </small>
    ),
    2: (
      <small className={text.color_200}>
        ({dateString(new Date(new Date().setDate(date.getDate() - 7)))} - {dateString(date)})
      </small>
    ),
    3: (
      <small className={text.color_200}>
        ({dateString(new Date(new Date().setDate(date.getDate() - 14)))} - {dateString(date)})
      </small>
    )
  };

  return (
    // eslint-disable-next-line no-console
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
