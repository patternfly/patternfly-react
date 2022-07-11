import React, { useState, useEffect, memo } from 'react';
import { LogViewerContext, LogViewerToolbarContext } from './LogViewerContext';
import { css } from '@patternfly/react-styles';
import { LogViewerRow } from './LogViewerRow';
import { parseConsoleOutput, searchedKeyWordType, stripAnsi } from './utils/utils';
import { VariableSizeList as List, areEqual } from '../react-window';
import styles from '@patternfly/react-styles/css/components/LogViewer/log-viewer';
import AnsiUp from '../ansi_up/ansi_up';

interface LogViewerProps {
  /** String or String Array data being sent by the consumer*/
  data?: string | string[];
  /** Consumer may turn off the visibility on the toolbar */
  hasToolbar?: boolean;
  /** Flag to enable or disable line numbers on the log viewer. */
  hasLineNumbers?: boolean;
  /** Width of the log viewer. */
  width?: number | string;
  /** Height of the log viewer. */
  height?: number | string;
  /** Rows rendered outside of view. The more rows are rendered, the higher impact on performance */
  overScanCount?: number;
  /** Toolbar rendered in the log viewer header */
  toolbar?: React.ReactNode;
  /** Content displayed while the log viewer is loading */
  loadingContent?: React.ReactNode;
  /** Flag indicating that log viewer is dark themed */
  theme?: 'dark' | 'light';
  /** Row index to scroll to */
  scrollToRow?: number;
  /** Number of rows to display in the log viewer */
  itemCount?: number;
  /** Flag indicating that log viewer is wrapping text or not */
  isTextWrapped?: boolean;
  /** Component rendered in the log viewer console window header */
  header?: React.ReactNode;
  /** Component rendered in the log viewer console window footer */
  footer?: React.ReactNode;
  /** Callback function when scrolling the window.
   * scrollDirection is the direction of scroll, could be 'forward'|'backward'.
   * scrollOffset and scrollOffsetToBottom are the offset of the current position to the top or the bottom.
   * scrollUpdateWasRequested is false when the scroll event is cause by the user interaction in the browser, else it's true.
   * @example onScroll={({scrollDirection, scrollOffset, scrollOffsetToBottom, scrollUpdateWasRequested})=>{}}
   */
  onScroll?: ({
    scrollDirection,
    scrollOffset,
    scrollOffsetToBottom,
    scrollUpdateWasRequested
  }: {
    scrollDirection: 'forward' | 'backward';
    scrollOffset: number;
    scrollOffsetToBottom: number;
    scrollUpdateWasRequested: boolean;
  }) => void;
  /** Forwarded ref */
  innerRef?: React.RefObject<any>;
}

let canvas: HTMLCanvasElement | undefined;

const getCharNums = (windowWidth: number, font: string) => {
  // if given, use cached canvas for better performance
  // else, create new canvas
  canvas = canvas || document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font;
  const oneChar = context.measureText('a');
  return Math.floor(windowWidth / oneChar.width);
};

