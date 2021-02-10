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
  /** Internal field used to keep track of the order of filtered options. */
  filteredIndex?: number;
  /** Internal field used to keep track of order of unfiltered options. */
  orderIndex?: number;
  /** Callback fired when an option is selected.  */
  onOptionSelect?: (e: React.MouseEvent | React.ChangeEvent, index: number, isChosen: boolean) => void;
  /** ID of the option */
  id: string;
}

export class DualListSelectorListItem extends React.Component<DualListSelectorListItemProps> {
  private ref = React.createRef<HTMLButtonElement>();
  static displayName = 'DualListSelectorListItem';

  componentDidMount() {
    this.props.sendRef(this.ref.current, this.props.filteredIndex);
  }

  componentDidUpdate() {
    this.props.sendRef(this.ref.current, this.props.filteredIndex);
  }

  render() {
    const {
      onOptionSelect,
      orderIndex,
      children,
      className,
      id,
      isSelected,
      isChosen,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      sendRef,
      filteredIndex,
      ...props
    } = this.props;

    return (
      <li
        className={css(styles.dualListSelectorListItem, className)}
        key={orderIndex}
        {...props}
        aria-selected={isSelected}
        role="option"
      >
        <button
          className={css(styles.dualListSelectorItem, isSelected && styles.modifiers.selected)}
          onClick={e => onOptionSelect(e, orderIndex, isChosen)}
          id={id}
          ref={this.ref}
          tabIndex={-1}
          type="button"
        >
          <span className={css(styles.dualListSelectorItemMain)}>
            <span className={css(styles.dualListSelectorItemText)}>{children}</span>
          </span>
        </button>
      </li>
    );
  }
}
