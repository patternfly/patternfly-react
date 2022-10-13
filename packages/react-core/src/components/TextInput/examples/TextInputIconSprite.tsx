import React from 'react';
import { TextInput } from '@patternfly/react-core';

export const TextInputIconSprite: React.FunctionComponent = () => {
  const [calendar, setCalendar] = React.useState('');
  const [clock, setClock] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [warning, setWarning] = React.useState('');
  const [error, setError] = React.useState('');

  return (
    <>
      <TextInput
        value={success}
        validated={'success'}
        isIconSprite
        type="text"
        onChange={value => setSuccess(value)}
        aria-label="success icon sprite text input example"
      />
      <br />
      <br />
      <TextInput
        value={warning}
        validated={'warning'}
        isIconSprite
        type="text"
        onChange={value => setWarning(value)}
        aria-label="warning icon sprite text input example"
      />
      <br />
      <br />
      <TextInput
        value={error}
        validated={'error'}
        isIconSprite
        type="text"
        onChange={value => setError(value)}
        aria-label="error icon sprite text input example"
      />
      <br />
      <br />
      <TextInput
        value={calendar}
        isIconSprite
        type="text"
        iconVariant="calendar"
        onChange={value => setCalendar(value)}
        aria-label="calendar icon sprite text input example"
      />
      <br />
      <br />
      <TextInput
        value={clock}
        isIconSprite
        type="text"
        iconVariant="clock"
        onChange={value => setClock(value)}
        aria-label="clock icon sprite text input example"
      />
    </>
  );
};
