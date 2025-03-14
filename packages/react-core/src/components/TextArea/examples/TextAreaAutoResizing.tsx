import { useState } from 'react';
import { TextArea } from '@patternfly/react-core';

export const TextAreaAutoResizing: React.FunctionComponent = () => {
  const [value, setValue] = useState('');
  return (
    <TextArea
      value={value}
      onChange={(_event, value) => setValue(value)}
      aria-label="auto resizing text area example"
      autoResize
    />
  );
};
