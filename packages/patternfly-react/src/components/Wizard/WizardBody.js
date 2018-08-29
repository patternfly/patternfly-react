import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal } from '../Modal';

/**
 * WizardBody component for Patternfly React
 */
const WizardBody = ({ children, className, ...props }) => {
  const classes = classNames('wizard-pf-body', 'clearfix', className);
  return (
    <Modal.Body className={classes} {...props}>
      {children}
    </Modal.Body>
  );
};
WizardBody.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
WizardBody.defaultProps = {
  children: null,
  className: ''
};
export default WizardBody;
