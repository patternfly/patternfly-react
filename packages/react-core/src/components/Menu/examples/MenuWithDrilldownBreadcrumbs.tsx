import React from 'react';
import {
  Badge,
  Breadcrumb,
  BreadcrumbHeading,
  BreadcrumbItem,
  Checkbox,
  Divider,
  DrilldownMenu,
  Dropdown,
  DropdownItem,
  DropdownList,
  Icon,
  Menu,
  MenuBreadcrumb,
  MenuContent,
  MenuItem,
  MenuList,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import StorageDomainIcon from '@patternfly/react-icons/dist/esm/icons/storage-domain-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';
import AngleLeftIcon from '@patternfly/react-icons/dist/esm/icons/angle-left-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

export const MenuWithDrilldownBreadcrumbs: React.FunctionComponent = () => {
  const [menuDrilledIn, setMenuDrilledIn] = React.useState<string[]>([]);
  const [drilldownPath, setDrilldownPath] = React.useState<string[]>([]);
  const [menuHeights, setMenuHeights] = React.useState<any>({});
  const [activeMenu, setActiveMenu] = React.useState<string>('breadcrumbs-rootMenu');
  const [breadcrumb, setBreadcrumb] = React.useState<JSX.Element | null>();
  const [withMaxMenuHeight, setWithMaxMenuHeight] = React.useState(false);

  const onToggle = (isOpen: boolean, key: string) => {
    switch (key) {
      case 'app':
        setBreadcrumb(appGroupingBreadcrumb(isOpen));
        break;
      case 'label':
        setBreadcrumb(labelsBreadcrumb(isOpen));
        break;
      case 'pause-app':
        setBreadcrumb(pauseRolloutsAppGrpBreadcrumb(isOpen));
        break;
      case 'pause-label':
        setBreadcrumb(pauseRolloutsLabelsBreadcrumb(isOpen));
        break;
      default:
        break;
    }
  };

  const onToggleMaxMenuHeight = (checked: boolean) => {
    setWithMaxMenuHeight(checked);
  };

  const drillOut = (
    _event: React.KeyboardEvent<Element> | MouseEvent | React.MouseEvent<any, MouseEvent>,
    toMenuId: string,
    fromPathId: string,
    breadcrumb: JSX.Element | null
  ) => {
    setMenuDrilledIn((prevMenuDrilledIn) => {
      const indexOfMenuId = prevMenuDrilledIn.indexOf(toMenuId);
      return prevMenuDrilledIn.slice(0, indexOfMenuId);
    });
    setDrilldownPath((prevDrilldownPath) => {
      const indexOfMenuIdPath = prevDrilldownPath.indexOf(fromPathId);
      return prevDrilldownPath.slice(0, indexOfMenuIdPath);
    });
    setActiveMenu(toMenuId);
    setBreadcrumb(breadcrumb);
  };

  const setHeight = (menuId: string, height: number) => {
    if (menuHeights[menuId] === undefined || (menuId !== 'breadcrumbs-rootMenu' && menuHeights[menuId] !== height)) {
      setMenuHeights({ ...menuHeights, [menuId]: height });
    }
  };

  const drillIn = (
    _event: React.KeyboardEvent | React.MouseEvent,
    fromMenuId: string,
    toMenuId: string,
    pathId: string
  ) => {
    setMenuDrilledIn([...menuDrilledIn, fromMenuId]);
    setDrilldownPath([...drilldownPath, pathId]);
    setActiveMenu(toMenuId);
  };

  const startRolloutBreadcrumb = (
    <Breadcrumb>
      <BreadcrumbItem
        component="button"
        onClick={(event: any) => drillOut(event, 'breadcrumbs-rootMenu', 'group:start_rollout', null)}
      >
        Root
      </BreadcrumbItem>
      <BreadcrumbHeading component="button">Start rollout</BreadcrumbHeading>
    </Breadcrumb>
  );

  const appGroupingBreadcrumb = (isOpen: boolean) => (
    <Breadcrumb>
      <BreadcrumbItem
        component="button"
        onClick={(event: any) => drillOut(event, 'breadcrumbs-rootMenu', 'group:start_rollout', null)}
      >
        Root
      </BreadcrumbItem>
      <BreadcrumbItem isDropdown>
        <Dropdown
          isOpen={isOpen}
          onOpenChange={(isOpen: boolean) => onToggle(isOpen, 'app')}
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              badge={
                <Badge isRead screenReaderText="additional item">
                  1
                </Badge>
              }
              ref={toggleRef}
              onClick={() => onToggle(true, 'app')}
              isExpanded={isOpen}
              variant="plainText"
            />
          )}
        >
          <DropdownList>
            <DropdownItem
              key="dropdown-start"
              icon={
                <Icon shouldMirrorRTL>
                  <AngleLeftIcon />
                </Icon>
              }
              onClick={(event: any) =>
                drillOut(event, 'breadcrumbs-drilldownMenuStart', 'group:app_grouping_start', startRolloutBreadcrumb)
              }
            >
              Start rollout
            </DropdownItem>
          </DropdownList>
        </Dropdown>
      </BreadcrumbItem>
      <BreadcrumbHeading component="button">Application Grouping</BreadcrumbHeading>
    </Breadcrumb>
  );

  const labelsBreadcrumb = (isOpen: boolean) => (
    <Breadcrumb>
      <BreadcrumbItem
        component="button"
        onClick={(event: any) => drillOut(event, 'breadcrumbs-rootMenu', 'group:start_rollout', null)}
      >
        Root
      </BreadcrumbItem>
      <BreadcrumbItem isDropdown>
        <Dropdown
          isOpen={isOpen}
          onOpenChange={(isOpen: boolean) => onToggle(isOpen, 'label')}
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              badge={
                <Badge isRead screenReaderText="additional item">
                  1
                </Badge>
              }
              ref={toggleRef}
              onClick={() => onToggle(true, 'label')}
              isExpanded={isOpen}
              variant="plainText"
            />
          )}
        >
          <DropdownList>
            <DropdownItem
              key="dropdown-start"
              icon={
                <Icon shouldMirrorRTL>
                  <AngleLeftIcon />
                </Icon>
              }
              onClick={(event: any) =>
                drillOut(event, 'breadcrumbs-drilldownMenuStart', 'group:labels_start', startRolloutBreadcrumb)
              }
            >
              Start rollout
            </DropdownItem>
          </DropdownList>
        </Dropdown>
      </BreadcrumbItem>
      <BreadcrumbHeading component="button">Labels</BreadcrumbHeading>
    </Breadcrumb>
  );

  const pauseRolloutsBreadcrumb = (
    <Breadcrumb>
      <BreadcrumbItem
        component="button"
        onClick={(event: any) => drillOut(event, 'breadcrumbs-rootMenu', 'group:pause_rollout', null)}
      >
        Root
      </BreadcrumbItem>
      <BreadcrumbHeading component="button">Pause rollouts</BreadcrumbHeading>
    </Breadcrumb>
  );

  const pauseRolloutsAppGrpBreadcrumb = (isOpen: boolean) => (
    <Breadcrumb>
      <BreadcrumbItem
        component="button"
        onClick={(event: any) => drillOut(event, 'breadcrumbs-rootMenu', 'group:pause_rollout', null)}
      >
        Root
      </BreadcrumbItem>
      <BreadcrumbItem isDropdown>
        <Dropdown
          isOpen={isOpen}
          onOpenChange={(isOpen: boolean) => onToggle(isOpen, 'pause-app')}
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              badge={
                <Badge isRead screenReaderText="additional item">
                  1
                </Badge>
              }
              ref={toggleRef}
              onClick={() => onToggle(true, 'pause-app')}
              isExpanded={isOpen}
              variant="plainText"
            />
          )}
        >
          <DropdownList>
            <DropdownItem
              key="dropdown-pause"
              icon={
                <Icon shouldMirrorRTL>
                  <AngleLeftIcon />
                </Icon>
              }
              onClick={(event: any) =>
                drillOut(event, 'breadcrumbs-drilldownMenuPause', 'group:app_grouping', pauseRolloutsBreadcrumb)
              }
            >
              Pause rollouts
            </DropdownItem>
          </DropdownList>
        </Dropdown>
      </BreadcrumbItem>
      <BreadcrumbHeading component="button">Application Grouping</BreadcrumbHeading>
    </Breadcrumb>
  );

  const pauseRolloutsLabelsBreadcrumb = (isOpen: boolean) => (
    <Breadcrumb>
      <BreadcrumbItem
        component="button"
        onClick={(event: any) => drillOut(event, 'breadcrumbs-rootMenu', 'group:pause_rollout', null)}
      >
        Root
      </BreadcrumbItem>
      <BreadcrumbItem isDropdown>
        <Dropdown
          isOpen={isOpen}
          onOpenChange={(isOpen: boolean) => onToggle(isOpen, 'pause-label')}
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              badge={
                <Badge isRead screenReaderText="additional item">
                  1
                </Badge>
              }
              ref={toggleRef}
              onClick={() => onToggle(true, 'pause-label')}
              isExpanded={isOpen}
              variant="plainText"
            />
          )}
        >
          <DropdownList>
            <DropdownItem
              key="dropdown-pause"
              icon={
                <Icon shouldMirrorRTL>
                  <AngleLeftIcon />
                </Icon>
              }
              onClick={(event: any) =>
                drillOut(event, 'breadcrumbs-drilldownMenuPause', 'group:labels', pauseRolloutsBreadcrumb)
              }
            >
              Pause rollouts
            </DropdownItem>
          </DropdownList>
        </Dropdown>
      </BreadcrumbItem>
      <BreadcrumbHeading component="button">Labels</BreadcrumbHeading>
    </Breadcrumb>
  );

  const addStorageBreadcrumb = (
    <Breadcrumb>
      <BreadcrumbItem
        component="button"
        onClick={(event: any) => drillOut(event, 'breadcrumbs-rootMenu', 'group:storage', null)}
      >
        Root
      </BreadcrumbItem>
      <BreadcrumbHeading component="button">Add storage</BreadcrumbHeading>
    </Breadcrumb>
  );

  return (
    <>
      <Checkbox
        label="Set max menu height"
        isChecked={withMaxMenuHeight}
        onChange={(_event, checked) => onToggleMaxMenuHeight(checked)}
        aria-label="Set max menu height checkbox"
        id="toggle-max-menu-height"
        name="toggle-max-menu-height"
      />
      <br />
      <Menu
        id="breadcrumbs-rootMenu"
        containsDrilldown
        drilldownItemPath={drilldownPath}
        drilledInMenus={menuDrilledIn}
        activeMenu={activeMenu}
        onDrillIn={drillIn}
        onDrillOut={() => drillOut}
        onGetMenuHeight={setHeight}
        isScrollable={withMaxMenuHeight}
      >
        {breadcrumb && (
          <>
            <MenuBreadcrumb>{breadcrumb}</MenuBreadcrumb>
            <Divider />
          </>
        )}
        <MenuContent menuHeight={`${menuHeights[activeMenu]}px`} maxMenuHeight={withMaxMenuHeight ? '100px' : 'auto'}>
          <MenuList>
            <MenuItem
              itemId="group:start_rollout"
              direction="down"
              onClick={() => setBreadcrumb(startRolloutBreadcrumb)}
              drilldownMenu={
                <DrilldownMenu id="breadcrumbs-drilldownMenuStart">
                  <MenuItem
                    itemId="group:app_grouping_start"
                    description="Groups A-G"
                    direction="down"
                    onClick={() => setBreadcrumb(appGroupingBreadcrumb(false))}
                    drilldownMenu={
                      <DrilldownMenu id="breadcrumbs-drilldownMenuStartGrouping">
                        <MenuItem itemId="group_a">Group A (start rollout)</MenuItem>
                        <MenuItem itemId="group_b">Group B (start rollout)</MenuItem>
                        <MenuItem itemId="group_c">Group C (start rollout)</MenuItem>
                        <MenuItem itemId="group_d">Group D (start rollout)</MenuItem>
                        <MenuItem itemId="group_e">Group E (start rollout)</MenuItem>
                        <MenuItem itemId="group_f">Group F (start rollout)</MenuItem>
                        <MenuItem itemId="group_g">Group G (start rollout)</MenuItem>
                      </DrilldownMenu>
                    }
                  >
                    Application grouping (start rollout)
                  </MenuItem>
                  <MenuItem itemId="count">Count (start rollout)</MenuItem>
                  <MenuItem
                    itemId="group:labels_start"
                    direction="down"
                    onClick={() => setBreadcrumb(labelsBreadcrumb(false))}
                    drilldownMenu={
                      <DrilldownMenu id="breadcrumbs-drilldownMenuStartLabels">
                        <MenuItem itemId="label_1">Label 1 (start rollout)</MenuItem>
                        <MenuItem itemId="label_2">Label 2 (start rollout)</MenuItem>
                        <MenuItem itemId="label_3">Label 3 (start rollout)</MenuItem>
                      </DrilldownMenu>
                    }
                  >
                    Labels (start rollout)
                  </MenuItem>
                  <MenuItem itemId="annotations">Annotations (start rollout)</MenuItem>
                </DrilldownMenu>
              }
            >
              Start rollout
            </MenuItem>
            <MenuItem
              itemId="group:pause_rollout"
              direction="down"
              onClick={() => setBreadcrumb(pauseRolloutsBreadcrumb)}
              drilldownMenu={
                <DrilldownMenu id="breadcrumbs-drilldownMenuPause">
                  <MenuItem
                    itemId="group:app_grouping"
                    description="Groups A-C"
                    direction="down"
                    onClick={() => setBreadcrumb(pauseRolloutsAppGrpBreadcrumb(false))}
                    drilldownMenu={
                      <DrilldownMenu id="breadcrumbs-drilldownMenuGrouping">
                        <MenuItem itemId="group_a">Group A (pause rollouts)</MenuItem>
                        <MenuItem itemId="group_b">Group B (pause rollouts)</MenuItem>
                        <MenuItem itemId="group_c">Group C (pause rollouts)</MenuItem>
                      </DrilldownMenu>
                    }
                  >
                    Application grouping (pause rollouts)
                  </MenuItem>
                  <MenuItem itemId="count">Count (pause rollouts)</MenuItem>
                  <MenuItem
                    itemId="group:labels"
                    direction="down"
                    onClick={() => setBreadcrumb(pauseRolloutsLabelsBreadcrumb(false))}
                    drilldownMenu={
                      <DrilldownMenu id="breadcrumbs-drilldownMenuLabels">
                        <MenuItem itemId="label_1">Label 1 (pause rollouts)</MenuItem>
                        <MenuItem itemId="label_2">Label 2 (pause rollouts)</MenuItem>
                        <MenuItem itemId="label_3">Label 3 (pause rollouts)</MenuItem>
                      </DrilldownMenu>
                    }
                  >
                    Labels (pause rollouts)
                  </MenuItem>
                  <MenuItem itemId="annotations">Annotations (pause rollouts)</MenuItem>
                </DrilldownMenu>
              }
            >
              Pause rollouts
            </MenuItem>
            <MenuItem
              itemId="group:storage"
              icon={<StorageDomainIcon aria-hidden />}
              direction="down"
              onClick={() => setBreadcrumb(addStorageBreadcrumb)}
              drilldownMenu={
                <DrilldownMenu id="breadcrumbs-drilldownMenuStorage">
                  <MenuItem icon={<CodeBranchIcon aria-hidden />} itemId="git">
                    From git
                  </MenuItem>
                  <MenuItem icon={<LayerGroupIcon aria-hidden />} itemId="container">
                    Container image
                  </MenuItem>
                  <MenuItem icon={<CubeIcon aria-hidden />} itemId="docker">
                    Docker file
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
    </>
  );
};
