import React from 'react';
import { TextInput } from '@patternfly/react-core';

export const TextInputBasic: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  return <TextInput value={value} type="text" onChange={value => setValue(value)} aria-label="text input example" />;
};
