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
  const ref = React.useRef<HTMLDivElement>();
  const [isCursorInside, setIsCursorInside] = React.useState(true);

  return (
    <DroppableContext.Provider value={{ zone }}>
      <div
        className={className}
        style={
          draggingZone === zone
            ? { boxShadow: `0px 0px 0px 1px ${isCursorInside ? 'blue' : 'red'}, 0px 2px 5px rgba(0, 0, 0, 0.2)` }
            : {}
        }
        ref={ref}
        onMouseMove={ev => {
          const rect = ref.current.getBoundingClientRect();
          if (
            ev.clientX > rect.x &&
            ev.clientX < rect.x + rect.width &&
            ev.clientY > rect.y &&
            ev.clientY < rect.y + rect.height
          ) {
            setIsCursorInside(true);
          } else {
            setIsCursorInside(false);
          }
        }}
        {...props}
      >
        {children}
      </div>
    </DroppableContext.Provider>
  );
};
Droppable.displayName = 'Droppable';
