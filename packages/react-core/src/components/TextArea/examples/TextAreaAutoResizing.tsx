import React from 'react';
import { TextArea } from '@patternfly/react-core';

export const TextAreaAutoResizing: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  return (
    <TextArea
      value={value}
      onChange={value => setValue(value)}
      aria-label="auto resizing text area example"
      autoResize
    />
  );
};
