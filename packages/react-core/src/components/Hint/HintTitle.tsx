import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Hint/hint';
import { css } from '@patternfly/react-styles';

export interface HintTitleProps {
  /** Content rendered inside the hint body. */
  children?: React.ReactNode;
}

export const HintTitle: React.FunctionComponent<HintTitleProps> = ({ children, ...props }: HintTitleProps) => (
  <div {...props} className={css(styles.hintTitle)}>
    {children}
  </div>
);
HintTitle.displayName = 'HintTitle';
