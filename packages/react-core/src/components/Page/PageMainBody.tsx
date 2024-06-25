import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Page/page';
import { css } from '@patternfly/react-styles';

export interface PageMainBodyProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside the section */
  children?: React.ReactNode;
  /** Additional classes added to the section */
  className?: string;
  /** Section background color variant. This will only apply when the type prop has the "default" value. */
}

export const PageMainBody: React.FunctionComponent<PageMainBodyProps> = ({
  className,
  children,
  ...props
}: PageMainBodyProps) => (
  <div {...props} className={css(styles.pageMainBody, className)}>
    {children}
  </div>
);

PageMainBody.displayName = 'PageMainBody';
