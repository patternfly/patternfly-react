import { ReactNode, SFC } from 'react';

export interface ListViewExpandProps {
  /** Function to execute to trigger toggle */
  toggleExpanded(): void;
  children?: ReactNode;
  expanded?: string;
}

declare const ListViewExpand: SFC<ListViewExpandProps>;

export default ListViewExpand;
