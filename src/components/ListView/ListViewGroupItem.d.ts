import { HTMLAttributes, SFC } from 'react';

export interface ListViewGroupItemProps extends HTMLAttributes<HTMLDivElement> {
  expanded?: string;
  stacked?: boolean;
}

declare const ListViewGroupItem: SFC<ListViewGroupItemProps>;

export default ListViewGroupItem;
