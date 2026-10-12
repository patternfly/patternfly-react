import RhUiGripVerticalFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-grip-vertical-fill-icon';
import { Button } from '@rh-felt/react-core/dist/esm/components/Button';

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
    icon={<RhUiGripVerticalFillIcon />}
  />
);

DraggableCell.displayName = 'DraggableCell';
