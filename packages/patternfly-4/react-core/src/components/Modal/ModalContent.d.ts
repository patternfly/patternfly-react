import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface ModalContentProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  isLarge?: boolean;
  isSmall?: boolean;
  isOpen?: boolean;
  title: string;
  hideTitle?: boolean;
  actions?: any,
  onClose?: Function;
  ariaDescribedById?: string;
  id: string;
}

declare const ModalContent: FunctionComponent<ModalContentProps>;

export default ModalContent;
