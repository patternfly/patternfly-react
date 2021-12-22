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

interface TruncateProps extends React.HTMLProps<HTMLDivElement> {
  /** Class to add to outer span */
  className?: string;
  /** Text to truncate */
  content: string;
  /** Where the text will be truncated */
  position?: 'start' | 'middle' | 'end';
  /** Tooltip position */
  tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
}

const splitToHalf = (str: string) => {
  const half = Math.ceil(str.length / 2);
  return [str.substring(0, half), str.substring(half, str.length)];
};

export const Truncate: React.FunctionComponent<TruncateProps> = ({
  className,
  position = 'end',
  tooltipPosition = 'top',
  content,
  ...props
}: TruncateProps) => (
  <Tooltip position={tooltipPosition} content={content}>
    <span className={css(styles.truncate, className)} {...props}>
      {(position === TruncatePosition.end || position === TruncatePosition.start) && (
        <span className={truncateStyles[position]}>
          <span className={styles.truncateText}>
            {content}
            {position === TruncatePosition.start && <React.Fragment>&lrm;</React.Fragment>}
          </span>
        </span>
      )}
      {position === TruncatePosition.middle && (
        <React.Fragment>
          <span className={styles.truncateStart}>
            <span className={styles.truncateText}>{splitToHalf(content)[0]}</span>
          </span>
          <span className={styles.truncateEnd}>
            <span className={styles.truncateText}>{splitToHalf(content)[1]}</span>
          </span>
        </React.Fragment>
      )}
    </span>
  </Tooltip>
);
Truncate.displayName = 'Truncate';
