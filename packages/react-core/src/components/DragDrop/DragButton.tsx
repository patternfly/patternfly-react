import * as React from 'react';
import GripVerticalIcon from '@patternfly/react-icons/dist/esm/icons/grip-vertical-icon';
import { Button, ButtonVariant } from '../Button';
import { DraggableContext } from './Draggable';

interface DragButtonProps {
  /** Accessible label for the button */
  'aria-label'?: string;
}

export const DragButton: React.FunctionComponent<DragButtonProps> = ({
  'aria-label': ariaLabel,
  ...props
}: DragButtonProps) => {
  const { setHasDragButtons, onKeyDown } = React.useContext(DraggableContext);

  React.useEffect(() => {
    setHasDragButtons(true);
  }, []);

  return (
    <Button variant={ButtonVariant.plain} aria-label={ariaLabel} onKeyDown={onKeyDown} {...props}>
      <GripVerticalIcon />
    </Button>
  );
};
DragButton.displayName = 'DragButton';
