import { FunctionComponent, HTMLProps, MouseEvent } from 'react';
import { Omit } from '../../typeUtils';

export interface ToggleButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'children', 'id'> {
  onClick: (event: MouseEvent) => void;
  id: string;
  textId: string;
  contentId: string;
  isExpanded?: boolean;
}

declare const ToggleButton: FunctionComponent<ToggleButtonProps>;

export default ToggleButton;

