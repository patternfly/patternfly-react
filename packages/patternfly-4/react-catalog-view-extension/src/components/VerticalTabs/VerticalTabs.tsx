import * as React from 'react';
import classNames from 'classnames';

export interface VerticalTabsProps extends React.HTMLProps<HTMLUListElement> {
  /** Children nodes */
  children?: React.ReactNode;
  /** Additional css classes */
  className?: string;
  /** Flag to restrict shown tabs to active tabs, their parents, their siblings, and direct children */
  restrictTabs?: boolean;
  /** Flag if a direct child is active (only used in restrictTabs mode) */
  activeTab?: boolean;
}

export const VerticalTabs: React.FunctionComponent<VerticalTabsProps> = ({
  children = null,
  className = '',
  restrictTabs = false,
  activeTab = false,
  ...props
}: VerticalTabsProps) => {
  const classes = classNames('vertical-tabs-pf', { 'restrict-tabs': restrictTabs, 'active-tab': activeTab }, className);
  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  );
};
