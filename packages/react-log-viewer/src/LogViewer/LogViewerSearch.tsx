import React, { useEffect, useState } from 'react';
import { NUMBER_INDEX_DELTA, DEFAULT_FOCUS, DEFAULT_INDEX } from './utils/constants';
import { SearchInput, SearchInputProps } from '@patternfly/react-core';
import { LogViewerToolbarContext } from './LogViewerContext';

export interface LogViewerSearchProps extends SearchInputProps {
  /** Place holder text inside of searchbar */
  placeholder: string;
}

export const LogViewerSearch: React.FunctionComponent<LogViewerSearchProps> = ({
  placeholder = 'Search',
  ...props
}) => {
  const [indexAdjuster, setIndexAdjuster] = useState(0);
  const {
    searchedWordIndexes,
    scrollToRow,
    setSearchedInput,
    setCurrentSearchedItemCount,
    setRowInFocus,
    setSearchedWordIndexes,
    rowInFocus,
    currentSearchedItemCount,
    searchedInput
  } = React.useContext(LogViewerToolbarContext);

  /* Defaulting the first focused row that contain searched keywords */
  useEffect(() => {
    if (searchedWordIndexes.length >= 1) {
      setIndexAdjuster(1);
      scrollToRow(searchedWordIndexes[DEFAULT_INDEX]);
    } else {
      setIndexAdjuster(0);
    }
  }, [searchedWordIndexes]);

  /* Clearing out the search input */
  const handleClear = (): void => {
    setSearchedInput('');
    setCurrentSearchedItemCount(DEFAULT_INDEX);
    setSearchedWordIndexes([]);
    setRowInFocus(DEFAULT_FOCUS);
  };

  /* Moving focus over to next row containing searched word */
  const handleNextSearchItem = (): void => {
    const oldIndex = searchedWordIndexes.indexOf(rowInFocus);
    const adjustedSearchCount = currentSearchedItemCount + NUMBER_INDEX_DELTA;
    let tempPosition = oldIndex;

    if (oldIndex >= searchedWordIndexes.length - NUMBER_INDEX_DELTA) {
      return null;
    }

    setCurrentSearchedItemCount(adjustedSearchCount);
    scrollToRow(searchedWordIndexes[++tempPosition]);
  };

  /* Moving focus over to next row containing searched word */
  const handlePrevSearchItem = (): void => {
    const oldIndex = searchedWordIndexes.indexOf(rowInFocus);
    const adjustedSearchCount = currentSearchedItemCount - NUMBER_INDEX_DELTA;
    let tempPosition = oldIndex;

    if (oldIndex <= DEFAULT_INDEX) {
      return null;
    }

    setCurrentSearchedItemCount(adjustedSearchCount);
    scrollToRow(searchedWordIndexes[--tempPosition]);
  };

  return (
    <SearchInput
      placeholder={placeholder}
      value={searchedInput}
      resultsCount={`${currentSearchedItemCount + indexAdjuster} / ${searchedWordIndexes.length}`}
      {...props}
      onChange={(input, event) => {
        props.onChange && props.onChange(input, event);
        setSearchedInput(input);
      }}
      onNextClick={event => {
        props.onNextClick && props.onNextClick(event);
        handleNextSearchItem();
      }}
      onPreviousClick={event => {
        props.onPreviousClick && props.onPreviousClick(event);
        handlePrevSearchItem();
      }}
      onClear={event => {
        props.onClear && props.onClear(event);
        handleClear();
      }}
    />
  );
};
LogViewerSearch.displayName = 'LogViewerSearch';
