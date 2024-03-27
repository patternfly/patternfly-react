import { ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Hint/hint';
import { css } from '@patternfly/react-styles';

export interface HintFooterProps {
  /** Content rendered inside the hint footer. */
  children?: ReactNode;
  /** Additional classes applied to the hint footer. */
  className?: string;
}

export const HintFooter: FunctionComponent<HintFooterProps> = ({ children, className, ...props }: HintFooterProps) => (
  <div className={css(styles.hintFooter, className)} {...props}>
    {children}
  </div>
);
HintFooter.displayName = 'HintFooter';
