import React, { useState, useEffect, memo } from 'react';
import { LogViewerContext } from './LogViewerContext';
import { css } from '@patternfly/react-styles';
import { LogViewerRow } from './LogViewerRow';
import { LogViewerToolbar } from './LogViewerToolbar';
import { LOGGER_HEIGHT, DEFAULT_FOCUS, DEFAULT_SEARCH_INDEX, DEFAULT_INDEX } from './utils/constants';
import { searchForKeyword, parseConsoleOutput, escapeString } from './utils/utils';
import { VariableSizeList as List, areEqual } from '../react-window';
import styles from '@patternfly/react-styles/css/components/LogViewer/log-viewer';
import '@patternfly/react-core/dist/styles/base.css';

interface LogViewerProps {
  /** String data being sent by the consumer*/
  data?: string;
  /** Consumer may turn off the visibility on the toolbar */
  hasToolbar?: boolean;
  /** Consumers may define their own controls to feed to the toolbar for custom functionality. */
  customControls?: React.ReactNode;
  /** Placeholder text for the searchbar. */
  placeholder?: string;
  /** Flag to enable or disable line numbers on the logger. */
  hasLineNumbers?: boolean;
  /** Width in pixels of log viewer */
  width: number;
}

let canvas: HTMLCanvasElement | undefined;

function getTextWidth(text: string, font: string) {
  // if given, use cached canvas for better performance
  // else, create new canvas
  canvas = canvas || document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

export const LogViewer: React.FunctionComponent<LogViewerProps> = memo(
  ({
    data = '',
    hasToolbar = true,
    customControls = null,
    placeholder = 'Search',
    hasLineNumbers = true,
    width = 800
  }: LogViewerProps) => {
    const [searchedInput, setSearchedInput] = useState<string | null>('');
    const [rowInFocus, setRowInFocus] = useState<number | null>(null);
    const [searchedWordIndexes, setSearchedWordIndexes] = useState<number[] | null>([]);
    const [highlightedRowIndexes, setHighlightedRowIndexes] = useState<number[] | null>([]);
    const [currentSearchedItemCount, setCurrentSearchedItemCount] = useState<number>(0);
    const [parsedData, setParsedData] = useState<string[] | null>([]);
    const loggerRef = React.createRef<any>();

    const dataToRender = React.useMemo(
      () => ({
        parsedData,
        loggerRef,
        rowInFocus,
        searchedWordIndexes,
        highlightedRowIndexes,
        setHighlightedRowIndexes
      }),
      [parsedData, loggerRef, rowInFocus, searchedWordIndexes, highlightedRowIndexes, setHighlightedRowIndexes]
    );

    /* Parsing our data immediately after first component render */
    useEffect(() => {
      setParsedData(parseConsoleOutput(data));
    }, [data]);

    /* Updating searchedResults context state given changes in searched input */
    useEffect(() => {
      let foundKeywordIndexes: (number | null)[] = [];
      const adjustedSearchedInput = escapeString(searchedInput);

      if (adjustedSearchedInput !== '' && adjustedSearchedInput.length >= 3) {
        foundKeywordIndexes = searchForKeyword(adjustedSearchedInput, parsedData);

        if (foundKeywordIndexes.length !== 0) {
          setSearchedWordIndexes(foundKeywordIndexes);
          scrollToRow(foundKeywordIndexes[DEFAULT_SEARCH_INDEX]);
        }
      }

      if (adjustedSearchedInput !== '' && adjustedSearchedInput.length < 3) {
        setRowInFocus(DEFAULT_FOCUS);
        setCurrentSearchedItemCount(DEFAULT_INDEX);
        setSearchedWordIndexes([]);
      }

      if (adjustedSearchedInput === '') {
        setRowInFocus(DEFAULT_FOCUS);
        // setCurrentSearchedItemCount(DEFAULT_INDEX);
        // setSearchedWordIndexes([]);
      }
    }, [searchedInput]);

    const scrollToRow = (searchedRowIndex: number) => {
      setRowInFocus(searchedRowIndex);
      loggerRef.current.scrollToItem(searchedRowIndex, 'center');
      return true;
    };

    const loggerWidth = loggerRef.current ? loggerRef.current.clientWidth : 800;
    const guessRowHeight = (rowIndex: number) => {
      const rowText = parsedData[rowIndex];
      const textWidth = getTextWidth(rowText, 'Liberation Mono');
      const numRows = Math.ceil(textWidth / loggerWidth);

      return 60 * numRows;
    };

    return (
      <LogViewerContext.Provider
        value={{
          parsedData
        }}
      >
        <div className={css(styles.logViewer) + (hasLineNumbers ? ' pf-m-line-numbers' : '')}>
          <LogViewerToolbar
            placeholder={placeholder}
            searchedInput={searchedInput}
            rowInFocus={rowInFocus}
            searchedWordIndexes={searchedWordIndexes}
            currentSearchedItemCount={currentSearchedItemCount}
            scrollToRow={scrollToRow}
            customControls={customControls}
            hasToolbar={hasToolbar}
            setRowInFocus={setRowInFocus}
            setSearchedInput={setSearchedInput}
            setSearchedWordIndexes={setSearchedWordIndexes}
            setCurrentSearchedItemCount={setCurrentSearchedItemCount}
          />
          <div className="pf-c-log-viewer__main">
            <List
              className={css(styles.logViewerList)}
              height={LOGGER_HEIGHT}
              width={`${width}px`}
              itemSize={guessRowHeight}
              itemCount={parsedData.length}
              itemData={dataToRender}
              ref={loggerRef}
              overscanCount={15}
            >
              {LogViewerRow}
            </List>
          </div>
        </div>
      </LogViewerContext.Provider>
    );
  },
  areEqual
);

LogViewer.displayName = 'LogViewer';
