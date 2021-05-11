---
id: Composable menu
section: demos
beta: true
---

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

### Basic menu with toggle

```js
import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuList, MenuItem, Popper } from '@patternfly/react-core';

class BasicComposableMenu extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.toggleRef = React.createRef();
    this.menuRef = React.createRef();
    this.state = {
      activeItem: 0,
      isOpen: false
    };
    this.onToggle = event => {
      event && event.stopPropagation();
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
    this.onSelect = (event, itemId) => {
      console.log(`clicked ${itemId}`);
      this.setState({
        activeItem: itemId
      });
    };
    this.handleMenuKeys = event => {
      if ([...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isOpen) {
        if (event.key === 'Escape' || event.key === 'Tab') {
          this.onToggle();
          this.toggleRef.current.focus();
        }
      }

      if (event.target === this.toggleRef.current && this.state.isOpen) {
        if (event.key === 'ArrowDown') {
          this.menuRef.current.querySelector('button, a').focus();
        }
      }
    };
    this.handleMenuClick = event => {
      if (![...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isOpen) {
        this.onToggle();
      }
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleMenuKeys);
    window.addEventListener('click', this.handleMenuClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleMenuKeys);
    window.removeEventListener('click', this.handleMenuClick);
  }

  render() {
    const { activeItem, isOpen } = this.state;

    const toggle = (
      <MenuToggle ref={this.toggleRef} onClick={this.onToggle} isExpanded={isOpen} style={{ width: '150px' }}>
        {isOpen ? 'Expanded' : 'Collapsed'}
      </MenuToggle>
    );

    const menu = (
      <Menu activeItemId={activeItem} onSelect={this.onSelect} ref={this.menuRef}>
        <MenuContent>
          <MenuList>
            <MenuItem itemId={0}>Action</MenuItem>
            <MenuItem itemId={1} to="#default-link2" onClick={event => event.preventDefault()}>
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

    return (
      <div ref={this.containerRef}>
        <Popper
          trigger={toggle}
          popper={menu}
          direction="down"
          position="left"
          appendTo={this.containerRef.current}
          isVisible={isOpen}
        />
      </div>
    );
  }
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

class ActionComposableMenu extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.toggleRef = React.createRef();
    this.menuRef = React.createRef();
    this.state = {
      isOpen: false,
      selectedItems: [0, 2, 3]
    };
    this.onToggle = event => {
      event && event.stopPropagation();
      this.setState({
        isOpen: !this.state.isOpen,
        selectedItems: []
      });
    };
    this.onSelect = (event, itemId) => {
      if (this.state.selectedItems.indexOf(itemId) !== -1) {
        this.setState({
          selectedItems: this.state.selectedItems.filter(id => id !== itemId)
        });
      } else {
        this.setState({
          selectedItems: [...this.state.selectedItems, itemId]
        });
      }
    };
    this.handleMenuKeys = event => {
      if ([...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isOpen) {
        if (event.key === 'Escape' || event.key === 'Tab') {
          this.onToggle();
          this.toggleRef.current.focus();
        }
      }

      if (event.target === this.toggleRef.current && this.state.isOpen) {
        if (event.key === 'ArrowDown') {
          this.menuRef.current.querySelector('button, a').focus();
        }
      }
    };
    this.handleMenuClick = event => {
      if (![...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isOpen) {
        this.onToggle();
      }
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleMenuKeys);
    window.addEventListener('click', this.handleMenuClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleMenuKeys);
    window.removeEventListener('click', this.handleMenuClick);
  }

  render() {
    const { isOpen, selectedItems } = this.state;

    const toggle = (
      <MenuToggle ref={this.toggleRef} onClick={this.onToggle} isExpanded={isOpen} style={{ width: '200px' }}>
        {isOpen ? 'Expanded' : 'Collapsed'}
      </MenuToggle>
    );

    const menu = (
      <Menu
        onSelect={this.onSelect}
        onActionClick={(event, itemId, actionId) => console.log(`clicked on ${itemId} - ${actionId}`)}
        ref={this.menuRef}
      >
        <MenuGroup label="Actions">
          <MenuList>
            <MenuItem
              isSelected={selectedItems.indexOf(0) !== -1}
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
              isSelected={selectedItems.indexOf(1) !== -1}
              actions={<MenuItemAction icon={<BellIcon aria-hidden />} actionId="alert" aria-label="Alert" />}
              description="This is a description"
              itemId={1}
            >
              Item 2
            </MenuItem>
            <MenuItem
              isSelected={selectedItems.indexOf(2) !== -1}
              actions={<MenuItemAction icon={<ClipboardIcon aria-hidden />} actionId="copy" aria-label="Copy" />}
              itemId={2}
            >
              Item 3
            </MenuItem>
            <MenuItem
              isSelected={selectedItems.indexOf(3) !== -1}
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

    return (
      <div ref={this.containerRef}>
        <Popper
          trigger={toggle}
          popper={menu}
          direction="down"
          position="left"
          appendTo={this.containerRef.current}
          isVisible={isOpen}
        />
      </div>
    );
  }
}
```

### Select menu

