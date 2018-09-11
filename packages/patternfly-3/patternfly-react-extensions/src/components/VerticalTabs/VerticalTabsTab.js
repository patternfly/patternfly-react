import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, noop } from 'patternfly-react';

const VerticalTabsTab = ({ children, className, title, active, hasActiveDescendant, shown, onActivate, ...props }) => {
  const classes = classNames(
    'vertical-tabs-pf-tab',
    { active, 'active-descendant': hasActiveDescendant, shown },
    className
  );

  return (
    <li className={classes} {...props}>
      <Button bsStyle="link" onClick={onActivate}>
        {title}
      </Button>
      {children}
    </li>
  );
};

VerticalTabsTab.propTypes = {
  /** Child tab nodes (VerticalTabsTab's) */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Title for the tab */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Flag if this is the active tab */
  active: PropTypes.bool,
  /** Flag if a descendant tab is active (used only in restrictTabs mode) */
  hasActiveDescendant: PropTypes.bool,
  /** Flag to force show the tab (if parent tab is shown, used only in restrictTabs mode) */
  shown: PropTypes.bool,
  /** Callback function when the tab is activated */
  onActivate: PropTypes.func
};

VerticalTabsTab.defaultProps = {
  children: null,
  className: '',
  title: null,
  active: false,
  hasActiveDescendant: false,
  shown: false,
  onActivate: noop
};

export default VerticalTabsTab;
