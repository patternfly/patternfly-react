import React, { useState, useEffect } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import { TreeViewDataItem } from './TreeView';
import { Badge } from '../Badge';
import { GenerateId } from '../../helpers/GenerateId/GenerateId';

interface CheckProps extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  checked?: boolean | null;
}

export interface TreeViewListItemProps {
  /** Internal content of a tree view item */
  name: React.ReactNode;
  /** ID of a tree view item */
  id?: string;
  /** Flag indicating if node is expanded by default */
  defaultExpanded?: boolean;
  /** Child nodes of a tree view item */
  children?: React.ReactNode;
  /** Callback for item selection */
  onSelect?: (event: React.MouseEvent, item: TreeViewDataItem, parent: TreeViewDataItem) => void;
  /** Callback for item checkbox selection */
  onCheck?: (event: React.ChangeEvent, item: TreeViewDataItem, parent: TreeViewDataItem) => void;
  /** Flag indicating if a tree view item has a checkbox */
  hasCheck?: boolean;
  /** Additional properties of the tree view item checkbox */
  checkProps?: CheckProps;
  /** Flag indicating if a tree view item has a badge */
  hasBadge?: boolean;
  /** Additional properties of the tree view item badge */
  badgeProps?: any;
  /** Active items of tree view */
  activeItems?: TreeViewDataItem[];
  /** Data structure of tree view item */
  itemData?: TreeViewDataItem;
  /** Parent item of tree view item */
  parentItem?: TreeViewDataItem;
  /** Default icon of a tree view item */
  icon?: React.ReactNode;
  /** Expanded icon of a tree view item */
  expandedIcon?: React.ReactNode;
  /** Action of a tree view item, can be a Button or Dropdown */
  action?: React.ReactNode;
  /** Callback for item comparison function */
  compareItems?: (item: TreeViewDataItem, itemToCheck: TreeViewDataItem) => boolean;
}

export const TreeViewListItem: React.FunctionComponent<TreeViewListItemProps> = ({
  name,
  id,
  defaultExpanded = false,
  children = null,
  onSelect,
  onCheck,
  hasCheck = false,
  checkProps = {
    checked: false
  },
  hasBadge = false,
  badgeProps = { isRead: true },
  activeItems = [],
  itemData,
  parentItem,
  icon,
  expandedIcon,
  action,
  compareItems
}: TreeViewListItemProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  useEffect(() => {
    setIsExpanded(defaultExpanded);
  }, [defaultExpanded]);

  const Component = hasCheck ? 'div' : 'button';
  const ToggleComponent = hasCheck ? 'button' : 'div';
  return (
    <li
      id={id}
      className={css(styles.treeViewListItem, isExpanded && styles.modifiers.expanded)}
      {...(isExpanded && { 'aria-expanded': 'true' })}
      role={children ? 'treeitem' : 'none'}
      tabIndex={-1}
    >
      <div className={css(styles.treeViewContent)}>
        <GenerateId prefix="checkbox-id">
          {randomId => (
            <Component
              className={css(
                styles.treeViewNode,
                !children &&
                  activeItems &&
                  activeItems.length > 0 &&
                  activeItems.some(item => compareItems && item && compareItems(item, itemData))
                  ? styles.modifiers.current
                  : ''
              )}
              onClick={(evt: React.MouseEvent) => {
                if (!hasCheck) {
                  if (children) {
                    setIsExpanded(!isExpanded);
                  }
                  onSelect && onSelect(evt, itemData, parentItem);
                }
              }}
              {...(!children && { role: 'treeitem' })}
              tabIndex={-1}
            >
              {children && (
                <ToggleComponent
                  className={css(styles.treeViewNodeToggle)}
                  onClick={() => {
                    if (hasCheck) {
                      setIsExpanded(!isExpanded);
                    }
                  }}
                  {...(hasCheck && { 'aria-labelledby': `label-${randomId}` })}
                  tabIndex={-1}
                >
                  <span className={css(styles.treeViewNodeToggleIcon)}>
                    <AngleRightIcon aria-hidden="true" />
                  </span>
                </ToggleComponent>
              )}
              {hasCheck && (
                <span className={css(styles.treeViewNodeCheck)}>
                  <input
                    type="checkbox"
                    onChange={(evt: React.ChangeEvent) => onCheck && onCheck(evt, itemData, parentItem)}
                    onClick={(evt: React.MouseEvent) => evt.stopPropagation()}
                    ref={elem => elem && (elem.indeterminate = checkProps.checked === null)}
                    {...checkProps}
                    id={randomId}
                    tabIndex={-1}
                  />
                </span>
              )}
              {icon && (
                <span className={css(styles.treeViewNodeIcon)}>
                  {!isExpanded && icon}
                  {isExpanded && (expandedIcon || icon)}
                </span>
              )}
              {hasCheck ? (
                <label className={css(styles.treeViewNodeText)} htmlFor={randomId} id={`label-${randomId}`}>
                  {name}
                </label>
              ) : (
                <span className={css(styles.treeViewNodeText)}>{name}</span>
              )}
              {hasBadge && children && (
                <span className={css(styles.treeViewNodeCount)}>
                  <Badge {...badgeProps}>{(children as React.ReactElement).props.data.length}</Badge>
                </span>
              )}
            </Component>
          )}
        </GenerateId>
        {action && <div className={css(styles.treeViewAction)}>{action}</div>}
      </div>
      {isExpanded && children}
    </li>
  );
};
TreeViewListItem.displayName = 'TreeViewListItem';
