---
id: Composable menu
section: demos
---

import { Link } from '@reach/router';

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
import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';
import pfIcon from './examples/pf-logo-small.svg';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

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
      if (menuRef.current) {
        const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
        firstElement && firstElement.focus();
      }
    }, 0);
    setIsOpen(!isOpen);
  };

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
};
```

### Menu with actions

```js
import React from 'react';
import {
  MenuToggle,
  Menu,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuItemAction,
  Popper
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
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
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const onToggleClick = ev => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      if (menuRef.current) {
        const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
        firstElement && firstElement.focus();
      }
    }, 0);
    setIsOpen(!isOpen);
  };

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
};
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
      if (menuRef.current) {
        const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
        firstElement && firstElement.focus();
      }
    }, 0);
    setIsOpen(!isOpen);
  };

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
      {selected}
    </MenuToggle>
  );
  const menu = (
    <Menu ref={menuRef} id="select-menu" onSelect={(_ev, itemId) => setSelected(itemId)} selected={selected}>
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
};
```

### Drilldown menu with toggle

```js isBeta
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
      if (menuRef.current) {
        const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
        firstElement && firstElement.focus();
      }
    }, 0);
    setIsOpen(!isOpen);
    setMenuDrilledIn([]);
    setDrilldownPath([]);
    setActiveMenu('rootMenu');
  };

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
};
```

### Filter tree menu

```js
import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuGroup, MenuList, Popper, TreeView } from '@patternfly/react-core';

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

    const checkedItemTree = options.map(opt => Object.assign({}, opt)).filter(item => filterItems(item, treeViewItem));
    const flatCheckedItems = flattenTree(checkedItemTree);

    setCheckedItems(
      prevState =>
        checked
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
       if (menuRef.current) {
        const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
        firstElement && firstElement.focus();
       }
    }, 0);
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
};
```

### Flyout

The flyout will automatically position to the left or top if it would otherwise go outside the window. The menu must be placed in a container outside the main content like Popper, [Popover](/components/popover) or [Tooltip](/components/tooltip) since it may go over the side nav.

```js isBeta
import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuList, MenuItem, Popper } from '@patternfly/react-core';

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
          <MenuItem flyoutMenu={children} itemId={`next-menu-${depth}`}>
            Next menu
          </MenuItem>
          {[...Array(numFlyouts - depth).keys()].map(j => (
            <MenuItem key={`${depth}-${j}`} itemId={`${depth}-${j}`}>
              Menu {depth} item {j}
            </MenuItem>
          ))}
          <MenuItem flyoutMenu={children} itemId={`next-menu-2-${depth}`}>
            Next menu
          </MenuItem>
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
      if (menuRef.current) {
        const firstElement = menuRef.current.querySelector('li > button:not(:disabled)');
        firstElement && firstElement.focus();
      }
    }, 0);
    setIsOpen(!isOpen);
  };

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
          <MenuItem description="Description" flyoutMenu={curFlyout} itemId="next-menu-root">
            Edit
          </MenuItem>
          <MenuItem itemId="delete">Delete deployment config</MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );

  return <Popper trigger={toggle} popper={menu} isVisible={isOpen} popperMatchesTriggerWidth={false} />;
};
```

### Application launcher using menu components

```js
import React from 'react';
import {
  MenuToggle,
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuInput,
  Popper,
  Tooltip,
  Divider,
  TextInput
} from '@patternfly/react-core';
import { Link } from '@reach/router';
import ThIcon from '@patternfly/react-icons/dist/js/icons/th-icon';
import pfIcon from './examples/pf-logo-small.svg';

