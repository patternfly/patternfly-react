import React from 'react';
import {
  Button,
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
  PageSectionVariants,
  Pagination,
  Text,
  TextContent,
  TextVariants,
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
import { rows, getRandomInteger } from '@patternfly/react-table/dist/esm/demos/sampleData';

export const DataListPagination: React.FunctionComponent = () => {
  const [page, setPage] = React.useState<number | undefined>(1);
  const [perPage, setPerPage] = React.useState<number>(10);
  const [paginatedRows, setPaginatedRows] = React.useState(rows.slice(0, 10));

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

  const renderPagination = (id: string, variant: PaginationVariant, isCompact: boolean, isSticky: boolean) => (
    <Pagination
      id={id}
      variant={variant}
      itemCount={rows.length}
      page={page}
      perPage={perPage}
      isCompact={isCompact}
      isSticky={isSticky}
      onSetPage={handleSetPage}
      onPerPageSelect={handlePerPageSelect}
      titles={{
        paginationAriaLabel: `${variant} pagination`
      }}
    />
  );

  const toolbarItems = (
    <React.Fragment>
      <ToolbarItem variant="bulk-select">
        <MenuToggle
          aria-label="Select data list items"
          splitButtonOptions={{
            items: [
              <MenuToggleCheckbox
                id="split-dropdown-checkbox"
                key="split-dropdown-checkbox"
                aria-label={'Select all data list items'}
              />
            ]
          }}
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
            <MenuToggle aria-label="Toolbar kebab overflow menu" variant="plain">
              <EllipsisVIcon />
            </MenuToggle>
          </OverflowMenuControl>
        </OverflowMenu>
      </ToolbarItem>
      <ToolbarItem variant="pagination" align={{ default: 'alignRight' }}>
        {renderPagination('top-pagination', PaginationVariant.top, false, false)}
      </ToolbarItem>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <DashboardWrapper mainContainerId="main-content-datalist-view-pagination" breadcrumb={null}>
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Projects</Text>
            <Text component="p">This is a demo that showcases PatternFly Data List</Text>
          </TextContent>
        </PageSection>
        <PageSection isFilled>
          <Toolbar id="toolbar-group-types">
            <ToolbarContent>{toolbarItems}</ToolbarContent>
          </Toolbar>
          <DataList aria-label="Demo data list">
            {paginatedRows.map((row, rowIndex) => {
              const { name, threads, applications, workspaces } = row;
              return (
                <DataListItem aria-labelledby={`Demo-item-${rowIndex}`} key={rowIndex}>
                  <DataListItemRow>
                    <DataListItemCells
                      dataListCells={[
                        <DataListCell isFilled={false} key="buttons1">
                          <Flex direction={{ default: 'column' }}>
                            <FlexItem>
                              <Text id={`Demo-item-${rowIndex}`} component={TextVariants.p}>
                                {name}
                              </Text>
                            </FlexItem>
                            <FlexItem>
                              <Text component={TextVariants.small}>
                                Working repo for
                                <a href="http://www.patternfly.org/">PatternFly</a>
                              </Text>
                            </FlexItem>
                            <FlexItem>
                              <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                                <FlexItem>
                                  <CodeBranchIcon /> {threads}
                                </FlexItem>
                                <FlexItem>
                                  <CodeIcon /> {applications}
                                </FlexItem>
                                <FlexItem>
                                  <CubeIcon /> {workspaces}
                                </FlexItem>
                                <FlexItem> Updated {getRandomInteger(1, rowIndex)} days ago</FlexItem>
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
              );
            })}
          </DataList>
          {renderPagination('bottom-pagination', PaginationVariant.bottom, true, true)}
        </PageSection>
      </DashboardWrapper>
    </React.Fragment>
  );
};
