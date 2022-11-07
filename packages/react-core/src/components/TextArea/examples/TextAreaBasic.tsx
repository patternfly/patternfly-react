import React from 'react';
import { TextArea } from '@patternfly/react-core';

export const TextAreaBasic: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  return <TextArea value={value} onChange={value => setValue(value)} aria-label="text area example" />;
};
