import * as React from 'react';
import { Title, TitleSizes } from '../Title';

/**
 *
 */
export function PopoverHeader({ children, id, ...props }: PopoverHeaderProps) {
  return (
    <Title headingLevel="h6" size={TitleSizes.md} id={id} {...props}>
      {children}
    </Title>
  );
}

export interface PopoverHeaderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  /** popover id */
  id: string;
  /** header node */
  children: React.ReactNode;
}
