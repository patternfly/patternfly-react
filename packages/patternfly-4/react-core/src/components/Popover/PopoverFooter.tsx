import * as React from 'react';
import styles from '@patternfly/patternfly/components/Popover/popover.css';
import { css } from '@patternfly/react-styles';

export const PopoverFooter: React.FunctionComponent<PopoverFooterProps> = ({ children, className='', ...props }) => (
  <footer className={css(styles.popoverFooter, className)} {...props}>
    {children}
  </footer>
);

export interface PopoverFooterProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Popover Footer */
  className?: string;
  /** Footer node */
  children: React.ReactNode;
}
