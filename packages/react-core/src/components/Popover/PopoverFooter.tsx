import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { css } from '@patternfly/react-styles';

export interface PopoverFooterProps extends HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Popover footer */
  className?: string;
  /** Footer node */
  children: ReactNode;
}

export const PopoverFooter: FunctionComponent<PopoverFooterProps> = ({
  children,
  className = '',
  ...props
}: PopoverFooterProps) => (
  <footer className={css(styles.popoverFooter, className)} {...props}>
    {children}
  </footer>
);
PopoverFooter.displayName = 'PopoverFooter';
