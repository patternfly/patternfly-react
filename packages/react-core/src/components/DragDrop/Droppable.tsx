import * as React from 'react';
import { DroppableContext } from './DroppableContext';

interface DroppableProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside DragDrop */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Name of zone that items can be dragged between. Should specify if there is more than one Droppable on the page. */
  zone?: string;
  /** Id to be passed back on drop events */
  droppableId?: string;
}

export const Droppable: React.FunctionComponent<DroppableProps> = ({
  className,
  children,
  zone = 'defaultZone',
  droppableId = 'defaultId',
  ...props
}: DroppableProps) => (
  <DroppableContext.Provider value={{ zone, droppableId }}>
    <div data-pf-droppable={zone} data-pf-droppableid={droppableId} className={className} {...props}>
      {children}
    </div>
  </DroppableContext.Provider>
);
Droppable.displayName = 'Droppable';
