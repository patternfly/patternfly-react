import React from 'react';
import {
  Button,
  Content,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListCell,
  DataListAction,
  DataListToggle,
  DataListContent,
  DataListItemCells,
  Dropdown,
  DropdownItem,
  DropdownList,
  Icon,
  MenuToggle,
  MenuToggleElement,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  ToolbarExpandIconWrapper,
  ToolbarContent,
  SearchInput,
  Tooltip,
  PageSection
} from '@patternfly/react-core';

import { DashboardWrapper } from '@patternfly/react-core/src/demos/DashboardWrapper';

import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const DataListExpandableControlInToolbar: React.FunctionComponent = () => {
  const [expanded, setExpanded] = React.useState(['ex-toggle1', 'ex-toggle3']);
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [allExpanded, setAllExpanded] = React.useState(false);

  const onToggleAll = () => {
    setAllExpanded((prevAllExpanded) => !prevAllExpanded);

    if (!allExpanded) {
      setExpanded(['ex-toggle1', 'ex-toggle2', 'ex-toggle3']);
    } else {
      setExpanded([]);
    }
  };

  const onToggle1 = () => {
    setIsOpen1(!isOpen1);
  };

  const onToggle2 = () => {
    setIsOpen2(!isOpen2);
  };

  const onToggle3 = () => {
    setIsOpen3(!isOpen3);
  };

  const onSelect1 = () => {
    setIsOpen1(false);
  };

  const onSelect2 = () => {
    setIsOpen2(false);
  };

  const onSelect3 = () => {
    setIsOpen3(false);
  };

  const renderToolbar = () => (
    <React.Fragment>
      <Toolbar>
        <ToolbarContent>
          <ToolbarGroup>
            <ToolbarItem variant="expand-all" isAllExpanded={allExpanded}>
              <Tooltip
                position="right"
                content={
                  <div>
                    {allExpanded && 'Collapse all rows'}
                    {!allExpanded && 'Expand all rows'}
                  </div>
                }
              >
                <Button
                  onClick={onToggleAll}
                  variant="plain"
                  aria-label={allExpanded ? 'Collapse all rows' : 'Expand all rows'}
                  icon={
                    <Icon shouldMirrorRTL>
                      <ToolbarExpandIconWrapper>
                        <AngleRightIcon />
                      </ToolbarExpandIconWrapper>
                    </Icon>
                  }
                />
              </Tooltip>
            </ToolbarItem>
            <ToolbarItem>
              <SearchInput aria-label="search input example" />
            </ToolbarItem>
            <ToolbarItem>
              <Button variant="secondary">Action</Button>
            </ToolbarItem>
            <ToolbarItem variant="separator" />
            <ToolbarItem>
              <Button variant="primary">Action</Button>
            </ToolbarItem>
          </ToolbarGroup>
        </ToolbarContent>
      </Toolbar>
    </React.Fragment>
  );

  const toggle = (id: string) => {
    const index = expanded.indexOf(id);
    const newExpanded =
      index >= 0 ? [...expanded.slice(0, index), ...expanded.slice(index + 1, expanded.length)] : [...expanded, id];
    setExpanded(newExpanded);
    if (newExpanded.length === 3) {
      setAllExpanded(true);
    } else if (newExpanded.length === 0) {
      setAllExpanded(false);
    }
  };

  return (
    <React.Fragment>
      <DashboardWrapper mainContainerId="main-content-datalist-view-default-nav" breadcrumb={null}>
        <PageSection>
          <Content>
            <h1>Projects</h1>
            <p>This is a demo that showcases PatternFly data list</p>
          </Content>
        </PageSection>
        <PageSection isFilled>
          {renderToolbar()}

          <DataList aria-label="Expandable data list example">
            <DataListItem aria-labelledby="ex-item1" isExpanded={expanded.includes('ex-toggle1')}>
              <DataListItemRow>
                <DataListToggle
                  onClick={() => toggle('ex-toggle1')}
                  isExpanded={expanded.includes('ex-toggle1')}
                  id="ex-toggle1"
                  aria-controls="ex-expand1"
                />
                <DataListItemCells
                  dataListCells={[
                    <DataListCell isIcon key="icon">
                      <CodeBranchIcon />
                    </DataListCell>,
                    <DataListCell key="primary content">
                      <div id="ex-item1">Primary content</div>
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
                      <a href="#">Link</a>
                    </DataListCell>,
                    <DataListCell key="secondary content">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </DataListCell>,
                    <DataListCell key="secondary content 2">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </DataListCell>
                  ]}
                />
                <DataListAction aria-labelledby="ex-item1 ex-action1" id="ex-action1" aria-label="Actions">
                  <Dropdown
                    isOpen={isOpen1}
                    onSelect={onSelect1}
                    popperProps={{ position: 'right' }}
                    onOpenChange={(isOpen: boolean) => setIsOpen1(isOpen)}
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        onClick={onToggle1}
                        isExpanded={isOpen1}
                        variant="plain"
                        aria-label="Primary content kebab toggle"
                        icon={<EllipsisVIcon aria-hidden="true" />}
                      />
                    )}
                  >
                    <DropdownList>
                      <DropdownItem value={0} key="action1">
                        Action
                      </DropdownItem>
                      <DropdownItem
                        value={1}
                        key="link1"
                        to="#default-link2"
                        // Prevent the default onClick functionality for example purposes
                        onClick={(ev: React.MouseEvent) => ev.preventDefault()}
                      >
                        Link
                      </DropdownItem>
                      <DropdownItem value={2} isDisabled key="disabled action1">
                        Disabled Action
                      </DropdownItem>
                      <DropdownItem value={3} isDisabled key="disabled link1" to="#default-link4">
                        Disabled Link
                      </DropdownItem>
                    </DropdownList>
                  </Dropdown>
                </DataListAction>
              </DataListItemRow>
              <DataListContent
                aria-label="Primary Content Details"
                id="ex-expand1"
                isHidden={!expanded.includes('ex-toggle1')}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
                </p>
              </DataListContent>
            </DataListItem>
            <DataListItem aria-labelledby="ex-item2" isExpanded={expanded.includes('ex-toggle2')}>
              <DataListItemRow>
                <DataListToggle
                  onClick={() => toggle('ex-toggle2')}
                  isExpanded={expanded.includes('ex-toggle2')}
                  id="ex-toggle2"
                  aria-controls="ex-expand2"
                />
                <DataListItemCells
                  dataListCells={[
                    <DataListCell isIcon key="icon">
                      <CodeBranchIcon />
                    </DataListCell>,
                    <DataListCell key="secondary content">
                      <div id="ex-item2">Secondary content</div>
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </DataListCell>,
                    <DataListCell key="secondary content 2">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </DataListCell>,
                    <DataListCell key="secondary content3">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </DataListCell>
                  ]}
                />
                <DataListAction aria-labelledby="ex-item2 ex-action2" id="ex-action2" aria-label="Actions">
                  <Dropdown
                    isOpen={isOpen2}
                    onSelect={onSelect2}
                    popperProps={{ position: 'right' }}
                    onOpenChange={(isOpen: boolean) => setIsOpen2(isOpen)}
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        onClick={onToggle2}
                        isExpanded={isOpen2}
                        variant="plain"
                        aria-label="Secondary content kebab toggle"
                        icon={<EllipsisVIcon aria-hidden="true" />}
                      />
                    )}
                  >
                    <DropdownList>
                      <DropdownItem value={0} key="action2">
                        Action
                      </DropdownItem>
                      <DropdownItem
                        value={1}
                        key="link2"
                        to="#default-link2"
                        // Prevent the default onClick functionality for example purposes
                        onClick={(ev: React.MouseEvent) => ev.preventDefault()}
                      >
                        Link
                      </DropdownItem>
                      <DropdownItem value={2} isDisabled key="disabled action2">
                        Disabled Action
                      </DropdownItem>
                      <DropdownItem value={3} isDisabled key="disabled link2" to="#default-link4">
                        Disabled Link
                      </DropdownItem>
                    </DropdownList>
                  </Dropdown>
                </DataListAction>
              </DataListItemRow>
              <DataListContent
                aria-label="Primary Content Details"
                id="ex-expand2"
                isHidden={!expanded.includes('ex-toggle2')}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
                </p>
              </DataListContent>
            </DataListItem>
            <DataListItem aria-labelledby="ex-item3" isExpanded={expanded.includes('ex-toggle3')}>
              <DataListItemRow>
                <DataListToggle
                  onClick={() => toggle('ex-toggle3')}
                  isExpanded={expanded.includes('ex-toggle3')}
                  id="ex-toggle3"
                  aria-controls="ex-expand3"
                />
                <DataListItemCells
                  dataListCells={[
                    <DataListCell isIcon key="icon">
                      <CodeBranchIcon />
                    </DataListCell>,
                    <DataListCell key="tertiary content">
                      <div id="ex-item3">Tertiary content</div>
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </DataListCell>,
                    <DataListCell key="secondary content">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </DataListCell>,
                    <DataListCell key="secondary content 2">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </DataListCell>
                  ]}
                />
                <DataListAction aria-labelledby="ex-item3 ex-action3" id="ex-action3" aria-label="Actions">
                  <Dropdown
                    isOpen={isOpen3}
                    onSelect={onSelect3}
                    popperProps={{ position: 'right' }}
                    onOpenChange={(isOpen: boolean) => setIsOpen3(isOpen)}
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        onClick={onToggle3}
                        isExpanded={isOpen3}
                        variant="plain"
                        aria-label="Tertiary content kebab toggle"
                        icon={<EllipsisVIcon aria-hidden="true" />}
                      />
                    )}
                  >
                    <DropdownList>
                      <DropdownItem value={0} key="action3">
                        Action
                      </DropdownItem>
                      <DropdownItem
                        value={1}
                        key="link3"
                        to="#default-link2"
                        // Prevent the default onClick functionality for example purposes
                        onClick={(ev: React.MouseEvent) => ev.preventDefault()}
                      >
                        Link
                      </DropdownItem>
                      <DropdownItem value={2} isDisabled key="disabled action3">
                        Disabled Action
                      </DropdownItem>
                      <DropdownItem value={3} isDisabled key="disabled link3" to="#default-link4">
                        Disabled Link
                      </DropdownItem>
                    </DropdownList>
                  </Dropdown>
                </DataListAction>
              </DataListItemRow>
              <DataListContent
                aria-label="Primary Content Details"
                id="ex-expand3"
                isHidden={!expanded.includes('ex-toggle3')}
                hasNoPadding
              >
                This expanded section has no padding.
              </DataListContent>
            </DataListItem>
          </DataList>
        </PageSection>
      </DashboardWrapper>
    </React.Fragment>
  );
};
