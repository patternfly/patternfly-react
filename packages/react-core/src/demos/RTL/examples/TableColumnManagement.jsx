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
import translationsEn from './examples/translations.en.json';
import translationsHe from './examples/translations.he.json';
import AlignRightIcon from '@patternfly/react-icons/dist/esm/icons/align-right-icon';
import ToolsIcon from '@patternfly/react-icons/dist/esm/icons/tools-icon';
import ClockIcon from '@patternfly/react-icons/dist/esm/icons/clock-icon';
import WalkingIcon from '@patternfly/react-icons/dist/esm/icons/walking-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';

export const ColumnManagementAction = () => {
  const [t, setT] = React.useState(translationsEn);

  const columns = [
    t.table.columns.servers,
    t.table.columns.status,
    t.table.columns.location,
    t.table.columns.modified,
    t.table.columns.url,
  ];
  const numRows = 25;
  const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const tableRows = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      const num = (i + 1);
      rowObj = {
        name: t.table.rows.node + num,
        status: [t.table.rows.status.stopped, t.table.rows.status.running, t.table.rows.status.down, t.table.rows.status.needsMaintenance][getRandomInteger(0, 3)],
        location: [t.table.rows.locations.raleigh, t.table.rows.locations.boston, t.table.rows.locations.atlanta, t.table.rows.locations.sanFrancisco][getRandomInteger(0, 3)],
        lastModified: [t.table.rows.lastModified.oneHr, t.table.rows.lastModified.threeHrs, t.table.rows.lastModified.fiveHrs, t.table.rows.lastModified.sevenMins, t.table.rows.lastModified.fortyTwoMins, t.table.rows.lastModified.twoDays, t.table.rows.lastModified.oneMonth][getRandomInteger(0, 6)],
        url: 'http://www.redhat.com/en/office-locations/node' + num
      };
      rows.push(rowObj);
    }
    return rows;
  }

  const defaultRows = tableRows();
  const [managedRows, setManagedRows] = React.useState(defaultRows);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const [paginatedRows, setPaginatedRows] = React.useState(tableRows());
  const [isDirRTL, setDirRTL] = React.useState(false);

  const switchRTL = () => {
    setDirRTL((prevState) => !prevState);
    setManagedRows(tableRows());
  };

  React.useEffect(() => {
    const html = document.querySelector('html');
    setT(isDirRTL ? translationsHe : translationsEn);
    html.dir = isDirRTL ? 'rtl' : 'ltr';
  }, [isDirRTL]);

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
      itemCount={tableRows().length}
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

  const navItems = {
    systemPanel: {
      url: '#system-panel'
    },
    policy: {
      url: '#policy'
    },
    authentication: {
      url: '#authentication'
    },
    networkServices: {
      url: '#network-services'
    },
    server: {
      url: 'sub-category'
    }
  };

  React.useEffect(() => {
    setPaginatedRows(managedRows.slice((page - 1) * perPage, page * perPage - 1));
  }, [managedRows, page, perPage]);

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
            {t.table.rows.status.running}
          </Label>
        );
      case 'Stopped':
        return <Label icon={<i className="fas fa-octagon"></i>} color="red">{t.table.rows.status.stopped}</Label>;
      case 'Needs maintenance':
        return <Label icon={<ToolsIcon />} color="blue">{t.table.rows.status.needsMaintenance}</Label>;
      case 'Down':
        return <Label icon={<ClockIcon />} color="orange">{t.table.rows.status.down}</Label>;
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
          {t.nav.systemPanel}
        </NavItem>
        <NavItem itemId={1} to="#policy">
          {t.nav.policy}
        </NavItem>
        <NavItem itemId={2} to="#auth">
          {t.nav.authentication}
        </NavItem>
        <NavItem itemId={3} to="#network">
          {t.nav.networkServices}
        </NavItem>
        <NavItem itemId={4} to="#server">
          {t.nav.server}
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
                          return (
                            <Td key={key} width={15} dataLabel="Status">
                              {renderLabel(value)}
                            </Td>
                          )
                        } else if (key === 'url') {
                          return (
                            <Td key={key} dataLabel="URL" modifier="truncate">
                              <TableText>
                                <a href="#">{row.url}</a>
                              </TableText>
                            </Td>
                          )
                        } else {
                          return (
                            <Td
                              key={key}
                              dataLabel={key === 'lastModified' ? 'Last modified' : capitalize(key)}
                            >
                              {value}
                            </Td>
                          )
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
