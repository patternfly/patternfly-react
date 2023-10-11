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
  const [translation, setTranslation] = React.useState(translationsEn);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);

  const columns = [
    translation.table.columns.servers,
    translation.table.columns.status,
    translation.table.columns.location,
    translation.table.columns.modified,
    translation.table.columns.url
  ];
  const numRows = 25;
  const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const createRows = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      const num = i + 1;
      const rowObj = {
        name: translation.table.rows.node + num,
        status: [
          translation.table.rows.status.stopped,
          translation.table.rows.status.running,
          translation.table.rows.status.down,
          translation.table.rows.status.needsMaintenance
        ][getRandomInteger(0, 3)],
        location: [
          translation.table.rows.locations.raleigh,
          translation.table.rows.locations.boston,
          translation.table.rows.locations.atlanta,
          translation.table.rows.locations.sanFrancisco
        ][getRandomInteger(0, 3)],
        lastModified: [
          translation.table.rows.lastModified.oneHr,
          translation.table.rows.lastModified.threeHrs,
          translation.table.rows.lastModified.fiveHrs,
          translation.table.rows.lastModified.sevenMins,
          translation.table.rows.lastModified.fortyTwoMins,
          translation.table.rows.lastModified.twoDays,
          translation.table.rows.lastModified.oneMonth
        ][getRandomInteger(0, 6)],
        url: 'http://www.redhat.com/en/office-locations/node' + num
      };
      rows.push(rowObj);
    }

    return rows;
  };

  const rows = createRows();
  const [managedRows, setManagedRows] = React.useState(rows);
  const [paginatedRows, setPaginatedRows] = React.useState(rows.slice(0, 10));
  const [isDirRTL, setIsDirRTL] = React.useState(false);

  const switchTranslation = () => {
    setIsDirRTL((prevIsDirRTL) => !prevIsDirRTL);
    setTranslation((prevTranslation) => (prevTranslation === translationsEn ? translationsHe : translationsEn));
  };

  React.useEffect(() => {
    const newRows = createRows();
    setManagedRows(newRows);
    setPaginatedRows(newRows.slice((page - 1) * perPage, page * perPage));
  }, [translation]);

  React.useEffect(() => {
    const html = document.querySelector('html');
    html.dir = isDirRTL ? 'rtl' : 'ltr';
  }, [isDirRTL]);

  // Pagination logic

  const handleSetPage = (_evt, newPage, _perPage, startIdx, endIdx) => {
    setPaginatedRows(managedRows.slice(startIdx, endIdx));
    setPage(newPage);
  };

  const handlePerPageSelect = (_evt, newPerPage, _newPage, startIdx, endIdx) => {
    setPaginatedRows(managedRows.slice(startIdx, endIdx));
    setPerPage(newPerPage);
  };

  const renderPagination = (variant, isCompact) => (
    <Pagination
      isCompact={isCompact}
      itemCount={managedRows.length}
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

  // Commented out for linting
  // const navItems = {
  //   systemPanel: {
  //     url: '#system-panel'
  //   },
  //   policy: {
  //     url: '#policy'
  //   },
  //   authentication: {
  //     url: '#authentication'
  //   },
  //   networkServices: {
  //     url: '#network-services'
  //   },
  //   server: {
  //     url: 'sub-category'
  //   }
  // };

  const renderLabel = (labelText) => {
    switch (labelText) {
      case 'Running':
      case 'רץ':
        return (
          <Label
            color="green"
            icon={
              <Icon shouldMirrorRTL>
                <WalkingIcon />
              </Icon>
            }
          >
            {translation.table.rows.status.running}
          </Label>
        );
      case 'Stopped':
      case 'עצר':
        return (
          <Label icon={<i className="fas fa-octagon"></i>} color="red">
            {translation.table.rows.status.stopped}
          </Label>
        );
      case 'Needs maintenance':
      case 'זקוק לתחזוקה':
        return (
          <Label icon={<ToolsIcon />} color="blue">
            {translation.table.rows.status.needsMaintenance}
          </Label>
        );
      case 'Down':
      case 'מטה':
        return (
          <Label icon={<ClockIcon />} color="orange">
            {translation.table.rows.status.down}
          </Label>
        );
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
                onClick={switchTranslation}
              >
                {translation.switchBtn}
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
          {translation.nav.systemPanel}
        </NavItem>
        <NavItem itemId={1} to="#policy">
          {translation.nav.policy}
        </NavItem>
        <NavItem itemId={2} to="#auth">
          {translation.nav.authentication}
        </NavItem>
        <NavItem itemId={3} to="#network">
          {translation.nav.networkServices}
        </NavItem>
        <NavItem itemId={4} to="#server">
          {translation.nav.server}
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
                {translation.breadcrumbs[key]}
                {breadcrumbItems.length}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </PageBreadcrumb>
        <PageSection variant="light">
          <TextContent>
            <Text component={TextVariants.h1}>{translation.title}</Text>
            <Text component={TextVariants.p}>{translation.body}</Text>
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
                          );
                        } else if (key === 'url') {
                          return (
                            <Td key={key} dataLabel="URL" modifier="truncate">
                              <TableText>
                                <a href="#">{row.url}</a>
                              </TableText>
                            </Td>
                          );
                        } else {
                          return (
                            <Td key={key} dataLabel={key === 'lastModified' ? 'Last modified' : capitalize(key)}>
                              {value}
                            </Td>
                          );
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
