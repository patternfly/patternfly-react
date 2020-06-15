import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';

export interface TabTitleIconProps extends React.HTMLProps<HTMLSpanElement> {
  /** Icon to be rendered inside the tab button title. */
  children: React.ReactNode;
  /** additional classes added to the tab title icon */
  className?: string;
}

/**
 *
 */
export function TabTitleIcon({ children, className = '', ...props }: TabTitleIconProps) {
  return (
    <span className={css(styles.tabsItemIcon, className)} {...props}>
      {children}
    </span>
  );
}
