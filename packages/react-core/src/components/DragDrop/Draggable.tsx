import * as React from 'react';
import { render } from 'react-dom';
import { createPortal } from 'react-dom';
import { DroppableContext } from './DroppableContext';
import { DragDropContext } from './DragDrop';

export interface DraggableProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside DragDrop */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
  /** Id to be passed to onDrop event. */
  draggableId?: string | number | null;
}

// Browsers really like being different from each other.
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

function removeBlankDiv(node: HTMLDivElement) {
  if (node.getAttribute('blankDiv') === 'true') {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (child.getAttribute('blankDiv') === 'true') {
        node.removeChild(child);
        node.setAttribute('blankDiv', 'false');
        break;
      }
    }
  }
}

interface DroppableItem {
  node: HTMLDivElement;
  rect: DOMRect;
  isDraggingHost: boolean;
  draggableNodes: HTMLDivElement[];
  draggableNodesRects: DOMRect[];
}

function resetDroppableItem(droppableItem: DroppableItem) {
  removeBlankDiv(droppableItem.node);
  droppableItem.node.style.boxShadow = '';
  droppableItem.draggableNodes.forEach((n, i) => {
    n.style.transform = '';
    droppableItem.draggableNodesRects[i] = n.getBoundingClientRect();
  });
}

function overlaps(ev: MouseEvent, rect: DOMRect) {
  return (
    ev.clientX > rect.x && ev.clientX < rect.x + rect.width && ev.clientY > rect.y && ev.clientY < rect.y + rect.height
  );
}

