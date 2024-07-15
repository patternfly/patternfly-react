import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export interface PageBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the section */
  children?: React.ReactNode;
  /** Additional classes added to the section */
  className?: string;
}

export const PageBody: React.FunctionComponent<PageBodyProps> = ({ className, children, ...props }: PageBodyProps) => (
  <div {...props} className={css(styles.pageMainBody, className)}>
    {children}
  </div>
);

PageBody.displayName = 'PageBody';
