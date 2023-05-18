import React from 'react';
import { TextInput, ValidatedOptions } from '@patternfly/react-core';
import CalendarIcon from '@patternfly/react-icons/dist/esm/icons/calendar-icon';

export const TextInputCustomIconInvalid: React.FunctionComponent = () => {
  const [calendar, setCalendar] = React.useState('');

  return (
    <>
      <TextInput
        value={calendar}
        type="text"
        validated={ValidatedOptions.error}
        customIcon={<CalendarIcon />}
        onChange={(_event, value) => setCalendar(value)}
        aria-label="text input example with calendar icon"
      />
    </>
  );
};
