import React from 'react';
import { SearchInput } from '@patternfly/react-core';

export const SearchInputWithNavigableOptions: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('');
  const [resultsCount, setResultsCount] = React.useState(0);
  const [currentResult, setCurrentResult] = React.useState(1);

  const onChange = (value: string) => {
    setValue(value);
    setResultsCount(3);
  };

  const onClear = () => {
    setValue('');
    setResultsCount(0);
    setCurrentResult(1);
  };

  const onNext = () => {
    const newCurrentResult = currentResult + 1;
    setCurrentResult(newCurrentResult > resultsCount ? resultsCount : newCurrentResult);
  };

  const onPrevious = () => {
    const newCurrentResult = currentResult - 1;
    setCurrentResult(newCurrentResult > 0 ? newCurrentResult : 1);
  };

  return (
    <SearchInput
      placeholder="Find by name"
      value={value}
      onChange={(_event, value) => onChange(value)}
      onClear={onClear}
      isNextNavigationButtonDisabled={currentResult === 3}
      isPreviousNavigationButtonDisabled={currentResult === 1}
      resultsCount={`${currentResult} / ${resultsCount}`}
      onNextClick={onNext}
      onPreviousClick={onPrevious}
    />
  );
};
