---
id: Composable menu
section: demos
beta: true
---

import './composable-menu.css';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import TableIcon from '@patternfly/react-icons/dist/esm/icons/table-icon';
import StorageDomainIcon from '@patternfly/react-icons/dist/esm/icons/storage-domain-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

## Demos

Composable menus currently require consumer keyboard handling and use of our undocumented [popper.js](https://popper.js.org/) wrapper component called Popper. We understand this is inconvientent boilerplate and these examples will be updated to use [Dropdown](/components/dropdown) in a future release.

### Basic menu with toggle

```js
import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuList, MenuItem, Popper } from '@patternfly/react-core';

BasicComposableMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleRef = React.useRef();
  const menuRef = React.useRef();

  const handleMenuKeys = event => {
    if (!isOpen) {
      return;
    }
    if (menuRef.current.contains(event.target) || toggleRef.current.contains(event.target)) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsOpen(!isOpen);
        toggleRef.current.focus();
      }
    }
  };

  const handleClickOutside = event => {
    if (isOpen && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, menuRef]);

  const onToggleClick = ev => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
      firstElement && firstElement.focus();
    }, 0);
    setIsOpen(!isOpen);
  }

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
      {isOpen ? 'Expanded' : 'Collapsed'}
    </MenuToggle>
  );
  const menu = (
    <Menu ref={menuRef} onSelect={(_ev, itemId) => console.log('selected', itemId)}>
      <MenuContent>
        <MenuList>
          <MenuItem itemId={0}>Action</MenuItem>
          <MenuItem itemId={1} to="#default-link2" onClick={ev => ev.preventDefault()}>
            Link
          </MenuItem>
          <MenuItem isDisabled>Disabled Action</MenuItem>
          <MenuItem isDisabled to="#default-link4">
            Disabled Link
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
  return <Popper trigger={toggle} popper={menu} isVisible={isOpen} />;
}
```

### Menu with actions

```js
import React from 'react';
import {
  MenuToggle,
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuItemAction,
  Popper
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import TableIcon from '@patternfly/react-icons/dist/esm/icons/table-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

ActionComposableMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState([]);
  const toggleRef = React.useRef();
  const menuRef = React.useRef();

  const handleMenuKeys = event => {
    if (isOpen && menuRef.current.contains(event.target)) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsOpen(!isOpen);
        toggleRef.current.focus();
      }
    }
  };

  const handleClickOutside = event => {
    if (isOpen && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, menuRef]);

  const onSelect = (event, itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId))
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const onToggleClick = ev => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
      firstElement && firstElement.focus();
    }, 0);
    setIsOpen(!isOpen);
  }

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
      {isOpen ? 'Expanded' : 'Collapsed'}
    </MenuToggle>
  );
  const menu = (
    <Menu
      ref={menuRef}
      onActionClick={(event, itemId, actionId) => console.log(`clicked on ${itemId} - ${actionId}`)}
      onSelect={onSelect}
    >
      <MenuGroup label="Actions">
        <MenuList>
          <MenuItem
            isSelected={selectedItems.includes(0)}
            actions={
              <MenuItemAction
                icon={<CodeBranchIcon aria-hidden />}
                actionId="code"
                onClick={() => console.log('clicked on code icon')}
                aria-label="Code"
              />
            }
            description="This is a description"
            itemId={0}
          >
            Item 1
          </MenuItem>
          <MenuItem
            isDisabled
            isSelected={selectedItems.includes(1)}
            actions={<MenuItemAction icon={<BellIcon aria-hidden />} actionId="alert" aria-label="Alert" />}
            description="This is a description"
            itemId={1}
          >
            Item 2
          </MenuItem>
          <MenuItem
            isSelected={selectedItems.includes(2)}
            actions={<MenuItemAction icon={<ClipboardIcon aria-hidden />} actionId="copy" aria-label="Copy" />}
            itemId={2}
          >
            Item 3
          </MenuItem>
          <MenuItem
            isSelected={selectedItems.includes(3)}
            actions={<MenuItemAction icon={<BarsIcon aria-hidden />} actionId="expand" aria-label="Expand" />}
            description="This is a description"
            itemId={3}
          >
            Item 4
          </MenuItem>
        </MenuList>
      </MenuGroup>
    </Menu>
  );

  return <Popper trigger={toggle} popper={menu} isVisible={isOpen} />;
}
```

### Select menu

```js
import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuList, MenuItem, Popper } from '@patternfly/react-core';
import TableIcon from '@patternfly/react-icons/dist/esm/icons/table-icon';

SelectComposableMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('Select a value');
  const toggleRef = React.useRef();
  const menuRef = React.useRef();

  const handleMenuKeys = event => {
    if (isOpen && menuRef.current.contains(event.target)) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsOpen(!isOpen);
        toggleRef.current.focus();
      }
    }
  };

  const handleClickOutside = event => {
    if (isOpen && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, menuRef]);

  const onToggleClick = ev => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
      firstElement && firstElement.focus();
    }, 0);
    setIsOpen(!isOpen);
  }

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
      {selected}
    </MenuToggle>
  );
  const menu = (
    <Menu
      ref={menuRef}
      id="select-menu"
      onSelect={(_ev, itemId) => setSelected(itemId)}
      selected={selected}
    >
      <MenuContent>
        <MenuList>
          <MenuItem itemId="Option 1">Option 1</MenuItem>
          <MenuItem itemId="Option 2">Option 2</MenuItem>
          <MenuItem itemId="Option 3" icon={<TableIcon aria-hidden />}>
            Option 3
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
  return <Popper trigger={toggle} popper={menu} isVisible={isOpen} />;
}
```

### Drilldown menu with toggle

```js
import React from 'react';
import {
  MenuToggle,
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  DrilldownMenu,
  Divider,
  Popper
} from '@patternfly/react-core';
import StorageDomainIcon from '@patternfly/react-icons/dist/esm/icons/storage-domain-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

DrilldownComposableMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState('rootMenu');
  const [menuDrilledIn, setMenuDrilledIn] = React.useState([]);
  const [drilldownPath, setDrilldownPath] = React.useState([]);
  const [menuHeights, setMenuHeights] = React.useState({});
  const toggleRef = React.useRef();
  const menuRef = React.useRef();

  const handleMenuKeys = event => {
    if (isOpen && menuRef.current.contains(event.target)) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsOpen(!isOpen);
        toggleRef.current.focus();
      }
    }
  };

  const handleClickOutside = event => {
    if (isOpen && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, menuRef]);

  const onToggleClick = ev => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
      firstElement && firstElement.focus();
    }, 0);
    setIsOpen(!isOpen);
    setMenuDrilledIn([]);
    setDrilldownPath([]);
    setActiveMenu('rootMenu');
  }

  const drillIn = (fromMenuId, toMenuId, pathId) => {
    setMenuDrilledIn([...menuDrilledIn, fromMenuId]);
    setDrilldownPath([...drilldownPath, pathId]);
    setActiveMenu(toMenuId);
  };

  const drillOut = toMenuId => {
    setMenuDrilledIn(menuDrilledIn.slice(0, menuDrilledIn.length - 1));
    setDrilldownPath(drilldownPath.slice(0, drilldownPath.length - 1));
    setActiveMenu(toMenuId);
  };

  const setHeight = (menuId, height) => {
    if (!menuHeights[menuId]) {
      setMenuHeights({
        ...menuHeights,
        [menuId]: height
      });
    }
  };

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
      {isOpen ? 'Expanded' : 'Collapsed'}
    </MenuToggle>
  );
  const menu = (
    <Menu
      id="rootMenu"
      containsDrilldown
      drilldownItemPath={drilldownPath}
      drilledInMenus={menuDrilledIn}
      activeMenu={activeMenu}
      onDrillIn={drillIn}
      onDrillOut={drillOut}
      onGetMenuHeight={setHeight}
      ref={menuRef}
    >
      <MenuContent menuHeight={`${menuHeights[activeMenu]}px`}>
        <MenuList>
          <MenuItem
            itemId="group:start_rollout"
            direction="down"
            drilldownMenu={
              <DrilldownMenu id="drilldownMenuStart">
                <MenuItem itemId="group:start_rollout" direction="up">
                  Start rollout
                </MenuItem>
                <Divider component="li" />
                <MenuItem
                  itemId="group:app_grouping"
                  description="Groups A-C"
                  direction="down"
                  drilldownMenu={
                    <DrilldownMenu id="drilldownMenuStartGrouping">
                      <MenuItem itemId="group:app_grouping" direction="up">
                        Application Grouping
                      </MenuItem>
                      <Divider component="li" />
                      <MenuItem itemId="group_a">Group A</MenuItem>
                      <MenuItem itemId="group_b">Group B</MenuItem>
                      <MenuItem itemId="group_c">Group C</MenuItem>
                    </DrilldownMenu>
                  }
                >
                  Application Grouping
                </MenuItem>
                <MenuItem itemId="count">Count</MenuItem>
                <MenuItem
                  itemId="group:labels"
                  direction="down"
                  drilldownMenu={
                    <DrilldownMenu id="drilldownMenuStartLabels">
                      <MenuItem itemId="group:labels" direction="up">
                        Labels
                      </MenuItem>
                      <Divider component="li" />
                      <MenuItem itemId="label_1">Label 1</MenuItem>
                      <MenuItem itemId="label_2">Label 2</MenuItem>
                      <MenuItem itemId="label_3">Label 3</MenuItem>
                    </DrilldownMenu>
                  }
                >
                  Labels
                </MenuItem>
                <MenuItem itemId="annotations">Annotations</MenuItem>
              </DrilldownMenu>
            }
          >
            Start rollout
          </MenuItem>
          <MenuItem
            itemId="group:pause_rollout"
            direction="down"
            drilldownMenu={
              <DrilldownMenu id="drilldownMenuPause">
                <MenuItem itemId="group:pause_rollout" direction="up">
                  Pause rollouts
                </MenuItem>
                <Divider component="li" />
                <MenuItem
                  itemId="group:app_grouping"
                  description="Groups A-C"
                  direction="down"
                  drilldownMenu={
                    <DrilldownMenu id="drilldownMenuGrouping">
                      <MenuItem itemId="group:app_grouping" direction="up">
                        Application Grouping
                      </MenuItem>
                      <Divider component="li" />
                      <MenuItem itemId="group_a">Group A</MenuItem>
                      <MenuItem itemId="group_b">Group B</MenuItem>
                      <MenuItem itemId="group_c">Group C</MenuItem>
                    </DrilldownMenu>
                  }
                >
                  Application Grouping
                </MenuItem>
                <MenuItem itemId="count">Count</MenuItem>
                <MenuItem
                  itemId="group:labels"
                  direction="down"
                  drilldownMenu={
                    <DrilldownMenu id="drilldownMenuLabels">
                      <MenuItem itemId="group:labels" direction="up">
                        Labels
                      </MenuItem>
                      <Divider component="li" />
                      <MenuItem itemId="label_1">Label 1</MenuItem>
                      <MenuItem itemId="label_2">Label 2</MenuItem>
                      <MenuItem itemId="label_3">Label 3</MenuItem>
                    </DrilldownMenu>
                  }
                >
                  Labels
                </MenuItem>
                <MenuItem itemId="annotations">Annotations</MenuItem>
              </DrilldownMenu>
            }
          >
            Pause rollouts
          </MenuItem>
          <MenuItem
            itemId="group:storage"
            icon={<StorageDomainIcon aria-hidden />}
            direction="down"
            drilldownMenu={
              <DrilldownMenu id="drilldownMenuStorage">
                <MenuItem itemId="group:storage" icon={<StorageDomainIcon aria-hidden />} direction="up">
                  Add storage
                </MenuItem>
                <Divider component="li" />
                <MenuItem icon={<CodeBranchIcon aria-hidden />} itemId="git">
                  From Git
                </MenuItem>
                <MenuItem icon={<LayerGroupIcon aria-hidden />} itemId="container">
                  Container Image
                </MenuItem>
                <MenuItem icon={<CubeIcon aria-hidden />} itemId="docker">
                  Docker File
                </MenuItem>
              </DrilldownMenu>
            }
          >
            Add storage
          </MenuItem>
          <MenuItem itemId="edit">Edit</MenuItem>
          <MenuItem itemId="delete_deployment">Delete deployment config</MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
  return <Popper trigger={toggle} popper={menu} isVisible={isOpen} />;
}
```

### Filter tree menu

```js
import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuGroup, MenuList, MenuItem, Popper, TreeView } from '@patternfly/react-core';

FilterTreeComposableMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [checkedItems, setCheckedItems] = React.useState([]);
  const toggleRef = React.useRef();
  const menuRef = React.useRef();

  const statusOptions = [
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
  // Helper functions
  const isChecked = dataItem => checkedItems.some(item => item.id === dataItem.id);
  const areAllDescendantsChecked = dataItem =>
    dataItem.children ? dataItem.children.every(child => areAllDescendantsChecked(child)) : isChecked(dataItem);
  const areSomeDescendantsChecked = dataItem =>
    dataItem.children ? dataItem.children.some(child => areSomeDescendantsChecked(child)) : isChecked(dataItem);
  const flattenTree = tree => {
    var result = [];
    tree.forEach(item => {
      result.push(item);
      if (item.children) {
        result = result.concat(flattenTree(item.children));
      }
    });
    return result;
  };

  mapTree = item => {
    const hasCheck = areAllDescendantsChecked(item);
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

  filterItems = (item, checkedItem) => {
    if (item.id === checkedItem.id) {
      return true;
    }

    if (item.children) {
      return (
        (item.children = item.children
          .map(opt => Object.assign({}, opt))
          .filter(child => filterItems(child, checkedItem))).length > 0
      );
    }
  };

  const onCheck = (evt, treeViewItem, tree) => {
    const checked = evt.target.checked;

    let options = [];
    switch (tree) {
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
      .map(opt => Object.assign({}, opt))
      .filter(item => filterItems(item, treeViewItem));
    const flatCheckedItems = flattenTree(checkedItemTree);

    setCheckedItems(
      prevState => checked
          ? prevState.checkedItems.concat(
              flatCheckedItems.filter(item => !prevState.checkedItems.some(i => i.id === item.id))
            )
          : prevState.checkedItems.filter(item => !flatCheckedItems.some(i => i.id === item.id)),
      () => {
        console.log('Checked items: ', checkedItems);
      }
    );
  };


  const handleMenuKeys = event => {
    if (!isOpen) {
      return;
    }
    if (menuRef.current.contains(event.target) || toggleRef.current.contains(event.target)) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsOpen(!isOpen);
        toggleRef.current.focus();
      }
    }
  };

  const handleClickOutside = event => {
    if (isOpen && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, menuRef]);

  const onToggleClick = ev => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
      firstElement && firstElement.focus();
    }, 0);
    setIsOpen(!isOpen);
  }

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
      {isOpen ? 'Expanded' : 'Collapsed'}
    </MenuToggle>
  );
  const statusMapped = statusOptions.map(mapTree);
  const roleMapped = roleOptions.map(mapTree);
  const menu = (
    <Menu ref={menuRef} onSelect={(_ev, itemId) => console.log('selected', itemId)}>
      <MenuContent>
        <MenuList>
          <MenuGroup label="Status">
            <TreeView
              data={statusMapped}
              hasBadges
              hasChecks
              onCheck={(event, item, parentItem) => onCheck(event, item, 'status')}
            />
          </MenuGroup>
          <MenuGroup label="Role">
            <TreeView
              data={roleMapped}
              hasBadges
              hasChecks
              onCheck={(event, item, parentItem) => onCheck(event, item, 'role')}
            />
          </MenuGroup>
        </MenuList>
      </MenuContent>
    </Menu>
  );
  return <Popper trigger={toggle} popper={menu} isVisible={isOpen} />;
}
```

### Flyout

The flyout will automatically position to the left or top if it would otherwise go outside the window. The menu must be placed in a container outside the main content like Popper, [Popover](/components/popover) or [Tooltip](/components/tooltip) since it may go over the side nav.

```js
import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuGroup, MenuList, MenuItem, Popper } from '@patternfly/react-core';

MenuWithFlyout = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef();

  const handleMenuKeys = event => {
    if (!isOpen) {
      return;
    }
    if (menuRef.current.contains(event.target) || toggleRef.current.contains(event.target)) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsOpen(!isOpen);
        toggleRef.current.focus();
      }
    }
  };

  const handleClickOutside = event => {
    if (isOpen && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, menuRef]);

  const onSelect = itemId => console.log('selected', itemId);

  const numFlyouts = 15;
  const FlyoutMenu = ({ depth, children }) => (
    <Menu key={depth} containsFlyout id={`menu-${depth}`} onSelect={onSelect}>
      <MenuContent>
        <MenuList>
          <MenuItem flyoutMenu={children} itemId={`next-menu-${depth}`}>Next menu</MenuItem>
          {[...Array(numFlyouts - depth).keys()].map(j =>
            <MenuItem key={`${depth}-${j}`} itemId={`${depth}-${j}`}>Menu {depth} item {j}</MenuItem>
          )}
          <MenuItem flyoutMenu={children} itemId={`next-menu-2-${depth}`}>Next menu</MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
  let curFlyout = <FlyoutMenu depth={1} />;
  for (let i = 2; i < numFlyouts - 1; i++) {
    curFlyout = <FlyoutMenu depth={i}>{curFlyout}</FlyoutMenu>;
  }

  const onToggleClick = ev => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
      firstElement && firstElement.focus();
    }, 0);
    setIsOpen(!isOpen);
  }

  const toggle = (
    <MenuToggle onClick={onToggleClick} isExpanded={isOpen}>
      {isOpen ? 'Expanded' : 'Collapsed'}
    </MenuToggle>
  );

  const menu = (
    <Menu ref={menuRef} containsFlyout onSelect={onSelect}>
      <MenuContent>
        <MenuList>
          <MenuItem itemId="start">Start rollout</MenuItem>
          <MenuItem itemId="pause">Pause rollouts</MenuItem>
          <MenuItem itemId="storage">Add storage</MenuItem>
          <MenuItem
            description="Description"
            flyoutMenu={curFlyout}
            itemId="next-menu-root"
          >
            Edit
          </MenuItem>
          <MenuItem itemId="delete">Delete deployment config</MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );

  return (
    <Popper
      trigger={toggle}
      popper={menu}
      isVisible={isOpen}
      popperMatchesTriggerWidth={false}
    />
  );
}
```

