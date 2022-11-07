import React from 'react';
import { TextArea } from '@patternfly/react-core';

export const TextAreaInvalid: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  return (
    <TextArea
      value={value}
      onChange={value => setValue(value)}
      isRequired
      validated={'error'}
      aria-label="invalid text area example"
    />
  );
};
