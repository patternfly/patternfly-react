import { FunctionComponent, useState } from 'react';
import { TextArea } from '@patternfly/react-core';

export const TextAreaInvalid: FunctionComponent = () => {
  const [value, setValue] = useState('');
  return (
    <TextArea
      value={value}
      onChange={(_event, value) => setValue(value)}
      isRequired
      validated={'error'}
      aria-label="invalid text area example"
    />
  );
};
