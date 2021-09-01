import * as React from 'react';
import { css } from '@patternfly/react-styles';

interface DroppableProps extends React.HTMLProps<HTMLDivElement> {
  /** Content rendered inside DragDrop */
  children?: React.ReactNode;
  /** Class to add to outer div */
  className?: string;
}

export const Droppable: React.FunctionComponent<DroppableProps> = ({
  className,
  children,
  onDragOver: onDragOverProp = () => {},
  onDrop: onDropProp = () => {},
  ...props
}: DroppableProps) => {
  const onDragOver = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'move';
    onDragOverProp(ev);
  };
  const onDrop = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    onDropProp(ev);
  };

  return (
    <div
      className={className}
      onDragOver={onDragOver}
      onDrop={onDrop}
      {...props}
    >
      {children}
    </div>
  );
}
Droppable.displayName = 'Droppable';

