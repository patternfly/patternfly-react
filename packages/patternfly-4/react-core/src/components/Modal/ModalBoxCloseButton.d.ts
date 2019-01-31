import { FunctionComponent, HTMLProps } from 'react';

export interface ModalBoxCloseButtonProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  onClose?: Function;
}

declare const ModalBoxCloseButton: FunctionComponent<ModalBoxCloseButtonProps>;

export default ModalBoxCloseButton;
