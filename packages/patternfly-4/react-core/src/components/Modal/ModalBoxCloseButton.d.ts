import { SFC, HTMLProps } from 'react';

export interface ModalBoxCloseButtonProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  onClose?: Function;
}

declare const ModalBoxCloseButton: SFC<ModalBoxCloseButtonProps>;

export default ModalBoxCloseButton;
