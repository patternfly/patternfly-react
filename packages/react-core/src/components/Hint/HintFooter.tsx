import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Hint/hint';
import { css } from '@patternfly/react-styles';

export interface HintFooterProps {
  /** Content rendered inside the hint body. */
  children?: React.ReactNode;
}

export const HintFooter: React.FunctionComponent<HintFooterProps> = ({ children, ...props }: HintFooterProps) => (
  <div {...props} className={css(styles.hintFooter)}>
    {children}
  </div>
);
HintFooter.displayName = 'HintFooter';
