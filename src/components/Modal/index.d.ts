import ModalBase, {
  ModalProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalHeaderProps
} from './Modal';
import ModalCloseButton, { ModalCloseButtonProps } from './ModalCloseButton';

declare const Modal: typeof ModalBase & {
  CloseButton: typeof ModalCloseButton;
};

export {
  Modal,
  ModalProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalHeaderProps,
  ModalCloseButton,
  ModalCloseButtonProps
};
