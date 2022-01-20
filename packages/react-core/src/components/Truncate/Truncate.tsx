import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Truncate/truncate';
import { css } from '@patternfly/react-styles';
import { Tooltip } from '../Tooltip';

export enum TruncatePosition {
  start = 'start',
  end = 'end',
  middle = 'middle'
}

const truncateStyles = {
  start: styles.truncateEnd,
  end: styles.truncateStart
};

const minWidthCharacters: number = 12;

interface TruncateProps extends React.HTMLProps<HTMLSpanElement> {
  /** Class to add to outer span */
  className?: string;
  /** Text to truncate */
  content: string;
  /** The number of characters displayed in the second half of the truncation */
  trailingNumChars?: number;
  /** Where the text will be truncated */
  position?: 'start' | 'middle' | 'end';
  /** Tooltip position */
  tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
}

const sliceContent = (str: string, slice: number) => [str.slice(0, str.length - slice), str.slice(-slice)];

export const Truncate: React.FunctionComponent<TruncateProps> = ({
  className,
  position = 'end',
  tooltipPosition = 'top',
  trailingNumChars = 7,
  content,
  ...props
}: TruncateProps) => (
  <Tooltip position={tooltipPosition} content={content}>
    <span className={css(styles.truncate, className)} {...props}>
      {(position === TruncatePosition.end || position === TruncatePosition.start) && (
        <span className={truncateStyles[position]}>
          {content}
          {position === TruncatePosition.start && <React.Fragment>&lrm;</React.Fragment>}
        </span>
      )}
      {position === TruncatePosition.middle &&
        content.slice(0, content.length - trailingNumChars).length > minWidthCharacters && (
          <React.Fragment>
            <span className={styles.truncateStart}>{sliceContent(content, trailingNumChars)[0]}</span>
            <span className={styles.truncateEnd}>{sliceContent(content, trailingNumChars)[1]}</span>
          </React.Fragment>
        )}
      {position === TruncatePosition.middle &&
        content.slice(0, content.length - trailingNumChars).length <= minWidthCharacters &&
        content}
    </span>
  </Tooltip>
);
Truncate.displayName = 'Truncate';
