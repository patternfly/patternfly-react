import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal } from '../Modal';

/**
 * WizardFooter component for Patternfly React
 */
const WizardFooter = ({ children, className, ...props }) => {
  const classes = classNames('wizard-pf-footer', className);
  return (
    <Modal.Footer className={classes} {...props}>
      {children}
    </Modal.Footer>
  );
};
WizardFooter.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
WizardFooter.defaultProps = {
  children: null,
  className: ''
};
export default WizardFooter;
