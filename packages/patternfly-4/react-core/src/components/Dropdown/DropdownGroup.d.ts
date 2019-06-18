import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface DropdownGroupProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  label?: string;
  withSeparator?: boolean;
}

declare const DropdownGroup: FunctionComponent<DropdownGroupProps>;

export default DropdownGroup;
