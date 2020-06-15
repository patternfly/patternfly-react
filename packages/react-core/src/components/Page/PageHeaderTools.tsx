import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export interface PageHeaderToolsProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered in page header tools */
  children: React.ReactNode;
  /** Additional classes added to the page header tools. */
  className?: string;
}

/**
 *
 */
export function PageHeaderTools({ children, className, ...props }: PageHeaderToolsProps) {
  return (
    <div className={css(styles.pageHeaderTools, className)} {...props}>
      {children}
    </div>
  );
}
