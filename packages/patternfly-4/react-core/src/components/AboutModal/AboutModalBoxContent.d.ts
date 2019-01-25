import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface ModalBoxBodyProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  id: string;
}

declare const ModalBoxBody: FunctionComponent<ModalBoxBodyProps>;

export default ModalBoxBody;
