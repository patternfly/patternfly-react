import { css } from '@rh-felt/react-styles';
import styles from '@rh-felt/react-styles/css/components/DataList/data-list';
import RhUiGripVerticalFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-grip-vertical-fill-icon';

export interface DataListDragButtonProps extends React.HTMLProps<HTMLButtonElement> {
  /** Additional classes added to the drag button */
  className?: string;
  /** Sets button type */
  type?: 'button' | 'submit' | 'reset';
  /** Flag indicating if drag is disabled for the item */
  isDisabled?: boolean;
}

export const DataListDragButton: React.FunctionComponent<DataListDragButtonProps> = ({
  className = '',
  isDisabled = false,
  ...props
}: DataListDragButtonProps) => (
  <button
    className={css(styles.dataListItemDraggableButton, isDisabled && styles.modifiers.disabled, className)}
    type="button"
    disabled={isDisabled}
    {...props}
  >
    <span className={css(styles.dataListItemDraggableIcon)}>
      <RhUiGripVerticalFillIcon />
    </span>
  </button>
);
DataListDragButton.displayName = 'DataListDragButton';
