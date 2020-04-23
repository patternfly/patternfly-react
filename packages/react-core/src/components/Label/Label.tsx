import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Label/label';
import { css } from '@patternfly/react-styles';

export interface LabelProps extends React.HTMLProps<HTMLSpanElement> {
  /** Content rendered inside the label. */
  children: React.ReactNode;
  /** Additional classes added to the label. */
  className?: string;
}

export const Label: React.FunctionComponent<LabelProps> = ({ children, className = '', ...props }: LabelProps) => (
  <span {...props} className={css(styles.label, className)}>
    {children}
  </span>
);
