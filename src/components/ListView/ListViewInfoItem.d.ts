import { SFC, HTMLAttributes } from 'react';

export interface ListViewInfoItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Toggle the InfoItem contents stacking */
  stacked?: boolean;
}

declare const ListViewInfoItem: SFC<ListViewInfoItemProps>;

export default ListViewInfoItem;
