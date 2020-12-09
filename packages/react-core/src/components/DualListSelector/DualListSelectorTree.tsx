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
  parentItem?: DualListSelectorTreeItem;
  /** Checked state of the option */
  isChecked: boolean;
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
  /** Flag indicating if the list is nested */
  isNested?: boolean;
  /** Flag indicating if all options should have badges */
  hasBadges?: boolean;
  /** Sets the default expanded behavior */
  defaultAllExpanded?: boolean;
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
  /** Internal. Parent item of an option */
  parentItem?: DualListSelectorTreeItemData;
  /** Reference of selected options */
  selectedOptions?: string[];
}

export const DualListSelectorTree: React.FunctionComponent<DualListSelectorTreeProps> = ({
  data,
  isChosen,
  hasBadges = false,
  isNested = false,
  defaultAllExpanded = false,
  parentItem,
  onOptionSelect,
  onOptionCheck,
  selectedOptions = [],
  ...props
}: DualListSelectorTreeProps) => (
  <ul className={css(styles.dualListSelectorList)} role={isNested ? 'group' : 'tree'} {...props}>
    {data.map(item => (
      <DualListSelectorTreeItem
        key={item.id}
        text={item.text}
        id={item.id}
        isChosen={isChosen}
        isSelected={selectedOptions.includes(item.id)}
        defaultExpanded={item.defaultExpanded !== undefined ? item.defaultExpanded : defaultAllExpanded}
        onOptionSelect={onOptionSelect}
        onOptionCheck={onOptionCheck}
        isChecked={item.isChecked}
        checkProps={item.checkProps}
        hasBadge={item.hasBadge !== undefined ? item.hasBadge : hasBadges}
        badgeProps={item.badgeProps}
        parentItem={parentItem}
        itemData={item}
        {...(item.children && {
          children: (
            <DualListSelectorTree
              isNested
              data={item.children}
              parentItem={item}
              hasBadges={hasBadges}
              isChosen={isChosen}
              defaultAllExpanded={defaultAllExpanded}
              onOptionSelect={onOptionSelect}
              onOptionCheck={onOptionCheck}
              selectedOptions={selectedOptions}
            />
          )
        })}
      />
    ))}
  </ul>
);

DualListSelectorTree.displayName = 'DualListSelectorTree';
