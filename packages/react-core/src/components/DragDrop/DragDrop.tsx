import * as React from 'react';

interface ZoneNodes {
  [zone: string]: HTMLElement[];
}

export const DragDropContext = React.createContext({
  draggingZone: '',
  setDraggingZone: (_zone: string) => {},
  draggableZoneNodes: {} as ZoneNodes,
  setDraggableZoneNodes: (_nodes: ZoneNodes) => {},
  onDrop: (
    _sourceDroppableKey: string | number,
    _sourceDraggableKey: string | number,
    _destDroppableKey: string | number | null,
    _destDraggableKey: string | number | null
  ) => {}
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
  ) => void;
}

export const DragDrop: React.FunctionComponent<DragDropProps> = ({ children, onDrop = () => {} }: DragDropProps) => {
  // Used for highlighting Droppable
  const [draggingZone, setDraggingZone] = React.useState('');
  // Used for reordering
  const [draggableZoneNodes, setDraggableZoneNodes] = React.useState({});

  return (
    <DragDropContext.Provider
      value={{ draggingZone, setDraggingZone, draggableZoneNodes, setDraggableZoneNodes, onDrop }}
    >
      {children}
    </DragDropContext.Provider>
  );
};
DragDrop.displayName = 'DragDrop';
