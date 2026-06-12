import { useState } from 'react';
import { TextInput } from '@patternfly/react-core';
import RhUiCalendarFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-calendar-fill-icon';
import RhUiClockFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-clock-fill-icon';

export const TextInputCustomIcon: React.FunctionComponent = () => {
  const [calendar, setCalendar] = useState('');
  const [clock, setClock] = useState('');

  return (
    <>
      <TextInput
        value={calendar}
        type="text"
        customIcon={<RhUiCalendarFillIcon />}
        onChange={(_event, value) => setCalendar(value)}
        aria-label="text input example with calendar icon"
      />
      <br />
      <br />
      <TextInput
        value={clock}
        type="text"
        customIcon={<RhUiClockFillIcon />}
        onChange={(_event, value) => setClock(value)}
        aria-label="text input example with clock icon"
      />
    </>
  );
};
