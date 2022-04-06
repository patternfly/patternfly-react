import * as React from 'react';
import {
  DndContext,
  closestCenter,
  DragOverlay,
  DndContextProps,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { Draggable } from './Draggable';
import { DragButton } from './DragButton';
import { DraggableDataListItem } from './DraggableDataListItem';
import { DraggableDualListSelectorListItem } from './DraggableDualListSelectorListItem';

export interface DraggableObject {
  /** Unique id of the draggable object */
  id: string;
  /** Content rendered in the draggable object */
  content: React.ReactNode;
  /** Props spread to the rendered wrapper of the draggable object */
  props?: any;
}

interface DragDropSort extends DndContextProps {
  /** Sorted array of draggable objects */
  items: DraggableObject[];
  /** Callback when user drops a draggable object */
  onDrop: (items: DraggableObject[], oldIndex?: number, newIndex?: number) => void;
  /** Callback when use begins dragging a draggable object */
  onDrag?: (oldIndex: number) => void;
  /** The variant determines which component wraps the draggable object.
   * Default and defaultWithHandle varaints wrap the draggable object in a div.
   * DataList vairant wraps the draggable object in a DataListItem
   * DualListSelectorList variant wraps the draggable objects in a DualListSelectorListItem and a div.pf-c-dual-list-selector__item-text element
   * TableComposable variant wraps the draggable objects in TODO
   * */
  variant?: 'default' | 'defaultWithHandle' | 'DataList' | 'DualListSelectorList' | 'TableComposable';
}

export const DragDropSort: React.FunctionComponent<DragDropSort> = ({
  items,
  onDrop = () => {},
  onDrag = () => {},
  variant = 'default'
}: DragDropSort) => {
  const [activeId, setActiveId] = React.useState<string>(null);

  const itemIds = React.useMemo(() => (items ? Array.from(items, item => item.id) : []), [items]);

  const getItemById = (id: string): DraggableObject => items.find(item => item.id === id);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const oldIndex = itemIds.indexOf(active.id);
    const newIndex = itemIds.indexOf(over.id);
    const newItems = arrayMove(items, oldIndex, newIndex);
    onDrop(newItems, oldIndex, newIndex);
    return newItems;
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
    onDrag(itemIds.indexOf(event.active.id));
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
        {items.map((item: DraggableObject) => {
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
                <Draggable useDragButton={variant === 'defaultWithHandle'} key={item.id} id={item.id} {...item.props}>
                  {item.content}
                </Draggable>
              );
          }
        })}
        <DragOverlay>
          <div className="pf-c-draggable pf-m-dragging pf-l-flex">
            <span className="pf-l-flex__item">{variant !== 'default' && <DragButton />}</span>
            <span className="pf-l-flex__item">{activeId ? getItemById(activeId).content : null}</span>
          </div>
        </DragOverlay>
      </SortableContext>
    </DndContext>
  );
};
DragDropSort.displayName = 'DragDropSort';
