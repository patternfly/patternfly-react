import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DragDrop/drag-drop';
import { DroppableContext } from './DroppableContext';
import { DragDropContext } from './DragDrop';

export const DraggableContext = React.createContext({
  setHasDragButtons: (hasDragButtons: boolean) => {},
  onKeyDown: (e: React.KeyboardEvent) => {}
});

export interface DraggableProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside DragDrop */
  children?: React.ReactNode;
  /** Don't wrap the component in a div. Requires passing a single child. */
  hasNoWrapper?: boolean;
  /** Class to add to outer div */
  className?: string;
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

function removeBlankDiv(node: HTMLElement) {
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
  node: HTMLElement;
  rect: DOMRect;
  isDraggingHost: boolean;
  draggableNodes: HTMLElement[];
  draggableNodesRects: DOMRect[];
}

// Reset per-element state
function resetDroppableItem(droppableItem: DroppableItem) {
  removeBlankDiv(droppableItem.node);
  droppableItem.node.classList.remove(styles.modifiers.dragging);
  droppableItem.node.classList.remove(styles.modifiers.dragOutside);
  droppableItem.draggableNodes.forEach((n, i) => {
    n.style.transform = '';
    n.style.transition = '';
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
  style: styleProp = {},
  hasNoWrapper = false,
  ...props
}: DraggableProps) => {
  /* eslint-disable prefer-const */
  let [style, setStyle] = React.useState(styleProp);
  /* eslint-enable prefer-const */
  const [isDraggingUsingMouse, setIsDraggingUsingMouse] = React.useState(false);
  const [isDraggingUsingKeyboard, setIsDraggingUsingKeyboard] = React.useState(false);
  const [isValidDrag, setIsValidDrag] = React.useState(true);
  const [hasDragButtons, setHasDragButtons] = React.useState(false);
  const { zone, droppableId } = React.useContext(DroppableContext);
  const { onDrag, onDragMove, onDrop, isDragging, setIsDragging } = React.useContext(DragDropContext);
  // Some state is better just to leave as vars passed around between various callbacks
  // You can only drag around one item at a time anyways...
  let index: number = null; // Index of this draggable
  let mouseMoveListener: EventListener;
  let mouseUpListener: EventListener;
  // Makes it so dragging the _bottom_ of the item over the halfway of another moves it
  let startYOffset = 0;

  // After item returning to where it started animation completes
  const onTransitionEnd = (_ev: React.TransitionEvent<HTMLElement>) => {
    if (isDraggingUsingKeyboard || isDraggingUsingMouse) {
      setIsDraggingUsingKeyboard(false);
      setIsDraggingUsingMouse(false);
      setIsDragging(false);
      setStyle(styleProp);
    }
  };

  function getSourceAndDest(hoveringIndex: number, hoveringDroppable: HTMLElement) {
    const hoveringDroppableId = hoveringDroppable ? hoveringDroppable.getAttribute('data-pf-droppableid') : null;
    const source = {
      droppableId,
      index
    };
    const dest =
      hoveringDroppableId !== null && hoveringIndex !== null
        ? {
          droppableId: hoveringDroppableId,
          index: hoveringIndex
        }
        : undefined;
    return { source, dest, hoveringDroppableId };
  }

  const onMouseUpWhileDragging = (droppableItems: DroppableItem[], hoveringIndex: number, hoveringDroppable: HTMLElement) => {
    droppableItems.forEach(resetDroppableItem);
    document.removeEventListener('mousemove', mouseMoveListener);
    document.removeEventListener('mouseup', mouseUpListener);
    document.removeEventListener('contextmenu', mouseUpListener);
    const { source, dest, hoveringDroppableId } = getSourceAndDest(hoveringIndex, hoveringDroppable);
    const consumerReordered = onDrop(source, dest);
    if (consumerReordered && droppableId === hoveringDroppableId) {
      setIsDraggingUsingMouse(false);
      setIsDragging(false);
      setStyle(styleProp);
    } else if (!consumerReordered) {
      // Animate item returning to where it started
      setStyle({
        ...style,
        transition: 'transform 0.5s cubic-bezier(0.2, 1, 0.1, 1) 0s',
        transform: '',
        background: styleProp.background,
        boxShadow: styleProp.boxShadow
      });
    }
  };

  // This is where the magic happens
  const onMouseMoveWhileDragging = (ev: MouseEvent, droppableItems: DroppableItem[], blankDivRect: DOMRect, startingCoordinates?: {startX: number, startY: number}) => {
    const { startX, startY } = startingCoordinates;
    // Compute each time what droppable node we are hovering over
    let newHoveringDroppable = null as HTMLElement;
    droppableItems.forEach(droppableItem => {
      const { node, rect, isDraggingHost, draggableNodes, draggableNodesRects } = droppableItem;
      if (overlaps(ev, rect)) {
        // Add valid dropzone style
        node.classList.remove(styles.modifiers.dragOutside);
        newHoveringDroppable = node;
        // Check if we need to add a blank div row
        if (node.getAttribute('blankDiv') !== 'true' && !isDraggingHost) {
          const blankDiv = document.createElement('div');
          blankDiv.setAttribute('blankDiv', 'true'); // Makes removing easier
          let blankDivPos = -1;
          for (let i = 0; i < draggableNodes.length; i++) {
            const childRect = draggableNodesRects[i];
            const isLast = i === draggableNodes.length - 1;
            const startOverlaps = childRect.y >= startY - startYOffset;
            if ((startOverlaps || isLast) && blankDivPos === -1) {
              if (isLast && !startOverlaps) {
                draggableNodes[i].after(blankDiv);
              } else {
                draggableNodes[i].before(blankDiv);
              }
              blankDiv.style.height = `${blankDivRect.height}px`;
              blankDiv.style.width = `${blankDivRect.width}px`;
              node.setAttribute('blankDiv', 'true'); // Makes removing easier
              blankDivPos = i;
            }
            if (blankDivPos !== -1) {
              childRect.y += blankDivRect.height;
            }
          }
          // Insert so drag + drop behavior matches single-list case
          draggableNodes.splice(blankDivPos, 0, blankDiv);
          draggableNodesRects.splice(blankDivPos, 0, blankDivRect);
          // Extend hitbox of droppable zone
          rect.height += blankDivRect.height;
        }
      } else {
        resetDroppableItem(droppableItem);
        node.classList.add(styles.modifiers.dragging);
        node.classList.add(styles.modifiers.dragOutside);
      }
    });
    setStyle({
      ...style,
      transform: `translate(${ev.clientX - startX}px, ${ev.clientY - startY}px)`
    });
    setIsValidDrag(Boolean(newHoveringDroppable));

    let newHoveringIndex: number = null;
    if (newHoveringDroppable) {
      const { draggableNodes, draggableNodesRects } = droppableItems.find(item => item.node === newHoveringDroppable);
      let lastTranslate = 0;
      draggableNodes.forEach((n, i) => {
        n.style.transition = 'transform 0.5s cubic-bezier(0.2, 1, 0.1, 1) 0s';
        const rect = draggableNodesRects[i];
        const halfway = rect.y + rect.height / 2;
        let translateY = 0;
        // Use offset for more interactive translations
        if (startY < halfway && ev.clientY + (blankDivRect.height - startYOffset) > halfway) {
          translateY -= blankDivRect.height;
        } else if (startY >= halfway && ev.clientY - startYOffset <= halfway) {
          translateY += blankDivRect.height;
        }
        // Clever way to find item currently hovering over
        if ((translateY <= lastTranslate && translateY < 0) || (translateY > lastTranslate && translateY > 0)) {
          newHoveringIndex = i;
        }
        n.style.transform = `translate(0, ${translateY}px`;
        lastTranslate = translateY;
      });
    }
    const { source, dest } = getSourceAndDest(newHoveringIndex, newHoveringDroppable);
    onDragMove(source, dest);
    mouseUpListener = () => onMouseUpWhileDragging(droppableItems, newHoveringIndex, newHoveringDroppable);
    document.addEventListener('mouseup', mouseUpListener);
  };

  const calculateBounds = (ev: React.DragEvent<HTMLElement> | React.KeyboardEvent) => {
    // Cache droppable and draggable nodes and their bounding rects
    const dragging = ev.target as HTMLElement;
    const rect = dragging.getBoundingClientRect();
    const droppableNodes = Array.from(document.querySelectorAll(`[data-pf-droppable="${zone}"]`)) as HTMLElement[];
    const droppableItems = droppableNodes.reduce((acc, cur) => {
      cur.classList.add(styles.modifiers.dragging);
      const draggableNodes = Array.from(cur.querySelectorAll(`[data-pf-draggable-zone="${zone}"]`)) as HTMLElement[];
      const isDraggingHost = cur.contains(dragging);
      if (isDraggingHost) {
        index = draggableNodes.indexOf(dragging);
      }
      const droppableItem = {
        node: cur,
        rect: cur.getBoundingClientRect(),
        isDraggingHost,
        // We don't want styles to apply to the left behind div in onMouseMoveWhileDragging
        draggableNodes: draggableNodes.map(node => (node === dragging ? node.cloneNode(false) : node)),
        draggableNodesRects: draggableNodes.map(node => node.getBoundingClientRect())
      };
      acc.push(droppableItem);
      return acc;
    }, []);

    return {
      rect,
      droppableItems
    };
  };

  const onDragStart = (ev: React.DragEvent<HTMLElement>) => {
    // Default HTML drag and drop doesn't allow us to change what the thing
    // being dragged looks like. Because of this we'll use prevent the default
    // and use `mouseMove` and `mouseUp` instead
    ev.preventDefault();
    if (isDragging) {
      // still in animation
      return;
    }

    const { droppableItems, rect } = calculateBounds(ev);

    if (!onDrag({ droppableId, index })) {
      // Consumer disallowed drag
      return;
    }

    // Set initial style so future style mods take effect
    style = {
      ...style,
      top: rect.y,
      left: rect.x,
      width: rect.width,
      height: rect.height,
      '--pf-c-draggable--m-dragging--BackgroundColor': getInheritedBackgroundColor(ev.target as HTMLElement),
      position: 'fixed',
      zIndex: 5000
    } as any;
    setStyle(style);
    // Store event details
    startYOffset = ev.clientY - rect.y;
    setIsDraggingUsingMouse(true);
    setIsDragging(true);
    mouseMoveListener = e => onMouseMoveWhileDragging(e as MouseEvent, droppableItems, rect, {startX: ev.clientX, startY: ev.clientY});
    document.addEventListener('mousemove', mouseMoveListener);
    // Comment out this line to debug while dragging by right clicking
    // document.addEventListener('contextmenu', mouseUpListener);
  };

  const endDragUsingKeyboard = (cancel: boolean) => {
    if (isDraggingUsingKeyboard) {
      setStyle(styleProp);
      const droppableNodes = Array.from(document.querySelectorAll(`[data-pf-droppable="${zone}"]`)) as HTMLElement[];
      droppableNodes.forEach(node => {
        node.classList.remove(styles.modifiers.dragging);
      });

      setIsDraggingUsingKeyboard(false);
      setIsDragging(false);

      if (cancel) {
        onDrop({ droppableId, index }, undefined);
        // Animate item returning to where it started
        setStyle({
          ...style,
          transition: 'transform 0.5s cubic-bezier(0.2, 1, 0.1, 1) 0s',
          transform: '',
          background: styleProp.background,
          boxShadow: styleProp.boxShadow
        });
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', () => endDragUsingKeyboard(true));
    return () => {
      document.removeEventListener('click', () => endDragUsingKeyboard(true));
    }
  }, [isDraggingUsingKeyboard]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (isDraggingUsingKeyboard) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape' || e.key === 'Tab') {
        setStyle(styleProp);
        const droppableNodes = Array.from(document.querySelectorAll(`[data-pf-droppable="${zone}"]`)) as HTMLElement[];
        droppableNodes.forEach(node => {
          node.classList.remove(styles.modifiers.dragging);
        });

        setIsDraggingUsingKeyboard(false);
        setIsDragging(false);
        if (e.key === ' ' || e.key === 'Tab') {
          e.preventDefault();
        }
        if (e.key === 'Escape') {
          endDragUsingKeyboard(true);
        } else {
          // don't cancel
          const { droppableItems } = calculateBounds(e);
          let hoveringIndex = null as number;
          let hoveringDroppable = null as HTMLElement;
          droppableItems.forEach(droppableItem => {
            const { node, rect } = droppableItem;
            const fakeMouseEvent = new MouseEvent("mousemove", { clientX: rect.x + 1, clientY: rect.y });
            if (overlaps(fakeMouseEvent, rect)) {
              hoveringDroppable = node
            }
          });
          const { draggableNodes, draggableNodesRects } = droppableItems.find(item => item.node === hoveringDroppable);
          let lastTranslate = 0;
          draggableNodes.forEach((n: HTMLElement, i: number) => {
            n.style.transition = 'transform 0.5s cubic-bezier(0.2, 1, 0.1, 1) 0s';
            const rect = draggableNodesRects[i];
            const halfway = rect.y + rect.height / 2;
            let translateY = 0;
            // Use offset for more interactive translations
            if (rect.y < halfway && rect.y + (rect.height - startYOffset) > halfway) {
              translateY -= rect.height;
            } else if (rect.y >= halfway && rect.y - startYOffset <= halfway) {
              translateY += rect.height;
            }
            // Clever way to find item currently hovering over
            if ((translateY <= lastTranslate && translateY < 0) || (translateY > lastTranslate && translateY > 0)) {
              hoveringIndex = i;
            }
            n.style.transform = `translate(0, ${translateY}px`;
            lastTranslate = translateY;
          });
          onMouseUpWhileDragging(droppableItems, hoveringIndex, hoveringDroppable);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        const { droppableItems, rect } = calculateBounds(e);
        const newClientY = e.key === 'ArrowUp' ? rect.y - rect.height : rect.y + rect.height;
        const fakeMouseEvent = new MouseEvent("mousemove", { clientX: rect.x + 1, clientY: newClientY });
        onMouseMoveWhileDragging(fakeMouseEvent, droppableItems, rect, {startX: rect.x, startY: rect.y});
        e.preventDefault();
      }
    } else if (!isDragging) {
      if (e.key === 'Enter' || e.key === ' ') {
        if (e.key === ' ') {
          e.preventDefault();
        }

        setIsDraggingUsingKeyboard(true);
        setIsDragging(true);
        // Cache droppable and draggable nodes and their bounding rects
        const { rect } = calculateBounds(e);

        if (!onDrag({ droppableId, index })) {
          // Consumer disallowed drag
          return;
        }

        // Set initial style so future style mods take effect
        style = {
          ...style,
          width: rect.width,
          height: rect.height,
          '--pf-c-draggable--m-dragging--BackgroundColor': getInheritedBackgroundColor(e.target as HTMLElement),
          zIndex: 5000
        } as any;
        setStyle(style);
      }
    }
  };

  const childProps = {
    'data-pf-draggable-zone': isDraggingUsingMouse || isDraggingUsingKeyboard ? null : zone,
    draggable: true,
    className: css(
      styles.draggable,
      (isDraggingUsingMouse || isDraggingUsingKeyboard) && styles.modifiers.dragging,
      !isValidDrag && styles.modifiers.dragOutside,
      className
    ),
    onDragStart,
    onTransitionEnd,
    style,
    ...(!hasDragButtons && {onKeyDown, tabIndex: 0}),
    ...props
  };

  return (
    <DraggableContext.Provider value={{setHasDragButtons, onKeyDown}}>
      {/* Leave behind blank spot per-design */}
      {isDraggingUsingMouse && (
        <div draggable {...props} style={{ ...styleProp, visibility: 'hidden' }}>
          {children}
        </div>
      )}
      {hasNoWrapper ? (
        React.cloneElement(children as React.ReactElement, childProps)
      ) : (
        <div {...childProps}>{children}</div>
      )}
    </DraggableContext.Provider>
  );
};
Draggable.displayName = 'Draggable';
