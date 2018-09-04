import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VerticalTabsTab from './VerticalTabsTab';

/**
 * VerticalTabs Component for PatternFly
 */
const VerticalTabs = ({ children, className, ...props }) => {
  const classes = classNames('vertical-tabs-pf', className);
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
  className: PropTypes.string
};
VerticalTabs.defaultProps = {
  children: null,
  className: ''
};

VerticalTabs.Tab = VerticalTabsTab;

export default VerticalTabs;
