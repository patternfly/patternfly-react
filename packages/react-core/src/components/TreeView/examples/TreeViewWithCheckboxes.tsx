import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

export const TreeViewWithCheckboxes: React.FunctionComponent = () => {
  const [checkedItems, setCheckedItems] = React.useState<TreeViewDataItem[]>([]);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Checked items: ', checkedItems);
  }, [checkedItems]);

  const options = [
    {
      name: 'Application launcher',
      id: 'example3-AppLaunch',
      checkProps: { 'aria-label': 'app-launcher-check', checked: false },
      children: [
        {
          name: 'Application 1',
          id: 'example3-App1',
          checkProps: { checked: false },
          children: [
            {
              name: 'Settings',
              id: 'example3-App1Settings',
              checkProps: { checked: false }
            },
            {
              name: 'Current',
              id: 'example3-App1Current',
              checkProps: { checked: false }
            }
          ]
        },
        {
          name: 'Application 2',
          id: 'example3-App2',
          checkProps: { checked: false },
          children: [
            {
              name: 'Settings',
              id: 'example3-App2Settings',
              checkProps: { checked: false }
            },
            {
              name: 'Loader',
              id: 'example3-App2Loader',
              checkProps: { checked: false },
              children: [
                {
                  name: 'Loading App 1',
                  id: 'example3-LoadApp1',
                  checkProps: { checked: false }
                },
                {
                  name: 'Loading App 2',
                  id: 'example3-LoadApp2',
                  checkProps: { checked: false }
                },
                {
                  name: 'Loading App 3',
                  id: 'example3-LoadApp3',
                  checkProps: { checked: false }
                }
              ]
            }
          ]
        }
      ],
      defaultExpanded: true
    },
    {
      name: 'Cost management',
      id: 'example3-Cost',
      checkProps: { 'aria-label': 'cost-check', checked: false },
      children: [
        {
          name: 'Application 3',
          id: 'example3-App3',
          checkProps: { 'aria-label': 'app-3-check', checked: false },
          children: [
            {
              name: 'Settings',
              id: 'example3-App3Settings',
              checkProps: { 'aria-label': 'app-3-settings-check', checked: false }
            },
            {
              name: 'Current',
              id: 'example3-App3Current',
              checkProps: { 'aria-label': 'app-3-current-check', checked: false }
            }
          ]
        }
      ]
    },
    {
      name: 'Sources',
      id: 'example3-Sources',
      checkProps: { 'aria-label': 'sources-check', checked: false },
      children: [
        {
          name: 'Application 4',
          id: 'example3-App4',
          checkProps: { 'aria-label': 'app-4-check', checked: false },
          children: [
            {
              name: 'Settings',
              id: 'example3-App4Settings',
              checkProps: { 'aria-label': 'app-4-settings-check', checked: false }
            }
          ]
        }
      ]
    },
    {
      name: 'Really really really long folder name that overflows the container it is in',
      id: 'example3-Long',
      checkProps: { 'aria-label': 'long-check', checked: false },
      children: [
        { name: 'Application 5', id: 'example3-App5', checkProps: { 'aria-label': 'app-5-check', checked: false } }
      ]
    }
  ];

  const onCheck = (event: React.ChangeEvent, treeViewItem: TreeViewDataItem) => {
    const checked = (event.target as HTMLInputElement).checked;

    const checkedItemTree = options
      .map((opt) => Object.assign({}, opt))
      .filter((item) => filterItems(item, treeViewItem));
    const flatCheckedItems = flattenTree(checkedItemTree);

    setCheckedItems((prevCheckedItems) =>
      checked
        ? prevCheckedItems.concat(flatCheckedItems.filter((item) => !checkedItems.some((i) => i.id === item.id)))
        : prevCheckedItems.filter((item) => !flatCheckedItems.some((i) => i.id === item.id))
    );
  };

  // Helper functions
  const isChecked = (dataItem: TreeViewDataItem) => checkedItems.some((item) => item.id === dataItem.id);
  const areAllDescendantsChecked = (dataItem: TreeViewDataItem) =>
    dataItem.children ? dataItem.children.every((child) => areAllDescendantsChecked(child)) : isChecked(dataItem);
  const areSomeDescendantsChecked = (dataItem: TreeViewDataItem) =>
    dataItem.children ? dataItem.children.some((child) => areSomeDescendantsChecked(child)) : isChecked(dataItem);

  const flattenTree = (tree: TreeViewDataItem[]) => {
    let result: TreeViewDataItem[] = [];
    tree.forEach((item) => {
      result.push(item);
      if (item.children) {
        result = result.concat(flattenTree(item.children));
      }
    });
    return result;
  };

  const mapTree = (item: TreeViewDataItem) => {
    const hasCheck = areAllDescendantsChecked(item);
    // Reset checked properties to be updated
    if (item.checkProps) {
      item.checkProps.checked = false;

      if (hasCheck) {
        item.checkProps.checked = true;
      } else {
        const hasPartialCheck = areSomeDescendantsChecked(item);
        if (hasPartialCheck) {
          item.checkProps.checked = null;
        }
      }

      if (item.children) {
        return {
          ...item,
          children: item.children.map((child) => mapTree(child))
        };
      }
    }
    return item;
  };

  const filterItems = (item: TreeViewDataItem, checkedItem: TreeViewDataItem) => {
    if (item.id === checkedItem.id) {
      return true;
    }

    if (item.children) {
      return (
        (item.children = item.children
          .map((opt) => Object.assign({}, opt))
          .filter((child) => filterItems(child, checkedItem))).length > 0
      );
    }
  };
  const mapped = options.map((item) => mapTree(item));
  return <TreeView aria-label="Tree View with checkboxes example" data={mapped} onCheck={onCheck} hasCheckboxes />;
};
