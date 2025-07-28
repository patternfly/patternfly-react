import { useContext } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import dragStyles from '@patternfly/react-styles/css/components/DragDrop/drag-drop';
import { DragButton } from './DragButton';
import { DualListSelectorListContext } from '@patternfly/react-core/dist/esm/components/DualListSelector';

export interface DraggableDualListSelectorListItemProps extends React.HTMLProps<HTMLLIElement> {
  /** Content rendered inside DragDrop */
  children?: React.ReactNode;
  /** Don't wrap the component in a div. Requires passing a single child. */
  hasNoWrapper?: boolean;
  /** Class to add to outer div */
  className?: string;
  /** @hide Id of the sortable context */
  id?: string;
  /** Flag indicating the list item is currently selected. */
  isSelected?: boolean;
  /** Callback fired when an option is selected.  */
  onOptionSelect?: (e: React.MouseEvent | React.ChangeEvent | React.KeyboardEvent, id?: string) => void;
  /** @hide Internal field used to keep track of order of unfiltered options. */
  orderIndex?: number;
  /** @hide Forwarded ref */
  innerRef?: React.RefObject<HTMLLIElement | null>;
  /** Flag indicating if the dual list selector is in a disabled state */
  isDisabled?: boolean;
}

export const DraggableDualListSelectorListItem: React.FunctionComponent<DraggableDualListSelectorListItemProps> = ({
  children,
  id,
  className,
  orderIndex,
  isSelected,
  onOptionSelect,
  ...props
}: DraggableDualListSelectorListItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
    animateLayoutChanges: () => false
  });

  const { setFocusedOption } = useContext(DualListSelectorListContext);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <li
      className={css(
        styles.dualListSelectorListItem,
        isDragging && dragStyles.droppable,
        isDragging && dragStyles.modifiers.dragging,
        className
      )}
      key={orderIndex}
      id={id}
      role="presentation"
      {...props}
      ref={setNodeRef}
      style={style}
    >
      <div className={css(styles.dualListSelectorListItemRow, isSelected && styles.modifiers.selected)}>
        <DragButton className={css(styles.dualListSelectorDraggable)} {...attributes} {...listeners} />
        <span
          className={css(styles.dualListSelectorItem)}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === ' ' || e.key === 'Enter') {
              (document.activeElement as HTMLElement).click();
              e.preventDefault();
            }
          }}
          aria-selected={isSelected}
          onClick={(e: React.MouseEvent) => {
            setFocusedOption(id);
            onOptionSelect(e, id);
          }}
          role="option"
          tabIndex={-1}
        >
          <span className={css(styles.dualListSelectorItemMain)}>
            <span className={css(styles.dualListSelectorItemText)}>{children}</span>
          </span>
        </span>
      </div>
    </li>
  );
};
DraggableDualListSelectorListItem.displayName = 'DraggableDualListSelectorListItem';
