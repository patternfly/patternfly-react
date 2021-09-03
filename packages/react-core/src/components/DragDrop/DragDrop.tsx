import * as React from 'react';

interface ZoneNodes {
  [zone: string]: HTMLElement[];
}

export const DragDropContext = React.createContext({
  draggingZone: '',
  setDraggingZone: (_zone: string) => {},
  draggableZoneNodes: {} as ZoneNodes,
  setDraggableZoneNodes: (_nodes: ZoneNodes) => {}
});

interface DragDropProps {
  /** Potentially Droppable and Draggable children */
  children?: React.ReactNode;
}

export const DragDrop: React.FunctionComponent<DragDropProps> = ({ children }: DragDropProps) => {
  // Used for highlighting Droppable
  const [draggingZone, setDraggingZone] = React.useState('');
  // Used for reordering
  const [draggableZoneNodes, setDraggableZoneNodes] = React.useState({});

  return (
    <DragDropContext.Provider value={{ draggingZone, setDraggingZone, draggableZoneNodes, setDraggableZoneNodes }}>
      {children}
    </DragDropContext.Provider>
  );
};
DragDrop.displayName = 'DragDrop';
