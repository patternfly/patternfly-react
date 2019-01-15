import { SFC, HTMLProps } from 'react';

export interface ChipButtonProps extends HTMLProps<HTMLButtonElement> {}

declare const ChipButton: SFC<ChipButtonProps>;

export default ChipButton;
