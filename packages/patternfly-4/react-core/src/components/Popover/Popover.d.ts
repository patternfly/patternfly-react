import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '@patternfly/react-core/src/typeUtils';

export interface PopoverProps extends HTMLProps<HTMLDivElement> {
  position: OneOf<typeof PopoverPosition, keyof typeof PopoverPosition>;
  children: ReactNode;
  header: string;
  onClose?(event: React.SyntheticEvent<HTMLButtonElement>): void
}

declare const Popover: SFC<PopoverProps>;

export default Popover;
