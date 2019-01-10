import { SFC, HTMLProps, ReactNode, ReactElement } from 'react';
import { Omit } from '../../typeUtils';
import { Instance, BasicPlacement } from 'tippy.js';

export const TooltipPosition: {
  top: 'top';
  bottom: 'bottom';
  left: 'left';
  right: 'right';
};

export interface TooltipProps extends Omit<HTMLProps<HTMLDivElement>, 'content' | 'children' | 'size'> {
  /** Tooltip position */
  position?: BasicPlacement;
  /** If true, tries to keep the tooltip in view by flipping it if necessary */
  enableFlip?: boolean;
  /** Tooltip additional class */
  className?: string;
  /** The reference element to which the tooltip is relatively placed to */
  children: ReactElement<any>;
  /** Tooltip content */
  content: ReactNode;
  /** The element to append the tooltip to, defaults to body */
  appendTo?: Element | ((ref: Element) => Element);
  /** z-index of the tooltip */
  zIndex?: number;
  /** Size of the tooltip */
  size: 'small' | 'regular' | 'large';
}

declare const Tooltip: SFC<TooltipProps>;

export default Tooltip;
