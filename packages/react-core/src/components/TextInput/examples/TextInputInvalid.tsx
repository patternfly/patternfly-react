import React from 'react';
import { TextInput, ValidatedOptions } from '@patternfly/react-core';

export const TextInputInvalid: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  return (
    <TextInput
      value={value}
      onChange={value => setValue(value)}
      isRequired
      validated={ValidatedOptions.error}
      type="text"
      aria-label="invalid text input example"
    />
  );
};
