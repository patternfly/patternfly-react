import React from 'react';
import { TextInput } from '@patternfly/react-core';

export const TextInputSelectAll: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('select all on click');
  const ref = React.useRef<any>(null);
  return (
    <TextInput
      ref={ref}
      value={value}
      onFocus={() => ref && ref.current && ref.current.select()}
      onChange={value => setValue(value)}
      aria-label="select-all"
    />
  );
};
