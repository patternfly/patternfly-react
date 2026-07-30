import { useState } from 'react';
import { TextInput, ValidatedOptions } from '@patternfly/react-core';
import RhUiCalendarFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-calendar-fill-icon';

export const TextInputCustomIconInvalid: React.FunctionComponent = () => {
  const [calendar, setCalendar] = useState('');

  return (
    <>
      <TextInput
        value={calendar}
        type="text"
        validated={ValidatedOptions.error}
        customIcon={<RhUiCalendarFillIcon />}
        onChange={(_event, value) => setCalendar(value)}
        aria-label="text input example with calendar icon"
      />
    </>
  );
};
