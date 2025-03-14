import { useState } from 'react';
import { TextArea } from '@patternfly/react-core';

export const TextAreaBasic: React.FunctionComponent = () => {
  const [value, setValue] = useState('');
  return <TextArea value={value} onChange={(_event, value) => setValue(value)} aria-label="text area example" />;
};
