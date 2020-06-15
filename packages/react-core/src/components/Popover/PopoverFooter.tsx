import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { css } from '@patternfly/react-styles';

export const PopoverFooter: React.FunctionComponent<PopoverFooterProps> = ({
  children,
  className = '',
  ...props
}: PopoverFooterProps) => (
  <footer className={css(styles.popoverFooter, className)} {...props}>
    {children}
  </footer>
);
PopoverFooter.displayName = 'PopoverFooter';

export interface PopoverFooterProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Popover Footer */
  className?: string;
  /** Footer node */
  children: React.ReactNode;
}
