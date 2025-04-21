import { useState } from 'react';
import { SearchInput } from '@patternfly/react-core';

export const SearchInputWithSubmitButton: React.FunctionComponent = () => {
  const [value, setValue] = useState('');

  return (
    <SearchInput
      aria-label="Search with submit button example"
      placeholder="Find by name"
      value={value}
      onChange={(_event, value) => setValue(value)}
      onSearch={(_event, value) => setValue(value)}
      onClear={() => setValue('')}
    />
  );
};
