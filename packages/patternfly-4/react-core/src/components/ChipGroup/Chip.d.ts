import { FunctionComponent, HTMLProps } from 'react';
import { OneOf } from '../../typeUtils';
import { TooltipPosition } from '../Tooltip';

export interface ChipProps extends HTMLProps<HTMLDivElement> {
  badgeText?: string;
  children?: string;
  closeBtnAriaLabel: string;
  isOverflowChip: boolean;
  isBadge: boolean;
  tooltipPosition: OneOf<typeof TooltipPosition, keyof typeof TooltipPosition>;
}

declare const Chip: FunctionComponent<ChipProps>;

export default Chip;
