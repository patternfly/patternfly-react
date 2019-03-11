import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface ModalBoxProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  isLarge?: boolean;
  isSmall?:boolean;
  title: string;
  id: string;
}

declare const ModalBox: FunctionComponent<ModalBoxProps>;

export default ModalBox;
