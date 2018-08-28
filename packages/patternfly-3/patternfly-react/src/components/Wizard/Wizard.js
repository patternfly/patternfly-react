import React from 'react';
import PropTypes from 'prop-types';
import { noop, Modal } from '../../index';

/**
 * Wizard - main Wizard component.
 */
const Wizard = ({ children, className, dialogClassName, show, onClose, onExited, ...rest }) => (
  <Modal
    show={show}
    onHide={onClose}
    onExited={onExited}
    dialogClassName={dialogClassName || 'modal-lg wizard-pf'}
    {...rest}
  >
    <div className={className}>{children}</div>
  </Modal>
);
Wizard.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Wizard dialog class */
  dialogClassName: PropTypes.string,
  /** show modal */
  show: PropTypes.bool,
  /** on close callback */
  onClose: PropTypes.func,
  /** on exited callback */
  onExited: PropTypes.func
};
Wizard.defaultProps = {
  children: null,
  className: '',
  dialogClassName: '',
  show: false,
  onClose: noop,
  onExited: noop
};
export default Wizard;
