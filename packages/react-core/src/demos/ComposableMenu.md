---
id: Composable menu
section: demos
beta: true
---

import './composable-menu.css';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/js/icons/ellipsis-v-icon';
import TableIcon from '@patternfly/react-icons/dist/js/icons/table-icon';
import StorageDomainIcon from '@patternfly/react-icons/dist/js/icons/storage-domain-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/js/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/js/icons/clipboard-icon';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';

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

    if (event.target === toggleRef.current) {
      if (event.key === 'ArrowDown') {
        menuRef.current.querySelector('button, a').focus();
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
    setIsOpen(!isOpen);
  }

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
      {isOpen ? 'Expanded' : 'Collapsed'}
    </MenuToggle>
  );
  const menu = (
    <div ref={menuRef}>
      <Menu onSelect={(_ev, itemId) => console.log('selected', itemId)}>
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
    </div>
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
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/js/icons/clipboard-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/js/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';
import TableIcon from '@patternfly/react-icons/dist/js/icons/table-icon';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';

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

    if (event.target === toggleRef.current && isOpen) {
      if (event.key === 'ArrowDown') {
        menuRef.current.querySelector('button, a').focus();
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
    setIsOpen(!isOpen);
  }

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
      {isOpen ? 'Expanded' : 'Collapsed'}
    </MenuToggle>
  );
  const menu = (
    <div ref={menuRef}>
      <Menu
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
    </div>
  );

  return <Popper trigger={toggle} popper={menu} isVisible={isOpen} />;
}
```

### Select menu

```js
import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuList, MenuItem, Popper } from '@patternfly/react-core';
import TableIcon from '@patternfly/react-icons/dist/js/icons/table-icon';

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

    if (event.target === toggleRef.current && isOpen) {
      if (event.key === 'ArrowDown') {
        menuRef.current.querySelector('button, a').focus();
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
    setIsOpen(!isOpen);
  }

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
      {selected}
    </MenuToggle>
  );
  const menu = (
    <div ref={menuRef}>
      <Menu
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
    </div>
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
import StorageDomainIcon from '@patternfly/react-icons/dist/js/icons/storage-domain-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/js/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';

DrilldownComposableMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleRef = React.useRef();
  const menuRef = React.useRef();

  const handleMenuKeys = event => {
    if (isOpen && menuRef.current.contains(event.target)) {
      if (event.key === 'Escape' || event.key === 'Tab') {
        setIsOpen(!isOpen);
        toggleRef.current.focus();
      }
    }

    if (event.target === toggleRef.current && isOpen) {
      if (event.key === 'ArrowDown') {
        menuRef.current.querySelector('button, a').focus();
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
    setIsOpen(!isOpen);
  }

  const toggle = (
    <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
      {isOpen ? 'Expanded' : 'Collapsed'}
    </MenuToggle>
  );
  const menu = (
    <div ref={menuRef}>
      <Menu onSelect={(_ev, itemId) => console.log('selected', itemId)}>
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
    </div>
  );
  return <Popper trigger={toggle} popper={menu} isVisible={isOpen} />;
}
```

### Filter tree menu

```js
import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuGroup, MenuList, MenuItem, Popper, TreeView } from '@patternfly/react-core';

class FilterTreeComposableMenu extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.toggleRef = React.createRef();
    this.menuRef = React.createRef();
    this.state = {
      isOpen: false,
      checkedItems: []
    };

    this.statusOptions = [
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

    this.roleOptions = [
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

    this.onToggle = event => {
      event && event.stopPropagation();
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    this.handleMenuClick = event => {
      if (this.state.isOpen && !this.menuRef.current.contains(event.target)) {
        this.onToggle();
      }
    };

    this.onCheck = (evt, treeViewItem, tree) => {
      const checked = evt.target.checked;

      let options = [];
      switch (tree) {
        case 'status':
          options = this.statusOptions;
          break;
        case 'role':
          options = this.roleOptions;
          break;
        default:
          break;
      }

      const checkedItemTree = options
        .map(opt => Object.assign({}, opt))
        .filter(item => this.filterItems(item, treeViewItem));
      const flatCheckedItems = this.flattenTree(checkedItemTree);

      this.setState(
        prevState => ({
          checkedItems: checked
            ? prevState.checkedItems.concat(
                flatCheckedItems.filter(item => !prevState.checkedItems.some(i => i.id === item.id))
              )
            : prevState.checkedItems.filter(item => !flatCheckedItems.some(i => i.id === item.id))
        }),
        () => {
          console.log('Checked items: ', this.state.checkedItems);
        }
      );
    };

    // Helper functions
    const isChecked = dataItem => this.state.checkedItems.some(item => item.id === dataItem.id);
    const areAllDescendantsChecked = dataItem =>
      dataItem.children ? dataItem.children.every(child => areAllDescendantsChecked(child)) : isChecked(dataItem);
    const areSomeDescendantsChecked = dataItem =>
      dataItem.children ? dataItem.children.some(child => areSomeDescendantsChecked(child)) : isChecked(dataItem);

    this.flattenTree = tree => {
      var result = [];
      tree.forEach(item => {
        result.push(item);
        if (item.children) {
          result = result.concat(this.flattenTree(item.children));
        }
      });
      return result;
    };

    this.mapTree = item => {
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
          children: item.children.map(child => this.mapTree(child))
        };
      }
      return item;
    };

    this.filterItems = (item, checkedItem) => {
      if (item.id === checkedItem.id) {
        return true;
      }

      if (item.children) {
        return (
          (item.children = item.children
            .map(opt => Object.assign({}, opt))
            .filter(child => this.filterItems(child, checkedItem))).length > 0
        );
      }
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.handleMenuClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleMenuClick);
  }

  render() {
    const { isOpen } = this.state;

    const toggle = (
      <MenuToggle ref={this.toggleRef} onClick={this.onToggle} isExpanded={isOpen}>
        {isOpen ? 'Expanded' : 'Collapsed'}
      </MenuToggle>
    );

    const statusMapped = this.statusOptions.map(item => this.mapTree(item));
    const roleMapped = this.roleOptions.map(item => this.mapTree(item));

    const menu = (
      <Menu ref={this.menuRef}>
        <MenuContent>
          <MenuList>
            <MenuGroup label="Status">
              <TreeView
                data={statusMapped}
                onSelect={this.onStatusClick}
                hasBadges
                hasChecks
                onCheck={(event, item, parentItem) => this.onCheck(event, item, 'status')}
              />
            </MenuGroup>
            <MenuGroup label="Role">
              <TreeView
                data={roleMapped}
                onSelect={this.onRoleClick}
                hasBadges
                hasChecks
                onCheck={(event, item, parentItem) => this.onCheck(event, item, 'role')}
              />
            </MenuGroup>
          </MenuList>
        </MenuContent>
      </Menu>
    );

    return (
      <div ref={this.containerRef}>
        <Popper
          trigger={toggle}
          popper={menu}
          direction="down"
          position="left"
          appendTo={this.containerRef.current}
          isVisible={isOpen}
          popperMatchesTriggerWidth={false}
        />
      </div>
    );
  }
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
  const numFlyouts = 15;
  const FlyoutMenu = ({ depth, children }) => (
    <Menu key={depth} containsFlyout id={`menu-${depth}`} onSelect={onSelect}>
      <MenuList>
        <MenuItem aria-label="Has flyout menu" flyoutMenu={children} itemId={`next-menu-${depth}`}>Next menu</MenuItem>
        {[...Array(numFlyouts - depth).keys()].map(j =>
          <MenuItem key={`${depth}-${j}`} itemId={`${depth}-${j}`}>Menu {depth} item {j}</MenuItem>
        )}
        <MenuItem aria-label="Has flyout menu" flyoutMenu={children} itemId={`next-menu-2-${depth}`}>Next menu</MenuItem>
      </MenuList>
    </Menu>
  );
  let curFlyout = <FlyoutMenu depth={1} />;
  for (let i = 2; i < numFlyouts - 1; i++) {
    curFlyout = <FlyoutMenu depth={i}>{curFlyout}</FlyoutMenu>;
  }

  // On keypress auto focus first element.
  const id = 'root-menu';
  const onEnter = event => {
    if (!isOpen) {
      setTimeout(() => {
        const menu = document.getElementById(id);
        if (menu) {
          const firstFocusable = menu.querySelector('ul > li > button[tabindex="0"]');
          if (firstFocusable) {
            firstFocusable.focus();
          }
        }
      }, 0);
    }
  };

  const onSelect = (_ev, itemId) => {
    console.log('select', itemId);
    if (!itemId.includes('next-menu')) {
      setIsOpen(false);
    }
  };

  const toggle = (
    <MenuToggle onClick={() => setIsOpen(!isOpen)} isExpanded={isOpen}>
      {isOpen ? 'Expanded' : 'Collapsed'}
    </MenuToggle>
  );

  const menu = (
    <Menu containsFlyout id={id} onSelect={onSelect}>
      <MenuContent>
        <MenuList>
          <MenuItem itemId="start">Start rollout</MenuItem>
          <MenuItem itemId="pause">Pause rollouts</MenuItem>
          <MenuItem itemId="storage">Add storage</MenuItem>
          <MenuItem
            description="Description"
            flyoutMenu={curFlyout}
            aria-label="Has flyout menu"
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
      direction="down"
      position="left"
      isVisible={isOpen}
      popperMatchesTriggerWidth={false}
    />
  );
}
```

