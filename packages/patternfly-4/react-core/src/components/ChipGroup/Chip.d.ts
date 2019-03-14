import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../helpers/typeUtils';
import { TooltipPosition } from '../Tooltip';

export interface ChipProps extends HTMLProps<HTMLDivElement> {
  badgeText?: string;
  children?: ReactNode;
  closeBtnAriaLabel?: string;
  isOverflowChip?: boolean;
  isBadge: boolean;
  tooltipPosition?: OneOf<typeof TooltipPosition, keyof typeof TooltipPosition>;
}

declare const Chip: FunctionComponent<ChipProps>;

export default Chip;
