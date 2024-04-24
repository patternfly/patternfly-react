import * as React from 'react';
import { TreeViewList } from './TreeViewList';
import { TreeViewCheckProps, TreeViewListItem } from './TreeViewListItem';
import { TreeViewRoot } from './TreeViewRoot';

/** Properties that make up a tree view data item. These properties should be passed in as an
 * object to one of the various tree view component properties which accept TreeViewDataItem as
 * a type.
 */

export interface TreeViewDataItem {
  /** Action of a tree view item, which can be either a button or dropdown component. */
  action?: React.ReactNode;
  /** Additional properties of the tree view item badge. */
  badgeProps?: any;
  /** Additional properties of the tree view item checkbox. */
  checkProps?: TreeViewCheckProps;
  /** Child nodes of a tree view item. */
  children?: TreeViewDataItem[];
  /** Optional prop for a custom badge. */
  customBadgeContent?: React.ReactNode;
  /** Flag indicating if node is expanded by default. */
  defaultExpanded?: boolean;
  /** Expanded icon of a tree view item. */
  expandedIcon?: React.ReactNode;
  /** Flag indicating if a tree view item has a badge. */
  hasBadge?: boolean;
  /** Flag indicating if a tree view item has a checkbox. */
  hasCheckbox?: boolean;
  /** Default icon of a tree view item. */
  icon?: React.ReactNode;
  /** ID of a tree view item. */
  id?: string;
  /** Internal content of a tree view item. */
  name: React.ReactNode;
  /** Title of a tree view item. Only used in compact presentations. */
  title?: React.ReactNode;
}

/** The main tree view component. */

export interface TreeViewProps {
  /** Active items of tree view. */
  activeItems?: TreeViewDataItem[];
  /** Sets the expanded state on all tree nodes, overriding default behavior and current
   * internal state.
   */
  allExpanded?: boolean;
  /** A text string that sets the accessible name of the tree view list. Either this or the aria-labelledby property must
   * be passed in.
   */
  'aria-label'?: string;
  /** A space separated list of element id's that sets the accessible name of the tree view list. Either
   * this or the aria-label property must be passed in.
   */
  'aria-labelledby'?: string;
  /** Class to add if not passed a parentItem property. */
  className?: string;
  /** Comparison function for determining active items. */
  compareItems?: (item: TreeViewDataItem, itemToCheck: TreeViewDataItem) => boolean;
  /** Data of the tree view. */
  data: TreeViewDataItem[];
  /** Sets the default expanded behavior. */
  defaultAllExpanded?: boolean;
  /** Icon for all expanded node items. */
  expandedIcon?: React.ReactNode;
  /** Flag indicating if all nodes in the tree view should have badges. */
  hasBadges?: boolean;
  /** Flag indicating if all nodes in the tree view should have checkboxes. */
  hasCheckboxes?: boolean;
  /** Flag indicating if the tree view has guide lines. */
  hasGuides?: boolean;
  /** Flag indicating if the tree view is nested. */
  isNested?: boolean;
  /** Flag indicating that tree nodes should be independently selectable, even when having
   * children.
   */
  hasSelectableNodes?: boolean;
  /** Icon for all leaf or unexpanded node items. */
  icon?: React.ReactNode;
  /** ID of the tree view. */
  id?: string;
  /** Flag indicating whether multiple nodes can be selected in the tree view. This will also set the
   * aria-multiselectable attribute on the tree view list which is required to be true when multiple selection is intended.
   * Can only be applied to the root tree view list.
   */
  isMultiSelectable?: boolean;
  /** Callback for item checkbox selection. */
  onCheck?: (event: React.ChangeEvent<HTMLInputElement>, item: TreeViewDataItem, parentItem: TreeViewDataItem) => void;
  /** Callback for item selection. */
  onSelect?: (event: React.MouseEvent, item: TreeViewDataItem, parentItem: TreeViewDataItem) => void;
  /** Callback for expanding a node with children. */
  onExpand?: (event: React.MouseEvent, item: TreeViewDataItem, parentItem: TreeViewDataItem) => void;
  /** Callback for collapsing a node with children. */
  onCollapse?: (event: React.MouseEvent, item: TreeViewDataItem, parentItem: TreeViewDataItem) => void;
  /** Internal. Parent item of a tree view list item. */
  parentItem?: TreeViewDataItem;
  /** Toolbar to display above the tree view. */
  toolbar?: React.ReactNode;
  /** Flag indicating the tree view should utilize memoization to help render large data sets.
   * Setting this property requires that the activeItems property is passed an array containing
   * every node in the selected item's path.
   */
  useMemo?: boolean;
  /** Variant presentation styles for the tree view. */
  variant?: 'default' | 'compact' | 'compactNoBackground';
}

export const TreeView: React.FunctionComponent<TreeViewProps> = ({
  data,
  isNested = false,
  hasCheckboxes = false,
  hasBadges = false,
  hasGuides = false,
  hasSelectableNodes = false,
  variant = 'default',
  defaultAllExpanded = false,
  allExpanded,
  icon,
  isMultiSelectable = false,
  expandedIcon,
  parentItem,
  onSelect,
  onCheck,
  onExpand,
  onCollapse,
  toolbar,
  activeItems,
  compareItems = (item, itemToCheck) => item.id === itemToCheck.id,
  className,
  useMemo,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  ...props
}: TreeViewProps) => {
  const treeViewList = (
    <TreeViewList
      isNested={isNested}
      toolbar={toolbar}
      isMultiSelectable={isMultiSelectable}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      {data.map((item) => (
        <TreeViewListItem
          key={item.id?.toString() || item.name?.toString()}
          name={item.name}
          title={item.title}
          id={item.id}
          isExpanded={allExpanded}
          isSelectable={hasSelectableNodes}
          defaultExpanded={item.defaultExpanded !== undefined ? item.defaultExpanded : defaultAllExpanded}
          onSelect={onSelect}
          onCheck={onCheck}
          onExpand={onExpand}
          onCollapse={onCollapse}
          hasCheckbox={item.hasCheckbox !== undefined ? item.hasCheckbox : hasCheckboxes}
          checkProps={item.checkProps}
          hasBadge={item.hasBadge !== undefined ? item.hasBadge : hasBadges}
          customBadgeContent={item.customBadgeContent}
          badgeProps={item.badgeProps}
          activeItems={activeItems}
          parentItem={parentItem}
          itemData={item}
          icon={item.icon !== undefined ? item.icon : icon}
          expandedIcon={item.expandedIcon !== undefined ? item.expandedIcon : expandedIcon}
          action={item.action}
          compareItems={compareItems}
          isCompact={variant === 'compact' || variant === 'compactNoBackground'}
          useMemo={useMemo}
          {...(item.children && {
            children: (
              <TreeView
                data={item.children}
                isNested
                parentItem={item}
                hasCheckboxes={hasCheckboxes}
                hasBadges={hasBadges}
                hasGuides={hasGuides}
                hasSelectableNodes={hasSelectableNodes}
                variant={variant}
                allExpanded={allExpanded}
                defaultAllExpanded={defaultAllExpanded}
                onSelect={onSelect}
                onCheck={onCheck}
                onExpand={onExpand}
                onCollapse={onCollapse}
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
        <TreeViewRoot
          hasSelectableNodes={hasSelectableNodes}
          hasCheckboxes={hasCheckboxes}
          hasGuides={hasGuides}
          variant={variant}
          className={className}
          {...props}
        >
          {treeViewList}
        </TreeViewRoot>
      )}
    </>
  );
};

TreeView.displayName = 'TreeView';
