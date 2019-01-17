export const filterByHiding = (list, value) => {
  const filterValue = value.toLowerCase();
  return list.map(item => {
    const itemLabel = item.label.toLowerCase();
    const included = itemLabel.includes(filterValue);
    // if the item label matches the filter value.
    item.hidden = !included;
    // if it is a parent and its label doesn't match the filter value.
    if (itemHasChildren(item)) {
      if (isItemHidden(item)) {
        let childrenIncludedAmount = 0;
        item.children.forEach(childItem => {
          const childLabel = childItem.label.toLowerCase();
          const childIncluded = childLabel.includes(filterValue);
          childItem.hidden = !childIncluded;
          childrenIncludedAmount += childIncluded ? 1 : 0;
        });
        item.hidden = childrenIncludedAmount === 0;
      } else {
        item.children = makeAllItemsVisible(item.children);
      }
    }
    return item;
  });
};

export const makeAllItemsVisible = list =>
  list.map(item => {
    item.hidden = false;
    if (itemHasChildren(item)) {
      item.children.forEach(childItem => {
        childItem.hidden = false;
      });
    }
    return item;
  });

export const sortItems = (items, sortFactor = 'label') =>
  items.sort((a, b) => (a[sortFactor].toLowerCase() > b[sortFactor].toLowerCase() ? 1 : -1));

export const shouldItemBeChecked = (item, isMainChecked, resetAllSelected) => {
  let checked = item.checked || false;
  const isItemEditable = !item.disabled || !item.hidden;
  if (!isItemEditable) {
    return checked;
  }
  if (resetAllSelected) {
    checked = false;
  } else if (isMainChecked) {
    checked = isMainChecked;
  }
  return checked;
};

export const arrangeArray = ({ items, sortBy, isSortAsc = true, isMainChecked = false, resetAllSelected = false }) => {
  // sort the items
  let itemsCopy = sortItems(items, sortBy).map((item, index) => {
    // add position to the item and update if the main checkbox is initialy checked.
    const modifiedItem = {
      ...item,
      position: index,
      checked: shouldItemBeChecked(item, isMainChecked, resetAllSelected)
    };
    if (itemHasChildren(item)) {
      // sort the children array and add a position, parentPosition and update check state.
      modifiedItem.children = sortItems(item.children, sortBy).map((child, childIndex) => ({
        ...child,
        position: childIndex,
        parentPosition: index,
        checked: shouldItemBeChecked(child, isMainChecked, resetAllSelected)
      }));
    }
    return modifiedItem;
  });

  itemsCopy = isSortAsc ? itemsCopy : reverseAllItemsOrder(itemsCopy);

  return itemsCopy;
};

export const getDefaultProps = () => ({
  items: [],
  options: null,
  isSortAsc: true,
  sortBy: 'label',
  filterTerm: '',
  isMainChecked: false
});

export const getCheckedAmount = items => {
  let checkedAmount = 0;
  items.forEach(item => {
    if (isItemSelected(item)) {
      checkedAmount += 1;
      if (itemHasChildren(item)) {
        checkedAmount += item.children.length;
      }
    } else if (itemHasChildren(item)) {
      item.children.forEach(child => {
        if (isItemSelected(child)) {
          checkedAmount += 1;
        }
      });
    }
  });
  return checkedAmount;
};
export const getCounterMessage = (selected, total) => `${selected} of ${total} items selected`;

export const adjustProps = ({ left, right, ...props }) => {
  const defaultProps = getDefaultProps();
  const leftItems = arrangeArray({ ...left });
  const rightItems = arrangeArray({ ...right });
  return {
    ...props,
    left: {
      ...defaultProps,
      ...left,
      items: leftItems,
      selectCount: getCheckedAmount(leftItems)
    },
    right: {
      ...defaultProps,
      ...right,
      items: rightItems,
      selectCount: getCheckedAmount(rightItems)
    }
  };
};

export const isAllChildrenChecked = ({ children }) =>
  children && children.filter(({ checked }) => checked).length === children.length;

export const getItemsLength = items => {
  let { length } = items;
  if (length === 0) {
    return 0;
  }
  items.forEach(({ children }) => {
    if (children) {
      // add the children amount and reduce the parent.
      length += children.length - 1;
    }
  });
  return length;
};

export const reverseAllItemsOrder = items => {
  const reversedItems = [...items].reverse();
  return reversedItems.map(item => (item.children ? { ...item, children: item.children.reverse() } : item));
};

export const getItem = (isSortAsc, items, position, parentPosition) => {
  // if item is a child.
  if (parentPosition !== undefined) {
    const parent = items[getItemPosition(items, parentPosition, isSortAsc)];
    return parent.children[getItemPosition(parent.children, position, isSortAsc)];
  }
  return items[getItemPosition(items, position, isSortAsc)];
};

export const getUpdatedSelectCount = (selectCount, checked, amount = 1) =>
  selectCount + (checked ? amount : -1 * amount);

export const itemHasParent = item => item.parentPosition !== undefined;

export const itemHasChildren = item => item.children !== undefined;

export const getItemPosition = (array, position, isSortAsc) => (isSortAsc ? position : array.length - position - 1);

export const toggleAllItems = (list, checked) => {
  let toggleCount = 0;
  list.forEach(item => {
    if (item.disabled) {
      return;
    }
    if (item.checked !== checked) {
      item.checked = checked;
      toggleCount += 1;
    }
    if (itemHasChildren(item)) {
      let childrenToggleCount = 0;
      item.children.forEach(childItem => {
        if (childItem.checked !== checked) {
          childItem.checked = checked;
          childrenToggleCount += 1;
        }
      });
      if (childrenToggleCount > 0) {
        toggleCount += childrenToggleCount - 1;
      }
    }
  });
  return toggleCount;
};

export const isAllItemsChecked = (items, selectCount) => selectCount > 0 && selectCount === getItemsLength(items);

export const isItemExistOnList = (list, itemLabel) => {
  let parentIndex = null;
  // find if the parent already exist on the list.
  list.forEach((listItem, index) => {
    if (listItem.label === itemLabel) {
      parentIndex = index;
    }
  });
  return { isParentExist: parentIndex !== null, parentIndex };
};

export const getFilterredItems = list => {
  const filteredItems = [];
  list.forEach(item => {
    if (!isItemHidden(item)) {
      filteredItems.push(item);
    } else if (itemHasChildren(item)) {
      const filteredChildren = [];
      item.children.forEach(childItem => {
        if (!isItemHidden(childItem)) {
          filteredChildren.push(childItem);
        }
      });
      if (filteredChildren.length > 0) {
        filteredItems.push({ ...item, children: filteredChildren });
      }
    }
  });

  return filteredItems;
};

export const getFilterredItemsLength = list => getItemsLength(getFilterredItems(list));

export const getSelectedFilterredItemsLength = list => {
  const filteredItems = getFilterredItems(list);
  let selectedAmount = 0;
  filteredItems.forEach(item => {
    if (isItemSelected(item)) {
      selectedAmount += 1;
      if (itemHasChildren(item)) {
        let selectedChildrenAmount = 0;
        item.children.forEach(childItem => {
          if (isItemSelected(childItem)) {
            selectedChildrenAmount += 1;
          }
        });
        if (selectedChildrenAmount) {
          selectedAmount += selectedChildrenAmount - 1;
        }
      }
    }
  });
  return selectedAmount;
};

export const isItemSelected = item => item.checked;

export const isItemHidden = item => item.hidden;

export const isItemDisabled = item => item.disabled;
