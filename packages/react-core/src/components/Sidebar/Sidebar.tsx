import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Sidebar/sidebar';

export interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  variant: 'default' | 'stack' | 'split' | 'panelRight';
  hasGutter: boolean;
  hasNoBackground: boolean;
}

export const Sidebar: React.FunctionComponent<SidebarProps> = ({
  children,
  variant = 'default',
  hasGutter,
  hasNoBackground,
  ...props
}: SidebarProps) => (
  <div
    className={css(
      styles.sidebar,
      hasGutter && styles.modifiers.gutter,
      hasNoBackground && styles.modifiers.noBackground,
      variant !== 'default' && styles.modifiers[variant]
    )}
    {...props}
  >
    <div className={styles.sidebarMain}>{children}</div>
  </div>
);
Sidebar.displayName = 'Sidebar';
