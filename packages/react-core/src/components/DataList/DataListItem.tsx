import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { DataListContext } from './DataList';
import { KeyTypes } from '../../helpers/constants';

export interface DataListItemProps extends Omit<React.HTMLProps<HTMLLIElement>, 'children' | 'ref'> {
  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded?: boolean;
  /** Content rendered inside the DataList item */
  children: React.ReactNode;
  /** Additional classes added to the DataList item should be either <DataListItemRow> or <DataListContent> */
  className?: string;
  /** Adds accessible text to the DataList item */
  'aria-labelledby': string;
  /** Unique id for the DataList item */
  id?: string;
  /** Aria label to apply to the selectable input if one is rendered */
  selectableInputAriaLabel?: string;
}

export interface DataListItemChildProps {
  /** Id for the row */
  rowid: string;
}

class DataListItem extends React.Component<DataListItemProps> {
  static displayName = 'DataListItem';
  static defaultProps: DataListItemProps = {
    isExpanded: false,
    className: '',
    id: '',
    children: null,
    'aria-labelledby': ''
  };
  render() {
    const {
      children,
      isExpanded,
      className,
      id,
      'aria-labelledby': ariaLabelledBy,
      selectableInputAriaLabel,
      ...props
    } = this.props;
    return (
      <DataListContext.Consumer>
        {({ isSelectable, selectedDataListItemId, updateSelectedDataListItem, onSelectableRowChange }) => {
          const selectDataListItem = (event: React.MouseEvent) => {
            let target: any = event.target;
            while (event.currentTarget !== target) {
              if (
                ('onclick' in target && target.onclick) ||
                target.parentNode.classList.contains(styles.dataListItemAction) ||
                target.parentNode.classList.contains(styles.dataListItemControl)
              ) {
                // check other event handlers are not present.
                return;
              } else {
                target = target.parentNode;
              }
            }
            updateSelectedDataListItem(event, id);
          };

          const onKeyDown = (event: React.KeyboardEvent) => {
            if ([KeyTypes.Enter, KeyTypes.Space].includes(event.key)) {
              event.preventDefault();
              updateSelectedDataListItem(event, id);
            }
          };

          const isSelected = selectedDataListItemId === id;

          const selectableInputAriaProps = selectableInputAriaLabel
            ? { 'aria-label': selectableInputAriaLabel }
            : { 'aria-labelledby': ariaLabelledBy };

          return (
            <li
              id={id}
              className={css(
                styles.dataListItem,
                isExpanded && styles.modifiers.expanded,
                isSelectable && styles.modifiers.clickable,
                selectedDataListItemId && isSelected && styles.modifiers.selected,
                className
              )}
              aria-labelledby={ariaLabelledBy}
              {...(isSelectable && { tabIndex: 0, onClick: selectDataListItem, onKeyDown })}
              {...(isSelectable && isSelected && { 'aria-selected': true })}
              {...props}
            >
              {onSelectableRowChange && (
                <input
                  className="pf-v6-screen-reader"
                  type="radio"
                  checked={isSelected}
                  onChange={(event) => onSelectableRowChange(event, id)}
                  tabIndex={-1}
                  {...selectableInputAriaProps}
                />
              )}
              {React.Children.map(
                children,
                (child) =>
                  React.isValidElement(child) &&
                  React.cloneElement(child as React.ReactElement<any>, {
                    rowid: ariaLabelledBy
                  })
              )}
            </li>
          );
        }}
      </DataListContext.Consumer>
    );
  }
}

export { DataListItem };
