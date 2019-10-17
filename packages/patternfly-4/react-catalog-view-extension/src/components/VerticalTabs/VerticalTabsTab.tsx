import * as React from 'react';
import classNames from 'classnames';

import { Omit } from '../../helpers/typeUtils';

export interface VerticalTabsTabProps extends Omit<React.HTMLProps<HTMLLIElement>, 'title'> {
  /** Child tab nodes (VerticalTabsTab's) */
  children?: React.ReactNode;
  /** Additional css classes */
  className?: string;
  /** Title for the tab */
  title?: string | React.ReactNode;
  /** Title wrap style */
  wrapStyle?: 'wrap' | 'truncate' | 'nowrap';
  /** Flag if this is the active tab */
  active?: boolean;
  /** Flag if a descendant tab is active (used only in restrictTabs mode) */
  hasActiveDescendant?: boolean;
  /** Flag to force show the tab (if parent tab is shown, used only in restrictTabs mode) */
  shown?: boolean;
  /** Callback function when the tab is activated */
  onActivate?: () => void;
}

export const VerticalTabsTab: React.FunctionComponent<VerticalTabsTabProps> = ({
  children = null,
  className ='',
  title = null,
  wrapStyle = 'wrap',
  active = false,
  hasActiveDescendant = false,
  shown = false,
  onActivate = null,
  ...props
}: VerticalTabsTabProps) => {
  const classes = classNames(
    'vertical-tabs-pf-tab',
    { active, 'active-descendant': hasActiveDescendant, shown },
    className
  );

  const linkClasses = classNames({
    'no-wrap': wrapStyle === 'nowrap',
    truncate: wrapStyle === 'truncate'
  });

  const handleActivate = (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    if (onActivate) {
      onActivate();
    }
  };

  return (
    <li className={classes} {...props}>
      <a className={linkClasses} onClick={e => handleActivate(e)} href="#">
        {title}
      </a>
      {children}
    </li>
  );
};
