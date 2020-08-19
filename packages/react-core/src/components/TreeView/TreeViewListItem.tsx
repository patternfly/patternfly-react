import React, { useState } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import AngleDownIcon from '@patternfly/react-icons/dist/js/icons/angle-down-icon';
import { TreeViewDataItem } from './TreeView';
import { Badge } from '../Badge';

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
  checkProps?: any;
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
  /** Action of a tree view item, nested inside a button */
  action?: React.ReactNode;
  /** Additional properties of the tree view item action button */
  actionProps?: any;
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
  checkProps,
  hasBadge = false,
  badgeProps = { isRead: true },
  activeItems = [],
  itemData,
  parentItem,
  icon,
  expandedIcon,
  action,
  actionProps = {
    onClick: (evt: React.MouseEvent) => {
      evt.stopPropagation();
      evt.preventDefault();
      onSelect && onSelect(evt, itemData, parentItem);
    }
  },
  compareItems
}: TreeViewListItemProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  return (
    <li
      id={id}
      className={css(
        styles.treeViewListItem,
        !!children && styles.modifiers.expandable,
        isExpanded && styles.modifiers.expanded
      )}
      {...(isExpanded && { 'aria-expanded': 'true' })}
      role="treeitem"
      tabIndex={0}
    >
      <div className={css(styles.treeViewContent)}>
        <button
          className={css(
            styles.treeViewNode,
            activeItems &&
              activeItems.length > 0 &&
              activeItems.some(item => compareItems && item && compareItems(item, itemData))
              ? children
                ? styles.modifiers.active
                : styles.modifiers.current
              : ''
          )}
          onClick={(evt: React.MouseEvent) => {
            if (children) {
              setIsExpanded(!isExpanded);
            }
            onSelect && onSelect(evt, itemData, parentItem);
          }}
        >
          {children && (
            <span className={css(styles.treeViewNodeToggleIcon)}>
              {!isExpanded && <AngleRightIcon aria-hidden="true" />}
              {isExpanded && <AngleDownIcon aria-hidden="true" />}
            </span>
          )}
          {hasCheck && (
            <span className={css(styles.treeViewNodeCheck)}>
              <input
                type="checkbox"
                onChange={(evt: React.ChangeEvent) => onCheck && onCheck(evt, itemData, parentItem)}
                {...checkProps}
              />
            </span>
          )}
          {icon && (
            <span className={css(styles.treeViewNodeIcon)}>
              {!isExpanded && icon}
              {isExpanded && (expandedIcon || icon)}
            </span>
          )}
          <span className={css(styles.treeViewNodeText)}>{name}</span>
          {hasBadge && children && (
            <span className={css(styles.treeViewNodeCount)}>
              <Badge {...badgeProps}>{(children as React.ReactElement).props.data.length}</Badge>
            </span>
          )}
        </button>
        {action && (
          <button className={css(styles.treeViewAction)} {...actionProps}>
            {action}
          </button>
        )}
      </div>
      {isExpanded && children}
    </li>
  );
};
TreeViewListItem.displayName = 'TreeViewListItem';
