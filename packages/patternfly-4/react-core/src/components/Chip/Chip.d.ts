import { SFC, HTMLProps } from 'react';
import { Omit, OneOf } from '../../typeUtils';
import { TooltipPosition } from '../Tooltip';

export const ChipVariant = {
  overflow: 'overflow',
  closable: 'closable'
};

export interface ChipProps extends Omit<HTMLProps<HTMLDivElement>, 'children' > {
  children: string;
  isOverflowed?: boolean;
  variant: OneOf<typeof ChipVariant, keyof typeof ChipVariant>;
  position: OneOf<typeof TooltipPosition, keyof typeof TooltipPosition>;
}

declare const Chip: SFC<ChipProps>;

export default Chip;

