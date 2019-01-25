import { FunctionComponent, ReactNode } from 'react';

export interface PopoverBodyProps  {
  id: string
  children: ReactNode;
}

declare const PopoverBody: FunctionComponent<PopoverBodyProps>;

export default PopoverBody;
