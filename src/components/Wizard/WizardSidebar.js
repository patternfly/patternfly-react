import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * WizardSidebar component for Patternfly React
 */
const WizardSidebar = ({ items, className, ...rest }) => {
  const classes = cx('wizard-pf-sidebar', className);
  return (
    <div className={classes} {...rest}>
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
export default WizardSidebar;
