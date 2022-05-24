import React, { memo, useContext } from 'react';
import ReactDOMServer from 'react-dom/server';
import { LOGGER_LINE_NUMBER_INDEX_DELTA } from './utils/constants';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/LogViewer/log-viewer';
import { LogViewerContext } from './LogViewerContext';
import AnsiUp from '../ansi_up/ansi_up';
import { escapeString, escapeTextForHtml, isAnsi, searchedKeyWordType, splitAnsi } from './utils/utils';

interface LogViewerRowProps {
  index: number;
  style?: React.CSSProperties;
  data: {
    parsedData: string[] | null;
    rowInFocus: searchedKeyWordType;
    searchedWordIndexes: searchedKeyWordType[];
  };
  ansiUp: AnsiUp;
}

export const LogViewerRow: React.FunctionComponent<LogViewerRowProps> = memo(({ index, style, data, ansiUp }) => {
  const { parsedData, searchedWordIndexes, rowInFocus } = data;
  const context = useContext(LogViewerContext);

  const getData = (index: number): string => (parsedData ? parsedData[index] : null);

  const getRowIndex = (index: number): number => index + LOGGER_LINE_NUMBER_INDEX_DELTA;

  /** Helper function for applying the correct styling for styling rows containing searched keywords */
  const handleHighlight = (matchCounter: number) => {
    const searchedWordResult = searchedWordIndexes.filter(searchedWord => searchedWord.rowIndex === index);
    if (searchedWordResult.length !== 0) {
      if (rowInFocus.rowIndex === index && rowInFocus.matchIndex === matchCounter) {
        return styles.modifiers.current;
      }
      return styles.modifiers.match;
    }
    return '';
  };

  const getFormattedData = () => {
    const rowText = getData(index);
    let matchCounter = 0;
    if (context.searchedInput) {
      const splitAnsiString = splitAnsi(rowText);
      const regEx = new RegExp(`(${escapeString(context.searchedInput)})`, 'ig');
      const composedString: string[] = [];
      splitAnsiString.forEach(str => {
        matchCounter = 0;
        if (isAnsi(str)) {
          composedString.push(str);
        } else {
          const splitString = str.split(regEx);
          splitString.forEach((substr, newIndex) => {
            if (substr.match(regEx)) {
              matchCounter += 1;
              composedString.push(
                ReactDOMServer.renderToString(
                  <span className={css(styles.logViewerString, handleHighlight(matchCounter))} key={newIndex}>
                    {substr}
                  </span>
                )
              );
            } else {
              composedString.push(escapeTextForHtml(substr));
            }
          });
        }
      });
      return composedString.join('');
    }
    return escapeTextForHtml(rowText);
  };

  return (
    <div style={style} className={css(styles.logViewerListItem)}>
      <span className={css(styles.logViewerIndex)}>{getRowIndex(index)}</span>
      <span
        className={css(styles.logViewerText)}
        style={{ width: 'fit-content' }}
        dangerouslySetInnerHTML={{ __html: ansiUp.ansi_to_html(getFormattedData()) }}
      />
    </div>
  );
});
LogViewerRow.displayName = 'LogViewerRow';
