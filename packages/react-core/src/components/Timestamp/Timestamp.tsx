import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Timestamp';
import { css } from '@patternfly/react-styles';

export interface TimestampProps extends React.HTMLProps<HTMLDivElement> {
  /** Custom content rendered inside the timestamp, such as a relative time. Using this prop
   * will override the default timestamp content.
   */
  children?: React.ReactNode;
  /** Class to add to the outer span. */
  className?: string;
}

export const Timestamp: React.FunctionComponent<TimestampProps> = ({
  className,
  children,
  ...props
}: TimestampProps) => (
  <span className={css(styles.timestamp, className)} {...props}>
    <time className={css(styles.timestamp)}>{children}</time>
  </span>
);
Timestamp.displayName = 'Timestamp';
