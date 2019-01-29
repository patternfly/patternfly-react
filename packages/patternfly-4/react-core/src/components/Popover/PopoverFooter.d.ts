import { FunctionComponent, ReactNode } from 'react';

export interface PopoverHeaderProps  {
  id: string
  children: ReactNode;
}

declare const PopoverHeader: FunctionComponent<PopoverHeaderProps>;

export default PopoverHeader;