```js
import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuList, MenuItem, Popper } from '@patternfly/react-core';
import TableIcon from '@patternfly/react-icons/dist/js/icons/table-icon';

class SelectComposableMenu extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.toggleRef = React.createRef();
    this.menuRef = React.createRef();
    this.state = {
      activeItem: 0,
      selectedItem: null,
      selectedText: null,
      isOpen: false
    };
    this.getSelectionText = id => {
      switch (id) {
        case 0:
          return 'Option 1';
        case 1:
          return 'Option 2';
        case 2:
          return 'Option 3';
        default:
          return null;
      }
    };
    this.onToggle = event => {
      event && event.stopPropagation();
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
    this.onSelect = (event, itemId) => {
      console.log(`clicked ${itemId}`);
      this.setState({
        activeItem: itemId,
        selectedItem: itemId,
        selectedText: this.getSelectionText(itemId)
      });
    };
    this.handleMenuKeys = event => {
      if ([...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isOpen) {
        if (event.key === 'Escape' || event.key === 'Tab') {
          this.onToggle();
          this.toggleRef.current.focus();
        }
      }

      if (event.target === this.toggleRef.current && this.state.isOpen) {
        if (event.key === 'ArrowDown') {
          this.menuRef.current.querySelector('button, a').focus();
        }
      }
    };
    this.handleMenuClick = event => {
      if (![...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isOpen) {
        this.onToggle();
      }
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleMenuKeys);
    window.addEventListener('click', this.handleMenuClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleMenuKeys);
    window.removeEventListener('click', this.handleMenuClick);
  }

  render() {
    const { activeItem, selectedItem, selectedText, isOpen } = this.state;

    const toggle = (
      <MenuToggle ref={this.toggleRef} onClick={this.onToggle} isExpanded={isOpen} style={{ width: '200px' }}>
        {selectedText ? selectedText : 'Select a value'}
      </MenuToggle>
    );

    const menu = (
      <Menu
        id="select-menu"
        onSelect={this.onSelect}
        activeItemId={activeItem}
        selected={selectedItem}
        ref={this.menuRef}
      >
        <MenuContent>
          <MenuList>
            <MenuItem itemId={0}>Option 1</MenuItem>
            <MenuItem itemId={1}>Option 2</MenuItem>
            <MenuItem icon={<TableIcon aria-hidden />} itemId={2}>
              Option 3
            </MenuItem>
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
        />
      </div>
    );
  }
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

class DrilldownComposableMenu extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.toggleRef = React.createRef();
    this.menuRef = React.createRef();
    this.state = {
      menuDrilledIn: [],
      drilldownPath: [],
      menuHeights: {},
      activeMenu: 'rootMenu',
      isOpen: false
    };
    this.onToggle = event => {
      event && event.stopPropagation();
      this.setState({
        isOpen: !this.state.isOpen,
        menuDrilledIn: [],
        drilldownPath: [],
        activeMenu: 'rootMenu'
      });
    };
    this.drillIn = (fromMenuId, toMenuId, pathId) => {
      this.setState({
        menuDrilledIn: [...this.state.menuDrilledIn, fromMenuId],
        drilldownPath: [...this.state.drilldownPath, pathId],
        activeMenu: toMenuId
      });
    };
    this.drillOut = toMenuId => {
      const menuDrilledInSansLast = this.state.menuDrilledIn.slice(0, this.state.menuDrilledIn.length - 1);
      const pathSansLast = this.state.drilldownPath.slice(0, this.state.drilldownPath.length - 1);
      this.setState({
        menuDrilledIn: menuDrilledInSansLast,
        drilldownPath: pathSansLast,
        activeMenu: toMenuId
      });
    };
    this.setHeight = (menuId, height) => {
      if (!this.state.menuHeights[menuId]) {
        this.setState({
          menuHeights: {
            ...this.state.menuHeights,
            [menuId]: height
          }
        });
      }
    };
    this.handleMenuKeys = event => {
      if ([...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isOpen) {
        if (event.key === 'Escape' || event.key === 'Tab') {
          this.onToggle();
          this.toggleRef.current.focus();
        }
      }

      if (event.target === this.toggleRef.current && this.state.isOpen) {
        if (event.key === 'ArrowDown') {
          this.menuRef.current.querySelector('button, a').focus();
        }
      }
    };
    this.handleMenuClick = event => {
      if (![...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isOpen) {
        this.onToggle();
      }
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleMenuKeys);
    window.addEventListener('click', this.handleMenuClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleMenuKeys);
    window.removeEventListener('click', this.handleMenuClick);
  }

  render() {
    const { isOpen, menuDrilledIn, drilldownPath, activeMenu, menuHeights } = this.state;

    const toggle = (
      <MenuToggle ref={this.toggleRef} onClick={this.onToggle} isExpanded={isOpen} style={{ width: '300px' }}>
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
        onDrillIn={this.drillIn}
        onDrillOut={this.drillOut}
        onGetMenuHeight={this.setHeight}
        ref={this.menuRef}
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

    return (
      <div ref={this.containerRef}>
        <Popper
          trigger={toggle}
          popper={menu}
          direction="down"
          position="left"
          appendTo={this.containerRef.current}
          isVisible={isOpen}
        />
      </div>
    );
  }
}
```
