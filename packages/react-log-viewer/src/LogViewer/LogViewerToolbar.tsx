import React, { useEffect, useState } from 'react';
import { NUMBER_INDEX_DELTA, DEFAULT_FOCUS, DEFAULT_INDEX } from './utils/constants';
import { SearchInput, Toolbar, ToolbarItem, ToolbarContent, ToolbarGroup } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/LogViewer/log-viewer';

export interface LogViewerToolbarProps extends React.HTMLProps<HTMLDivElement> {
  /** Optional user defined buttons */
  customControls?: React.ReactNode;
  /** Array of indexes of rows that contain searched keywords */
  searchedWordIndexes: number[];
  /** Index of row currently highlighted for the user  */
  rowInFocus: number;
  /** User input being searched in the log viewer  */
  searchedInput: string;
  /** Counter for keeping track of the instance in focus of users seardched input */
  currentSearchedItemCount: number;
  /** Place holder text inside of searchbar */
  placeholder: string;
  /** Function that scrolls the virtual table to the provided index row */
  scrollToRow: (searchedRow: number) => void;
  /** Sets the current row focused by search results */
  setRowInFocus: (index: number) => void;
  /** Sets the value of the search input */
  setSearchedInput: (input: string) => void;
  /** Sets the indexes of rows containing found search results */
  setSearchedWordIndexes: (indexes: number[]) => void;
  /** Sets current amount of search results */
  setCurrentSearchedItemCount: (index: number) => void;
}

export const LogViewerToolbar: React.FunctionComponent<LogViewerToolbarProps> = ({
  placeholder,
  scrollToRow,
  customControls = null,
  rowInFocus,
  searchedInput,
  searchedWordIndexes,
  currentSearchedItemCount,
  setRowInFocus,
  setSearchedInput,
  setSearchedWordIndexes,
  setCurrentSearchedItemCount
}) => {
  const [indexAdjuster, setIndexAdjuster] = useState(0);

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

  const toolbarItems = (
    <>
      <ToolbarItem>
        <ToolbarGroup>
          <SearchInput
            placeholder={placeholder}
            value={searchedInput}
            onNextClick={() => handleNextSearchItem()}
            onPreviousClick={() => handlePrevSearchItem()}
            onClear={() => handleClear()}
            onChange={input => setSearchedInput(input)}
            resultsCount={`${currentSearchedItemCount + indexAdjuster} / ${searchedWordIndexes.length}`}
          />
        </ToolbarGroup>
      </ToolbarItem>
      {customControls && customControls}
    </>
  );

  return (
    <div className={css(styles.logViewerHeader)}>
      <Toolbar>
        <ToolbarContent className={css(styles.toolbarContentSection)}>{toolbarItems}</ToolbarContent>
      </Toolbar>
    </div>
  );
};
LogViewerToolbar.displayName = 'LogViewerToolbar';
