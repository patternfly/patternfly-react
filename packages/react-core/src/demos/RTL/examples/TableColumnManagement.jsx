import * as React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Icon,
  Label,
  Nav,
  NavItem,
  NavList,
  Page,
  PageBreadcrumb,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  Pagination,
  PaginationVariant,
  Text,
  TextContent,
  TextVariants,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';

import { Table, TableText, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import { capitalize } from '../../../helpers';
import { rows, columns } from '@patternfly/react-table/src/docs/demos/table-demos/sampleData';
import translationsEn from './examples/translations.en.json';
import translationsHe from './examples/translations.he.json';
import AlignRightIcon from '@patternfly/react-icons/dist/esm/icons/align-right-icon';
import WalkingIcon from '@patternfly/react-icons/dist/esm/icons/walking-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';

export const ColumnManagementAction = () => {
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const [paginatedRows, setPaginatedRows] = React.useState(rows);

  // const [isRTL, setIsRTL] = React.useState(false);
  const [t, setT] = React.useState(translationsEn);
  // const isRTL = React.useContext(RtlContext);

  const switchRTL = () => {
    const html = document.querySelector('html');
    const curRTL = html.dir !== 'rtl' ? false : true;
    setT(curRTL ? translationsEn : translationsHe);
    html.dir = curRTL ? 'ltr' : 'rtl';
  };

  // Pagination logic
  const handleSetPage = (_evt, newPage) => {
    setPage(newPage);
  };

  const handlePerPageSelect = (_evt, newPerPage) => {
    setPerPage(newPerPage);
  };

  const renderPagination = (variant, isCompact) => (
    <Pagination
      isCompact={isCompact}
      itemCount={rows.length}
      page={page}
      perPage={perPage}
      onSetPage={handleSetPage}
      onPerPageSelect={handlePerPageSelect}
      variant={variant}
      titles={{
        paginationAriaLabel: `${variant} pagination`
      }}
    />
  );

  const breadcrumbItems = {
    home: {
      url: '#home'
    },
    category: {
      url: '#category'
    },
    subCategory: {
      url: 'sub-category'
    }
  };

  React.useEffect(() => {
    setPaginatedRows(rows.slice((page - 1) * perPage, page * perPage - 1));
  }, [rows, page, perPage]);

  const renderLabel = (labelText) => {
    switch (labelText) {
      case 'Running':
        return (
          <Label
            color="green"
            icon={
              <Icon shouldMirrorRTL>
                <WalkingIcon />
              </Icon>
            }
          >
            {labelText}
          </Label>
        );
      case 'Stopped':
        return <Label color="orange">{labelText}</Label>;
      case 'Needs Maintenance':
        return <Label color="blue">{labelText}</Label>;
      case 'Down':
        return <Label color="red">{labelText}</Label>;
    }
  };

  const toolbarItems = (
    <React.Fragment>
      <Toolbar id="rtl-table-column-management">
        <ToolbarContent>
          <ToolbarGroup variant="button-group">
            <ToolbarItem>
              <Button
                variant="primary"
                icon={
                  <Icon shouldMirrorRTL>
                    <AlignRightIcon />
                  </Icon>
                }
                iconPosition="end"
                onClick={switchRTL}
              >
                {t.switchBtn}
              </Button>
              <ToolbarItem></ToolbarItem>
              <Button variant="secondary">Some other action</Button>
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarGroup variant="icon-button-group">
            <ToolbarItem>
              <Button variant="plain" aria-label="Sort columns">
                <SortAmountDownIcon aria-hidden="true" />
              </Button>
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarItem variant="pagination">{renderPagination(PaginationVariant.top)}</ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    </React.Fragment>
  );

  const pageNav = (
    <Nav>
      <NavList>
        <NavItem itemId={0} isActive to="#system-panel">
          System panel
        </NavItem>
        <NavItem itemId={1} to="#policy">
          Policy
        </NavItem>
        <NavItem itemId={2} to="#auth">
          Authentication
        </NavItem>
        <NavItem itemId={3} to="#network">
          Network services
        </NavItem>
        <NavItem itemId={4} to="#server">
          Server
        </NavItem>
      </NavList>
    </Nav>
  );

  const sidebar = (
    <PageSidebar>
      <PageSidebarBody>{pageNav}</PageSidebarBody>
    </PageSidebar>
  );

  return (
    <React.Fragment>
      <Page sidebar={sidebar}>
        <PageBreadcrumb>
          <Breadcrumb>
            {Object.keys(breadcrumbItems).map((key, idx, arr) => (
              <BreadcrumbItem key={idx} isActive={arr.length - 1 === idx} to={`${breadcrumbItems[key].url}`}>
                {t.breadcrumbs[key]}
                {breadcrumbItems.length}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </PageBreadcrumb>
        <PageSection variant="light">
          <TextContent>
            <Text component={TextVariants.h1}>{t.title}</Text>
            <Text component={TextVariants.p}>{t.body}</Text>
          </TextContent>
        </PageSection>
        <PageSection>
          <Card>
            {toolbarItems}
            <Table variant="compact" aria-label="Column Management Table">
              <Thead>
                <Tr>
                  {columns.map((column, columnIndex) => (
                    <Th key={columnIndex}>{column}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {paginatedRows.map((row, rowIndex) => (
                  <Tr key={rowIndex}>
                    <>
                      {Object.entries(row).map(([key, value]) => {
                        if (key === 'status') {
                          <Td key={value} width={15} dataLabel="Status">
                            {renderLabel(value)}
                          </Td>;
                        } else if (key === 'url') {
                          <Td key={value} dataLabel="URL" modifier="truncate">
                            <TableText>
                              <a href="#">{row.url}</a>
                            </TableText>
                          </Td>;
                        } else {
                          <Td
                            key={value}
                            width={key === 'name' ? 15 : 10}
                            dataLabel={key === 'lastModified' ? 'Last modified' : capitalize(key)}
                          >
                            {value}
                          </Td>;
                        }
                      })}
                    </>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            {renderPagination(PaginationVariant.bottom)}
          </Card>
        </PageSection>
      </Page>
    </React.Fragment>
  );
};
