import { ButtonProps } from '../Button';
import { SFC } from 'react';

export interface ConfirmButtonProps extends ButtonProps {}

declare const ConfirmButton: SFC<ConfirmButtonProps>;

export default ConfirmButton;
