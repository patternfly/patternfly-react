import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface BackdropProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

declare const Backdrop: FunctionComponent<BackdropProps>;

export default Backdrop;
