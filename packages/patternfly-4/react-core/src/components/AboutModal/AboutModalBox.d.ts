import { SFC, HTMLProps, ReactNode } from 'react';

export interface ModalBoxProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  ariaLablledbyId: string;
  ariaDescribedById: string;
}

declare const ModalBox: SFC<ModalBoxProps>;

export default ModalBox;
