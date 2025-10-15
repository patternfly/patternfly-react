// eslint-disable-next-line no-restricted-imports
import React, { Fragment, useState } from 'react';
import {
  ActionList,
  ActionListItem,
  Button,
  Page,
  PageSection,
  Tabs,
  Tab,
  TabsComponent,
  TabTitleText,
  Brand,
  DropdownItem,
  Dropdown,
  MenuToggle,
  Avatar,
  DropdownList,
  MenuToggleElement,
  ToolbarGroup,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Title,
  SearchInput,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  ToggleGroupItem,
  ToggleGroup,
  Gallery,
  Pagination,
  Flex,
  FlexItem
} from '@patternfly/react-core';
import { MessageBar } from '@patternfly/chatbot';
import { ActionsColumn } from '@patternfly/react-table';
import { DataViewTable } from '@patternfly/react-data-view/dist/dynamic/DataViewTable';
import { DataViewToolbar } from '@patternfly/react-data-view/dist/dynamic/DataViewToolbar';
import { DataViewFilters } from '@patternfly/react-data-view/dist/dynamic/DataViewFilters';
import { DataViewTextFilter } from '@patternfly/react-data-view/dist/dynamic/DataViewTextFilter';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import pfLogo from '../../assets/PF-HorizontalLogo-Color.svg';
import pfLogoSm from '../../assets/PF-IconLogo-color.svg';
import imgAvatar from '../../assets/avatarImg.svg';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import ListIcon from '@patternfly/react-icons/dist/esm/icons/list-icon';
import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';

