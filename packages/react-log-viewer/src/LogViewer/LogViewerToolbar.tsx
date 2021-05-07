import React, { useState, useEffect } from 'react';
import { NUMBER_INDEX_DELTA } from './utils/constants';
import { SearchInput, Toolbar, ToolbarItem, ToolbarContent, ToolbarGroup } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/LogViewer/log-viewer';

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
  /** Place holder text inside of searchbar */
  placeholder: string;
  /** Function that scrolls the virtual table to the provided index row */
  scrollToRow: (searchedRow: number) => void;
  setRowInFocus: (index: number) => void;
  setSearchedInput: (input: string) => void;
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
  setRowInFocus,
  setSearchedInput,
  setSearchedWordIndexes,
}) => {
  const [currentSearchItemCount, setCurrentSearchItemCount] = useState<number>(0);
  const DEFAULT_FOCUS = -1;
  const DEFAULT_INDEX = 0;

  /* Defaulting the first focused row that contain searched keywords */
  useEffect(() => {
    if (searchedWordIndexes.length >= 1) {
      scrollToRow(searchedWordIndexes[DEFAULT_INDEX]);
    }
  }, [searchedWordIndexes]);

  /* Clearing out the search input */
  const handleClear = (): void => {
    setSearchedInput('');
    setCurrentSearchItemCount(0);
    setSearchedWordIndexes([]);
    setRowInFocus(DEFAULT_FOCUS);
  };

  /* Moving focus over to next row containing searched word */
  const handleNextSearchItem = (): void => {
    const oldIndex = searchedWordIndexes.indexOf(rowInFocus);
    const adjustedSearchCount = currentSearchItemCount + 1;
    let tempPosition = oldIndex;

    if (oldIndex >= searchedWordIndexes.length - NUMBER_INDEX_DELTA) {
      return null;
    }

    setCurrentSearchItemCount(adjustedSearchCount);
    scrollToRow(searchedWordIndexes[++tempPosition]);
  };

  /* Moving focus over to next row containing searched word */
  const handlePrevSearchItem = (): void => {
    const oldIndex = searchedWordIndexes.indexOf(rowInFocus);
    const adjustedSearchCount = currentSearchItemCount - 1;
    let temp = oldIndex;

    if (oldIndex <= 0) {
      return null;
    }

    setCurrentSearchItemCount(adjustedSearchCount);
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
            resultsCount={`${currentSearchItemCount + 1} / ${searchedWordIndexes.length}`}
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
