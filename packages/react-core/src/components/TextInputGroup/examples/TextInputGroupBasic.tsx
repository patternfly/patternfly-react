import React from 'react';
import { TextInputGroup, TextInputGroupMain } from '@patternfly/react-core';

export const TextInputGroupBasic: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  return (
    <TextInputGroup>
      <TextInputGroupMain value={value} onChange={(_event, value) => setValue(value)} />
    </TextInputGroup>
  );
};
