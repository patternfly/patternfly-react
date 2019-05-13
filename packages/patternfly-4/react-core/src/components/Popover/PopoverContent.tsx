import * as React from 'react';
import styles from '@patternfly/patternfly/components/Popover/popover.css';
import { css } from '@patternfly/react-styles';

export const PopoverContent: React.FunctionComponent<PopoverContentProps> = ({ className=null, children, ...props }) => (
  <div className={css(styles.popoverContent, className)} {...props}>
    {children}
  </div>
);

export interface PopoverContentProps extends React.HTMLProps<HTMLDivElement> {
  /** PopoverContent additional class */
  className?: string;
  /** PopoverContent content */
  children: React.ReactNode;
}
