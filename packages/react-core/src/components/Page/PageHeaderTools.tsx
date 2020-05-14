import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export interface PageHeaderToolsBreakpointMod {
  /** The attribute to modify  */
  modifier: 'hidden' | 'visible';
  /** The breakpoint at which to apply the modifier */
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export interface PageHeaderToolsProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered in page header tools */
  children: React.ReactNode;
  /** Additional classes added to the page header tools. */
  className?: string;
}

export const PageHeaderTools: React.FunctionComponent<PageHeaderToolsProps> = ({
  children,
  className,
  ...props
}: PageHeaderToolsProps) => (
  <div className={css(styles.pageHeaderTools, className)} {...props}>
    {children}
  </div>
);
