import React from 'react';
import {
  MenuToggle,
  Panel,
  PanelMain,
  PanelMainBody,
  Title,
  MenuContainer,
  TreeView,
  TreeViewDataItem
} from '@patternfly/react-core';

export const TreeViewMenuDemo: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [checkedItems, setCheckedItems] = React.useState<TreeViewDataItem[]>([]);
  const toggleRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>();

  const statusOptions: TreeViewDataItem[] = [
    {
      name: 'Ready',
      id: 'ready',
      checkProps: { checked: false },
      customBadgeContent: 1,
      children: [
        {
          name: 'Updated',
          id: 'updated',
          checkProps: { checked: false },
          customBadgeContent: 0
        },
        {
          name: 'Waiting to update',
          id: 'waiting',
          checkProps: { checked: false },
          customBadgeContent: 0
        },
        {
          name: 'Conditions degraded',
          id: 'degraded',
          checkProps: { checked: false },
          customBadgeContent: 1
        },
        {
          name: 'Approval required',
          id: 'approval',
          checkProps: { checked: false },
          customBadgeContent: 0
        }
      ]
    },
    {
      name: 'Not ready',
      id: 'nr',
      checkProps: { checked: false },
      customBadgeContent: 1,
      children: [
        {
          name: 'Conditions degraded',
          id: 'nr-degraded',
          checkProps: { checked: false },
          customBadgeContent: 1
        }
      ]
    },
    {
      name: 'Updating',
      id: 'updating',
      checkProps: { checked: false },
      customBadgeContent: 0
    }
  ];

  const roleOptions = [
    {
      name: 'Server',
      id: 'server',
      checkProps: { checked: false },
      customBadgeContent: 2
    },
    {
      name: 'Worker',
      id: 'worker',
      checkProps: { checked: false },
      customBadgeContent: 0
    }
  ];
  // Helper functions for tree
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
    item.checkProps = item.checkProps || {};
    // Reset checked properties to be updated
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
        children: item.children.map(mapTree)
      };
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

  const onCheck = (evt: React.ChangeEvent, treeViewItem: TreeViewDataItem, treeType: string) => {
    const checked = (evt.target as HTMLInputElement).checked;

    let options: TreeViewDataItem[] = [];
    switch (treeType) {
      case 'status':
        options = statusOptions;
        break;
      case 'role':
        options = roleOptions;
        break;
      default:
        break;
    }

    const checkedItemTree = options
      .map((opt) => Object.assign({}, opt))
      .filter((item) => filterItems(item, treeViewItem));
    const flatCheckedItems = flattenTree(checkedItemTree);
    setCheckedItems((prevCheckedItems) =>
      checked
        ? prevCheckedItems.concat(flatCheckedItems.filter((item) => !prevCheckedItems.some((i) => i.id === item.id)))
        : prevCheckedItems.filter((item) => !flatCheckedItems.some((i) => i.id === item.id))
    );
  };

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
      {isOpen ? 'Expanded' : 'Collapsed'}
    </MenuToggle>
  );
  const statusMapped = statusOptions.map(mapTree);
  const roleMapped = roleOptions.map(mapTree);
  const menu = (
    <Panel
      ref={menuRef}
      variant="raised"
      style={{
        width: '300px'
      }}
    >
      <PanelMain>
        <section>
          <PanelMainBody style={{ paddingBottom: 0 }}>
            <Title headingLevel="h1" size={'md'}>
              Status
            </Title>
          </PanelMainBody>
          <PanelMainBody style={{ padding: 0 }}>
            <TreeView
              data={statusMapped}
              hasBadges
              hasCheckboxes
              onCheck={(event, item) => onCheck(event, item, 'status')}
            />
          </PanelMainBody>
        </section>
        <section>
          <PanelMainBody style={{ paddingBottom: 0, paddingTop: 0 }}>
            <Title headingLevel="h1" size={'md'}>
              Roles
            </Title>
          </PanelMainBody>
          <PanelMainBody style={{ padding: 0 }}>
            <TreeView
              data={roleMapped}
              hasBadges
              hasCheckboxes
              onCheck={(event, item) => onCheck(event, item, 'role')}
            />
          </PanelMainBody>
        </section>
      </PanelMain>
    </Panel>
  );

  return (
    <MenuContainer
      isOpen={isOpen}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      onOpenChangeKeys={['Escape']}
      menu={menu}
      menuRef={menuRef}
      toggle={toggle}
      toggleRef={toggleRef}
    />
  );
};
