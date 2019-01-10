import { SFC, HTMLProps, ReactType, ReactNode } from 'react';

export interface DropdownItemProps extends HTMLProps<HTMLAnchorElement> {
  component?: ReactType<DropdownItemProps>;
  isDisabled?: Boolean;
}
