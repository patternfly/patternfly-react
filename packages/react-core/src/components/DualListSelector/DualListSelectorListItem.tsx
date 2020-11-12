import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';

export interface DualListSelectorListItemProps extends React.HTMLProps<HTMLLIElement> {
  /** Content rendered inside the dual list selector. */
  children?: React.ReactNode;
  /** Additional classes applied to the dual list selector. */
  className?: string;
  /** Flag indicating the list item is currently selected. */
  isSelected?: boolean;
  /** Flag indicating this list item is in the chosen pane. */
  isChosen?: boolean;
  /** Internal callback to pass this ref up to the parent. */
  sendRef?: (optionRef: React.ReactNode, index: number) => void;
  /** Internal field used to keep track of order. */
  index?: number;
  /** Callback fired when an option is selected.  */
  onOptionSelect?: (e: React.MouseEvent | React.ChangeEvent, index: number, isChosen: boolean) => void;
  /** ID of the option */
  id: string;
}

export const DualListSelectorListItem: React.FunctionComponent<DualListSelectorListItemProps> = ({
  onOptionSelect,
  index,
  children,
  className,
  id,
  isSelected,
  isChosen,
  sendRef,
  ...props
}: DualListSelectorListItemProps) => {
  const ref = React.useRef<any>();

  React.useEffect(() => {
    sendRef(ref.current, index);
  }, []);

  return (
    <li
      className={css(styles.dualListSelectorListItem, isSelected && styles.modifiers.selected, className)}
      key={index}
      {...props}
      aria-selected={isSelected}
      role="option"
    >
      <button
        className={css(styles.dualListSelectorItem)}
        onClick={e => onOptionSelect(e, index, isChosen)}
        id={id}
        ref={ref}
        tabIndex={-1}
      >
        <span className={css(styles.dualListSelectorItemMain)}>
          <span className={css(styles.dualListSelectorItemText)}>{children}</span>
        </span>
      </button>
    </li>
  );
};
DualListSelectorListItem.displayName = 'DualListSelectorListItem';
