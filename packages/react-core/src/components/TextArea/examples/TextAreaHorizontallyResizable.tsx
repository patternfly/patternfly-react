import { FunctionComponent, useState } from 'react';
import { TextArea } from '@patternfly/react-core';

export const TextAreaHorizontallyResizable: FunctionComponent = () => {
  const [value, setValue] = useState('');
  return (
    <TextArea
      value={value}
      onChange={(_event, value) => setValue(value)}
      resizeOrientation="horizontal"
      aria-label="text area horizontal resize example"
    />
  );
};
