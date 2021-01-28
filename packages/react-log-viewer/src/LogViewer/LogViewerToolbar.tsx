import React, { useState, useEffect } from 'react';
import { NUMBER_INDEX_DELTA } from './utils/constants';
import { SearchInput, Toolbar, ToolbarItem, ToolbarContent, ToolbarGroup } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/LogViewer/log-viewer';
// import styles from '@patternfly/react-styles/css/components/LogViewer/loggerToolbar.styles';

export interface LogViewerToolbarProps extends React.HTMLProps<HTMLDivElement> {
  /** Flag to turn toolbar on or off */
  hasToolbar?: boolean;
  /** Optional user defined buttons */
  customControls?: React.ReactNode;
  /** Array of indexes of rows that contain searched keywords */
  searchedWordIndexes: number[];
  /** Index of row currently highlighted for the user  */
  rowInFocus: number;
  /** User input being searched in the log viewer  */
  searchedInput: string;
  /** Used for defaulting the search to the first entry of the searchedWordIndex */
  foundWordIndex: number;
  /** Place holder text inside of searchbar */
  placeholder: string;
  /** Function that scrolls the virtual table to the provided index row */
  scrollToRow: (searchedRow: number) => void;
  setRowInFocus: (index: number) => void;
  setSearchedInput: (input: string) => void;
  setFoundWordIndex: (index: number) => void;
  setSearchedWordIndexes: (indexes: number[]) => void;
}

export const LogViewerToolbar: React.FunctionComponent<LogViewerToolbarProps> = ({
  placeholder,
  scrollToRow,
  customControls = null,
  hasToolbar = true,
  rowInFocus,
  searchedInput,
  searchedWordIndexes,
  foundWordIndex,
  setRowInFocus,
  setSearchedInput,
  setSearchedWordIndexes,
  setFoundWordIndex
}) => {
  const [currentSearchItemCount, setCurrentSearchItemCount] = useState<number>(0);
  const DEFAULT_FOCUS = -1;
  const DEFAULT_INDEX = 0;

  /* Defaulting the first focused row that contain searched keywords */
  useEffect(() => {
    if (searchedWordIndexes.length >= 1) {
      setFoundWordIndex(DEFAULT_INDEX);
    }
  }, [searchedWordIndexes]);

  /* Clearing out the search input */
  const handleClear = (): void => {
    console.log('Clearing out our search: ', searchedInput);
    setSearchedInput('');
    setFoundWordIndex(0);
    setSearchedWordIndexes([]);
    setRowInFocus(DEFAULT_FOCUS);
  };

  /* Moving focus over to next row containing searched word */
  const handleNextSearchItem = (): void => {
    const oldIndex = searchedWordIndexes.indexOf(rowInFocus);
    console.log('Testing indexes for next: ', oldIndex);
    const adjustedSearchCount = currentSearchItemCount + 1;
    let temp = foundWordIndex;

    if (adjustedSearchCount > searchedWordIndexes.length - NUMBER_INDEX_DELTA) {
      return null;
    }

    setCurrentSearchItemCount(adjustedSearchCount);
    setFoundWordIndex(++temp);
    scrollToRow(searchedWordIndexes[foundWordIndex]);
  };

  /* Moving focus over to next row containing searched word */
  const handlePrevSearchItem = (): void => {
    const oldIndex = searchedWordIndexes.indexOf(rowInFocus);
    console.log('Testing indexes for previous: ', oldIndex);
    const adjustedSearchCount = currentSearchItemCount - 1;
    let temp = foundWordIndex;

    if (adjustedSearchCount < 1) {
      return null;
    }

    setCurrentSearchItemCount(adjustedSearchCount);
    setFoundWordIndex(--temp);
    scrollToRow(searchedWordIndexes[--temp]);
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
            resultsCount={`${currentSearchItemCount} / ${searchedWordIndexes.length}`}
          />
        </ToolbarGroup>
      </ToolbarItem>
      {customControls && customControls}
    </>
  );

  return hasToolbar ? (
    <div className={css(styles.logViewerHeader)}>
      <Toolbar>
        <ToolbarContent className={css(styles.toolbarContentSection)}>{toolbarItems}</ToolbarContent>
      </Toolbar>
    </div>
  ) : null;
};
LogViewerToolbar.displayName = 'LogViewerToolbar';