export const Compass: React.FunctionComponent = () => {
  const [activeSection, setActiveSection] = useState(4);
  const [activeSubsection, setActiveSubsection] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [integrationTableDisplay, setIntegrationTableDisplay] = useState(false);

  const onDropdownSelect = (
    _event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    _value: string | number | undefined
  ) => {
    setIsDropdownOpen(false);
  };

  const onDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTabClick = (
    _event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveSection(tabIndex as number);
  };

  const handleSubsectionClick = (
    _event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveSubsection(tabIndex as number);
  };

  const userDropdownItems = (
    <>
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user">User management</DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </>
  );

  const userDropdown = (
    <Dropdown
      isOpen={isDropdownOpen}
      onSelect={onDropdownSelect}
      onOpenChange={(isOpen: boolean) => setIsDropdownOpen(isOpen)}
      popperProps={{ position: 'right' }}
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        <MenuToggle
          ref={toggleRef}
          onClick={onDropdownToggle}
          isExpanded={isDropdownOpen}
          icon={<Avatar src={imgAvatar} alt="" size="sm" />}
        >
          Ned Username
        </MenuToggle>
      )}
    >
      <DropdownList>{userDropdownItems}</DropdownList>
    </Dropdown>
  );

  const compassAutomations = (
    <Fragment>
      <Page id="pf-compass-center" className="pf-m-no-sidebar">
        <PageSection>Title section: Automations</PageSection>
        <PageSection>Content section</PageSection>
      </Page>
    </Fragment>
  );

  const integrations = [
    {
      id: 1,
      name: 'Ansible Automation Platform',
      description:
        'Ansible Automation Platform is an entrprise framework for building and operating IT automation at scale.',
      status: 'Connected',
      type: 'MCP Server',
      url: 'ansible.example.com'
    },
    {
      id: 2,
      name: 'Github',
      description: 'Github is a code hosting platform for version control and collaboration. ',
      status: 'Disconnected',
      type: 'Version Control',
      url: 'github.example.com'
    },
    {
      id: 3,
      name: 'Kubernetes Cluster',
      description: 'A Kubernetes cluster is a set of node machines for running containerized applications.',
      status: 'Connected',
      type: 'MCP Server',
      url: 'k8s.example.com'
    }
  ];

  const rowActions = [
    {
      title: 'Some action',
      onClick: () => console.log('clicked on Some action') // eslint-disable-line no-console
    },
    {
      title: <div>Another action</div>,
      onClick: () => console.log('clicked on Another action') // eslint-disable-line no-console
    },
    {
      isSeparator: true
    },
    {
      title: 'Third action',
      onClick: () => console.log('clicked on Third action') // eslint-disable-line no-console
    }
  ];

  const rows = integrations.map(({ name, type }) => [
    name,
    type,
    { cell: <ActionsColumn items={rowActions} />, props: { isActionCell: true } }
  ]);

  const columns = ['Name', 'Type'];

  const cardIntegration = (
    <>
      <Toolbar>
        <ToolbarContent>
          <ToolbarGroup>
            <ToolbarItem>
              <SearchInput aria-label="Integrations example search input" />
            </ToolbarItem>
          </ToolbarGroup>
          <ToggleGroup>
            <ToggleGroupItem
              icon={<ThIcon />}
              aria-label="grid icon button"
              isSelected={!integrationTableDisplay}
              onChange={() => setIntegrationTableDisplay(false)}
            ></ToggleGroupItem>
            <ToggleGroupItem
              icon={<ListIcon />}
              aria-label="list icon button"
              isSelected={integrationTableDisplay}
              onChange={() => setIntegrationTableDisplay(true)}
            ></ToggleGroupItem>
          </ToggleGroup>
        </ToolbarContent>
      </Toolbar>
      <Gallery hasGutter aria-label="Selectable card container">
        {integrations.map((product) => (
          <Card isCompact isClickable isSelectable key={product.name} id={product.name.replace(/ /g, '-')}>
            <CardHeader
              actions={{
                actions: (
                  <>
                    <Dropdown
                      isOpen={false}
                      onOpenChange={() => {}}
                      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                        <MenuToggle
                          ref={toggleRef}
                          aria-label={`${product.name} actions`}
                          variant="plain"
                          icon={<EllipsisVIcon />}
                        />
                      )}
                      popperProps={{ position: 'right' }}
                    />
                  </>
                )
              }}
            >
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardBody>{product.description}</CardBody>
          </Card>
        ))}
      </Gallery>
    </>
  );
  const dataViewIntegration = (
    <>
      <DataViewToolbar
        clearAllFilters={() => {}}
        filters={
          <DataViewFilters onChange={() => {}} values={{}}>
            <DataViewTextFilter filterId="name" title="Name" placeholder="Filter by name" />
            <DataViewTextFilter filterId="branch" title="Branch" placeholder="Filter by branch" />
          </DataViewFilters>
        }
        actions={
          <ToggleGroup>
            <ToggleGroupItem
              icon={<ThIcon />}
              aria-label="grid icon button"
              isSelected={!integrationTableDisplay}
              onChange={() => setIntegrationTableDisplay(true)}
            ></ToggleGroupItem>
            <ToggleGroupItem
              icon={<ListIcon />}
              aria-label="list icon button"
              isSelected={integrationTableDisplay}
              onChange={() => setIntegrationTableDisplay(false)}
            ></ToggleGroupItem>
          </ToggleGroup>
        }
        pagination={<Pagination page={1} perPage={10} isCompact />}
      />
      <DataViewTable aria-label="Integrations table" columns={columns} rows={rows} />
    </>
  );

  const compassIntegrations = (
    <Fragment>
      <Page id="pf-compass-center" className="pf-m-no-sidebar">
        <PageSection>
          <Flex>
            <FlexItem grow={{ default: 'grow' }}>
              <Title headingLevel="h1">Integrations</Title>
            </FlexItem>
            <FlexItem>
              <Toolbar>
                <ToolbarContent>
                  <ToolbarGroup>
                    <ToolbarItem>
                      <Button variant="primary">Add integration</Button>
                    </ToolbarItem>
                  </ToolbarGroup>
                  <ToolbarGroup>
                    <ToolbarItem>
                      <Button icon={<EllipsisVIcon />} variant="plain" />
                    </ToolbarItem>
                  </ToolbarGroup>
                </ToolbarContent>
              </Toolbar>
            </FlexItem>
          </Flex>
        </PageSection>
        <PageSection>
          {integrationTableDisplay && dataViewIntegration}
          {!integrationTableDisplay && cardIntegration}
        </PageSection>
      </Page>
    </Fragment>
  );

  return (
    <div id="pf-compass">
      <div id="pf-compass__north">
        <div id="brand-logo">
          <Brand src={pfLogo} alt="Patternfly" widths={{ default: '40px', sm: '60px', md: '220px' }}>
            <source media="(min-width: 1200px)" srcSet={pfLogo} />
            <source media="(min-width: 992px)" srcSet={pfLogo} />
            <source media="(min-width: 768px)" srcSet={pfLogo} />
            <source media="(min-width: 576px)" srcSet={pfLogoSm} />
            <source media="(min-width: 320px)" srcSet={pfLogoSm} />
            <source srcSet={pfLogo} />
          </Brand>
        </div>
        <div id="navigation">
          <Tabs
            activeKey={activeSection}
            onSelect={handleTabClick}
            component={TabsComponent.nav}
            aria-label="Tabs in the nav element example"
          >
            <Tab eventKey={0} title={<TabTitleText>Dashboard</TabTitleText>} isDisabled />
            <Tab eventKey={1} title={<TabTitleText>Builder</TabTitleText>} isDisabled />
            <Tab eventKey={2} title={<TabTitleText>Automations</TabTitleText>} />
            <Tab eventKey={3} title={<TabTitleText>Approvals</TabTitleText>} isDisabled />
            <Tab eventKey={4} title={<TabTitleText>Configuration</TabTitleText>}>
              <Tabs activeKey={activeSubsection} isSubtab onSelect={handleSubsectionClick}>
                <Tab eventKey={0} title={<TabTitleText>Overview</TabTitleText>} isDisabled />
                <Tab eventKey={1} title={<TabTitleText>Integrations</TabTitleText>} />
                <Tab eventKey={2} title={<TabTitleText>Credentials</TabTitleText>} isDisabled />
                <Tab eventKey={3} title={<TabTitleText>Settings</TabTitleText>} isDisabled />
              </Tabs>
            </Tab>
            <Tab eventKey={5} title={<TabTitleText>Support</TabTitleText>} isDisabled />
          </Tabs>
        </div>
        <div id="user-menu">{userDropdown}</div>
      </div>
      <div id="pf-compass__west">
        <ActionList>
          <ActionListItem>
            <Button icon={<PlayIcon />} />
          </ActionListItem>
        </ActionList>
      </div>
      {activeSection === 4 && activeSubsection === 1 ? compassIntegrations : compassAutomations}
      <div id="pf-compass__east">
        <ActionList>
          <ActionListItem>
            <Button icon={<PlayIcon />} />
          </ActionListItem>
        </ActionList>
      </div>
      <div id="pf-compass__south">
        <MessageBar onSendMessage={() => {}} hasAttachButton={false} />
      </div>
    </div>
  );
};
