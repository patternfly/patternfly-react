import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface ListItemProps extends HTMLProps<HTMLLIElement> {
  children?: ReactNode;
}

declare const ListItem: FunctionComponent<ListItemProps>;

export default ListItem;
