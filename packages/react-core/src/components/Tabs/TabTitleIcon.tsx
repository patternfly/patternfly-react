import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';

export interface TabTitleIconProps extends HTMLProps<HTMLSpanElement> {
  /** Icon to be rendered inside the tab button title. */
  children: ReactNode;
  /** additional classes added to the tab title icon */
  className?: string;
}

export const TabTitleIcon: FunctionComponent<TabTitleIconProps> = ({
  children,
  className = '',
  ...props
}: TabTitleIconProps) => (
  <span className={css(styles.tabsItemIcon, className)} {...props}>
    {children}
  </span>
);
TabTitleIcon.displayName = 'TabTitleIcon';
