import React from 'react';
import { TextArea } from '@patternfly/react-core';

export const TextAreaHorizontallyResizable: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  return (
    <TextArea
      value={value}
      onChange={value => setValue(value)}
      resizeOrientation="horizontal"
      aria-label="text area horizontal resize example"
    />
  );
};
