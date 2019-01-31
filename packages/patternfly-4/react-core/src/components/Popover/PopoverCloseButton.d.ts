import { FunctionComponent } from 'react';

export interface PopoverCloseButtonProps {
  onClose(event: React.SyntheticEvent<HTMLButtonElement>): void
}

declare const PopoverCloseButton : FunctionComponent<PopoverCloseButtonProps>;

export default PopoverCloseButton;
