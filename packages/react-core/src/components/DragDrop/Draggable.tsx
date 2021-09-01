import * as React from 'react';
import { createPortal } from 'react-dom';
import { css } from '@patternfly/react-styles';

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
  let [style, setStyle] = React.useState(styleProp);
  const [isDragging, setIsDragging] = React.useState(false);
  let startX = 0, startY = 0;

  const ref = React.createRef<HTMLDivElement>();

  const onMouseUp = (ev: MouseEvent) => {
    if (ev.button === 0) {
      setStyle(styleProp);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      setIsDragging(false);
    }
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
    onDragStartProp(ev);
    const boundingClientRect = ref.current.getBoundingClientRect();
    style = {
      ...style,
      position: 'fixed',
      top: boundingClientRect.y,
      left: boundingClientRect.x,
      width: ref.current.clientWidth,
      height: ref.current.clientHeight,
      background: 'green',
      zIndex: 5000,
      transition: 'opacity 0.2s cubic-bezier(0.2, 0, 0, 1) 0s',
    };
    setStyle(style);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    startX = ev.pageX;
    startY = ev.pageY;
    setIsDragging(true);
  };

  const div = (
    <div
      draggable
      role="button"
      className={className}
      onDragStart={onDragStart}
      onDragEnd={() => console.log('onDragEnd')}
      style={style}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );

  return isDragging ? createPortal(div, document.body) : div;
}
Draggable.displayName = 'Draggable';

