import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Sidebar/sidebar';

export interface SidebarContentProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  hasNoBackground?: boolean;
}

export const SidebarContent: React.FunctionComponent<SidebarContentProps> = ({
  children,
  hasNoBackground,
  ...props
}: SidebarContentProps) => (
  <div className={css(styles.sidebarContent, hasNoBackground && styles.modifiers.noBackground)} {...props}>
    {children}
  </div>
);
SidebarContent.displayName = 'SidebarContent';
