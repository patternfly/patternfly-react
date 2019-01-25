import { SFC, ReactNode } from 'react';

export interface PopoverHeaderProps  {
  id: string
  children: ReactNode;
}

declare const PopoverHeader: SFC<PopoverHeaderProps>;

export default PopoverHeader;
