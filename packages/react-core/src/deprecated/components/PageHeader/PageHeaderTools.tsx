import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export interface PageHeaderToolsProps extends HTMLProps<HTMLDivElement> {
  /** Content rendered in page header tools */
  children: ReactNode;
  /** Additional classes added to the page header tools. */
  className?: string;
}

export const PageHeaderTools: FunctionComponent<PageHeaderToolsProps> = ({
  children,
  className,
  ...props
}: PageHeaderToolsProps) => (
  <div className={css(styles.pageHeaderTools, className)} {...props}>
    {children}
  </div>
);
PageHeaderTools.displayName = 'PageHeaderTools';