MenuAppLauncher = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [refFullOptions, setRefFullOptions] = React.useState();
  const [favorites, setFavorites] = React.useState([]);
  const [filteredIds, setFilteredIds] = React.useState(['*']);
  const toggleRef = React.useRef();
  const menuRef = React.useRef();
  const containerRef = React.useRef();

  const handleMenuKeys = event => {
    if (!isOpen) {
      return;
    }
    if (menuRef.current.contains(event.target) || toggleRef.current.contains(event.target)) {
      if (event.key === 'Escape') {
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

  const onToggleClick = ev => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
       if (menuRef.current) {
        const firstElement = menuRef.current.querySelector('li > button,input:not(:disabled)');
        firstElement && firstElement.focus();
        setRefFullOptions(Array.from(menuRef.current.querySelectorAll('li:not(li[role=separator])')));
       }
    }, 0);
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, menuRef]);

  const toggle = (
    <MenuToggle
      aria-label="Toggle"
      ref={toggleRef}
      variant="plain"
      onClick={onToggleClick}
      isExpanded={isOpen}
      style={{ width: 'auto' }}
    >
      <ThIcon />
    </MenuToggle>
  );

  const menuItems = [
    <MenuGroup key="group1" label="Group 1">
      <MenuList>
        <MenuItem itemId="0" id="0" isFavorited={favorites.includes('0')}>
          Application 1
        </MenuItem>
        <MenuItem
          itemId="1"
          id="1"
          isFavorited={favorites.includes('1')}
          to="#default-link2"
          onClick={ev => ev.preventDefault()}
        >
          Application 2
        </MenuItem>
      </MenuList>
    </MenuGroup>,
    <Divider key="group1-divider" />,
    <MenuGroup key="group2" label="Group 2">
      <MenuList>
        <MenuItem
          itemId="2"
          id="2"
          isFavorited={favorites.includes('2')}
          component={props => <Link {...props} to="#router-link" />}
        >
          @reach/router Link
        </MenuItem>
        <MenuItem
          itemId="3"
          id="3"
          isFavorited={favorites.includes('3')}
          isExternalLink
          icon={<img src={pfIcon} />}
          component={props => <Link {...props} to="#router-link2" />}
        >
          @reach/router Link with icon
        </MenuItem>
      </MenuList>
    </MenuGroup>,
    <Divider key="group2-divider" />,
    <MenuList key="other-items">
      <MenuItem key="tooltip-app" isFavorited={favorites.includes('4')} itemId="4" id="4">
        <Tooltip content={<div>Launch Application 3</div>} position="right">
          <span>Application 3 with tooltip</span>
        </Tooltip>
      </MenuItem>
      <MenuItem key="disabled-app" itemId="5" id="5" isDisabled>
        Unavailable Application
      </MenuItem>
    </MenuList>
  ];

  const createFavorites = favIds => {
    let favorites = [];

    menuItems.forEach(item => {
      if (item.type === MenuList) {
        item.props.children.filter(child => {
          if (favIds.includes(child.props.itemId)) {
            favorites.push(child);
          }
        });
      } else if (item.type === MenuGroup) {
        item.props.children.props.children.filter(child => {
          if (favIds.includes(child.props.itemId)) {
            favorites.push(child);
          }
        });
      } else {
        if (favIds.includes(item.props.itemId)) {
          favorites.push(item);
        }
      }
    });

    return favorites;
  };

  const filterItems = (items, filteredIds) => {
    if (filteredIds.length === 1 && filteredIds[0] === '*') {
      return items;
    }
    let keepDivider = false;
    let filteredCopy = items
      .map(group => {
        if (group.type === MenuGroup) {
          let filteredGroup = React.cloneElement(group, {
            children: React.cloneElement(group.props.children, {
              children: group.props.children.props.children.filter(child => {
                if (filteredIds.includes(child.props.itemId)) {
                  return child;
                }
              })
            })
          });
          const filteredList = filteredGroup.props.children;
          if (filteredList.props.children.length > 0) {
            keepDivider = true;
            return filteredGroup;
          } else {
            keepDivider = false;
          }
        } else if (group.type === MenuList) {
          let filteredGroup = React.cloneElement(group, {
            children: group.props.children.filter(child => {
              if (filteredIds.includes(child.props.itemId)) {
                return child;
              }
            })
          });
          if (filteredGroup.props.children.length > 0) {
            keepDivider = true;
            return filteredGroup;
          } else {
            keepDivider = false;
          }
        } else {
          if ((keepDivider && group.type === Divider) || filteredIds.includes(group.props.itemId)) {
            return group;
          }
        }
      })
      .filter(newGroup => newGroup);

    if (filteredCopy.length > 0) {
      let lastGroup = filteredCopy.pop();
      if (lastGroup.type !== Divider) {
        filteredCopy.push(lastGroup);
      }
    }

    return filteredCopy;
  };

  const onTextChange = textValue => {
    if (textValue === '') {
      setFilteredIds(['*']);
      return;
    }

    const filteredIds = refFullOptions
      .filter(item => item.innerText.toLowerCase().includes(textValue.toString().toLowerCase()))
      .map(item => item.id);
    setFilteredIds(filteredIds);
  };

  const onFavorite = (event, itemId, actionId) => {
    event.stopPropagation();
    if (actionId === 'fav') {
      const isFavorite = favorites.includes(itemId);
      if (isFavorite) {
        setFavorites(favorites.filter(fav => fav !== itemId));
      } else {
        setFavorites([...favorites, itemId]);
      }
    }
  };

  const filteredFavorites = filterItems(createFavorites(favorites), filteredIds);
  const filteredItems = filterItems(menuItems, filteredIds);
  if (filteredItems.length === 0) {
    filteredItems.push(<MenuItem key="no-items">No results found</MenuItem>);
  }

  const menu = (
    <Menu ref={menuRef} onActionClick={onFavorite} onSelect={(_ev, itemId) => console.log('selected', itemId)}>
      <MenuInput>
        <TextInput
          aria-label="Filter menu items"
          iconVariant="search"
          type="search"
          onChange={value => onTextChange(value)}
        />
      </MenuInput>
      <Divider />
      <MenuContent>
        {filteredFavorites.length > 0 && (
          <React.Fragment>
            <MenuGroup key="favorites-group" label="Favorites">
              <MenuList>{filteredFavorites}</MenuList>
            </MenuGroup>
            <Divider key="favorites-divider" />
          </React.Fragment>
        )}
        {filteredItems}
      </MenuContent>
    </Menu>
  );
  return (
    <div ref={containerRef}>
      <Popper
        trigger={toggle}
        popper={menu}
        isVisible={isOpen}
        popperMatchesTriggerWidth={false}
        appendTo={containerRef.current}
      />
    </div>
  );
};
```

### Context selector using menu components

```js
import React from 'react';
import {
  MenuToggle,
  Menu,
  MenuContent,
  MenuFooter,
  MenuList,
  MenuItem,
  MenuInput,
  Popper,
  Divider,
  TextInput,
  InputGroup,
  Button
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

MenuContextSelector = () => {
  const items = [
    {
      text: 'Action'
    },
    {
      text: 'Link',
      href: '#'
    },
    {
      text: 'Disabled action',
      isDisabled: true
    },
    {
      text: 'Disabled link',
      href: '#',
      isDisabled: true
    },
    'My project',
    'OpenShift cluster',
    'Production Ansible',
    'AWS',
    'Azure',
    'My project 2',
    'OpenShift cluster ',
    'Production Ansible 2 ',
    'AWS 2',
    'Azure 2'
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(items[0].text || items[0]);
  const [filteredItems, setFilteredItems] = React.useState(items);
  const [searchInputValue, setSearchInputValue] = React.useState('');
  const toggleRef = React.useRef();
  const menuRef = React.useRef();
  const menuFooterBtnRef = React.useRef();

  const handleMenuKeys = event => {
    if (!isOpen) {
      return;
    }
    if (menuFooterBtnRef.current.contains(event.target)) {
      if (event.key === 'Tab') {
        if (event.shiftKey) {
          return;
        }
        setIsOpen(!isOpen);
        toggleRef.current.focus();
      }
    }
    if (menuRef.current.contains(event.target)) {
      if (event.key === 'Escape') {
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
      if (menuRef.current) {
        const firstElement = menuRef.current.querySelector('li > button,input:not(:disabled)');
        firstElement && firstElement.focus();
      }
    }, 0);
    setIsOpen(!isOpen);
  };

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
      {selected}
    </MenuToggle>
  );

  const onSelect = (event, itemId) => {
    setSelected(itemId);
    setIsOpen(!isOpen);
  };

  const onSearchInputChange = value => {
    setSearchInputValue(value);
  };

  const onSearchButtonClick = event => {
    const filtered =
      searchInputValue === ''
        ? items
        : items.filter(str => str.toLowerCase().indexOf(searchInputValue.toLowerCase()) !== -1);

    setFilteredItems(filtered || []);
    setIsOpen(true); // Keep menu open after search executed
  };

  const onEnterPressed = event => {
    if (event.key === 'Enter') {
      onSearchButtonClick(event);
    }
  };

  const menu = (
    <Menu ref={menuRef} id="context-selector" onSelect={onSelect}>
      <MenuInput>
        <InputGroup>
          <TextInput
            value={searchInputValue}
            type="search"
            placeholder="Search"
            onChange={onSearchInputChange}
            onKeyPress={onEnterPressed}
            aria-labelledby="pf-context-selector-search-button-id-1"
          />
          <Button
            variant={ButtonVariant.control}
            aria-label="Search menu items"
            id="pf-context-selector-search-button-id-1"
            onClick={onSearchButtonClick}
          >
            <SearchIcon aria-hidden="true" />
          </Button>
        </InputGroup>
      </MenuInput>
      <Divider />
      <MenuContent maxMenuHeight="200px">
        <MenuList>
          {filteredItems.map((item, index) => {
            const [ itemText, isDisabled, href ] = typeof item === 'string'
              ? [ item, null, null ]
              : [ item.text, item.isDisabled || null, item.href || null ];
            return (
              <MenuItem itemId={itemText} key={index} isDisabled={isDisabled} to={href}>
                {itemText}
              </MenuItem>
            );
          })}
        </MenuList>
      </MenuContent>
      <MenuFooter>
        <Button ref={menuFooterBtnRef} variant="link" isInline>
          Action
        </Button>
      </MenuFooter>
    </Menu>
  );
  return <Popper trigger={toggle} popper={menu} isVisible={isOpen} />;
};
```

### Options menu using menu components

```js
import React from 'react';
import {
  MenuToggle,
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  MenuGroup,
  Popper,
  Divider
} from '@patternfly/react-core';

MenuOptionsMenu = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(undefined);
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
      if (menuRef.current) {
        const firstElement = menuRef.current.querySelector('li > button,input:not(:disabled)');
        firstElement && firstElement.focus();
      }
    }, 0);
    setIsOpen(!isOpen);
  };

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
      Options menu
    </MenuToggle>
  );

  const menu = (
    <Menu ref={menuRef} id="options-menu"  selected={selected} onSelect={(_ev, itemId) => setSelected(itemId)}>
      <MenuContent>
        <MenuList>
          <MenuItem itemId={0}>Option 1</MenuItem>
          <MenuItem itemId={1} isDisabled>Disabled Option</MenuItem>
          <Divider key="group1-divider" />
          <MenuGroup label="Group 1">
            <MenuList>
              <MenuItem itemId={2}>Option 1</MenuItem>
              <MenuItem itemId={3}>Option 2</MenuItem>
            </MenuList>
          </MenuGroup>
          <Divider key="group2-divider" />
          <MenuGroup label="Group 2">
            <MenuList>
              <MenuItem itemId={4}>Option 1</MenuItem>
              <MenuItem itemId={5}>Option 2</MenuItem>
            </MenuList>
          </MenuGroup>
        </MenuList>
      </MenuContent>
    </Menu>
  );
  return <Popper trigger={toggle} popper={menu} isVisible={isOpen} />;
};
```
