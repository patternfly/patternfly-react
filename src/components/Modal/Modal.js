import { Modal as BsModal } from 'react-bootstrap';
import CustomModalDialog from './InnerComponents/CustomModalDialog';

/**
 * Modal Component for Patternfly React
 */
class Modal extends BsModal {
  render() {
    return super.render();
  }
}

Modal.defaultProps = {
  ...BsModal.defaultProps,
  dialogComponentClass: CustomModalDialog
};

export default Modal;
