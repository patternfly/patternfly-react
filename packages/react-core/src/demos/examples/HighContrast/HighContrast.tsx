import {
  Alert,
  PageSection,
  Tabs,
  Tab,
  TabContent,
  TabContentBody,
  TabTitleText,
  Title,
  Content,
  DrawerHead,
  DrawerActions,
  DrawerPanelDescription,
  DrawerCloseButton,
  PageSidebar,
  PageSidebarBody,
  Nav,
  NavGroup,
  NavItem,
  Form,
  FormGroup,
  TextInput,
  FormHelperText,
  HelperText,
  HelperTextItem,
  TextArea,
  Checkbox,
  ActionGroup,
  Button,
  FormGroupLabelHelp,
  Dropdown,
  DropdownItem,
  DropdownList,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  ToolbarGroup,
  MenuToggle,
  PageToggleButton,
  Masthead,
  MastheadMain,
  MastheadToggle,
  MastheadBrand,
  MastheadContent,
  MastheadLogo,
  ButtonVariant,
  DrawerPanelBody,
  NotificationBadge,
  NotificationBadgeVariant
} from '@patternfly/react-core';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';

export const TabsOpenDemo = () => {
  const [activeTabKey, setActiveTabKey] = React.useState(0);
  const [isNavOpen, setIsNavOpen] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);

  // Toggle currently active tab
  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex);
  };

  const onCloseClick = () => {
    setIsDrawerOpen(false);
  };

  const [isChecked, setIsChecked] = React.useState(true);

  const pageForm = (
    <Form>
      <FormGroup label="Name" isRequired fieldId="horizontal-form-name">
        <TextInput
          isRequired
          type="text"
          id="horizontal-form-name"
          aria-describedby="horizontal-form-name-helper"
          name="horizontal-form-name"
          value="John Doe"
        />
        <FormHelperText>
          <HelperText>
            <HelperTextItem variant="success">Valid name</HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
      <FormGroup label="Email" isRequired fieldId="horizontal-form-email">
        <TextInput
          isRequired
          type="text"
          id="horizontal-form-email"
          name="horizontal-form-email"
          value="John_doe@gmail"
        />
        <FormHelperText>
          <HelperText>
            <HelperTextItem variant="error">Invalid email</HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
      <FormGroup
        label="Options"
        isStack
        isRequired
        fieldId="horizontal-form-checkbox-group"
        role="group"
        labelHelp={<FormGroupLabelHelp aria-label="" />}
      >
        <Checkbox label="Option 1" id="alt-form-checkbox-1" name="alt-form-checkbox-1" />
        <Checkbox
          label="Option 2"
          id="alt-form-checkbox-2"
          name="alt-form-checkbox-2"
          isChecked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <Checkbox label="Option 3" id="alt-form-checkbox-3" name="alt-form-checkbox-3" />
      </FormGroup>
      <FormGroup
        label="Description"
        fieldId="horizontal-form-select"
        isRequired
        labelHelp={<FormGroupLabelHelp aria-label="" />}
      >
        <TextArea autoResize />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary">Submit</Button>
        <Button variant="link">Cancel</Button>
      </ActionGroup>
    </Form>
  );

  const drawer = (
    <>
      <DrawerHead>
        <Content component="h2">Drawer title</Content>
        <DrawerActions>
          <DrawerCloseButton onClick={onCloseClick} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelDescription>Drawer panel description</DrawerPanelDescription>
      <DrawerPanelBody>Drawer panel body</DrawerPanelBody>
    </>
  );

  const [activeItem, setActiveItem] = React.useState(4);
  const onNavSelect = (_event: React.FormEvent<HTMLInputElement>, result: any) => {
    setActiveItem(result.itemId);
  };
  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Global">
      <NavGroup title="Management">
        <NavItem itemId={0} isActive={activeItem === 0} to="#dashboard">
          Dashboard
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1} to="#directory">
          Directory
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2} to="#schedule">
          Schedule
        </NavItem>
      </NavGroup>
      <NavGroup title="Admin">
        <NavItem itemId={3} isActive={activeItem === 3} to="#library">
          Library
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4} to="#builder">
          Builder
        </NavItem>
        <NavItem itemId={5} isActive={activeItem === 5} to="#tracker">
          Tracker
        </NavItem>
      </NavGroup>
      <NavGroup title="User">
        <NavItem itemId={6} isActive={activeItem === 6} to="#apps">
          Apps
        </NavItem>
        <NavItem itemId={7} isActive={activeItem === 7} to="#community">
          Community
        </NavItem>
      </NavGroup>
    </Nav>
  );

  const sidebar = (
    <PageSidebar isSidebarOpen={isNavOpen}>
      <div className="pf-v6-c-page__sidebar-header">
        <PageSidebarBody>
          <Title headingLevel="h6">PatternFly high contrast mode</Title>
        </PageSidebarBody>
      </div>
      <PageSidebarBody>{PageNav}</PageSidebarBody>
    </PageSidebar>
  );

  const [isUserDropdownOpen, setIsUserDropdownOpen] = React.useState(false);

  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = React.useState(false);
  const [selectedRole, setSelectedRole] = React.useState('Administrator');

  const roles = ['Administrator', 'Member', 'Guest'];
  const roleDropdownItems = roles.map((role) => (
    <DropdownItem key={role} isSelected={selectedRole === role} value={role}>
      {role}
    </DropdownItem>
  ));

  const onRoleDropdownToggle = () => {
    setIsRoleDropdownOpen(!isRoleDropdownOpen);
  };

  const onRoleDropdownSelect = (_event: any, value: string | number | undefined) => {
    setIsRoleDropdownOpen(false);
    setSelectedRole(typeof value === 'string' ? value : '');
  };

  const userDropdownItems = (
    <>
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user">User management</DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </>
  );

  const onUserDropdownToggle = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const onUserDropdownSelect = () => {
    setIsUserDropdownOpen(false);
  };

  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton
            isSidebarOpen={isNavOpen}
            variant="plain"
            aria-label="Global navigation"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <MastheadBrand>
          <MastheadLogo>
            <svg height="40px" viewBox="0 0 158 158" className="pf-logo">
              <title>PF-HorizontalLogo-Color</title>
              <defs>
                <linearGradient x1="68%" y1="2.25860997e-13%" x2="32%" y2="100%" id="linearGradient-website-masthead">
                  <stop stopColor="#2B9AF3" offset="0%"></stop>
                  <stop stopColor="#73BCF7" stopOpacity="0.502212631" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(0.000000, 0.000000)">
                  <path
                    d="M61.826087,0 L158,0 L158,96.173913 L147.695652,96.173913 C100.271201,96.173913 61.826087,57.7287992 61.826087,10.3043478 L61.826087,0 L61.826087,0 Z"
                    fill="var(--pf-t--color--blue--50)"
                  ></path>
                  <path
                    d="M158,3.43478261 L65.2608696,158 L138,158 C149.045695,158 158,149.045695 158,138 L158,3.43478261 L158,3.43478261 Z"
                    fill="url(#linearGradient-website-masthead)"
                  ></path>
                  <path
                    d="M123.652174,-30.9130435 L30.9130435,123.652174 L103.652174,123.652174 C114.697869,123.652174 123.652174,114.697869 123.652174,103.652174 L123.652174,-30.9130435 L123.652174,-30.9130435 Z"
                    fill="url(#linearGradient-website-masthead)"
                    transform="translate(77.282609, 46.369565) scale(1, -1) rotate(90.000000) translate(-77.282609, -46.369565) "
                  ></path>
                </g>
              </g>
            </svg>
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        <Toolbar id="toolbar" isStatic>
          <ToolbarContent>
            <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
              <Dropdown
                isOpen={isRoleDropdownOpen}
                onSelect={onRoleDropdownSelect}
                onOpenChange={setIsRoleDropdownOpen}
                toggle={(toggleRef: React.RefObject<any>) => (
                  <MenuToggle
                    ref={toggleRef}
                    // icon={<MagicIcon color="var(--pf-t--global--color--brand--default)" />}
                    onClick={onRoleDropdownToggle}
                  >
                    {selectedRole}
                  </MenuToggle>
                )}
              >
                <DropdownList>{roleDropdownItems}</DropdownList>
              </Dropdown>
            </ToolbarItem>
            <ToolbarGroup
              variant="action-group-plain"
              align={{ default: 'alignEnd' }}
              gap={{ default: 'gapNone', md: 'gapMd' }}
            >
              <ToolbarItem>
                <NotificationBadge
                  variant={NotificationBadgeVariant.read}
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  aria-label="Basic notification badge with read variant"
                  isExpanded={isDrawerOpen}
                />
              </ToolbarItem>
              <ToolbarGroup variant="action-group-plain" visibility={{ default: 'hidden', lg: 'visible' }}>
                <ToolbarItem>
                  <Button
                    aria-label="Settings"
                    variant={ButtonVariant.plain}
                    icon={<CogIcon />}
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  />
                </ToolbarItem>
                <ToolbarItem>
                  <Button
                    aria-label="Help"
                    variant={ButtonVariant.plain}
                    icon={<QuestionCircleIcon />}
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  />
                </ToolbarItem>
              </ToolbarGroup>
            </ToolbarGroup>
            <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
              <Dropdown
                isOpen={isUserDropdownOpen}
                onSelect={onUserDropdownSelect}
                onOpenChange={setIsUserDropdownOpen}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef: React.RefObject<any>) => (
                  <MenuToggle ref={toggleRef} isExpanded={isUserDropdownOpen} onClick={onUserDropdownToggle}>
                    John Doe
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

  return (
    <DashboardWrapper
      breadcrumb={<></>}
      sidebar={sidebar}
      notificationDrawer={drawer}
      isNotificationDrawerExpanded={isDrawerOpen}
      masthead={masthead}
    >
      <PageSection isWidthLimited>
        <Content>
          <h1>High contrast mode demo</h1>
          <p>Description</p>
        </Content>
      </PageSection>
      <PageSection type="tabs" isWidthLimited>
        <Tabs activeKey={activeTabKey} onSelect={handleTabClick} usePageInsets id="open-tabs-example-tabs-list">
          <Tab eventKey={0} title={<TabTitleText>Create new</TabTitleText>} tabContentId={`tabContent${0}`} />
          <Tab eventKey={1} title={<TabTitleText>Templates</TabTitleText>} tabContentId={`tabContent${1}`} />
        </Tabs>
      </PageSection>
      <PageSection isWidthLimited padding={{ default: 'noPadding' }}>
        <TabContent key={0} eventKey={0} id={`tabContent${0}`} activeKey={activeTabKey} hidden={0 !== activeTabKey}>
          <PageSection>
            <Alert isInline variant="danger" title="Danger alert title" ouiaId="DangerAlert" />
          </PageSection>
          <PageSection>{pageForm}</PageSection>
        </TabContent>
        <TabContent key={1} eventKey={1} id={`tabContent${1}`} activeKey={activeTabKey} hidden={1 !== activeTabKey}>
          <TabContentBody>
            <Content>
              <p>Templates description</p>
            </Content>
          </TabContentBody>
        </TabContent>
      </PageSection>
    </DashboardWrapper>
  );
};
