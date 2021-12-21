import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Truncate/truncate';
import { css } from '@patternfly/react-styles';

export enum TruncatePosition {
  start = 'start',
  end = 'end',
  middle = 'middle'
}

interface TruncateProps extends React.HTMLProps<HTMLDivElement> {
  /** Class to add to outer span */
  className?: string;
  /** Text to truncate */
  content: string;
  /** Where you want to truncate the text. */
  position?: 'start' | 'middle' | 'end';
  /** Tooltip position */
  tooltipPosition?: string;
}

const getStyle = (position: 'start' | 'middle' | 'end') => {
  if (position === TruncatePosition.start) {
    return styles.truncateEnd;
  }
  if (position === TruncatePosition.end) {
    return styles.truncateStart;
  }
};

const splitToHalf = (str: string) => {
  const half = Math.ceil(str.length / 2);
  return [str.substring(0, half), str.substring(half, str.length)];
};

export const Truncate: React.FunctionComponent<TruncateProps> = ({
  className,
  position = TruncatePosition.end,
  content,
  ...props
}: TruncateProps) => (
  <React.Fragment>
    {(position === TruncatePosition.end || position === TruncatePosition.start) && (
      <span className={css(styles.truncate, className)} {...props}>
        <span className={getStyle(position)}>
          <span className={styles.truncateText}>{content}</span>
        </span>
      </span>
    )}
    {position === TruncatePosition.middle && (
      <span className={css(styles.truncate, className)} {...props}>
        <span className={styles.truncateStart}>
          <span className={styles.truncateText}>{splitToHalf(content)[0]}</span>
        </span>
        <span className={styles.truncateEnd}>
          <span className={styles.truncateText}>{splitToHalf(content)[1]}</span>
        </span>
      </span>
    )}
  </React.Fragment>
);
Truncate.displayName = 'Truncate';