const LogViewerBase: React.FunctionComponent<LogViewerProps> = memo(
  ({
    data = '',
    hasLineNumbers = true,
    height = 600,
    overScanCount = 10,
    loadingContent = '',
    toolbar,
    width,
    theme = 'light',
    scrollToRow = 0,
    itemCount = undefined,
    header,
    footer,
    onScroll,
    innerRef,
    isTextWrapped = true,
    ...props
  }: LogViewerProps) => {
    const [searchedInput, setSearchedInput] = useState<string | null>('');
    const [rowInFocus, setRowInFocus] = useState<searchedKeyWordType | null>({ rowIndex: scrollToRow, matchIndex: 0 });
    const [searchedWordIndexes, setSearchedWordIndexes] = useState<searchedKeyWordType[] | null>([]);
    const [currentSearchedItemCount, setCurrentSearchedItemCount] = useState<number>(0);
    const [parsedData, setParsedData] = useState<string[] | null>([]);
    const [lineHeight, setLineHeight] = useState<number>(0);
    const [charNumsPerLine, setCharNumsPerLine] = useState<number>(0);
    const [resizing, setResizing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [listKey, setListKey] = useState(1);
    const ansiUp = new AnsiUp();

    const logViewerRef = innerRef || React.useRef<any>();
    const containerRef = React.useRef<any>();
    let resizeTimer = null as any;

    useEffect(() => {
      if (containerRef && containerRef.current) {
        window.addEventListener('resize', callbackResize);
        setLoading(false);
        createDummyElements();
        ansiUp.resetStyles();
      }
      return () => window.removeEventListener('resize', callbackResize);
    }, [containerRef.current]);

    const callbackResize = () => {
      if (!resizing) {
        setResizing(true);
      }
      if (resizeTimer) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(() => {
        setResizing(false);
        createDummyElements();
      }, 100);
    };

    useEffect(() => {
      setLoading(resizing);
    }, [resizing]);

    const dataToRender = React.useMemo(
      () => ({
        parsedData,
        logViewerRef,
        rowInFocus,
        searchedWordIndexes
      }),
      [data, parsedData, logViewerRef, rowInFocus, searchedWordIndexes]
    );

    /* Parse data every time it changes */
    useEffect(() => {
      setParsedData(parseConsoleOutput(data));
    }, [data]);

    useEffect(() => {
      if (logViewerRef && logViewerRef.current) {
        logViewerRef.current.resetAfterIndex(0);
      }
    }, [parsedData]);

    useEffect(() => {
      if (scrollToRow && parsedData.length) {
        setRowInFocus({ rowIndex: scrollToRow, matchIndex: 0 });
        // only in this way (setTimeout) the scrollToItem will work
        setTimeout(() => {
          if (logViewerRef && logViewerRef.current) {
            logViewerRef.current.scrollToItem(scrollToRow, 'center');
          }
        }, 1);
      }
    }, [parsedData, scrollToRow]);

    const createDummyElements = () => {
      const dummyIndex = document.createElement('span');
      dummyIndex.className = css(styles.logViewerIndex);
      const dummyText = document.createElement('span');
      dummyText.className = css(styles.logViewerText);
      containerRef.current.appendChild(dummyIndex);
      containerRef.current.appendChild(dummyText);
      const dummyIndexStyles = getComputedStyle(dummyIndex);
      const dummyTextStyles = getComputedStyle(dummyText);
      setLineHeight(parseFloat(dummyTextStyles.lineHeight));
      const lineWidth = hasLineNumbers
        ? (containerRef.current as HTMLDivElement).clientWidth -
          (parseFloat(dummyTextStyles.paddingLeft) +
            parseFloat(dummyTextStyles.paddingRight) +
            parseFloat(dummyIndexStyles.width))
        : (containerRef.current as HTMLDivElement).clientWidth -
          (parseFloat(dummyTextStyles.paddingLeft) + parseFloat(dummyTextStyles.paddingRight));
      const charNumsPerLine = getCharNums(
        lineWidth,
        `${dummyTextStyles.fontWeight} ${dummyTextStyles.fontSize} ${dummyTextStyles.fontFamily}`
      );
      setCharNumsPerLine(charNumsPerLine);
      containerRef.current.removeChild(dummyIndex);
      containerRef.current.removeChild(dummyText);
      setListKey(listKey => listKey + 1);
    };

    const scrollToRowInFocus = (searchedRowIndex: searchedKeyWordType) => {
      setRowInFocus(searchedRowIndex);
      logViewerRef.current.scrollToItem(searchedRowIndex.rowIndex, 'center');
      // use this method to scroll to the right
      // if the keyword is out of the window when wrapping text
      if (!isTextWrapped) {
        setTimeout(() => {
          const element = containerRef.current.querySelector('.pf-c-log-viewer__string.pf-m-current');
          element && element.scrollIntoView({ block: 'nearest', inline: 'center' });
        }, 1);
      }
    };

    useEffect(() => {
      setListKey(listKey => listKey + 1);
    }, [isTextWrapped]);

    const guessRowHeight = (rowIndex: number) => {
      if (!isTextWrapped) {
        return lineHeight;
      }
      // strip ansi escape code before estimate the row height
      const rowText = stripAnsi(parsedData[rowIndex]);
      // get the row numbers of the current text
      const numRows = Math.ceil(rowText.length / charNumsPerLine);
      // multiply by line height to get the total height
      return lineHeight * (numRows || 1);
    };

    const createList = (parsedData: string[]) => (
      <List
        key={listKey}
        outerClassName={css(styles.logViewerScrollContainer)}
        innerClassName={css(styles.logViewerList)}
        height={containerRef.current.clientHeight}
        width={containerRef.current.clientWidth}
        itemSize={guessRowHeight}
        itemCount={typeof itemCount === 'undefined' ? parsedData.length : itemCount}
        itemData={dataToRender}
        ref={logViewerRef}
        overscanCount={overScanCount}
        onScroll={onScroll}
        isTextWrapped={isTextWrapped}
        hasLineNumbers={hasLineNumbers}
        ansiUp={ansiUp}
      >
        {LogViewerRow}
      </List>
    );

    return (
      <LogViewerContext.Provider
        value={{
          parsedData,
          searchedInput
        }}
      >
        <div
          className={css(
            styles.logViewer,
            hasLineNumbers && styles.modifiers.lineNumbers,
            !isTextWrapped && styles.modifiers.nowrap,
            theme === 'dark' && styles.modifiers.dark
          )}
          {...props}
        >
          {toolbar && (
            <LogViewerToolbarContext.Provider
              value={{
                itemCount,
                searchedInput,
                rowInFocus,
                searchedWordIndexes,
                currentSearchedItemCount,
                scrollToRow: scrollToRowInFocus,
                setRowInFocus,
                setSearchedInput,
                setSearchedWordIndexes,
                setCurrentSearchedItemCount
              }}
            >
              <div className={css(styles.logViewerHeader)}>{toolbar}</div>
            </LogViewerToolbarContext.Provider>
          )}
          {header}
          <div className={css(styles.logViewerMain)} style={{ height, width }} ref={containerRef}>
            {loading ? <div>{loadingContent}</div> : createList(parsedData)}
          </div>
          {footer}
        </div>
      </LogViewerContext.Provider>
    );
  },
  areEqual
);

export const LogViewer = React.forwardRef((props: LogViewerProps, ref: React.Ref<any>) => (
  <LogViewerBase innerRef={ref as React.MutableRefObject<any>} {...props} />
));

LogViewer.displayName = 'LogViewer';
