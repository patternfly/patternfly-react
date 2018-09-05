import { SFC, HTMLProps, ReactNode } from 'react';

export interface ModalProps extends HTMLProps<HTMLDivElement> {
  actions?: any,
  children: ReactNode;
  className?: string;
  hideTitle?: boolean;
  isLarge?: boolean;
  isOpen?: boolean;
  onClose?: Function;
  title: string;
}

declare const Modal: SFC<ModalProps>;

export default Modal;
