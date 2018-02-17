import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * WizardRow component for Patternfly React
 */
const WizardRow = ({ children, className, ...rest }) => {
  const classes = cx('wizard-pf-row', className);
  return (
    <section className={classes} {...rest}>
      {children}
    </section>
  );
};
WizardRow.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
WizardRow.defaultProps = {
  children: null,
  className: ''
};
export default WizardRow;
