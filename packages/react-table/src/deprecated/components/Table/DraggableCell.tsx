import * as React from 'react';
import GripVerticalIcon from '@patternfly/react-icons/dist/esm/icons/grip-vertical-icon';
import { Button } from '@patternfly/react-core/dist/esm/components/Button/Button';

export interface DraggableCellProps {
  id: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  'aria-label'?: string;
}

export const DraggableCell: React.FunctionComponent<DraggableCellProps> = ({
  className,
  onClick,
  'aria-label': ariaLabel,
  id,
  ...props
}: DraggableCellProps) => (
  <Button
    id={id}
    variant="plain"
    className={className}
    type="button"
    aria-label={ariaLabel || `Draggable row draggable button`}
    onClick={onClick}
    {...props}
  >
    <GripVerticalIcon aria-hidden />
  </Button>
);

DraggableCell.displayName = 'DraggableCell';
