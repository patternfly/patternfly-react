import { SFC, HTMLProps, ReactNode } from 'react';

export interface ModalBoxHeaderProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const ModalBoxHeader: SFC<ModalBoxHeaderProps>;

export default ModalBoxHeader;
