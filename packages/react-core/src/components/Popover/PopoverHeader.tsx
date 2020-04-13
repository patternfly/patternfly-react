import * as React from 'react';
import { Title, TitleSizes } from '../Title';

export const PopoverHeader: React.FunctionComponent<PopoverHeaderProps> = ({
  children,
  id,
  ...props
}: PopoverHeaderProps) => (
  <Title headingLevel="h6" size={TitleSizes.md} id={id} {...props}>
    {children}
  </Title>
);

export interface PopoverHeaderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  /** popover id */
  id: string;
  /** header node */
  children: React.ReactNode;
}
