import React from 'react';
import { TextInput } from '@patternfly/react-core';

export const TextInputIconSprite: React.FunctionComponent = () => {
  const [calendar, setCalendar] = React.useState('');
  const [clock, setClock] = React.useState('');

  return (
    <>
      <TextInput validated={'success'} isIconSprite type="text" aria-label="success icon sprite text input example" />
      <br />
      <br />
      <TextInput validated={'warning'} isIconSprite type="text" aria-label="warning icon sprite text input example" />
      <br />
      <br />
      <TextInput validated={'error'} isIconSprite type="text" aria-label="error icon sprite text input example" />
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
