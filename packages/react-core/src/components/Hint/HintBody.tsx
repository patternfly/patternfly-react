import { ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Hint/hint';
import { css } from '@patternfly/react-styles';

export interface HintBodyProps {
  /** Content rendered inside the hint body. */
  children?: ReactNode;
  /** Additional classes applied to the hint body. */
  className?: string;
}

export const HintBody: FunctionComponent<HintBodyProps> = ({ children, className, ...props }: HintBodyProps) => (
  <div className={css(styles.hintBody, className)} {...props}>
    {children}
  </div>
);
HintBody.displayName = 'HintBody';
