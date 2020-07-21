import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Hint/hint';
import { css } from '@patternfly/react-styles';

export interface HintBodyProps {
  /** Content rendered inside the hint body. */
  children?: React.ReactNode;
}

export const HintBody: React.FunctionComponent<HintBodyProps> = ({ children, ...props }: HintBodyProps) => (
  <div {...props} className={css(styles.hintBody)}>
    {children}
  </div>
);
HintBody.displayName = 'HintBody';
