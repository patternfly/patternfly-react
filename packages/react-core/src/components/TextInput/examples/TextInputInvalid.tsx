import { useState } from 'react';
import { TextInput, ValidatedOptions } from '@rh-felt/react-core';

export const TextInputInvalid: React.FunctionComponent = () => {
  const [value, setValue] = useState('');
  return (
    <TextInput
      value={value}
      onChange={(_event, value) => setValue(value)}
      isRequired
      validated={ValidatedOptions.error}
      type="text"
      aria-label="invalid text input example"
    />
  );
};
