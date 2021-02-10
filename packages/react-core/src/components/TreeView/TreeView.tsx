import * as React from 'react';
import { TreeViewList } from './TreeViewList';
import { TreeViewListItem } from './TreeViewListItem';
import { TreeViewRoot } from './TreeViewRoot';

export interface TreeViewDataItem {
  /** Internal content of a tree view item */
  name: React.ReactNode;
  /** ID of a tree view item */
  id?: string;
  /** Child nodes of a tree view item */
  children?: TreeViewDataItem[];
  /** Flag indicating if node is expanded by default */
  defaultExpanded?: boolean;
  /** Default icon of a tree view item */
  icon?: React.ReactNode;
  /** Expanded icon of a tree view item */
  expandedIcon?: React.ReactNode;
  /** Flag indicating if a tree view item has a checkbox */
  hasCheck?: boolean;
  /** Additional properties of the tree view item checkbox */
  checkProps?: any;
  /** Flag indicating if a tree view item has a badge */
  hasBadge?: boolean;
  /** Additional properties of the tree view item badge */
  badgeProps?: any;
  /** Action of a tree view item, can be a Button or Dropdown */
  action?: React.ReactNode;
}

export interface TreeViewProps {
  /** Data of the tree view */
  data: TreeViewDataItem[];
  /** ID of the tree view */
  id?: string;
  /** Flag indicating if the tree view is nested */
  isNested?: boolean;
  /** Flag indicating if all nodes in the tree view should have checkboxes */
  hasChecks?: boolean;
  /** Flag indicating if all nodes in the tree view should have badges */
  hasBadges?: boolean;
  /** Icon for all leaf or unexpanded node items */
  icon?: React.ReactNode;
  /** Icon for all expanded node items */
  expandedIcon?: React.ReactNode;
  /** Sets the default expanded behavior */
  defaultAllExpanded?: boolean;
  /** Callback for item selection */
  onSelect?: (event: React.MouseEvent, item: TreeViewDataItem, parentItem: TreeViewDataItem) => void;
  /** Callback for item checkbox selection */
  onCheck?: (event: React.ChangeEvent, item: TreeViewDataItem, parentItem: TreeViewDataItem) => void;
  /** Callback for search input */
  onSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Additional props for search input */
  searchProps?: any;
  /** Active items of tree view */
  activeItems?: TreeViewDataItem[];
  /** Internal. Parent item of a TreeViewListItem */
  parentItem?: TreeViewDataItem;
  /** Comparison function for determining active items */
  compareItems?: (item: TreeViewDataItem, itemToCheck: TreeViewDataItem) => boolean;
}

export const TreeView: React.FunctionComponent<TreeViewProps> = ({
  data,
  isNested = false,
  hasChecks = false,
  hasBadges = false,
  defaultAllExpanded = false,
  icon,
  expandedIcon,
  parentItem,
  onSelect,
  onCheck,
  onSearch,
  searchProps,
  activeItems,
  compareItems = (item, itemToCheck) => item.id === itemToCheck.id,
  ...props
}: TreeViewProps) => {
  const treeViewList = (
    <TreeViewList isNested={isNested} onSearch={onSearch} searchProps={searchProps}>
      {data.map(item => (
        <TreeViewListItem
          key={item.name.toString()}
          name={item.name}
          id={item.id}
          defaultExpanded={item.defaultExpanded !== undefined ? item.defaultExpanded : defaultAllExpanded}
          onSelect={onSelect}
          onCheck={onCheck}
          hasCheck={item.hasCheck !== undefined ? item.hasCheck : hasChecks}
          checkProps={item.checkProps}
          hasBadge={item.hasBadge !== undefined ? item.hasBadge : hasBadges}
          badgeProps={item.badgeProps}
          activeItems={activeItems}
          parentItem={parentItem}
          itemData={item}
          icon={item.icon !== undefined ? item.icon : icon}
          expandedIcon={item.expandedIcon !== undefined ? item.expandedIcon : expandedIcon}
          action={item.action}
          compareItems={compareItems}
          {...(item.children && {
            children: (
              <TreeView
                data={item.children}
                isNested
                parentItem={item}
                hasChecks={hasChecks}
                hasBadges={hasBadges}
                defaultAllExpanded={defaultAllExpanded}
                onSelect={onSelect}
                onCheck={onCheck}
                activeItems={activeItems}
                icon={icon}
                expandedIcon={expandedIcon}
              />
            )
          })}
        />
      ))}
    </TreeViewList>
  );
  return (
    <>
      {parentItem ? (
        treeViewList
      ) : (
        <TreeViewRoot hasChecks={hasChecks} {...props}>
          {treeViewList}
        </TreeViewRoot>
      )}
    </>
  );
};

TreeView.displayName = 'TreeView';
