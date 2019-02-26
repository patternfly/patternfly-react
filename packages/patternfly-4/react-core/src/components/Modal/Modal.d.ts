import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface ModalProps extends HTMLProps<HTMLDivElement> {
  actions?: any,
  children: ReactNode;
  className?: string;
  hideTitle?: boolean;
  ariaDescribedById?: string;
  isLarge?: boolean;
  isSmall?: boolean;
  isOpen?: boolean;
  onClose?: Function;
  title: string;
}

declare const Modal: FunctionComponent<ModalProps>;

export default Modal;
