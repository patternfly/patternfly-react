import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Progress/progress';
import { css } from '@patternfly/react-styles';

export interface ProgressBarProps extends React.HTMLProps<HTMLDivElement> {
  /** What should be rendered inside progress bar. */
  children?: React.ReactNode;
  /** Additional classes for Progres bar. */
  className?: string;
  /** Actual progress value. */
  value: number;
  /** Minimal value of progress. */
  ariaProps: object;
};

export const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({
  ariaProps,
  className = '',
  children = null,
  value,
  ...props
}: ProgressBarProps) => (
  <div {...props} className={css(styles.progressBar, className)} {...ariaProps}>
    <div className={css(styles.progressIndicator)} style={{ width: `${value}%` }}>
      <span className={css(styles.progressMeasure)}>{children}</span>
    </div>
  </div>
);
