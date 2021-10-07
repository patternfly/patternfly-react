import * as React from 'react';

interface DraggableItemPosition {
  /** Parent droppableId */
  droppableId: string;
  /** Index of item in parent Droppable */
  index: number;
}

export const DragDropContext = React.createContext({
  onDrag: (_source: DraggableItemPosition) => true as boolean,
  onDragMove: (_source: DraggableItemPosition, _dest?: DraggableItemPosition) => {},
  onDrop: (_source: DraggableItemPosition, _dest?: DraggableItemPosition) => false as boolean,
  isDragging: false,
  setIsDragging: (isDragging: boolean) => {}
});

interface DragDropProps {
  /** Potentially Droppable and Draggable children */
  children?: React.ReactNode;
  /** Callback for drag event. Return true to allow drag, false to disallow. */
  onDrag?: (source: DraggableItemPosition) => boolean;
  /** Callback on mouse move while dragging. */
  onDragMove?: (source: DraggableItemPosition, dest?: DraggableItemPosition) => void;
  /** Callback for drop event. Return true to allow drop, false to disallow. */
  onDrop?: (source: DraggableItemPosition, dest?: DraggableItemPosition) => boolean;
}

export const DragDrop: React.FunctionComponent<DragDropProps> = ({
  children,
  onDrag = () => true,
  onDragMove = () => {},
  onDrop = () => false,

}: DragDropProps) => {
  const [isDragging, setIsDragging] = React.useState(false);

  return (
    <DragDropContext.Provider value={{ onDrag, onDragMove, onDrop, isDragging, setIsDragging }}>{children}</DragDropContext.Provider>
  );
};
DragDrop.displayName = 'DragDrop';
