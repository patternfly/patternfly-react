import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Sidebar/sidebar';
import { formatBreakpointMods } from '../../helpers/util';

export interface SidebarPanelProps extends Omit<React.HTMLProps<HTMLDivElement>, 'width'> {
  children: React.ReactNode;
  variant?: 'default' | 'sticky' | 'static';
  hasNoBackground?: boolean;
  width?: {
    default?: 'default' | 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    sm?: 'default' | 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    md?: 'default' | 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    lg?: 'default' | 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    xl?: 'default' | 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
    '2xl'?: 'default' | 'width_25' | 'width_33' | 'width_50' | 'width_66' | 'width_75' | 'width_100';
  };
}

export const SidebarPanel: React.FunctionComponent<SidebarPanelProps> = ({
  children,
  variant = 'default',
  hasNoBackground,
  width,
  ...props
}: SidebarPanelProps) => (
  <div
    className={css(
      styles.sidebarPanel,
      variant !== 'default' && styles.modifiers[variant],
      hasNoBackground && styles.modifiers.noBackground,
      formatBreakpointMods(width, styles)
    )}
    {...props}
  >
    {children}
  </div>
);
SidebarPanel.displayName = 'SidebarPanel';
