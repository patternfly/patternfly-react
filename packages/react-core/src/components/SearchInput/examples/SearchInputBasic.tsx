import React from 'react';
import { SearchInput } from '@patternfly/react-core';

export const SearchInputBasic: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return <SearchInput placeholder="Find by name" value={value} onChange={onChange} onClear={() => onChange('')} />;
};
