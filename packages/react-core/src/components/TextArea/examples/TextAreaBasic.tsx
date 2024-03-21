import { FunctionComponent, useState } from 'react';
import { TextArea } from '@patternfly/react-core';

export const TextAreaBasic: FunctionComponent = () => {
  const [value, setValue] = useState('');
  return <TextArea value={value} onChange={(_event, value) => setValue(value)} aria-label="text area example" />;
};
