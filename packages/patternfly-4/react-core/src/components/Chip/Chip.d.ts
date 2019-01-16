import { SFC, HTMLProps } from 'react';
import { Omit, OneOf } from '../../typeUtils';
import { TooltipPosition } from '../Tooltip';

export interface ChipProps extends HTMLProps<HTMLDivElement> {
  children: string;
  closeBtnAriaLabel: string;
  isOverflowChip: boolean;
  tooltipPosition: OneOf<typeof TooltipPosition, keyof typeof TooltipPosition>;
}

declare const Chip: SFC<ChipProps>;

export default Chip;

