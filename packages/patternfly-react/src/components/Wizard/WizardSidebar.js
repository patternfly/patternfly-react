import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardSidebar component for Patternfly React
 */
const WizardSidebar = ({ items, className, ...props }) => {
  const classes = classNames('wizard-pf-sidebar', className);
  return (
    <div className={classes} {...props}>
      {items}
    </div>
  );
};
WizardSidebar.propTypes = {
  /** Wizard sidebar items */
  items: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
WizardSidebar.defaultProps = {
  items: null,
  className: ''
};
export default WizardSidebar;
