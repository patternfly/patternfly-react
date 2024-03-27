import { HTMLProps, ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';

export interface TabTitleTextProps extends HTMLProps<HTMLSpanElement> {
  /** Text to be rendered inside the tab button title. */
  children: ReactNode;
  /** additional classes added to the tab title text */
  className?: string;
}

export const TabTitleText: FunctionComponent<TabTitleTextProps> = ({
  children,
  className = '',
  ...props
}: TabTitleTextProps) => (
  <span className={css(styles.tabsItemText, className)} {...props}>
    {children}
  </span>
);
TabTitleText.displayName = 'TabTitleText';
