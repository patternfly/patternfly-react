import { css } from '@rh-felt/react-styles';
import { Button } from '@rh-felt/react-core/dist/esm/components/Button';
import dragButtonStyles from '@rh-felt/react-styles/css/components/DataList/data-list';
import RhUiGripVerticalFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-grip-vertical-fill-icon';

export interface DragButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  /** Additional classes added to the drag button */
  className?: string;
  /** Sets button type */
  type?: 'button' | 'submit' | 'reset';
  /** Flag indicating if drag is disabled for the item */
  isDisabled?: boolean;
  /** Accessible name of the drag button. */
  'aria-label'?: string;
  /** Id or list of id's that label the drag button. */
  'aria-labelledby'?: string;
}

export const DragButton: React.FunctionComponent<DragButtonProps> = ({
  className,
  'aria-label': ariaLabel = 'Drag button',
  'aria-labelledby': ariaLabelledby,
  ...props
}: DragButtonProps) => (
  <Button
    variant="plain"
    className={css(className)}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledby}
    style={{ touchAction: 'none' }}
    icon={
      <span className={css(dragButtonStyles.dataListItemDraggableIcon)}>
        <RhUiGripVerticalFillIcon />
      </span>
    }
    {...props}
  />
);
DragButton.displayName = 'DragButton';
