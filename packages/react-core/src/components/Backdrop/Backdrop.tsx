import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';

export interface BackdropProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered inside the backdrop */
  children?: ReactNode;
  /** Additional classes added to the backdrop */
  className?: string;
}

export const Backdrop: FunctionComponent<BackdropProps> = ({
  children = null,
  className = '',
  ...props
}: BackdropProps) => (
  <div {...props} className={css(styles.backdrop, className)}>
    {children}
  </div>
);
Backdrop.displayName = 'Backdrop';
