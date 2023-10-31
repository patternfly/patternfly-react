import * as React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DragDrop/drag-drop';
import { DragButton } from './DragButton';

export interface DraggableProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside DragDrop */
  children?: React.ReactNode;
  /** Don't wrap the component in a div. Requires passing a single child. */
  hasNoWrapper?: boolean;
  /** Class to add to outer div */
  className?: string;
  /** */
  id?: string;
  /** */
  useDragButton?: boolean;
}

export const Draggable: React.FunctionComponent<DraggableProps> = ({
  children,
  id,
  className,
  useDragButton = false,
  ...props
}: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return useDragButton ? (
    <div
      className={css(isDragging && styles.droppable, isDragging && styles.modifiers.dragging, className)}
      ref={setNodeRef}
      style={style}
      {...props}
    >
      <DragButton {...attributes} {...listeners} />
      {children}
    </div>
  ) : (
    <div
      className={css(isDragging && styles.droppable, isDragging && styles.modifiers.dragging, className)}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      {...props}
    >
      {children}
    </div>
  );
};
Draggable.displayName = 'Draggable';
