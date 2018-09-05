import { SFC, HTMLProps, ReactNode } from 'react';

export interface ModalContentProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  id: string;
  isLarge?: boolean;
  isOpen?: boolean;
  hideTitle?: boolean;
  actions?: any,
  onClose?: Function;
  title: string;
}

declare const ModalContent: SFC<ModalContentProps>;

export default ModalContent;
