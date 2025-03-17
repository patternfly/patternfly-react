import { Fragment, useState } from 'react';
import {
  Button,
  Content,
  ContentVariants,
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
  ToolbarContent,
  PaginationVariant
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import { rows } from '@patternfly/react-core/dist/esm/demos/sampleData';

export const DataListStaticBottomPagination: React.FunctionComponent = () => {
  const [page, setPage] = useState<number | undefined>(1);
  const [perPage, setPerPage] = useState<number>(10);
  const [paginatedRows, setPaginatedRows] = useState(rows.slice(0, 10));

  const handleSetPage = (
    _evt: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPage: number,
    _perPage: number | undefined,
    startIdx: number | undefined,
    endIdx: number | undefined
  ) => {
    setPaginatedRows(rows?.slice(startIdx, endIdx));
    setPage(newPage);
  };

  const handlePerPageSelect = (
    _evt: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPerPage: number,
    newPage: number | undefined,
    startIdx: number | undefined,
    endIdx: number | undefined
  ) => {
    setPaginatedRows(rows.slice(startIdx, endIdx));
    setPage(newPage);
    setPerPage(newPerPage);
  };

  const renderPagination = (variant: PaginationVariant, isCompact: boolean, isSticky: boolean, isStatic: boolean) => (
    <Pagination
      id={`datalist-${variant}-pagination`}
      variant={variant}
      itemCount={rows.length}
      page={page}
      perPage={perPage}
      isCompact={isCompact}
      isSticky={isSticky}
      isStatic={isStatic}
      onSetPage={handleSetPage}
      onPerPageSelect={handlePerPageSelect}
      titles={{
        paginationAriaLabel: `${variant} pagination`
      }}
    />
  );

  const toolbarItems = (
    <Fragment>
      <ToolbarItem>
        <MenuToggle
          aria-label="Select data list items"
          splitButtonItems={[
            <MenuToggleCheckbox
              id="split-dropdown-checkbox"
              key="split-dropdown-checkbox"
              aria-label={'Select all data list items'}
            />
          ]}
        ></MenuToggle>
      </ToolbarItem>
      <ToolbarItem>
        <MenuToggle>Filter by creator name</MenuToggle>
      </ToolbarItem>
      <ToolbarItem>
        <OverflowMenu breakpoint="md">
          <OverflowMenuItem>
            <Button variant="primary">Create instance</Button>
          </OverflowMenuItem>
          <OverflowMenuControl hasAdditionalOptions>
            <MenuToggle aria-label="Toolbar kebab overflow menu" variant="plain">
              <EllipsisVIcon />
            </MenuToggle>
          </OverflowMenuControl>
        </OverflowMenu>
      </ToolbarItem>
      <ToolbarItem variant="pagination" align={{ default: 'alignEnd' }}>
        {renderPagination(PaginationVariant.top, true, false, false)}
      </ToolbarItem>
    </Fragment>
  );

  return (
    <DashboardWrapper mainContainerId="main-content-datalist-view-pagination" breadcrumb={null}>
      <PageSection>
        <Content>
          <Content component="h1">Projects</Content>
          <Content component="p">This is a demo that showcases PatternFly Data List</Content>
        </Content>
      </PageSection>
      <PageSection isFilled>
        <Toolbar id="toolbar-group-types">
          <ToolbarContent>{toolbarItems}</ToolbarContent>
        </Toolbar>
        <DataList aria-label="Demo data list">
          {paginatedRows.map((row, rowIndex) => {
            const { name, threads, applications, workspaces, lastModified } = row;
            return (
              <DataListItem aria-labelledby={`Demo-item-${rowIndex}`} key={rowIndex}>
                <DataListItemRow>
                  <DataListItemCells
                    dataListCells={[
                      <DataListCell isFilled={false} key="buttons1">
                        <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsMd' }}>
                          <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsNone' }}>
                            <FlexItem>
                              <Content id={`Demo-item-${rowIndex}`} component={ContentVariants.p}>
                                {name}
                              </Content>
                            </FlexItem>
                            <FlexItem>
                              <Content component={ContentVariants.small}>
                                Working repo for
                                <a href="http://www.patternfly.org/">PatternFly</a>
                              </Content>
                            </FlexItem>
                          </Flex>
                          <Flex flexWrap={{ default: 'wrap' }}>
                            <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                              <FlexItem>
                                <CodeBranchIcon /> {threads}
                              </FlexItem>
                            </Flex>
                            <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                              <FlexItem>
                                <CodeIcon /> {applications}
                              </FlexItem>
                            </Flex>
                            <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                              <FlexItem>
                                <CubeIcon /> {workspaces}
                              </FlexItem>
                            </Flex>
                            <FlexItem> Updated {lastModified}</FlexItem>
                          </Flex>
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
            );
          })}
        </DataList>
        {renderPagination(PaginationVariant.bottom, false, false, true)}
      </PageSection>
    </DashboardWrapper>
  );
};
