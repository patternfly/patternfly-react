import React from 'react';
import { TextInput } from '@patternfly/react-core';

export const TextInputIcon: React.FunctionComponent = () => {
  const [calendar, setCalendar] = React.useState('');
  const [clock, setClock] = React.useState('');
  const [custom, setCustom] = React.useState('');

  return (
    <>
      <TextInput
        value={calendar}
        type="text"
        iconVariant="calendar"
        onChange={value => setCalendar(value)}
        aria-label="text input example"
      />
      <br />
      <br />
      <TextInput
        value={clock}
        type="text"
        iconVariant="clock"
        onChange={value => setClock(value)}
        aria-label="text input example"
      />
      <br />
      <br />
      <TextInput
        value={custom}
        type="text"
        customIconDimensions="24px 24px"
        customIconUrl='data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3Cpath fill="%23a18fff" d="M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15zm-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-152a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm104 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"/%3E%3C/svg%3E'
        onChange={value => setCustom(value)}
        aria-label="text input example"
      />
    </>
  );
};
