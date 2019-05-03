import { HTMLProps, ReactType } from 'react';

export interface DropdownItemProps extends HTMLProps<HTMLAnchorElement> {
  component?: ReactType | string;
  isDisabled?: Boolean;
}
