import * as React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import dragStyles from '@patternfly/react-styles/css/components/DragDrop/drag-drop';
import { DragButton } from './DragButton';
import { DataListItemRow, DataListControl } from '@patternfly/react-core';

export interface DraggableDataListItemObject {
  id?: string;
  content?: React.ReactNode;
}

export interface DraggableDataListItemProps extends React.HTMLProps<HTMLLIElement> {
  /** Content rendered inside DragDrop */
  children?: React.ReactNode;
  /** Don't wrap the component in a div. Requires passing a single child. */
  hasNoWrapper?: boolean;
  /** Class to add to outer div */
  className?: string;
  /** @hide Id of the sortable context. */
  id?: string;
}

export const DraggableDataListItem: React.FunctionComponent<DraggableDataListItemProps> = ({
  children,
  id,
  className,
  ...props
}: DraggableDataListItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <li
      id={id}
      className={css(
        styles.dataListItem,
        isDragging && dragStyles.droppable,
        isDragging && dragStyles.modifiers.dragging,
        className
      )}
      {...props}
      ref={setNodeRef}
      style={style}
    >
      <DataListItemRow>
        <DataListControl>
          <DragButton className={css(styles.dataListItemDraggableButton)} {...attributes} {...listeners} />
        </DataListControl>
        {children}
      </DataListItemRow>
    </li>
  );
};
DraggableDataListItem.displayName = 'DraggableDataListItem';
