import React, { useState, useEffect, memo } from 'react';
import { LOGGER_LINE_NUMBER_INDEX_DELTA } from './utils/constants';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/LogViewer/log-viewer';

interface LogViewerRowProps extends React.Props<HTMLElement> {
  index: number;
  style?: React.CSSProperties;
  data: {
    parsedData: any;
    rowInFocus: number;
    highlightedRowIndexes: number[];
    setHighlightedRowIndexes: (indexes: number[]) => void;
  };
}

export const LogViewerRow: React.FunctionComponent<LogViewerRowProps> = memo(({ index, style, data }) => {
  const { parsedData, highlightedRowIndexes, setHighlightedRowIndexes, rowInFocus } = data;
  const [clickCounter, setClickCounter] = useState(0);
  const [isHiglighted, setIsHiglighted] = useState(false);

  useEffect(() => {
    let currentHighlightedIndexes = [];
    currentHighlightedIndexes = highlightedRowIndexes;
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

  const getData = (index: number): number => parsedData[index];

  const getRowIndex = (index: number): number => index + LOGGER_LINE_NUMBER_INDEX_DELTA;

  const handleHighlightRow = () => {
    const counter = clickCounter + 1;
    setClickCounter(counter);
    setIsHiglighted(!isHiglighted);
  };

  /** Helper function for applying the correct styling for styling rows containing searched keywords */
  const handleSearchedItemHighlight = (index: number): string => {
    if (rowInFocus === index) {
      return css(styles.logViewerListItem) + ' pf-m-match';
    } else if (rowInFocus !== index) {
      return css(styles.logViewerListItem);
    }
  };

  return (
    <div style={style} className={handleSearchedItemHighlight(index)} onClick={() => handleHighlightRow()}>
      <span className={css(styles.logViewerIndex)}>{getRowIndex(index)}</span>
      {/* <span className={css(styles.logViewerText) + (rowInFocus === index ? ' pf-m-match' : '')} onClick={() => handleHighlightRow()}> */}
      <span className={css(styles.logViewerText)} onClick={() => handleHighlightRow()}>
        {getData(index)}
      </span>
    </div>
  );
});
LogViewerRow.displayName = 'LogViewerRow';
