import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';

export interface TabTitleTextProps extends React.HTMLProps<HTMLSpanElement> {
  /** Text to be rendered inside the tab button title. */
  children: React.ReactNode;
  /** additional classes added to the tab title text */
  className?: string;
}

/**
 *
 */
export function TabTitleText({ children, className = '', ...props }: TabTitleTextProps) {
  return (
    <span className={css(styles.tabsItemText, className)} {...props}>
      {children}
    </span>
  );
}
