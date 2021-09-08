import * as React from 'react';
import { DroppableContext } from './DroppableContext';

interface DroppableProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside DragDrop */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Name of zone that items can be dragged between */
  zone?: string;
  /** Id to be passed back on drop events */
  key?: string | number | null;
}

export const Droppable: React.FunctionComponent<DroppableProps> = ({
  className,
  children,
  zone = 'defaultZone',
  key,
  ...props
}: DroppableProps) => (
  <DroppableContext.Provider value={{ zone, key }}>
    <div data-pf-droppable={zone} data-pf-droppable-key={key} className={className} {...props}>
      {children}
    </div>
  </DroppableContext.Provider>
);
Droppable.displayName = 'Droppable';
