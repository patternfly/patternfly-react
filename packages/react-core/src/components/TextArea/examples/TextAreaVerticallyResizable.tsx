import { FunctionComponent, useState } from 'react';
import { TextArea } from '@patternfly/react-core';

export const VerticalResizeTextArea: FunctionComponent = () => {
  const [value, setValue] = useState('');
  return (
    <TextArea
      value={value}
      onChange={(_event, value) => setValue(value)}
      resizeOrientation="vertical"
      aria-label="text area vertical resize example"
    />
  );
};
