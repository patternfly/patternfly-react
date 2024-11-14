import React from 'react';
import {
  Button,
  Content,
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListItemCells,
  Flex,
  FlexItem,
  MenuToggle,
  MenuToggleCheckbox,
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuItem,
  PageSection,
  Pagination,
  Toolbar,
  ToolbarItem,
  ToolbarContent
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';

export const DataListBasic: React.FunctionComponent = () => {
  const renderPagination = () => <Pagination itemCount={5} page={1} variant="top" isCompact />;

  const toolbarItems = (
    <React.Fragment>
      <ToolbarItem variant="bulk-select">
        <MenuToggle
          aria-label="Select cards"
          splitButtonItems={[
            <MenuToggleCheckbox
              id="split-dropdown-checkbox"
              key="split-dropdown-checkbox"
              aria-label={'Select all cards'}
            />
          ]}
        ></MenuToggle>
      </ToolbarItem>
      <ToolbarItem>
        <MenuToggle>Filter by creator name</MenuToggle>
      </ToolbarItem>
      <ToolbarItem variant="overflow-menu">
        <OverflowMenu breakpoint="md">
          <OverflowMenuItem>
            <Button variant="primary">Create instance</Button>
          </OverflowMenuItem>
          <OverflowMenuControl hasAdditionalOptions>
            <MenuToggle aria-label="Toolbar kebab overflow menu" variant="plain" icon={<EllipsisVIcon />} />
          </OverflowMenuControl>
        </OverflowMenu>
      </ToolbarItem>
      <ToolbarItem variant="pagination" align={{ default: 'alignEnd' }}>
        {renderPagination()}
      </ToolbarItem>
    </React.Fragment>
  );

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
          <Toolbar id="toolbar-group-types">
            <ToolbarContent>{toolbarItems}</ToolbarContent>
          </Toolbar>
          <DataList aria-label="Demo data list">
            <DataListItem aria-labelledby="Demo-item1">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell isFilled={false} key="buttons1">
                      <Flex direction={{ default: 'column' }}>
                        <FlexItem>
                          <Content component="p">patternfly</Content>
                        </FlexItem>
                        <FlexItem>
                          <Content component="small">
                            Working repo for
                            <a href="http://www.patternfly.org/">PatternFly</a>
                          </Content>
                        </FlexItem>
                        <FlexItem>
                          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                            <FlexItem>
                              <CodeBranchIcon /> 10
                            </FlexItem>
                            <FlexItem>
                              <CodeIcon /> 4
                            </FlexItem>
                            <FlexItem>
                              <CubeIcon /> 5
                            </FlexItem>
                            <FlexItem> Updated 2 days ago</FlexItem>
                          </Flex>
                        </FlexItem>
                      </Flex>
                    </DataListCell>,
                    <DataListCell isFilled={false} alignRight key="secondary content align">
                      <Flex>
                        <FlexItem>
                          <Button variant="secondary">Action</Button>
                        </FlexItem>
                        <FlexItem>
                          <a href="#">Link</a>
                        </FlexItem>
                      </Flex>
                    </DataListCell>
                  ]}
                />
              </DataListItemRow>
            </DataListItem>
            <DataListItem aria-labelledby="Demo-item2">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell isFilled={false} key="buttons2">
                      <Flex direction={{ default: 'column' }}>
                        <FlexItem>
                          <Content component="small">patternfly-elements</Content>
                        </FlexItem>
                        <FlexItem>
                          <Content component="small">PatternFly elements</Content>
                        </FlexItem>
                        <FlexItem>
                          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                            <FlexItem>
                              <CodeBranchIcon /> 5
                            </FlexItem>
                            <FlexItem>
                              <CodeIcon /> 9
                            </FlexItem>
                            <FlexItem>
                              <CubeIcon /> 2
                            </FlexItem>
                            <FlexItem>
                              <CheckCircleIcon />
                              11
                            </FlexItem>
                            <FlexItem>
                              <ExclamationTriangleIcon /> 4
                            </FlexItem>
                            <FlexItem>
                              <TimesCircleIcon /> 1
                            </FlexItem>
                            <FlexItem> Updated 2 days ago</FlexItem>
                          </Flex>
                        </FlexItem>
                      </Flex>
                    </DataListCell>,
                    <DataListCell isFilled={false} alignRight key="secondary content align">
                      <Flex>
                        <FlexItem>
                          <Button variant="secondary">Action</Button>
                        </FlexItem>
                        <FlexItem>
                          <a href="#">Link</a>
                        </FlexItem>
                      </Flex>
                    </DataListCell>
                  ]}
                />
              </DataListItemRow>
            </DataListItem>
            <DataListItem>
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell isFilled={false} key="Demo-item3">
                      <Flex direction={{ default: 'column' }}>
                        <FlexItem>
                          <Content component="small">patternfly-unified-design-kit</Content>
                        </FlexItem>
                      </Flex>
                    </DataListCell>,
                    <DataListCell isFilled={false} alignRight key="buttons3">
                      <Flex>
                        <FlexItem>
                          <Button variant="secondary">Action</Button>
                        </FlexItem>
                        <FlexItem>
                          <a href="#">Link</a>
                        </FlexItem>
                      </Flex>
                    </DataListCell>
                  ]}
                />
              </DataListItemRow>
            </DataListItem>
            <DataListItem aria-labelledby="Demo-item4">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell isFilled={false} key="buttons4">
                      <Flex direction={{ default: 'column' }}>
                        <FlexItem>
                          <Content component="small">patternfly</Content>
                        </FlexItem>
                        <FlexItem>
                          <Content component="small">
                            Working repo for
                            <a href="http://www.patternfly.org/">PatternFly</a>
                          </Content>
                        </FlexItem>
                        <FlexItem>
                          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                            <FlexItem>
                              <CodeBranchIcon />
                              10
                            </FlexItem>
                            <FlexItem>
                              <CodeIcon /> 4
                            </FlexItem>
                            <FlexItem>
                              <CubeIcon /> 5
                            </FlexItem>
                            <FlexItem> Updated 2 days ago</FlexItem>
                          </Flex>
                        </FlexItem>
                      </Flex>
                    </DataListCell>,
                    <DataListCell isFilled={false} alignRight key="secondary content align">
                      <Flex>
                        <FlexItem>
                          <Button variant="secondary">Action</Button>
                        </FlexItem>
                        <FlexItem>
                          <a href="#">Link</a>
                        </FlexItem>
                      </Flex>
                    </DataListCell>
                  ]}
                />
              </DataListItemRow>
            </DataListItem>
            <DataListItem aria-labelledby="Demo-item5">
              <DataListItemRow>
                <DataListItemCells
                  dataListCells={[
                    <DataListCell isFilled={false} key="buttons5">
                      <Flex direction={{ default: 'column' }}>
                        <FlexItem>
                          <Content component="small">patternfly-elements</Content>
                        </FlexItem>
                        <FlexItem>
                          <Content component="small">PatternFly elements</Content>
                        </FlexItem>
                        <FlexItem>
                          <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                            <FlexItem>
                              <CodeBranchIcon /> 5
                            </FlexItem>
                            <FlexItem>
                              <CodeIcon /> 9
                            </FlexItem>
                            <FlexItem>
                              <CubeIcon /> 2
                            </FlexItem>
                            <FlexItem>
                              <CheckCircleIcon /> 11
                            </FlexItem>
                            <FlexItem>
                              <ExclamationTriangleIcon /> 4
                            </FlexItem>
                            <FlexItem>
                              <TimesCircleIcon /> 1
                            </FlexItem>
                            <FlexItem> Updated 2 days ago</FlexItem>
                          </Flex>
                        </FlexItem>
                      </Flex>
                    </DataListCell>,
                    <DataListCell isFilled={false} alignRight key="secondary content align">
                      <Flex>
                        <FlexItem>
                          <Button variant="secondary">Action</Button>
                        </FlexItem>
                        <FlexItem>
                          <a href="#">Link</a>
                        </FlexItem>
                      </Flex>
                    </DataListCell>
                  ]}
                />
              </DataListItemRow>
            </DataListItem>
          </DataList>
        </PageSection>
      </DashboardWrapper>
    </React.Fragment>
  );
};
