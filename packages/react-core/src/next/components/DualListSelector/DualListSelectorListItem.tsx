import {
  HTMLProps,
  ReactNode,
  MouseEvent,
  ChangeEvent,
  KeyboardEvent,
  RefObject,
  FunctionComponent,
  Ref,
  MutableRefObject,
  useRef,
  useContext,
  forwardRef
} from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { getUniqueId } from '../../../helpers';
import GripVerticalIcon from '@patternfly/react-icons/dist/esm/icons/grip-vertical-icon';
import { Button, ButtonVariant } from '../../../components/Button';
import { DualListSelectorListContext } from './DualListSelectorContext';

/** Creates an individual option that can be selected and moved between the
 * dual list selector panes. This is contained within the DualListSelectorList sub-component.
 */

export interface DualListSelectorListItemProps extends HTMLProps<HTMLLIElement> {
  /** Content rendered inside the dual list selector. */
  children?: ReactNode;
  /** Additional classes applied to the dual list selector. */
  className?: string;
  /** Flag indicating the list item is currently selected. */
  isSelected?: boolean;
  /** Callback fired when an option is selected. */
  onOptionSelect?: (event: MouseEvent | ChangeEvent | KeyboardEvent, id?: string) => void;
  /** ID of the option. */
  id?: string;
  /** @hide Internal field used to keep track of order of unfiltered options. */
  orderIndex?: number;
  /** @hide Forwarded ref */
  innerRef?: RefObject<HTMLLIElement>;
  /** Flag indicating this item is draggable for reordering. */
  isDraggable?: boolean;
  /** Accessible label for the draggable button on draggable list items. */
  draggableButtonAriaLabel?: string;
  /** Flag indicating if the dual list selector is in a disabled state. */
  isDisabled?: boolean;
}

export const DualListSelectorListItemBase: FunctionComponent<DualListSelectorListItemProps> = ({
  onOptionSelect,
  orderIndex,
  children,
  className,
  id = getUniqueId('dual-list-selector-list-item'),
  isSelected,
  innerRef,
  isDraggable = false,
  isDisabled,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  draggableButtonAriaLabel = 'Reorder option',
  ...props
}: DualListSelectorListItemProps) => {
  const privateRef = useRef<HTMLLIElement>(null);
  const ref = innerRef || privateRef;
  const { setFocusedOption } = useContext(DualListSelectorListContext);

  return (
    <li
      className={css(styles.dualListSelectorListItem, className, isDisabled && styles.modifiers.disabled)}
      key={orderIndex}
      onClick={
        isDisabled
          ? undefined
          : (e: MouseEvent) => {
              setFocusedOption(id);
              onOptionSelect(e, id);
            }
      }
      onKeyDown={(e: KeyboardEvent) => {
        if (e.key === ' ' || e.key === 'Enter') {
          (document.activeElement as HTMLElement).click();
          e.preventDefault();
        }
      }}
      aria-selected={isSelected}
      id={id}
      ref={ref}
      role="option"
      tabIndex={-1}
      {...props}
    >
      <div className={css(styles.dualListSelectorListItemRow, isSelected && styles.modifiers.selected)}>
        {isDraggable && !isDisabled && (
          <div className={css(styles.dualListSelectorDraggable)}>
            {/** TODO once keyboard accessibility is enabled, remove `component=span`
             and add `aria-label={draggableButtonAriaLabel}` */}
            <Button variant={ButtonVariant.plain} component="span">
              <GripVerticalIcon style={{ verticalAlign: '-0.3em' }} />
            </Button>
          </div>
        )}
        <span className={css(styles.dualListSelectorItem)}>
          <span className={css(styles.dualListSelectorItemMain)}>
            <span className={css(styles.dualListSelectorItemText)}>{children}</span>
          </span>
        </span>
      </div>
    </li>
  );
};
DualListSelectorListItemBase.displayName = 'DualListSelectorListItemBase';

export const DualListSelectorListItem = forwardRef((props: DualListSelectorListItemProps, ref: Ref<HTMLLIElement>) => (
  <DualListSelectorListItemBase innerRef={ref as MutableRefObject<any>} {...props} />
));
DualListSelectorListItem.displayName = 'DualListSelectorListItem';
