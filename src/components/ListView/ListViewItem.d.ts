import { ListViewGroupItemProps } from './ListViewGroupItem';
import { ReactNode, ComponentClass } from 'react';

export interface ListViewItemProps extends ListViewGroupItemProps {
  actions?: ReactNode;
  additionalInfo?: ReactNode;
  checkboxInput?: ReactNode;
  compoundExpand?: boolean;
  compoundExpanded?: boolean;
  description?: ReactNode;
  heading?: ReactNode;
  hideCloseIcon?: boolean;
  leftContent?: ReactNode;
  onCloseCompoundExpand?(): void;
  onExpand?(): void;
  onExpandClose?(): void;
}

declare const ListViewItem: ComponentClass<ListViewItemProps>;

export default ListViewItem;
