import React, { useState, useEffect, memo } from 'react';
import { LOGGER_LINE_NUMBER_INDEX_DELTA } from './utils/constants';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/LogViewer/log-viewer';
import { LogViewerContext } from './LogViewerContext';

interface LogViewerRowProps {
  index?: number;
  style?: React.CSSProperties;
  data?: {
    parsedData: string[] | null;
    rowInFocus: number;
    searchedWordIndexes: number[];
    highlightedRowIndexes: number[];
    setHighlightedRowIndexes: (indexes: number[]) => void;
  };
  innerRef?: React.Ref<any>;
}

const LogViewerRowBase: React.FunctionComponent<LogViewerRowProps> = memo(({ index, style, data, innerRef }) => {
  const { parsedData, highlightedRowIndexes, searchedWordIndexes, setHighlightedRowIndexes, rowInFocus } = data;
  const [clickCounter, setClickCounter] = useState(0);
  const [isHiglighted, setIsHiglighted] = useState(false);
  const context = React.useContext(LogViewerContext);

  useEffect(() => {
    const currentHighlightedIndexes = highlightedRowIndexes;
    let temp = 0;

    if (isHiglighted && clickCounter > 0) {
      currentHighlightedIndexes.push(index);
      setHighlightedRowIndexes(currentHighlightedIndexes);
    } else if (!isHiglighted && clickCounter > 0) {
      temp = currentHighlightedIndexes.indexOf(index);
      currentHighlightedIndexes.splice(temp, 1);
      setHighlightedRowIndexes(currentHighlightedIndexes);
    }
  }, [clickCounter]);

  useEffect(() => {
    const highlightIndex = highlightedRowIndexes.indexOf(index);
    highlightIndex === -1 ? setIsHiglighted(false) : setIsHiglighted(true);
  }, []);

  const getData = (index: number): string => (parsedData ? parsedData[index] : null);

  const getRowIndex = (index: number): number => index + LOGGER_LINE_NUMBER_INDEX_DELTA;

  const handleHighlightRow = () => {
    const counter = clickCounter + 1;
    setClickCounter(counter);
    setIsHiglighted(!isHiglighted);
  };

  /** Helper function for applying the correct styling for styling rows containing searched keywords */
  const handleHighlight = () => {
    if (searchedWordIndexes.includes(index)) {
      if (rowInFocus === index) {
        return styles.modifiers.current;
      }
      return styles.modifiers.match;
    }
    return '';
  };

  const getFormattedData = () => {
    if (context.searchedInput) {
      const regEx = new RegExp(`(${context.searchedInput})`, 'ig');
      const splitString = getData(index).split(regEx);
      const composedString = [] as React.ReactNode[];
      splitString.map((substr, index) => {
        if (substr.match(regEx)) {
          composedString.push(
            <span className={css(styles.logViewerString, handleHighlight())} key={index}>
              {substr}
            </span>
          );
        } else {
          composedString.push(substr);
        }
      });
      return composedString;
    }
    return getData(index);
  };

  return (
    <div
      key={index}
      ref={innerRef}
      style={style}
      className={css(styles.logViewerListItem)}
      onClick={() => handleHighlightRow()}
    >
      <span className={css(styles.logViewerIndex)}>{getRowIndex(index)}</span>
      <span className={css(styles.logViewerText)} onClick={() => handleHighlightRow()}>
        {getFormattedData()}
      </span>
    </div>
  );
});

export const LogViewerRow = React.forwardRef((props: LogViewerRowProps, ref: React.Ref<HTMLButtonElement>) => (
  <LogViewerRowBase {...props} innerRef={ref} />
));

LogViewerRow.displayName = 'LogViewerRow';
