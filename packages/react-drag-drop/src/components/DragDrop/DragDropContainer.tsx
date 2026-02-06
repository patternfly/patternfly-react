import { useCallback, useEffect, useRef, useState } from 'react';
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
  UniqueIdentifier,
  DragOverEvent,
  CollisionDetection,
  pointerWithin,
  rectIntersection,
  getFirstCollision,
  DragCancelEvent
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Draggable } from './Draggable';
import { DraggableDataListItem } from './DraggableDataListItem';
import { DraggableDualListSelectorListItem } from './DraggableDualListSelectorListItem';
import styles from '@patternfly/react-styles/css/components/DragDrop/drag-drop';
import { DataList } from '@patternfly/react-core/dist/esm/components/DataList/DataList';
import { canUseDOM } from '@patternfly/react-core/dist/esm/helpers/util';

export type DragDropContainerDragStartEvent = DragStartEvent;
export type DragDropContainerDragOverEvent = DragOverEvent;
export type DragDropContainerDragEndEvent = DragEndEvent;
export type DragDropContainerDragCancelEvent = DragCancelEvent;

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
export interface DragDropContainerProps extends DndContextProps {
  /** Content containing one or more Droppable zones. */
  children?: React.ReactNode;
  /** Set of records of all child droppables - their zone IDs and their draggable items. */
  items: Record<string, DraggableObject[]>;
  /** Callback when use begins dragging a draggable object */
  onDrag?: (event: DragDropContainerDragStartEvent) => void;
  /** Callback when an item is dragged to another container */
  onContainerMove?: (event: DragDropContainerDragOverEvent, items: Record<string, DraggableObject[]>) => void;
  /** Callback when user drops a draggable object */
  onDrop: (event: DragDropContainerDragEndEvent, items: Record<string, DraggableObject[]>) => void;
  /** Callback when drag is cancelled */
  onCancel?: (event: DragDropContainerDragCancelEvent, items: Record<string, DraggableObject[]>) => void;
  /** The variant determines which component wraps the draggable object.
   * Default variant wraps the draggable object in a div.
   * DataList variant wraps the draggable object in a DataListItem
   * DualListSelectorList variant wraps the draggable objects in a DualListSelectorListItem and a div.pf-c-dual-list-selector__item-text element
   * */
  variant?: 'default' | 'DataList' | 'DualListSelectorList';
  /** Additional classes to apply to the drag overlay */
  overlayProps?: any;
}

export const DragDropContainer: React.FunctionComponent<DragDropContainerProps> = ({
  children,
  items,
  onDrag = () => {},
  onContainerMove = () => {},
  onDrop = () => {},
  onCancel = () => {},
  variant = 'default',
  overlayProps,
  ...props
}: DragDropContainerProps) => {
  const itemsCopy = useRef<Record<string, DraggableObject[]> | null>(null);
  const hasRecentlyMovedContainer = useRef(false);
  const [activeId, setActiveId] = useState<UniqueIdentifier>(null);
  const lastOverId = useRef<UniqueIdentifier | null>(null);

  const findItem = useCallback(
    (id: UniqueIdentifier, containerId: UniqueIdentifier) => items[containerId].find((item) => item.id === id),
    [items]
  );

  const findContainer = useCallback(
    (id: UniqueIdentifier) => {
      if (id in items) {
        return id;
      }
      return Object.keys(items).find((key) => items[key].find((obj) => obj.id === id));
    },
    [items]
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const collisionDetectionStrategy: CollisionDetection = useCallback(
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
          const containerItems = items[overId];

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

      if (hasRecentlyMovedContainer.current) {
        lastOverId.current = activeId;
      }
      return lastOverId.current ? [{ id: lastOverId.current }] : [];
    },
    [activeId, items]
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      hasRecentlyMovedContainer.current = false;
    });
  }, [items]);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    itemsCopy.current = { ...items };
    setActiveId(active.id);

    onDrag(event);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    const { id: activeId } = active;
    const { id: overId } = over;

    if (!overId || activeId in items) {
      return;
    }

    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId);

    if (!overContainer || !activeContainer) {
      return;
    }

    if (activeContainer !== overContainer) {
      const activeItems = items[activeContainer];
      const overItems = items[overContainer];
      const overIndex = overItems.findIndex((draggableItem) => draggableItem.id === overId);
      const activeIndex = activeItems.findIndex((draggableItem) => draggableItem.id === activeId);

      const isBelowOverItem =
        over && active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height;

      const modifier = isBelowOverItem ? 1 : 0;
      const newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;

      const newItems = {
        ...items,
        [activeContainer]: items[activeContainer].filter((item) => item.id !== active.id),
        [overContainer]: [
          ...items[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...items[overContainer].slice(newIndex, items[overContainer].length)
        ]
      };

      hasRecentlyMovedContainer.current = true;
      onContainerMove(event, newItems);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const { id: activeId } = active;
    const { id: overId } = over;

    const activeContainer = findContainer(activeId);
    if (!over || !activeContainer) {
      setActiveId(null);
      return;
    }

    const overContainer = findContainer(overId);
    if (!overContainer) {
      setActiveId(null);
      return;
    }

    const activeIndex = items[activeContainer].findIndex((draggableItem) => draggableItem.id === activeId);
    const overIndex = items[overContainer].findIndex((draggableItem) => draggableItem.id === overId);

    if (activeIndex !== overIndex) {
      const newItems = { ...items, [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex) };
      onDrop(event, newItems);
    }
    setActiveId(null);
  };

  const handleDragCancel = (event: DragCancelEvent) => {
    onCancel(event, itemsCopy.current);
    itemsCopy.current = null;
    setActiveId(null);
  };

  const getDragOverlay = () => {
    if (!activeId) {
      return;
    }
    const item = findItem(activeId, findContainer(activeId));

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
          <Draggable useDragButton={variant === 'default'} key={item.id} id={item.id} {...item.props}>
            {item.content}
          </Draggable>
        );
    }

    return (
      <div
        className={css(styles.draggable, styles.modifiers.dragging)}
        style={
          {
            '--pf-v6-c-draggable--m-dragging--BackgroundColor':
              'var(--pf-t--global--background--color--primary--default)'
          } as React.CSSProperties
        }
      >
        {variant === 'DualListSelectorList' && <ul className="pf-v6-c-dual-list-selector">{content}</ul>}
        {variant === 'DataList' && (
          <DataList aria-label="draggable overlay" {...overlayProps}>
            {content}
          </DataList>
        )}
        {variant !== 'DualListSelectorList' && variant !== 'DataList' && content}
      </div>
    );
  };

  const dragOverlay = <DragOverlay>{activeId && getDragOverlay()}</DragOverlay>;

  // Find the React root element dynamically instead of hardcoding 'root'
  const getRootElement = () => {
    // Try common root element IDs
    const commonRootIds = ['root', 'app', 'main', '__next'];
    for (const id of commonRootIds) {
      const element = document.getElementById(id);
      if (element) {
        return element;
      }
    }
    // Fallback to document.body if no common root is found
    return document.body;
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetectionStrategy}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      {...props}
    >
      {children}
      {canUseDOM ? ReactDOM.createPortal(dragOverlay, getRootElement()) : dragOverlay}
    </DndContext>
  );
};
DragDropContainer.displayName = 'DragDropContainer';
