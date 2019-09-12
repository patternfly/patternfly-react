import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export interface OverflowMenuContentProps extends React.HTMLProps<HTMLDivElement> {
  children?: any;
  className?: string;
}

export const OverflowMenuContent: React.SFC<OverflowMenuContentProps> = ({
  className = '',
  children,
  ...props
}: OverflowMenuContentProps) => (
  <div {...props} className={css(styles.overflowMenuContent, className)}>
    {children}
  </div>
);
