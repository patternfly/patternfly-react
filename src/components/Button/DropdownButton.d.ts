import { SFC } from 'react';
import { DropdownButtonProps as BsDropdownButtonProps } from 'react-bootstrap';
import { ButtonStyle } from './ButtonConstants';

export interface DropdownButtonProps extends BsDropdownButtonProps {
  bsStyle?: ButtonStyle;
}

declare const DropdownButton: SFC<DropdownButtonProps>;

export default DropdownButton;
