import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VerticalTabsTab from './VerticalTabsTab';

/**
 * VerticalTabs Component for PatternFly
 */
const VerticalTabs = ({ children, className, restrictTabs, activeTab, ...props }) => {
  const classes = classNames('vertical-tabs-pf', { 'restrict-tabs': restrictTabs, 'active-tab': activeTab }, className);
  return (
    <ul className={classes} {...props}>
      {children}
    </ul>
  );
};

VerticalTabs.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag to restrict shown tabs to active tabs, their parents, their siblings, and direct children */
  restrictTabs: PropTypes.bool,
  /** Flag if a direct child is active (only used in restrictTabs mode) */
  activeTab: PropTypes.bool
};
VerticalTabs.defaultProps = {
  children: null,
  className: '',
  restrictTabs: false,
  activeTab: false
};

VerticalTabs.Tab = VerticalTabsTab;

export default VerticalTabs;
