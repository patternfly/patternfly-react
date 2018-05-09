import { SFC, ReactNode } from 'react';

export interface ListViewActionsProps {
  children?: ReactNode;
}

declare const ListViewActions: SFC<ListViewActionsProps>;

export default ListViewActions;
