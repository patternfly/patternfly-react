import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Label/label';
import { css } from '@patternfly/react-styles';

export interface LabelIconProps extends React.HTMLProps<HTMLSpanElement> {
  /** Additional classes added to the label. */
  className?: string;
  children?: React.ReactNode;
}

export const LabelIcon: React.FunctionComponent<LabelIconProps> = ({
  className = '',
  children,
  ...props
}: LabelIconProps) => (
  <span className={css(styles.labelIcon, className)} {...props}>
    {children}
  </span>
);
LabelIcon.displayName = 'LabelIcon';
