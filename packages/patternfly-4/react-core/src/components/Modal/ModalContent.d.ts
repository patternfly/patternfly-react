import { FunctionComponent, HTMLProps, ReactNode } from 'react';

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

declare const ModalContent: FunctionComponent<ModalContentProps>;

export default ModalContent;
