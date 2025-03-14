import { useState } from 'react';
import { SearchInput } from '@patternfly/react-core';

export const SearchInputBasic: React.FunctionComponent = () => {
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <SearchInput
      placeholder="Find by name"
      value={value}
      onChange={(_event, value) => onChange(value)}
      onClear={() => onChange('')}
    />
  );
};
