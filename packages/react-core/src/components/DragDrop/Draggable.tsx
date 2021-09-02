import * as React from 'react';
import { createPortal } from 'react-dom';
import { DroppableContext } from './Droppable';
import { DragDropContext } from './DragDrop';

interface DraggableProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside DragDrop */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
}

export const Draggable: React.FunctionComponent<DraggableProps> = ({
  className,
  children,
  onDragStart: onDragStartProp = () => {},
  style: styleProp,
  ...props
}: DraggableProps) => {
  // eslint-disable-next-line prefer-const
  let [style, setStyle] = React.useState(styleProp);
  const [isDragging, setIsDragging] = React.useState(false);
  const { zone } = React.useContext(DroppableContext);
  const { setDraggingZone } = React.useContext(DragDropContext);
  let startX = 0;
  let startY = 0;

  const ref = React.createRef<HTMLDivElement>();

  const onTransitionEnd = (_ev: React.TransitionEvent<HTMLDivElement>) => {
    setIsDragging(false);
    setStyle(styleProp);
  };

  const onMouseUp = (_ev: MouseEvent) => {
    setStyle({
      ...style,
      transition: 'transform 0.5s cubic-bezier(0.2, 1, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.2, 1, 0.1, 1) 0s',
      transform: '',
      background: styleProp.background
    });
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    setDraggingZone('');
  };

  const onMouseMove = (ev: MouseEvent) => {
    ev.preventDefault();
    setStyle({
      ...style,
      transform: `translate(${ev.pageX - startX}px, ${ev.pageY - startY}px)`
    });
  };

  const onDragStart = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    if (isDragging) {
      // still in animation
      return;
    }
    onDragStartProp(ev);
    const boundingClientRect = ref.current.getBoundingClientRect();
    style = {
      ...style,
      position: 'fixed',
      top: boundingClientRect.y,
      left: boundingClientRect.x,
      width: boundingClientRect.width,
      height: boundingClientRect.height,
      background: 'green',
      zIndex: 5000
    };
    setStyle(style);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    startX = ev.pageX;
    startY = ev.pageY;
    setIsDragging(true);
    setDraggingZone(zone);
  };

  const div = (
    <div
      draggable
      role="button"
      className={className}
      onDragStart={onDragStart}
      onTransitionEnd={onTransitionEnd}
      style={style}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );

  return (
    <React.Fragment>
      {/* Leave behind blank spot per-design */}
      {isDragging && React.cloneElement(div, { style: { ...styleProp, visibility: 'hidden' } })}
      {/* Move dragging part into portal to appear above side/top nav */}
      {isDragging ? createPortal(div, document.body) : div}
    </React.Fragment>
  );
};
Draggable.displayName = 'Draggable';
