import { SFC } from 'react';

export interface PopoverCloseButtonProps {
  onClose(event: React.SyntheticEvent<HTMLButtonElement>): void
}

declare const PopoverCloseButton : SFC<PopoverCloseButtonProps>;

export default PopoverCloseButton;
