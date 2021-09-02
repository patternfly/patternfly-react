import * as React from 'react';
import { DragDropContext } from './DragDrop';

export const DroppableContext = React.createContext({
  zone: 'defaultZone'
});

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
      <div className={className} style={draggingZone === zone ? { background: 'blue' } : {}} {...props}>
        {children}
      </div>
    </DroppableContext.Provider>
  );
};
Droppable.displayName = 'Droppable';
