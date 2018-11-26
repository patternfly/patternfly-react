import { SFC, ReactNode } from 'react';

export interface PopoverBodyProps  {
  id: string
  children: ReactNode;
}

declare const PopoverBody: SFC<PopoverBodyProps>;

export default PopoverBody;
