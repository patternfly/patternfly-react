import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { DualListSelectorTreeItem } from './DualListSelectorTreeItem';

export interface DualListSelectorTreeItemData {
  /** Content rendered inside the dual list selector. */
  children?: DualListSelectorTreeItemData[];
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
  /** Checked state of the option */
  checked: boolean;
  /** Parent item of the option */
  parentItem?: DualListSelectorTreeItem;
  /** Additional properties to pass to the option checkbox */
  checkProps?: any;
  /** Additional properties to pass to the option badge */
  badgeProps?: any;
}

export interface DualListSelectorTreeProps {
  /** Data of the tree view */
  data: DualListSelectorTreeItemData[];
  /** ID of the tree view */
  id?: string;
  /** Flag indicating this list is the chosen pane. */
  isChosen?: boolean;
  /** Flag indicating if all options should have checkboxes */
  hasChecks?: boolean;
  /** Flag indicating if all options should have badges */
  hasBadges?: boolean;
  /** Sets the default expanded behavior */
  defaultAllExpanded?: boolean;
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
  /** Internal. Parent item of an option */
  parentItem?: DualListSelectorTreeItemData;
  /** Reference of selected options */
  selectedOptions?: string[];
  /** Internal callback to pass this ref up to the parent. */
  sendRef?: (optionRef: React.ReactNode, index: number) => void;
}

export const DualListSelectorTree: React.FunctionComponent<DualListSelectorTreeProps> = ({
  data,
  isChosen,
  hasChecks = false,
  hasBadges = false,
  defaultAllExpanded = false,
  parentItem,
  onOptionSelect,
  onOptionCheck,
  sendRef,
  selectedOptions = [],
  ...props
}: DualListSelectorTreeProps) => (
  <ul className={css(styles.dualListSelectorList)} {...props}>
    {data.map(item => (
      <DualListSelectorTreeItem
        key={item.text}
        text={item.text}
        id={item.id}
        isChosen={isChosen}
        isSelected={selectedOptions.includes(item.text)}
        defaultExpanded={item.defaultExpanded !== undefined ? item.defaultExpanded : defaultAllExpanded}
        onOptionSelect={onOptionSelect}
        onOptionCheck={onOptionCheck}
        hasCheck={item.hasCheck !== undefined ? item.hasCheck : hasChecks}
        checked={item.checked}
        checkProps={item.checkProps}
        hasBadge={item.hasBadge !== undefined ? item.hasBadge : hasBadges}
        badgeProps={item.badgeProps}
        parentItem={parentItem}
        sendRef={sendRef}
        itemData={item}
        {...(item.children && {
          children: (
            <DualListSelectorTree
              data={item.children}
              parentItem={item}
              hasChecks={hasChecks}
              hasBadges={hasBadges}
              isChosen={isChosen}
              defaultAllExpanded={defaultAllExpanded}
              onOptionSelect={onOptionSelect}
              onOptionCheck={onOptionCheck}
              sendRef={sendRef}
              selectedOptions={selectedOptions}
            />
          )
        })}
      />
    ))}
  </ul>
);

DualListSelectorTree.displayName = 'DualListSelectorTree';
