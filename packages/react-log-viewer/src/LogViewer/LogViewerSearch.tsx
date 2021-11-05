import React, { useContext, useEffect, useState } from 'react';
import { NUMBER_INDEX_DELTA, DEFAULT_FOCUS, DEFAULT_INDEX, DEFAULT_SEARCH_INDEX } from './utils/constants';
import { SearchInput, SearchInputProps } from '@patternfly/react-core';
import { LogViewerToolbarContext, LogViewerContext } from './LogViewerContext';
import { escapeString, searchForKeyword } from './utils/utils';

export interface LogViewerSearchProps extends SearchInputProps {
  /** Place holder text inside of searchbar */
  placeholder: string;
  /** Minimum number of characters required for searching */
  minSearchChars: number;
}

export const LogViewerSearch: React.FunctionComponent<LogViewerSearchProps> = ({
  placeholder = 'Search',
  minSearchChars = 1,
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
    currentSearchedItemCount,
    searchedInput,
    itemCount
  } = useContext(LogViewerToolbarContext);

  const { parsedData } = useContext(LogViewerContext);

  /* Defaulting the first focused row that contain searched keywords */
  useEffect(() => {
    if (hasFoundResults) {
      setIndexAdjuster(1);
      scrollToRow(searchedWordIndexes[DEFAULT_INDEX]);
    } else {
      setIndexAdjuster(0);
    }
  }, [searchedWordIndexes]);

  /* Updating searchedResults context state given changes in searched input */
  useEffect(() => {
    let foundKeywordIndexes: (number | null)[] = [];
    const adjustedSearchedInput = escapeString(searchedInput);

    if (adjustedSearchedInput !== '' && adjustedSearchedInput.length >= minSearchChars) {
      foundKeywordIndexes = searchForKeyword(adjustedSearchedInput, parsedData, itemCount || parsedData.length);

      if (foundKeywordIndexes.length !== 0) {
        setSearchedWordIndexes(foundKeywordIndexes);
        scrollToRow(foundKeywordIndexes[DEFAULT_SEARCH_INDEX]);
        setCurrentSearchedItemCount(DEFAULT_INDEX);
      }
    }

    if (!adjustedSearchedInput) {
      setRowInFocus(DEFAULT_FOCUS);
    }
  }, [searchedInput]);

  const hasFoundResults = searchedWordIndexes.length > 0 && searchedWordIndexes[0] !== -1;

  /* Clearing out the search input */
  const handleClear = (): void => {
    setSearchedInput('');
    setCurrentSearchedItemCount(DEFAULT_INDEX);
    setSearchedWordIndexes([]);
    setRowInFocus(DEFAULT_FOCUS);
  };

  /* Moving focus over to next row containing searched word */
  const handleNextSearchItem = (): void => {
    const adjustedSearchCount = (currentSearchedItemCount + NUMBER_INDEX_DELTA) % searchedWordIndexes.length;

    setCurrentSearchedItemCount(adjustedSearchCount);
    scrollToRow(searchedWordIndexes[adjustedSearchCount]);
  };

  /* Moving focus over to next row containing searched word */
  const handlePrevSearchItem = (): void => {
    let adjustedSearchCount = currentSearchedItemCount - NUMBER_INDEX_DELTA;

    if (adjustedSearchCount < DEFAULT_INDEX) {
      adjustedSearchCount += searchedWordIndexes.length;
    }

    setCurrentSearchedItemCount(adjustedSearchCount);
    scrollToRow(searchedWordIndexes[adjustedSearchCount]);
  };

  return (
    <SearchInput
      placeholder={placeholder}
      value={searchedInput}
      resultsCount={`${currentSearchedItemCount + indexAdjuster} / ${hasFoundResults ? searchedWordIndexes.length : 0}`}
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
