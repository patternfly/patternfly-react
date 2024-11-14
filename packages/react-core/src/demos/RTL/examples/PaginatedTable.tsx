import * as React from 'react';

import {
  Avatar,
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonVariant,
  Card,
  Content,
  Divider,
  Dropdown,
  DropdownGroup,
  DropdownItem,
  DropdownList,
  Icon,
  Label,
  Masthead,
  MastheadMain,
  MastheadLogo,
  MastheadContent,
  MastheadBrand,
  MastheadToggle,
  MenuToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageBreadcrumb,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
  Pagination,
  PaginationVariant,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Truncate
} from '@patternfly/react-core';

import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import translationsEn from './examples/translations.en.json';
import translationsHe from './examples/translations.he.json';
import AlignRightIcon from '@patternfly/react-icons/dist/esm/icons/align-right-icon';
import ToolsIcon from '@patternfly/react-icons/dist/esm/icons/tools-icon';
import ClockIcon from '@patternfly/react-icons/dist/esm/icons/clock-icon';
import WalkingIcon from '@patternfly/react-icons/dist/esm/icons/walking-icon';
import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.svg';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import HandPaperIcon from '@patternfly/react-icons/dist/esm/icons/hand-paper-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';

interface Row {
  name: string;
  status: string;
  location: string;
  lastModified: string;
  url: string;
}

interface Translation {
  [key: string]: any;
}

