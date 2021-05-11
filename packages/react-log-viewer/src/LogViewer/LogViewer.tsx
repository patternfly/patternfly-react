import React, { useState, useEffect, memo } from 'react';
import { LogViewerContext } from './LogViewerContext';
import { css } from '@patternfly/react-styles';
import { LogViewerRow } from './LogViewerRow';
import { LogViewerToolbar } from './LogViewerToolbar';
import { DEFAULT_FOCUS, DEFAULT_SEARCH_INDEX, DEFAULT_INDEX } from './utils/constants';
import { searchForKeyword, parseConsoleOutput, escapeString } from './utils/utils';
import { VariableSizeList as List, areEqual } from '../react-window';
import styles from '@patternfly/react-styles/css/components/LogViewer/log-viewer';

interface LogViewerProps {
  /** String data being sent by the consumer*/
  data?: string;
  /** Consumer may turn off the visibility on the toolbar */
  hasToolbar?: boolean;
  /** Consumers may define their own controls to feed to the toolbar for custom functionality. */
  customControls?: React.ReactNode;
  /** Placeholder text for the searchbar. */
  placeholder?: string;
  /** Flag to enable or disable line numbers on the log viewer. */
  hasLineNumbers?: boolean;
  /** Width in pixels of the log viewer */
  width: number;
  /** Height in pixels of the log viewer */
  height?: number;
  /** Rows being rendered outside of view. The more rows are rendered, the higher impact on performance */
  overScanCount?: number;
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
    width = 800,
    height = 600,
    overScanCount = 10,
    ...props
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
      }
    }, [searchedInput]);

    const scrollToRow = (searchedRowIndex: number) => {
      setRowInFocus(searchedRowIndex);
      loggerRef.current.scrollToItem(searchedRowIndex, 'center');
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
        <div className={css(styles.logViewer, hasLineNumbers && styles.modifiers.lineNumbers)} {...props}>
          {hasToolbar && (
            <LogViewerToolbar
              placeholder={placeholder}
              searchedInput={searchedInput}
              rowInFocus={rowInFocus}
              searchedWordIndexes={searchedWordIndexes}
              currentSearchedItemCount={currentSearchedItemCount}
              scrollToRow={scrollToRow}
              customControls={customControls}
              setRowInFocus={setRowInFocus}
              setSearchedInput={setSearchedInput}
              setSearchedWordIndexes={setSearchedWordIndexes}
              setCurrentSearchedItemCount={setCurrentSearchedItemCount}
            />
          )}
          <div className={css(styles.logViewerMain)}>
            <List
              className={css(styles.logViewerList)}
              height={height}
              width={`${width}px`}
              itemSize={guessRowHeight}
              itemCount={parsedData.length}
              itemData={dataToRender}
              ref={loggerRef}
              overscanCount={overScanCount}
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
