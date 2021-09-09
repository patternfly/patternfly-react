import * as React from 'react';

interface ZoneNodes {
  [zone: string]: HTMLElement[];
}

export const DragDropContext = React.createContext({
  draggableZoneNodes: {} as ZoneNodes,
  setDraggableZoneNodes: (_nodes: ZoneNodes) => {},
  onDrop: (
    _sourceDroppableKey: string | number,
    _sourceDraggableKey: string | number,
    _destDroppableKey: string | number | null,
    _destDraggableKey: string | number | null
  ) => false as boolean
});

interface DragDropProps {
  /** Potentially Droppable and Draggable children */
  children?: React.ReactNode;
  /** Callback for drop event */
  onDrop?: (
    sourceDroppableKey: string | number,
    sourceDraggableKey: string | number,
    destDroppableKey: string | number | null,
    destDraggableKey: string | number | null
  ) => boolean;
}

export const DragDrop: React.FunctionComponent<DragDropProps> = ({ children, onDrop = () => false }: DragDropProps) => {
  // Used for reordering
  const [draggableZoneNodes, setDraggableZoneNodes] = React.useState({});

  return (
    <DragDropContext.Provider value={{ draggableZoneNodes, setDraggableZoneNodes, onDrop }}>
      {children}
    </DragDropContext.Provider>
  );
};
DragDrop.displayName = 'DragDrop';
