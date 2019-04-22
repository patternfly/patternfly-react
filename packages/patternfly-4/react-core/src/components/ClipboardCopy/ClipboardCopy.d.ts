import { FunctionComponent, HTMLProps, MouseEvent } from 'react';
import { OneOf } from '../../typeUtils';
import { PopoverPosition } from '../Popover';

export const ClipboardCopyVariant = {
  inline: 'inline',
  expansion: 'expansion'
};

export interface ClipboardCopyProps extends HTMLProps<HTMLDivElement> {
  hoverTip?: string;
  clickTip?: string;
  'toggle-aria-label'?: string;
  isReadOnly?: boolean;
  variant?: OneOf<typeof ClipboardCopyVariant, keyof typeof ClipboardCopyVariant>;
  position?: OneOf<typeof PopoverPosition, keyof typeof PopoverPosition>;
  maxWidth?: string;
  exitDelay?: number;
  entryDelay?: number;
  switchDelay?: number;
  onCopy?: (event: MouseEvent, text?: string) => void;
  onChange?: (text: string) => void;
}

declare const ClipboardCopy: FunctionComponent<ClipboardCopyProps>;

export default ClipboardCopy;
