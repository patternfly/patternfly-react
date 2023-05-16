import React from 'react';
import { TextInput } from '@patternfly/react-core';
import CalendarIcon from '@patternfly/react-icons/dist/esm/icons/calendar-icon';
import ClockIcon from '@patternfly/react-icons/dist/esm/icons/clock-icon';

export const TextInputCustomIcon: React.FunctionComponent = () => {
  const [calendar, setCalendar] = React.useState('');
  const [clock, setClock] = React.useState('');

  return (
    <>
      <TextInput
        value={calendar}
        type="text"
        customIcon={<CalendarIcon />}
        onChange={(_event, value) => setCalendar(value)}
        aria-label="text input example with calendar icon"
      />
      <br />
      <br />
      <TextInput
        value={clock}
        type="text"
        customIcon={<ClockIcon />}
        onChange={(_event, value) => setClock(value)}
        aria-label="text input example with clock icon"
      />
    </>
  );
};
