import { useState } from 'react';
import { TextArea } from '@patternfly/react-core';

export const TextAreaResizeNone: React.FunctionComponent = () => {
  const [value, setValue] = useState('');
  return (
    <TextArea
      value={value}
      onChange={(_event, value) => setValue(value)}
      resizeOrientation="none"
      aria-label="text area resize none example"
    />
  );
};
