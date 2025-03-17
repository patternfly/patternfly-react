import { useRef, useState } from 'react';
import { TextInput } from '@patternfly/react-core';

export const TextInputSelectUsingRef: React.FunctionComponent = () => {
  const [value, setValue] = useState('select all on click');
  const ref = useRef<HTMLInputElement>(null);
  return (
    <TextInput
      ref={ref}
      value={value}
      onFocus={() => ref?.current?.select()}
      onChange={(_event, value) => setValue(value)}
      aria-label="select-all"
    />
  );
};
