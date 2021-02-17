import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Sidebar/sidebar';

export interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  orientation?: 'stack' | 'split';
  isPanelRight?: boolean;
  hasGutter?: boolean;
  hasNoBackground?: boolean;
}

export const Sidebar: React.FunctionComponent<SidebarProps> = ({
  children,
  orientation,
  isPanelRight = false,
  hasGutter,
  hasNoBackground,
  ...props
}: SidebarProps) => (
  <div
    className={css(
      styles.sidebar,
      hasGutter && styles.modifiers.gutter,
      hasNoBackground && styles.modifiers.noBackground,
      isPanelRight && styles.modifiers.panelRight,
      styles.modifiers[orientation]
    )}
    {...props}
  >
    <div className={styles.sidebarMain}>{children}</div>
  </div>
);
Sidebar.displayName = 'Sidebar';
