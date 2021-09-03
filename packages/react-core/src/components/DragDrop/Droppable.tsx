import * as React from 'react';
import { DragDropContext } from './DragDrop';
import { DroppableContext } from './DroppableContext';

interface DroppableProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside DragDrop */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Name of zone that items can be dragged between */
  zone?: string;
}

export const Droppable: React.FunctionComponent<DroppableProps> = ({
  className,
  children,
  zone = 'defaultZone',
  ...props
}: DroppableProps) => {
  const { draggingZone } = React.useContext(DragDropContext);

  return (
    <DroppableContext.Provider value={{ zone }}>
      <div
        className={className}
        style={draggingZone === zone ? { boxShadow: '0px 0px 0px 1px blue, 0px 2px 5px rgba(0, 0, 0, 0.2)' } : {}}
        {...props}
      >
        {children}
      </div>
    </DroppableContext.Provider>
  );
};
Droppable.displayName = 'Droppable';
