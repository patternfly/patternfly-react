import * as React from 'react';
import { createPortal } from 'react-dom';
import { DroppableContext } from './DroppableContext';
import { DragDropContext } from './DragDrop';

export interface DraggableProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside DragDrop */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
}

// They really like being different from each other.
function getDefaultBackground() {
  const div = document.createElement('div');
  document.head.appendChild(div);
  const bg = window.getComputedStyle(div).backgroundColor;
  document.head.removeChild(div);
  return bg;
}

function getInheritedBackgroundColor(el: HTMLElement): string {
  const defaultStyle = getDefaultBackground();
  const backgroundColor = window.getComputedStyle(el).backgroundColor;

  if (backgroundColor !== defaultStyle) {
    return backgroundColor;
  } else if (!el.parentElement) {
    return defaultStyle;
  }

  return getInheritedBackgroundColor(el.parentElement);
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
  let mouseMoveListener: EventListener;
  let mouseUpListener: EventListener;
  let draggableNodes = [] as HTMLDivElement[];
  let blankDivPos = -1;
  let blankDivHeight = 0;

  const ref = React.createRef<HTMLDivElement>();

  const onTransitionEnd = (_ev: React.TransitionEvent<HTMLDivElement>) => {
    setIsDragging(false);
    setStyle(styleProp);
  };

  const onMouseUpWhileDragging = (draggableNodes: HTMLDivElement[]) => {
    setStyle({
      ...style,
      transition: 'transform 0.5s cubic-bezier(0.2, 1, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.2, 1, 0.1, 1) 0s',
      transform: '',
      background: styleProp.background,
      boxShadow: styleProp.boxShadow
    });
    document.removeEventListener('mousemove', mouseMoveListener);
    document.removeEventListener('mouseup', mouseUpListener);
    setDraggingZone('');
    draggableNodes.forEach(node => (node.style.transform = ''));
  };

  const onMouseMoveWhileDragging = (
    ev: MouseEvent,
    draggableNodes: HTMLDivElement[],
    blankDivPos: number,
    blankDivHeight: number
  ) => {
    setStyle({
      ...style,
      transform: `translate(${ev.pageX - startX}px, ${ev.pageY - startY}px)`
    });
    draggableNodes.forEach((node, i) => {
      if (i !== blankDivPos) {
        const boundingClientRect = node.getBoundingClientRect();
        const halfway = boundingClientRect.y + boundingClientRect.height / 2;
        if (ev.pageY > halfway) {
          node.style.transform = `translate(0, -${blankDivHeight}px`;
        } else {
          node.style.transform = '';
        }
      }
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
      background: getInheritedBackgroundColor(ref.current),
      boxShadow: '0px 0px 0px 1px blue, 0px 2px 5px rgba(0, 0, 0, 0.2)',
      zIndex: 5000
    };
    setStyle(style);
    draggableNodes = Array.from(document.querySelectorAll(`[data-pf-dropzone="${zone}"]`));
    blankDivPos = draggableNodes.indexOf(ref.current);
    blankDivHeight = ref.current.getBoundingClientRect().height;
    mouseMoveListener = ev => onMouseMoveWhileDragging(ev as MouseEvent, draggableNodes, blankDivPos, blankDivHeight);
    mouseUpListener = () => onMouseUpWhileDragging(draggableNodes);
    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpListener);
    startX = ev.pageX;
    startY = ev.pageY;
    setIsDragging(true);
    setDraggingZone(zone);
  };

  const div = (
    <div
      data-pf-dropzone={isDragging ? null : zone}
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

  const blankDiv = React.useMemo(() => React.cloneElement(div, { style: { ...styleProp, visibility: 'hidden' } }), [
    zone,
    className,
    styleProp,
    children
  ]);

  return (
    <React.Fragment>
      {/* Leave behind blank spot per-design */}
      {isDragging && blankDiv}
      {/* Move dragging part into portal to appear above top and side nav */}
      {isDragging ? createPortal(div, document.body) : div}
    </React.Fragment>
  );
};
Draggable.displayName = 'Draggable';
