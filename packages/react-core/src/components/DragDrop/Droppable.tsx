import * as React from 'react';
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
}: DroppableProps) => (
  <DroppableContext.Provider value={{ zone }}>
    <div data-pf-droppable={zone} className={className} {...props}>
      {children}
    </div>
  </DroppableContext.Provider>
);
Droppable.displayName = 'Droppable';
