import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface DropdownGroupProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  label?: string;
}

declare const DropdownGroup: FunctionComponent<DropdownGroupProps>;

export default DropdownGroup;
