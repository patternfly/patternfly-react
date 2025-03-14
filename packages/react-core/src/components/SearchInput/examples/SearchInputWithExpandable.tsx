import { useState } from 'react';
import { SearchInput } from '@patternfly/react-core';

export const SearchInputWithExpandable: React.FunctionComponent = () => {
  const [value, setValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const onChange = (value: string) => {
    setValue(value);
  };

  const onToggleExpand = (_event: React.SyntheticEvent<HTMLButtonElement>, isExpanded: boolean) => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SearchInput
      placeholder="Find by name"
      value={value}
      onChange={(_event, value) => onChange(value)}
      onClear={() => onChange('')}
      expandableInput={{ isExpanded, onToggleExpand, toggleAriaLabel: 'Expandable search input toggle' }}
    />
  );
};
