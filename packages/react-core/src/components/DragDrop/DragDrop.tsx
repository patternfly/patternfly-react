import * as React from 'react';

export const DragDropContext = React.createContext({
  draggingZone: '',
  setDraggingZone: (_zone: string) => {}
});

interface DragDropProps {
  /** Potentially Droppable and Draggable children */
  children?: React.ReactNode;
}

export const DragDrop: React.FunctionComponent<DragDropProps> = ({ children }: DragDropProps) => {
  const [draggingZone, setDraggingZone] = React.useState('');

  return <DragDropContext.Provider value={{ draggingZone, setDraggingZone }}>{children}</DragDropContext.Provider>;
};
DragDrop.displayName = 'DragDrop';
