import React from 'react';
import { TextInput } from '@patternfly/react-core';

export const TextInputSelectUsingRef: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('select all on click');
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <TextInput
      ref={ref}
      value={value}
      onFocus={() => ref?.current?.select()}
      onChange={value => setValue(value)}
      aria-label="select-all"
    />
  );
};
