import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { DualListSelectorTreeItemData } from './DualListSelectorTree';
import { Badge } from '../Badge';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import AngleDownIcon from '@patternfly/react-icons/dist/js/icons/angle-down-icon';
import { flattenTree } from './treeUtils';

export interface DualListSelectorTreeItemProps extends React.HTMLProps<HTMLLIElement> {
  /** Content rendered inside the dual list selector. */
  children?: React.ReactNode;
  /** Additional classes applied to the dual list selector. */
  className?: string;
  /** Flag indicating the option is currently selected. */
  isSelected?: boolean;
  /** Flag indicating this option is in the chosen pane. */
  isChosen?: boolean;
  /** Flag indicating this option is expanded by default. */
  defaultExpanded?: boolean;
  /** Flag indicating this option has a checkbox */
  hasCheck?: boolean;
  /** Flag indicating this option has a badge */
  hasBadge?: boolean;
  /** Internal callback to pass this ref up to the parent. */
  sendRef?: (optionRef: React.ReactNode, index: number) => void;
  /** Internal field used to keep track of the order of filtered options. */
  filteredIndex?: number;
  /** Internal field used to keep track of order of unfiltered options. */
  orderIndex?: number;
  /** Callback fired when an option is selected.  */
  onOptionSelect?: (
    e: React.MouseEvent | React.ChangeEvent,
    index: number,
    isChosen: boolean,
    text?: string,
    itemData?: any,
    parentData?: any
  ) => void;
  /** Callback fired when an option is checked */
  onOptionCheck?: (
    event: React.ChangeEvent<HTMLInputElement>,
    isChosen: boolean,
    itemData: DualListSelectorTreeItemData
  ) => void;
  /** ID of the option */
  id: string;
  /** Text of the option */
  text: string;
  /** Parent item of the option */
  parentItem?: DualListSelectorTreeItemData;
  /** Additional properties to pass to the option checkbox */
  checkProps?: any;
  /** Additional properties to pass to the option badge */
  badgeProps?: any;
  /** Raw data of the option */
  itemData?: DualListSelectorTreeItemData;
}

export class DualListSelectorTreeItem extends React.Component<DualListSelectorTreeItemProps> {
  private ref = React.createRef<HTMLDivElement>();
  static displayName = 'DualListSelectorTreeItem';
  state = {
    isExpanded: this.props.defaultExpanded || false
  };

  componentDidMount() {
    this.props.sendRef(this.ref.current, this.props.filteredIndex);
  }

  componentDidUpdate() {
    this.props.sendRef(this.ref.current, this.props.filteredIndex);
  }

  render() {
    const {
      onOptionSelect,
      onOptionCheck,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      sendRef,
      orderIndex,
      children,
      className,
      id,
      text,
      isSelected,
      isChosen,
      defaultExpanded,
      hasCheck,
      hasBadge,
      filteredIndex,
      checked,
      checkProps,
      badgeProps,
      parentItem,
      itemData,
      ...props
    } = this.props;
    const { isExpanded } = this.state;
    return (
      <li
        className={css(
          styles.dualListSelectorListItem,
          className,
          children && styles.modifiers.expandable,
          isExpanded && styles.modifiers.expanded
        )}
        key={orderIndex}
        {...props}
        aria-selected={isSelected}
        role="treeitem"
        {...(isExpanded && { 'aria-expanded': 'true' })}
      >
        <div
          className={css(styles.dualListSelectorItem, isSelected && styles.modifiers.selected)}
          onClick={e => {
            if (!hasCheck) {
              onOptionSelect(e, null, isChosen, text, itemData, parentItem);
            }
          }}
          id={id}
          ref={this.ref}
          tabIndex={-1}
        >
          <span className={css(styles.dualListSelectorItemMain)}>
            {children && (
              <div
                className={css(styles.dualListSelectorItemToggle)}
                onClick={e => {
                  if (children) {
                    this.setState({ isExpanded: !this.state.isExpanded });
                  }
                  e.stopPropagation();
                }}
              >
                <span className={css(styles.dualListSelectorItemToggleIcon)}>
                  {!isExpanded && <AngleRightIcon aria-hidden />}
                  {isExpanded && <AngleDownIcon aria-hidden />}
                </span>
              </div>
            )}
            {hasCheck && (
              <span className={css(styles.dualListSelectorItemCheck)}>
                <input
                  type="checkbox"
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                    onOptionCheck && onOptionCheck(evt, isChosen, itemData)
                  }
                  onClick={(evt: React.MouseEvent) => evt.stopPropagation()}
                  ref={elem => elem && (elem.indeterminate = checked === null)}
                  checked={checked || false}
                  {...checkProps}
                />
              </span>
            )}
            <span className={css(styles.dualListSelectorItemText)}>{text}</span>
            {hasBadge && children && (
              <span className={css(styles.dualListSelectorItemCount)}>
                <Badge {...badgeProps}>{flattenTree((children as React.ReactElement).props.data).length}</Badge>
              </span>
            )}
          </span>
        </div>
        {isExpanded && children}
      </li>
    );
  }
}
