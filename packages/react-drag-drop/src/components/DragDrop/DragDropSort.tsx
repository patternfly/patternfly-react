import * as React from 'react';
import { DndContextProps, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { Droppable } from './Droppable';
import { DragDropContainer, DraggableObject } from './DragDropContainer';

export type DragDropSortDragEndEvent = DragEndEvent;
export type DragDropSortDragStartEvent = DragStartEvent;

/**
 * DragDropSortProps extends dnd-kit's props which may be viewed at https://docs.dndkit.com/api-documentation/context-provider#props.
 */
export interface DragDropSortProps extends DndContextProps {
  /** Custom defined content wrapper for draggable items. By default, draggable items are wrapped in a styled div.
   * Intended to be a 'DataList' or 'DualListSelectorList' without children. */
  children?: React.ReactElement;
  /** Sorted array of draggable objects */
  items: DraggableObject[];
  /** Callback when user drops a draggable object */
  onDrop: (event: DragDropSortDragEndEvent, items: DraggableObject[], oldIndex?: number, newIndex?: number) => void;
  /** Callback when use begins dragging a draggable object */
  onDrag?: (event: DragDropSortDragStartEvent, oldIndex: number) => void;
  /** The variant determines which component wraps the draggable object.
   * Default and defaultWithHandle varaints wrap the draggable object in a div.
   * DataList vairant wraps the draggable object in a DataListItem
   * DualListSelectorList variant wraps the draggable objects in a DualListSelectorListItem and a div.pf-c-dual-list-selector__item-text element
   * TableComposable variant wraps the draggable objects in TODO
   * */
  variant?: 'default' | 'DataList' | 'DualListSelectorList' | 'TableComposable';
  /** Additional classes to apply to the drag overlay */
  overlayProps?: any;
}

export const DragDropSort: React.FunctionComponent<DragDropSortProps> = ({
  items,
  onDrop = () => {},
  onDrag = () => {},
  variant = 'default',
  children,
  overlayProps,
  ...props
}: DragDropSortProps) => {
  const itemIds = React.useMemo(() => (items ? Array.from(items, (item) => item.id as string) : []), [items]);

  const handleDragStart = (event: DragStartEvent) => {
    onDrag(event, itemIds.indexOf(event.active.id as string));
  };

  const handleDragEnd = (event: DragEndEvent, newItems: Record<string, DraggableObject[]>) => {
    const { active, over } = event;
    const oldIndex = itemIds.indexOf(active.id as string);
    const newIndex = itemIds.indexOf(over.id as string);
    onDrop(event, newItems[dropZoneId], oldIndex, newIndex);
  };

  const dropZoneId = props.id ? props.id : 'droppable';
  return (
    <DragDropContainer
      variant={variant}
      items={{ [dropZoneId]: items }}
      onDrag={handleDragStart}
      onDrop={handleDragEnd}
      overlayProps={overlayProps}
    >
      <Droppable items={items} id={dropZoneId} variant={variant} {...(children && { wrapper: children })} />
    </DragDropContainer>
  );
};
DragDropSort.displayName = 'DragDropSort';
