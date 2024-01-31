import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Sidebar/sidebar';

export enum SidebarBackgroundVariant {
  default = 'default',
  secondary = 'secondary'
}

export interface SidebarProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  /** Indicates the direction of the layout. Default orientation is stack on small screens, and split on medium screens and above. */
  orientation?: 'stack' | 'split';
  /** Indicates that the panel is displayed to the right of the content when the oritentation is split. */
  isPanelRight?: boolean;
  /** Adds space between the panel and content. */
  hasGutter?: boolean;
  /** Removes the background color. */
  hasNoBackground?: boolean;
  /** Adds a border between the panel and content. */
  hasBorder?: boolean;
}

export const Sidebar: React.FunctionComponent<SidebarProps> = ({
  className,
  children,
  orientation,
  isPanelRight = false,
  hasGutter,
  hasNoBackground,
  hasBorder,
  ...props
}: SidebarProps) => (
  <div
    className={css(
      styles.sidebar,
      hasGutter && styles.modifiers.gutter,
      hasNoBackground && styles.modifiers.noBackground,
      isPanelRight && styles.modifiers.panelRight,
      styles.modifiers[orientation],
      className
    )}
    {...props}
  >
    <div className={css(styles.sidebarMain, hasBorder && styles.modifiers.border)}>{children}</div>
  </div>
);
Sidebar.displayName = 'Sidebar';
