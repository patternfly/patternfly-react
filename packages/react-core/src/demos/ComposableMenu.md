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

## Demos

### Basic menu with toggle

```js
import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuList, MenuItem, Popper } from '@patternfly/react-core';

class MenuToggleCollapsed extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.toggleRef = React.createRef();
    this.state = {
      activeItem: 0,
      isExpanded: false
    };
    this.onToggle = () => {
      this.setState({
        isExpanded: !this.state.isExpanded
      });
    };
    this.onSelect = (event, itemId) => {
      console.log(`clicked ${itemId}`);
      this.setState({
        activeItem: itemId
      });
    };
    this.handleMenuKeys = event => {
      if ([...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isExpanded) {
        if (event.key === 'Escape') {
          this.onToggle();
          this.toggleRef.current.focus();
        }
      }
    };
    this.handleMenuClick = event => {
      if (![...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isExpanded) {
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
    const { activeItem, isExpanded } = this.state;

    const toggle = (
      <MenuToggle ref={this.toggleRef} onClick={this.onToggle} isExpanded={isExpanded} style={{ width: '150px' }}>
        {isExpanded ? 'Expanded' : 'Collapsed'}
      </MenuToggle>
    );

    const menu = (
      <Menu activeItemId={activeItem} onSelect={this.onSelect}>
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
          isVisible={isExpanded}
        />
      </div>
    );
  }
}
```

### Basic select

```js
import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuList, MenuItem, Popper } from '@patternfly/react-core';
import TableIcon from '@patternfly/react-icons/dist/js/icons/table-icon';

class MenuToggleCollapsed extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.toggleRef = React.createRef();
    this.state = {
      activeItem: 0,
      selectedItem: null,
      selectedText: null,
      isExpanded: false
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
    this.onToggle = () => {
      this.setState({
        isExpanded: !this.state.isExpanded
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
      if ([...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isExpanded) {
        if (event.key === 'Escape') {
          this.onToggle();
          this.toggleRef.current.focus();
        }
      }
    };
    this.handleMenuClick = event => {
      if (![...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isExpanded) {
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
    const { activeItem, selectedItem, selectedText, isExpanded } = this.state;

    const toggle = (
      <MenuToggle ref={this.toggleRef} onClick={this.onToggle} isExpanded={isExpanded} style={{ width: '200px' }}>
        {selectedText ? selectedText : 'Select a value'}
      </MenuToggle>
    );

    const menu = (
      <Menu id="select-menu" onSelect={this.onSelect} activeItemId={activeItem} selected={selectedItem}>
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
          isVisible={isExpanded}
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

class MenuToggleCollapsed extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.toggleRef = React.createRef();
    this.state = {
      menuDrilledIn: [],
      drilldownPath: [],
      menuHeights: {},
      activeMenu: 'rootMenu',
      isExpanded: false
    };
    this.onToggle = () => {
      this.setState({
        isExpanded: !this.state.isExpanded
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
      if ([...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isExpanded) {
        if (event.key === 'Escape') {
          this.onToggle();
          this.toggleRef.current.focus();
        }
      }
    };
    this.handleMenuClick = event => {
      if (![...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isExpanded) {
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
    const { isExpanded, menuDrilledIn, drilldownPath, activeMenu, menuHeights } = this.state;

    const toggle = (
      <MenuToggle ref={this.toggleRef} onClick={this.onToggle} isExpanded={isExpanded} style={{ width: '300px' }}>
        {isExpanded ? 'Expanded' : 'Collapsed'}
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
          isVisible={isExpanded}
          enableFlip={false}
        />
      </div>
    );
  }
}
```
