import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Hint/hint';
import { css } from '@patternfly/react-styles';

export interface HintProps {
  /** Content rendered inside the hint body. */
  children?: React.ReactNode;
  /** Actions of the hint. */
  actions?: React.ReactNode;
}

export const Hint: React.FunctionComponent<HintProps> = ({ children, actions, ...props }: HintProps) => (
  <div {...props} className={css(styles.hint)}>
    <div className={css(styles.hintActions)}>{actions}</div>
    {children}
  </div>
);
Hint.displayName = 'Hint';
