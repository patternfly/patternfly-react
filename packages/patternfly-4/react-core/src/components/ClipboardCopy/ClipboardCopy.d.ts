import { ClipboardEvent, FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf, Omit } from '../../helpers/typeUtils';
import { PopoverPosition } from '../Popover';

export enum ClipboardCopyVariant {
  inline = 'inline',
  expansion = 'expansion'
}

export interface ClipboardCopyProps extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
  className?: string;
  hoverTip?: string;
  clickTip?: string;
  textAriaLabel?: string;
  toggleAriaLabel?: string;
  isReadOnly?: boolean;
  variant?: OneOf<typeof ClipboardCopyVariant, keyof typeof ClipboardCopyVariant>;
  position?: OneOf<typeof PopoverPosition, keyof typeof PopoverPosition>;
  maxWidth?: string;
  exitDelay?: number;
  entryDelay?: number;
  switchDelay?: number;
  onCopy?: (event: ClipboardEvent<HTMLDivElement>, text?: string) => void;
  onChange?: (text?: string) => void;
  children?: ReactNode;
}

declare const ClipboardCopy: FunctionComponent<ClipboardCopyProps>;

export default ClipboardCopy;
