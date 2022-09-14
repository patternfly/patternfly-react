import React from 'react';
import { SearchInput } from '@patternfly/react-core';

export const SearchInputWithExpandable: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [isExpanded, setIsExpanded] = React.useState(false);

  const onChange = (value: string) => {
    setValue(value);
  };

  const onToggleExpand = (isExpanded: boolean) => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SearchInput
      placeholder="Find by name"
      value={value}
      onChange={onChange}
      onClear={() => onChange('')}
      expandableInput={{ isExpanded, onToggleExpand, toggleAriaLabel: 'Expandable search input toggle' }}
    />
  );
};
