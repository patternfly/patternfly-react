import { Modal as BsModal } from 'react-bootstrap';
import CustomModalDialog from './InnerComponents/CustomModalDialog';
import ModalCloseButton from './ModalCloseButton';

import ModalPattern from './Patterns/ModalPattern';
import StatefulModalPattern from './Patterns/StatefulModalPattern';

/**
 * Modal Component for Patternfly React
 */
class Modal extends BsModal {
  render() {
    return super.render();
  }
}

Modal.propTypes = {
  ...BsModal.propTypes
};

Modal.defaultProps = {
  ...BsModal.defaultProps,
  dialogComponentClass: CustomModalDialog
};

Modal.CloseButton = ModalCloseButton;

Modal.Pattern = ModalPattern;
Modal.Pattern.Stateful = StatefulModalPattern;

export default Modal;
