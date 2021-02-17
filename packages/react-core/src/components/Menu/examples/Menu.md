---
id: Menu
section: components
cssPrefix: pf-c-menu
propComponents: ['Menu', 'MenuList', 'MenuItem', 'MenuItemAction', 'MenuContent', 'MenuInput']
ouia: true
beta: true
---

import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/js/icons/clipboard-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/js/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';
import TableIcon from '@patternfly/react-icons/dist/js/icons/table-icon';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';
import StorageDomainIcon from '@patternfly/react-icons/dist/js/icons/storage-domain-icon';
import DrilldownMenu1 from './DrilldownMenu1';

## Examples

### With drilldown

```js
import React from 'react';
import { Menu, MenuContent, MenuList, MenuItem, Divider } from '@patternfly/react-core';
import StorageDomainIcon from '@patternfly/react-icons/dist/js/icons/storage-domain-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/js/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/js/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/js/icons/cube-icon';
import DrilldownMenu1 from './DrilldownMenu1';

class MenuWithDrilldown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
      menuDrilledIn: [],
      drilldownPath: [],
      menuHeights: {},
      activeMenu: 'rootMenu'
    };
    this.onSelect = (event, itemId) => {
      if (itemId.startsWith('group:')) {
        console.log(`selected sub-menu: ${itemId.split('group:')[1]}`);
      } else {
        console.log(`selected: ${itemId}`);
        this.setState({
          activeItem: itemId
        });
      }
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
  }

  render() {
    const { activeItem, menuDrilledIn, drilldownPath, activeMenu, menuHeights } = this.state;

    // We wrap the menu items that contain drilldown menus to keep things DRY since they're used to drill into, as well as drill out of the next menu

    // rootMenu -> drilldownMenu1
    const MenuItemStartRollout = ({ direction, onClick, ...rest }) => (
      <MenuItem itemId="group:start_rollout" direction={direction} onClick={onClick} {...rest}>
        Start rollout
      </MenuItem>
    );
    // rootMenu -> drilldownMenu1
    const MenuItemPauseRollout = ({ direction, onClick, ...rest }) => (
      <MenuItem itemId="group:pause_rollout" direction={direction} onClick={onClick} {...rest}>
        Pause rollouts
      </MenuItem>
    );
    // rootMenu -> drilldownMenuStorage
    const MenuItemStorage = ({ direction, onClick, ...rest }) => (
      <MenuItem
        itemId="group:storage"
        icon={<StorageDomainIcon aria-hidden />}
        direction={direction}
        onClick={onClick}
        {...rest}
      >
        Add storage
      </MenuItem>
    );
    // drilldownMenu1 -> drilldownMenuGrouping
    const MenuItemAppGrouping = ({ direction, onClick, ...rest }) => (
      <MenuItem itemId="group:app_grouping" description="Groups A-C" direction={direction} onClick={onClick} {...rest}>
        Application Grouping
      </MenuItem>
    );
    // drilldownMenu1 -> drilldownMenuLabels
    const MenuItemLabels = ({ direction, onClick, ...rest }) => (
      <MenuItem itemId="group:labels" direction={direction} onClick={onClick} {...rest}>
        Labels
      </MenuItem>
    );

    // Menus
    const rootMenu = () => (
      <Menu
        id="rootMenu"
        activeMenu={menuDrilledIn.concat([activeMenu])}
        containsDrilldown
        drilledIn={menuDrilledIn.includes('rootMenu')}
        onSelect={this.onSelect}
      >
        <MenuContent
          getHeight={height => this.setHeight('rootMenu', height)}
          style={{ '--pf-c-menu__content--Height': `${menuHeights[activeMenu]}px` }}
        >
          <MenuList>
            <MenuItemStartRollout
              direction="down"
              onPath={drilldownPath.includes('MenuItemStartRollout')}
              drilldownMenu={
                <DrilldownMenu1
                  id="drilldownMenu1"
                  activeMenu={menuDrilledIn.concat([activeMenu])}
                  drilledIn={menuDrilledIn.includes('drilldownMenu1')}
                  getHeight={height => this.setHeight('drilldownMenu1', height)}
                >
                  <MenuItemStartRollout direction="up" onClick={() => this.drillOut('rootMenu')} />
                  <Divider component="li" />
                  <MenuItemAppGrouping
                    direction="down"
                    onPath={drilldownPath.includes('MenuItemAppGrouping')}
                    drilldownMenu={
                      <DrilldownMenu1
                        id="drilldownMenuGrouping"
                        activeMenu={menuDrilledIn.concat([activeMenu])}
                        getHeight={height => this.setHeight('drilldownMenuGrouping', height)}
                      >
                        <MenuItemAppGrouping direction="up" onClick={() => this.drillOut('drilldownMenu1')} />
                        <Divider component="li" />
                        <MenuItem itemId="group_a">Group A</MenuItem>
                        <MenuItem itemId="group_b">Group B</MenuItem>
                        <MenuItem itemId="group_c">Group C</MenuItem>
                      </DrilldownMenu1>
                    }
                    onClick={() => this.drillIn('drilldownMenu1', 'drilldownMenuGrouping', 'MenuItemAppGrouping')}
                  />
                  <MenuItem itemId="count">Count</MenuItem>
                  <MenuItemLabels
                    direction="down"
                    onPath={drilldownPath.includes('MenuItemLabels')}
                    drilldownMenu={
                      <DrilldownMenu1
                        id="drilldownMenuLabels"
                        activeMenu={menuDrilledIn.concat([activeMenu])}
                        getHeight={height => this.setHeight('drilldownMenuLabels', height)}
                      >
                        <MenuItemLabels direction="up" onClick={() => this.drillOut('drilldownMenu1')} />
                        <Divider component="li" />
                        <MenuItem itemId="label_1">Label 1</MenuItem>
                        <MenuItem itemId="label_2">Label 2</MenuItem>
                        <MenuItem itemId="label_3">Label 3</MenuItem>
                      </DrilldownMenu1>
                    }
                    onClick={() => this.drillIn('drilldownMenu1', 'drilldownMenuLabels', 'MenuItemLabels')}
                  />
                  <MenuItem itemId="annotations">Annotations</MenuItem>
                </DrilldownMenu1>
              }
              onClick={() => this.drillIn('rootMenu', 'drilldownMenu1', 'MenuItemStartRollout')}
            />
            <MenuItemPauseRollout
              direction="down"
              onPath={drilldownPath.includes('MenuItemPauseRollout')}
              drilldownMenu={
                <DrilldownMenu1
                  id="drilldownMenu1"
                  activeMenu={menuDrilledIn.concat([activeMenu])}
                  drilledIn={menuDrilledIn.includes('drilldownMenu1')}
                  getHeight={height => this.setHeight('drilldownMenu1', height)}
                >
                  <MenuItemPauseRollout direction="up" onClick={() => this.drillOut('rootMenu')} />
                  <Divider component="li" />
                  <MenuItemAppGrouping
                    direction="down"
                    onPath={drilldownPath.includes('MenuItemAppGrouping')}
                    drilldownMenu={
                      <DrilldownMenu1
                        id="drilldownMenuGrouping"
                        activeMenu={menuDrilledIn.concat([activeMenu])}
                        getHeight={height => this.setHeight('drilldownMenuGrouping', height)}
                      >
                        <MenuItemAppGrouping direction="up" onClick={() => this.drillOut('drilldownMenu1')} />
                        <Divider component="li" />
                        <MenuItem itemId="group_a">Group A</MenuItem>
                        <MenuItem itemId="group_b">Group B</MenuItem>
                        <MenuItem itemId="group_c">Group C</MenuItem>
                      </DrilldownMenu1>
                    }
                    onClick={() => this.drillIn('drilldownMenu1', 'drilldownMenuGrouping', 'MenuItemAppGrouping')}
                  />
                  <MenuItem itemId="count">Count</MenuItem>
                  <MenuItemLabels
                    direction="down"
                    onPath={drilldownPath.includes('MenuItemLabels')}
                    drilldownMenu={
                      <DrilldownMenu1
                        id="drilldownMenuLabels"
                        activeMenu={menuDrilledIn.concat([activeMenu])}
                        getHeight={height => this.setHeight('drilldownMenuLabels', height)}
                      >
                        <MenuItemLabels direction="up" onClick={() => this.drillOut('drilldownMenu1')} />
                        <Divider component="li" />
                        <MenuItem itemId="label_1">Label 1</MenuItem>
                        <MenuItem itemId="label_2">Label 2</MenuItem>
                        <MenuItem itemId="label_3">Label 3</MenuItem>
                      </DrilldownMenu1>
                    }
                    onClick={() => this.drillIn('drilldownMenu1', 'drilldownMenuLabels', 'MenuItemLabels')}
                  />
                  <MenuItem itemId="annotations">Annotations</MenuItem>
                </DrilldownMenu1>
              }
              onClick={() => this.drillIn('rootMenu', 'drilldownMenu1', 'MenuItemPauseRollout')}
            />
            <MenuItemStorage
              direction="down"
              onPath={drilldownPath.includes('MenuItemStorage')}
              drilldownMenu={
                <DrilldownMenu1
                  id="drilldownMenuStorage"
                  activeMenu={menuDrilledIn.concat([activeMenu])}
                  getHeight={height => this.setHeight('drilldownMenuStorage', height)}
                >
                  <MenuItemStorage direction="up" onClick={() => this.drillOut('rootMenu')} />
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
                </DrilldownMenu1>
              }
              onClick={() => this.drillIn('rootMenu', 'drilldownMenuStorage', 'MenuItemStorage')}
            />
            <MenuItem itemId="edit">Edit</MenuItem>
            <MenuItem itemId="delete_deployment">Delete deployment config</MenuItem>
          </MenuList>
        </MenuContent>
      </Menu>
    );

    return rootMenu();
  }
}
```
