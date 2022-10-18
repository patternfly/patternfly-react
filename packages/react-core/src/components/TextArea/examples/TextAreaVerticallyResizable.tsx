import React from 'react';
import { TextArea } from '@patternfly/react-core';

export const VerticalResizeTextArea: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  return (
    <TextArea
      value={value}
      onChange={value => setValue(value)}
      resizeOrientation="vertical"
      aria-label="text area vertical resize example"
    />
  );
};
