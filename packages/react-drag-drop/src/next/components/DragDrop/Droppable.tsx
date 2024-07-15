import * as React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { DraggableObject } from './DragDropContainer';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { DraggableDualListSelectorListItem } from './DraggableDualListSelectorListItem';
import { DraggableDataListItem } from './DraggableDataListItem';
import { Draggable } from './Draggable';

interface DroppableProps extends React.HTMLProps<HTMLDivElement> {
  /** ID of the drop zone */
  id?: string;
  /** Additional classes added to the div, or cloned element if wrapper is used */
  className?: string;
  /** Array of draggable objects */
  items: DraggableObject[];
  /** Alternative to wrapping drop zone in a div, will override any ref and style set on the element. */
  wrapper?: React.ReactElement;
  /** The variant determines which component wraps the draggable object.
   * Default variant wraps the draggable object in a div.
   * DataList vairant wraps the draggable object in a DataListItem
   * DualListSelectorList variant wraps the draggable objects in a DualListSelectorListItem and a div.pf-c-dual-list-selector__item-text element
   * TableComposable variant wraps the draggable objects in TODO
   * */
  variant?: 'default' | 'defaultWithHandle' | 'DataList' | 'DualListSelectorList' | 'TableComposable';
}

export const Droppable: React.FunctionComponent<DroppableProps> = ({
  items,
  id = 'droppable',
  variant = 'default',
  wrapper,
  ...props
}: DroppableProps) => {
  const itemIds = React.useMemo(() => (items ? Array.from(items, (item) => item.id as string) : []), [items]);
  const { setNodeRef } = useDroppable({ id: id ? id : 'droppable' });

  const content = items.map((item: DraggableObject) => {
    switch (variant) {
      case 'DualListSelectorList':
        return (
          <DraggableDualListSelectorListItem key={item.id} id={item.id} {...item.props}>
            {item.content}
          </DraggableDualListSelectorListItem>
        );
      case 'DataList':
        return (
          <DraggableDataListItem key={item.id} id={item.id} {...item.props}>
            {item.content}
          </DraggableDataListItem>
        );
      default:
        return (
          <Draggable
            useDragButton={variant === 'default' || variant === 'defaultWithHandle'}
            key={item.id}
            id={item.id}
            {...item.props}
          >
            {item.content}
          </Draggable>
        );
    }
  });

  return (
    <SortableContext items={itemIds} strategy={verticalListSortingStrategy} id={id}>
      {wrapper &&
        React.cloneElement(wrapper, {
          children: content,
          ref: setNodeRef,
          ...props
        })}
      {!wrapper && (
        <div ref={setNodeRef} {...props}>
          {content}
        </div>
      )}
    </SortableContext>
  );
};
Droppable.displayName = 'Droppable';
