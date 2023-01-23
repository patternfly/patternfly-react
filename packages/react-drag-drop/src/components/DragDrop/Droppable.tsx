import * as React from 'react';
import { useDroppable } from '@dnd-kit/core';

interface DroppableProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside DragDrop */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Name of zone that items can be dragged between. Should specify if there is more than one Droppable on the page. */
  zone?: string;
  /** Id to be passed back on drop events */
  droppableId?: string;
  /** Don't wrap the component in a div. Requires passing a single child. */
  hasNoWrapper?: boolean;
}

export const Droppable: React.FunctionComponent<DroppableProps> = ({ children, ...props }: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({ id: 'droppable' });
  const style = { color: isOver ? 'green' : undefined };

  return (
    <div ref={setNodeRef} style={style} {...props}>
      {children}
    </div>
  );
};
Droppable.displayName = 'Droppable';
