import { SFC } from 'react';
import { SplitButtonProps as BsSplitButtonProps } from 'react-bootstrap';
import { ButtonStyle } from './ButtonConstants';

export interface SplitButtonProps extends BsSplitButtonProps {
  bsStyle?: ButtonStyle;
}

declare const SplitButton: SFC<SplitButtonProps>;

export default SplitButton;