export const PaginatedTableAction: React.FunctionComponent = () => {
  const [translation, setTranslation] = React.useState<Translation>(translationsEn);
  const [page, setPage] = React.useState<number>(1);
  const [perPage, setPerPage] = React.useState<number>(10);

  const columns = [
    translation.table.columns.servers,
    translation.table.columns.status,
    translation.table.columns.location,
    translation.table.columns.modified,
    translation.table.columns.url
  ];

  const numRows: number = 25;
  const getRandomInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
  const createRows = () => {
    const rows: Row[] = [];
    for (let i = 0; i < numRows; i++) {
      const num = i + 1;
      const rowObj: Row = {
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
  const [paginatedRows, setPaginatedRows] = React.useState<Row[]>(rows.slice(0, 10));
  const [isDirRTL, setIsDirRTL] = React.useState<boolean>(false);

  const capitalize = (input: string) => input[0].toUpperCase() + input.substring(1);

  const switchTranslation = () => {
    setIsDirRTL((prevIsDirRTL) => !prevIsDirRTL);
    setTranslation((prevTranslation: string) => (prevTranslation === translationsEn ? translationsHe : translationsEn));
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

  const handleSetPage = (
    _evt: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPage: number,
    _perPage: number | undefined,
    startIdx: number | undefined,
    endIdx: number | undefined
  ) => {
    setPaginatedRows(managedRows.slice(startIdx, endIdx));
    setPage(newPage);
  };

  const handlePerPageSelect = (
    _evt: React.MouseEvent | React.KeyboardEvent | MouseEvent,
    newPerPage: number,
    _newPage: number,
    startIdx: number | undefined,
    endIdx: number | undefined
  ) => {
    setPaginatedRows(managedRows.slice(startIdx, endIdx));
    setPerPage(newPerPage);
  };

  const renderPagination = (variant: PaginationVariant) => {
    const { pagination } = translation;

    return (
      <Pagination
        itemCount={managedRows.length}
        page={page}
        perPage={perPage}
        onSetPage={handleSetPage}
        onPerPageSelect={handlePerPageSelect}
        variant={variant}
        titles={{
          paginationAriaLabel: pagination?.[`${variant}VariantAriaLabel`] || `${variant} pagination`,
          ofWord: pagination?.ofWord,
          items: pagination?.items,
          perPageSuffix: pagination?.perPageSuffix,
          toNextPageAriaLabel: pagination?.toNextPageAriaLabel,
          toPreviousPageAriaLabel: pagination?.toPreviousPageAriaLabel,
          toFirstPageAriaLabel: pagination?.toFirstPageAriaLabel,
          toLastPageAriaLabel: pagination?.perPageSuffix,
          currPageAriaLabel: pagination?.currPageAriaLabel
        }}
      />
    );
  };

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

  const renderLabel = (labelText: string) => {
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
          <Label
            icon={
              <Icon shouldMirrorRTL>
                <HandPaperIcon />
              </Icon>
            }
            color="red"
          >
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
      <Toolbar id="rtl-paginated-table">
        <ToolbarContent>
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
          </ToolbarItem>
          <ToolbarItem variant="pagination">{renderPagination(PaginationVariant.top)}</ToolbarItem>
        </ToolbarContent>
      </Toolbar>
    </React.Fragment>
  );

  const pageNav = (
    <Nav aria-label={translation.nav.ariaLabel || undefined}>
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

  const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState<boolean>(false);
  const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = React.useState<boolean>(false);

  const kebabDropdownItems = (
    <>
      <DropdownItem icon={<CogIcon />}>{translation.kebabDropdown.settings}</DropdownItem>
      <DropdownItem icon={<HelpIcon />}>{translation.kebabDropdown.help}</DropdownItem>
    </>
  );

  const userDropdownItems = (
    <>
      <DropdownItem key="group 2 profile">{translation.userDropdown.myProfile}</DropdownItem>
      <DropdownItem key="group 2 user">{translation.userDropdown.userManagement}</DropdownItem>
      <DropdownItem key="group 2 logout">{translation.userDropdown.logout}</DropdownItem>
    </>
  );

  const onDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onDropdownSelect = () => {
    setIsDropdownOpen(false);
  };

  const onKebabDropdownToggle = () => {
    setIsKebabDropdownOpen(!isKebabDropdownOpen);
  };

  const onKebabDropdownSelect = () => {
    setIsKebabDropdownOpen(false);
  };

  const onFullKebabToggle = () => {
    setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen);
  };

  const onFullKebabSelect = () => {
    setIsFullKebabDropdownOpen(false);
  };

  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton variant="plain" aria-label={translation.mastheadToggleAriaLabel}>
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <MastheadBrand>
          <MastheadLogo dir="ltr">
            <Brand src={pfLogo} alt="PatternFly" heights={{ default: '36px' }} />
            {translation.brandLanguage && <span className="brand-language">{translation.brandLanguage}</span>}
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        <Toolbar id="toolbar" isStatic>
          <ToolbarContent>
            <ToolbarGroup
              variant="action-group-plain"
              align={{ default: 'alignEnd' }}
              gap={{ default: 'gapNone', md: 'gapMd' }}
            >
              <ToolbarGroup variant="action-group-plain" visibility={{ default: 'hidden', lg: 'visible' }}>
                <ToolbarItem>
                  <Button
                    aria-label={translation.kebabDropdown.settings}
                    variant={ButtonVariant.plain}
                    icon={<CogIcon />}
                  />
                </ToolbarItem>
                <ToolbarItem>
                  <Button
                    aria-label={translation.kebabDropdown.help}
                    variant={ButtonVariant.plain}
                    icon={<QuestionCircleIcon />}
                  />
                </ToolbarItem>
              </ToolbarGroup>
              <ToolbarItem visibility={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
                <Dropdown
                  isOpen={isKebabDropdownOpen}
                  onSelect={onKebabDropdownSelect}
                  onOpenChange={setIsKebabDropdownOpen}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isKebabDropdownOpen}
                      onClick={onKebabDropdownToggle}
                      variant="plain"
                      aria-label={translation.kebabDropdown.settingsAndHelp}
                      icon={<EllipsisVIcon aria-hidden="true" />}
                    />
                  )}
                >
                  <DropdownList>{kebabDropdownItems}</DropdownList>
                </Dropdown>
              </ToolbarItem>
              <ToolbarItem visibility={{ md: 'hidden' }}>
                <Dropdown
                  isOpen={isFullKebabDropdownOpen}
                  onSelect={onFullKebabSelect}
                  onOpenChange={setIsFullKebabDropdownOpen}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isFullKebabDropdownOpen}
                      onClick={onFullKebabToggle}
                      variant="plain"
                      aria-label={translation.kebabAndUserDropdown.toolbarMenuAriaLabel}
                      icon={<EllipsisVIcon aria-hidden="true" />}
                    />
                  )}
                >
                  <DropdownGroup key="group 2" aria-label={translation.kebabAndUserDropdown.groupAriaLabel}>
                    <DropdownList>{userDropdownItems}</DropdownList>
                  </DropdownGroup>
                  <Divider />
                  <DropdownList>{kebabDropdownItems}</DropdownList>
                </Dropdown>
              </ToolbarItem>
            </ToolbarGroup>
            <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
              <Dropdown
                isOpen={isDropdownOpen}
                onSelect={onDropdownSelect}
                onOpenChange={setIsDropdownOpen}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isDropdownOpen}
                    onClick={onDropdownToggle}
                    icon={<Avatar src={imgAvatar} alt="" size="sm" />}
                  >
                    {translation.username}
                  </MenuToggle>
                )}
              >
                <DropdownList>{userDropdownItems}</DropdownList>
              </Dropdown>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </MastheadContent>
    </Masthead>
  );

  const breadcrumbItemsLength = Object.keys(breadcrumbItems).length;

  return (
    <React.Fragment>
      <Page sidebar={sidebar} masthead={masthead} isManagedSidebar>
        <PageBreadcrumb>
          <Breadcrumb aria-label={translation.breadcrumbs.ariaLabel || undefined}>
            {Object.keys(breadcrumbItems).map((key: string, idx: number, arr: string[]) => (
              <BreadcrumbItem key={idx} isActive={arr.length - 1 === idx} to={`${breadcrumbItems[key].url}`}>
                {translation.breadcrumbs[key]}
                {breadcrumbItemsLength}
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </PageBreadcrumb>
        <PageSection variant="light">
          <Content>
            <h1>{translation.title}</h1>
            <p>{translation.body}</p>
          </Content>
        </PageSection>
        <PageSection>
          <Card>
            {toolbarItems}
            <Table variant="compact" aria-label={translation.table.ariaLabel}>
              <Thead>
                <Tr>
                  {columns.map((column, columnIndex) => (
                    <Th key={columnIndex}>{column}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {paginatedRows.map((row: Row, rowIndex: number) => (
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
                            // Passing dir="rtl" forces truncation at the start of the URL,
                            // resulting in the unique portion being visible regardless of language
                            <Td key={key} dataLabel="URL" width={15}>
                              <a href="#">
                                <Truncate content={row.url} position={isDirRTL ? 'end' : 'start'} />
                              </a>
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
