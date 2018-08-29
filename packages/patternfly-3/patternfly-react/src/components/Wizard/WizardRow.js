import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardRow component for Patternfly React
 */
const WizardRow = ({ children, className, ...props }) => {
  const classes = classNames('wizard-pf-row', className);
  return (
    <section className={classes} {...props}>
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
