import { ReactNode, MouseEvent, SFC } from 'react';

export interface ListViewGroupItemContainerProps {
  children?: ReactNode;
  /** Boolean indicating whether expandable content is visible */
  expanded?: string;
  /** Function to call when 'close icon' is clicked */
  onClose?(evt: MouseEvent<HTMLSpanElement>): void;
}

declare const ListViewGroupItemContainer: SFC<ListViewGroupItemContainerProps>;

export default ListViewGroupItemContainer;
