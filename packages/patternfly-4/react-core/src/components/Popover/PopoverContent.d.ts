import { SFC, HTMLProps } from 'react';

export interface PopoverContentProps extends HTMLProps<HTMLDivElement> {
}

declare const PopoverContent: SFC<PopoverContentProps>;

export default PopoverContent;
