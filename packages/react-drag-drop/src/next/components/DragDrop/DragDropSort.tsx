import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { css } from '@patternfly/react-styles';
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
  DragStartEvent,
  CollisionDetection,
  pointerWithin,
  rectIntersection,
  getFirstCollision,
  UniqueIdentifier
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Draggable } from './Draggable';
import { DraggableDataListItem } from './DraggableDataListItem';
import { DraggableDualListSelectorListItem } from './DraggableDualListSelectorListItem';
import styles from '@patternfly/react-styles/css/components/DragDrop/drag-drop';
import { canUseDOM } from '@patternfly/react-core';
import { Droppable } from './Droppable';

export type DragDropSortDragEndEvent = DragEndEvent;
export type DragDropSortDragStartEvent = DragStartEvent;

export interface DraggableObject {
  /** Unique id of the draggable object */
  id: string | number;
  /** Content rendered in the draggable object */
  content: React.ReactNode;
  /** Props spread to the rendered wrapper of the draggable object */
  props?: any;
}

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
  variant?: 'default' | 'defaultWithHandle' | 'DataList' | 'DualListSelectorList' | 'TableComposable';
}

export const DragDropSort: React.FunctionComponent<DragDropSortProps> = ({
  items,
  onDrop = () => {},
  onDrag = () => {},
  variant = 'default',
  children,
  ...props
}: DragDropSortProps) => {
  const [activeId, setActiveId] = React.useState<string>(null);
  const itemIds = React.useMemo(() => (items ? Array.from(items, (item) => item.id as string) : []), [items]);

  const getItemById = (id: string): DraggableObject => items.find((item) => item.id === id);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const oldIndex = itemIds.indexOf(active.id as string);
    const newIndex = itemIds.indexOf(over.id as string);
    const newItems = arrayMove(items, oldIndex, newIndex);
    onDrop(event, newItems, oldIndex, newIndex);
    setActiveId(null);
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
    onDrag(event, itemIds.indexOf(event.active.id as string));
  };

  const lastOverId = React.useRef<UniqueIdentifier | null>(null);
  const collisionDetectionStrategy: CollisionDetection = React.useCallback(
    (args) => {
      if (activeId && activeId in items) {
        return closestCenter({
          ...args,
          droppableContainers: args.droppableContainers.filter((container) => container.id in items)
        });
      }

      const pointerIntersections = pointerWithin(args);
      const intersections = pointerIntersections.length > 0 ? pointerIntersections : rectIntersection(args);
      let overId = getFirstCollision(intersections, 'id');

      if (overId != null) {
        if (overId in items) {
          const containerItems = items;

          if (containerItems.length > 0) {
            overId = closestCenter({
              ...args,
              droppableContainers: args.droppableContainers.filter(
                (container) => container.id !== overId && containerItems.find((obj) => obj.id === container.id)
              )
            })[0]?.id;
          }
        }

        lastOverId.current = overId;

        return [{ id: overId }];
      }
      return lastOverId.current ? [{ id: lastOverId.current }] : [];
    },
    [activeId, items]
  );

  const getDragOverlay = () => {
    if (!activeId) {
      return;
    }
    const item = getItemById(activeId);

    let content;
    switch (variant) {
      case 'DualListSelectorList':
        content = (
          <DraggableDualListSelectorListItem key={item.id} id={item.id} {...item.props}>
            {item.content}
          </DraggableDualListSelectorListItem>
        );
        break;
      case 'DataList':
        content = (
          <DraggableDataListItem key={item.id} id={item.id} {...item.props}>
            {item.content}
          </DraggableDataListItem>
        );
        break;
      default:
        content = (
          <Draggable
            useDragButton={variant === 'defaultWithHandle' || variant === 'default'}
            key={item.id}
            id={item.id}
            {...item.props}
          >
            {item.content}
          </Draggable>
        );
    }

    return (
      <div
        className={css(styles.draggable, styles.modifiers.dragging)}
        style={
          {
            '--pf-v5-c-draggable--m-dragging--BackgroundColor': 'var(--pf-v5-global--BackgroundColor--100)'
          } as React.CSSProperties
        }
      >
        {content}
      </div>
    );
  };

  const dragOverlay = <DragOverlay>{activeId && getDragOverlay()}</DragOverlay>;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetectionStrategy}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      {...props}
    >
      <Droppable items={items} id="droppable" variant={variant} {...(children && { wrapper: children })} />
      {canUseDOM ? ReactDOM.createPortal(dragOverlay, document.getElementById('root')) : dragOverlay}
    </DndContext>
  );
};
DragDropSort.displayName = 'DragDropSort';
