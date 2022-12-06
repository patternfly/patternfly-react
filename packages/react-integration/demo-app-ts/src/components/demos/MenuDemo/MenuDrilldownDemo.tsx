import React, { Component } from 'react';
import { Menu, MenuContent, MenuList, MenuItem, Divider, DrilldownMenu } from '@patternfly/react-core';
import StorageDomainIcon from '@patternfly/react-icons/dist/esm/icons/storage-domain-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

/* eslint-disable no-console */
export class MenuDrilldownDemo extends Component {
  displayName = 'MenuDrilldownDemo';
  state = {
    activeItem: null as string,
    menuDrilledIn: [] as string[],
    drilldownPath: [] as string[],
    menuHeights: {} as any,
    activeMenu: 'rootMenu'
  };

  onSelect = (event: React.MouseEvent, itemId: string) => {
    if (itemId.startsWith('group:')) {
      console.log(`selected sub-menu: ${itemId.split('group:')[1]}`);
    } else {
      console.log(`selected: ${itemId}`);
      this.setState({
        activeItem: itemId
      });
    }
  };
  drillIn = (fromMenuId: string, toMenuId: string, pathId: string) => {
    this.setState({
      menuDrilledIn: [...this.state.menuDrilledIn, fromMenuId],
      drilldownPath: [...this.state.drilldownPath, pathId],
      activeMenu: toMenuId
    });
  };
  drillOut = (toMenuId: string) => {
    const menuDrilledInSansLast = this.state.menuDrilledIn.slice(0, this.state.menuDrilledIn.length - 1);
    const pathSansLast = this.state.drilldownPath.slice(0, this.state.drilldownPath.length - 1);
    this.setState({
      menuDrilledIn: menuDrilledInSansLast,
      drilldownPath: pathSansLast,
      activeMenu: toMenuId
    });
  };
  setHeight = (menuId: string, height: number) => {
    if (
      !this.state.menuHeights[menuId] ||
      (menuId !== 'drilldown-rootMenu' && this.state.menuHeights[menuId] !== height)
    ) {
      this.setState({
        menuHeights: {
          ...this.state.menuHeights,
          [menuId]: height
        }
      });
    }
  };
  render() {
    const { menuDrilledIn, drilldownPath, activeMenu, menuHeights } = this.state;
    return (
      <Menu
        id="rootMenu"
        containsDrilldown
        drilldownItemPath={drilldownPath}
        drilledInMenus={menuDrilledIn}
        activeMenu={activeMenu}
        onDrillIn={this.drillIn}
        onDrillOut={this.drillOut}
        onGetMenuHeight={this.setHeight}
        onSelect={this.onSelect}
      >
        <MenuContent menuHeight={`${menuHeights[activeMenu]}px`}>
          <MenuList>
            <MenuItem
              id="start"
              itemId="group:start_rollout"
              direction="down"
              drilldownMenu={
                <DrilldownMenu id="drilldownMenuStart">
                  <MenuItem itemId="group:start_rollout" direction="up">
                    Start rollout
                  </MenuItem>
                  <Divider component="li" />
                  <MenuItem
                    id="app-group-start"
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
  }
}
