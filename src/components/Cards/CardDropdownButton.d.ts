import { SFC, ReactNode } from 'react';

export interface CardDropdownButtonProps {
  /** dropdown button id */
  id: string | number;
  /** Dropdown title */
  title?: ReactNode;
  /** menu right aligned */
  pullRight?: boolean;
}

declare const CardDropdownButton: SFC<CardDropdownButtonProps>;

export default CardDropdownButton;
