import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { css } from '@patternfly/react-styles';
import { DualListSelectorTreeItemData } from './DualListSelectorTree';
import { Badge } from '../Badge';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
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
  /** Flag indicating this option has a badge */
  hasBadge?: boolean;
  /** Callback fired when an option is selected.  */
  onOptionSelect?: (
    e: React.MouseEvent | React.ChangeEvent,
    index: number,
    isChosen: boolean,
    id?: string,
    itemData?: any,
    parentData?: any
  ) => void;
  /** Callback fired when an option is checked */
  onOptionCheck?: (
    event: React.MouseEvent | React.ChangeEvent<HTMLInputElement>,
    isChecked: boolean,
    isChosen: boolean,
    itemData: DualListSelectorTreeItemData
  ) => void;
  /** ID of the option */
  id: string;
  /** Text of the option */
  text: string;
  /** Parent item of the option */
  parentItem?: DualListSelectorTreeItemData;
  /** Flag indicating if this open is checked. */
  isChecked?: boolean;
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

  render() {
    const {
      onOptionCheck,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      onOptionSelect,
      children,
      className,
      id,
      text,
      isSelected,
      isChosen,
      defaultExpanded,
      hasBadge,
      isChecked,
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
        id={id}
        {...props}
        aria-selected={isSelected}
        role="treeitem"
        {...(isExpanded && { 'aria-expanded': 'true' })}
      >
        <div
          className={css(styles.dualListSelectorItem, isSelected && styles.modifiers.selected, styles.modifiers.check)}
          ref={this.ref}
          tabIndex={-1}
          onClick={evt => {
            onOptionCheck && onOptionCheck(evt, !isChecked, isChosen, itemData);
          }}
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
                  <AngleRightIcon aria-hidden />
                </span>
              </div>
            )}
            <span className={css(styles.dualListSelectorItemCheck)}>
              <input
                type="checkbox"
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                  onOptionCheck && onOptionCheck(evt, !isChecked, isChosen, itemData)
                }
                onClick={(evt: React.MouseEvent) => evt.stopPropagation()}
                ref={elem => elem && (elem.indeterminate = isChecked === null)}
                checked={isChecked || false}
                {...checkProps}
              />
            </span>

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
