import { useState } from 'react';
import { SearchInput } from '@patternfly/react-core';

export const SearchInputWithResultCount: React.FunctionComponent = () => {
  const [value, setValue] = useState('');
  const [resultsCount, setResultsCount] = useState(0);

  const onChange = (value: string) => {
    setValue(value);
    setResultsCount(3);
  };

  const onClear = () => {
    setValue('');
    setResultsCount(0);
  };

  return (
    <SearchInput
      aria-label="Match with result count"
      placeholder="Find by name"
      value={value}
      onChange={(_event, value) => onChange(value)}
      onClear={onClear}
      resultsCount={resultsCount}
    />
  );
};
