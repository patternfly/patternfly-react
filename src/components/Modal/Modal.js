import CustomModalDialog from './InnerComponents/CustomModalDialog';
import { Modal as BsModal } from 'react-bootstrap';

/**
 * Modal Component for Patternfly React
 */
class Modal extends BsModal {
  render() {
    return super.render();
  }
}

Modal.defaultProps = Object.assign(BsModal.defaultProps, {
  dialogComponentClass: CustomModalDialog,
});

export default Modal;