export const Draggable: React.FunctionComponent<DraggableProps> = ({
  className,
  children,
  onDragStart: onDragStartProp = () => {},
  style: styleProp,
  draggableId,
  ...props
}: DraggableProps) => {
  /* eslint-disable prefer-const */
  let [style, setStyle] = React.useState(styleProp);
  let [hoveringDroppable, setHoveringDroppable] = React.useState<HTMLDivElement>();
  /* eslint-enable prefer-const */
  let hoveringDraggableId: string = null;
  const [isDragging, setIsDragging] = React.useState(false);
  const { zone, droppableId } = React.useContext(DroppableContext);
  const { onDrop } = React.useContext(DragDropContext);
  let startX = 0;
  let startY = 0;
  // Makes it so dragging the _bottom_ of the item over the halfway of another
  // moves it (rather than the cursor)
  let startYOffset = 0;
  let mouseMoveListener: EventListener;
  let mouseUpListener: EventListener;
  let blankDivHeight = 0;

  const ref = React.createRef<HTMLDivElement>();

  const blankDiv = (
    <div
      data-pf-draggableid={draggableId}
      draggable
      role="button"
      {...props}
      style={{ ...styleProp, visibility: 'hidden' }}
    >
      {children}
    </div>
  );

  const onTransitionEnd = (_ev: React.TransitionEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      setStyle(styleProp);
    }
  };

  const onMouseUpWhileDragging = (droppableItems: DroppableItem[]) => {
    droppableItems.forEach(resetDroppableItem);
    const consumerReordered = onDrop(
      droppableId,
      draggableId,
      hoveringDroppable ? hoveringDroppable.getAttribute('data-pf-droppableid') : null,
      hoveringDraggableId
    );
    if (consumerReordered) {
      setIsDragging(false);
      setStyle(styleProp);
    } else {
      // Animate item returning to where it started
      setStyle({
        ...style,
        transition: 'transform 0.5s cubic-bezier(0.2, 1, 0.1, 1) 0s',
        transform: '',
        background: styleProp.background,
        boxShadow: styleProp.boxShadow
      });
    }
    document.removeEventListener('mousemove', mouseMoveListener);
    document.removeEventListener('mouseup', mouseUpListener);
  };

  const onMouseMoveWhileDragging = (ev: MouseEvent, droppableItems: DroppableItem[], blankDivHeight: number) => {
    hoveringDroppable = null;
    droppableItems.forEach(droppableItem => {
      const { node, rect, isDraggingHost, draggableNodes, draggableNodesRects } = droppableItem;
      if (overlaps(ev, rect)) {
        node.style.boxShadow = '0px 0px 0px 1px blue, 0px 2px 5px rgba(0, 0, 0, 0.2)';
        hoveringDroppable = node;
        if (node.getAttribute('blankDiv') !== 'true' && !isDraggingHost) {
          const container = document.createElement('div');
          container.setAttribute('blankDiv', 'true');
          let inserted = false;
          for (let i = 0; i < draggableNodes.length; i++) {
            const dnode = draggableNodes[i];
            const rect = draggableNodesRects[i];
            const isLast = i === draggableNodes.length - 1;
            const startOverlaps = startY > rect.y && startY < rect.y + rect.height;
            // TODO: fix pf.org layout bug when inserting div with width equal to container
            // Then the hacky container can simply be the size of the real node
            if ((startOverlaps || isLast) && !inserted) {
              if (isLast && !startOverlaps) {
                dnode.after(container);
              } else {
                dnode.before(container);
              }
              render(blankDiv, container);
              node.setAttribute('blankDiv', 'true');
              inserted = true;
            }
            if (inserted && !isLast) {
              rect.y += blankDivHeight;
            }
          }
          rect.height += blankDivHeight;
        }
      } else {
        node.style.boxShadow = '0px 0px 0px 1px red, 0px 2px 5px rgba(0, 0, 0, 0.2)';
        resetDroppableItem(droppableItem);
        hoveringDraggableId = null;
      }
    });
    setStyle({
      ...style,
      boxShadow: `0px 0px 0px 1px ${hoveringDroppable ? 'blue' : 'red'}, 0px 2px 5px rgba(0, 0, 0, 0.2)`,
      transform: `translate(${ev.pageX - startX}px, ${ev.pageY - startY}px)`,
      cursor: !hoveringDroppable && 'not-allowed'
    });
    if (hoveringDroppable) {
      droppableItems
        .filter(item => item.node === hoveringDroppable)
        .forEach(({ draggableNodes, draggableNodesRects }) => {
          let lastTranslate = 0;
          draggableNodes.forEach((n, i) => {
            const rect = draggableNodesRects[i];
            const halfway = rect.y + rect.height / 2;
            let translateY = 0;
            // Use offset for more interactive translations
            if (startY < halfway && ev.pageY + (blankDivHeight - startYOffset) > halfway) {
              translateY -= blankDivHeight;
            } else if (startY >= halfway && ev.pageY - startYOffset <= halfway) {
              translateY += blankDivHeight;
            }
            if ((translateY <= lastTranslate && translateY < 0) || (translateY > lastTranslate && translateY > 0)) {
              hoveringDraggableId = n.getAttribute('data-pf-draggableid');
            }
            n.style.transform = `translate(0, ${translateY}px`;
            lastTranslate = translateY;
          });
        });
      setHoveringDroppable(hoveringDroppable);
    }
  };

  const onDragStart = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    if (isDragging) {
      // still in animation
      return;
    }
    onDragStartProp(ev);
    const rect = ref.current.getBoundingClientRect();
    style = {
      ...style,
      position: 'fixed',
      top: rect.y,
      left: rect.x,
      width: rect.width,
      height: rect.height,
      background: getInheritedBackgroundColor(ref.current),
      boxShadow: '0px 0px 0px 1px blue, 0px 2px 5px rgba(0, 0, 0, 0.2)',
      zIndex: 5000
    };
    setStyle(style);
    const droppableNodes = Array.from(document.querySelectorAll(`[data-pf-droppable="${zone}"]`)) as HTMLDivElement[];
    const droppableItems = droppableNodes.reduce((acc, cur) => {
      const draggableNodes = Array.from(cur.querySelectorAll(`[data-pf-draggable="${zone}"]`)) as HTMLDivElement[];
      draggableNodes.forEach(node => (node.style.transition = 'transform 0.5s cubic-bezier(0.2, 1, 0.1, 1) 0s'));
      const droppableItem = {
        node: cur,
        rect: cur.getBoundingClientRect(),
        isDraggingHost: cur.contains(ref.current),
        draggableNodes,
        draggableNodesRects: draggableNodes.map(node => node.getBoundingClientRect())
      };
      acc.push(droppableItem);
      return acc;
    }, []);
    blankDivHeight = ref.current.getBoundingClientRect().height;
    mouseMoveListener = ev => onMouseMoveWhileDragging(ev as MouseEvent, droppableItems, blankDivHeight);
    mouseUpListener = () => onMouseUpWhileDragging(droppableItems);
    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpListener);
    // Comment out this line to debug while dragging by right clicking
    // document.addEventListener('contextmenu', mouseUpListener);
    startX = ev.pageX;
    startY = ev.pageY;
    startYOffset = startY - rect.y;
    setIsDragging(true);
    hoveringDraggableId = ref.current.getAttribute('data-pf-draggableid');
  };

  const div = (
    <div
      data-pf-draggable={isDragging ? null : zone}
      data-pf-draggableid={draggableId}
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
      {isDragging && blankDiv}
      {/* Move dragging part into portal to appear above top and side nav */}
      {isDragging ? createPortal(div, document.body) : div}
    </React.Fragment>
  );
};
Draggable.displayName = 'Draggable';
