import React from 'react';
import { SearchInput } from '@patternfly/react-core';

export const SearchInputWithSubmitButton: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');

  return (
    <SearchInput
      placeholder="Find by name"
      value={value}
      onChange={setValue}
      onSearch={setValue}
      onClear={() => setValue('')}
    />
  );
};
