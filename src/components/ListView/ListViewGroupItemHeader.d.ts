import { ReactNode, SFC } from 'react';

export interface ListViewGroupItemHeaderProps {
  /** Function to execute to trigger toggle */
  toggleExpanded(): void;
  children?: ReactNode;
}

declare const ListViewGroupItemHeader: SFC<ListViewGroupItemHeaderProps>;

export default ListViewGroupItemHeader;
