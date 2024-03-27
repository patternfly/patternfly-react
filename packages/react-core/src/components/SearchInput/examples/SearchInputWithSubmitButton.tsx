import { FunctionComponent, useState } from 'react';
import { SearchInput } from '@patternfly/react-core';

export const SearchInputWithSubmitButton: FunctionComponent = () => {
  const [value, setValue] = useState('');

  return (
    <SearchInput
      placeholder="Find by name"
      value={value}
      onChange={(_event, value) => setValue(value)}
      onSearch={(_event, value) => setValue(value)}
      onClear={() => setValue('')}
    />
  );
};
