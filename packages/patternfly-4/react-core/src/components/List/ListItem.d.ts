import { SFC, HTMLProps, ReactNode } from 'react';

export interface ListItemProps extends HTMLProps<HTMLLIElement> {
  children?: ReactNode;
}

declare const ListItem: SFC<ListItemProps>;

export default ListItem;
