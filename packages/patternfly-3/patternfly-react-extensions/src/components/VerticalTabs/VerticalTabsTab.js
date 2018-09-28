import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const VerticalTabsTab = ({
  children,
  className,
  title,
  wrapStyle,
  active,
  hasActiveDescendant,
  shown,
  onActivate,
  ...props
}) => {
  const classes = classNames(
    'vertical-tabs-pf-tab',
    { active, 'active-descendant': hasActiveDescendant, shown },
    className
  );

  const linkClasses = classNames({
    'no-wrap': wrapStyle === 'nowrap',
    truncate: wrapStyle === 'truncate'
  });

  const handleActivate = e => {
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

VerticalTabsTab.propTypes = {
  /** Child tab nodes (VerticalTabsTab's) */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Title for the tab */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Title wrap style */
  wrapStyle: PropTypes.oneOf(['wrap', 'truncate', 'nowrap']),
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
  wrapStyle: 'wrap',
  active: false,
  hasActiveDescendant: false,
  shown: false,
  onActivate: null
};

export default VerticalTabsTab;
