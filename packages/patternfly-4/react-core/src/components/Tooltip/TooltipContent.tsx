import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Tooltip/tooltip';
import { css } from '@patternfly/react-styles';

export interface TooltipContentProps extends React.HTMLProps<HTMLDivElement> {
  /** PopoverContent additional class */
  className?: string;
  /** PopoverContent content */
  children: React.ReactNode;
}

export const TooltipContent = ({ className, children, ...props }: TooltipContentProps) => (
  <div className={css(styles.tooltipContent, className)} {...props}>
    {children}
  </div>
);
