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
  NotificationBadge,
  NotificationBadgeVariant,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  MenuToggleElement,
  DropdownItem
} from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import { Ref, RefObject, useState, MouseEvent as ReactMouseEvent, FormEvent } from 'react';
import { DashboardWrapper } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

type Validate = 'success' | 'warning' | 'error' | 'default';
const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]+$/i;

export const TabsOpenDemo = () => {
  const [activeTabKey, setActiveTabKey] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isOpenMap, setIsOpenMap] = useState(new Array(7).fill(false));
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [validatedEmail, setValidatedEmail] = useState<Validate>('default');
  const [emailHelperText, setEmailHelperText] = useState('Enter your email to continue');
  const [isChecked, setIsChecked] = useState(true);

  const onToggle = (index: number) => () => {
    const newState = [...isOpenMap.slice(0, index), !isOpenMap[index], ...isOpenMap.slice(index + 1)];
    setIsOpenMap(newState);
  };

  const onSelect = () => {
    setIsOpenMap(new Array(7).fill(false));
  };

  const onDrawerClose = (_event: ReactMouseEvent<Element, MouseEvent> | KeyboardEvent) => {
    setIsOpenMap(new Array(7).fill(false));
    setIsDrawerOpen(false);
  };

  const [isOpen0, isOpen1, isOpen2, isOpen3, isOpen4, isOpen5, isOpen6] = isOpenMap;
  const dropdownItems = (
    <>
      <DropdownItem>Action</DropdownItem>
      <DropdownItem
        to="#default-link2"
        // Prevent the default onClick functionality for example purposes
        onClick={(ev: any) => ev.preventDefault()}
      >
        Link
      </DropdownItem>
      <DropdownItem isDisabled>Disabled Action</DropdownItem>
      <DropdownItem isDisabled to="#default-link4">
        Disabled Link
      </DropdownItem>
    </>
  );

  // Toggle currently active tab
  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex);
  };

  const handleEmailChange = (_event, newEmail: string) => {
    setEmail(newEmail);
  };

  const handleNameChange = (_event, newName: string) => {
    setName(newName);
  };

  const handleDescriptionChange = (_event, newDesc: string) => {
    setDescription(newDesc);
  };

  const invalidateEmail = () => {
    setEmailHelperText('Invalid email address');
    setValidatedEmail('error');
  };

  const resetForm = () => {
    setEmail('');
    setName('');
    setDescription('');
    setIsChecked(false);
    setValidatedEmail('default');
    setEmailHelperText('Enter your email to continue');
  };

  const handleSubmit = (_event) => {
    if (emailRegex.test(email)) {
      resetForm();
    } else {
      invalidateEmail();
    }
  };

  const handleCancel = () => {
    resetForm();
  };

  const generateAlertContent = () => {
    if (validatedEmail === 'error') {
      return 'Please provide a valid email address';
    }
  };

  const pageForm = (
    <Form>
      <FormGroup label="Name" isRequired fieldId="horizontal-form-name">
        <TextInput
          isRequired
          type="text"
          id="horizontal-form-name"
          aria-describedby="horizontal-form-name-helper"
          name="horizontal-form-name"
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup label="Email" isRequired fieldId="horizontal-form-email">
        <TextInput
          isRequired
          type="text"
          id="horizontal-form-email"
          name="horizontal-form-email"
          value={email}
          onChange={handleEmailChange}
          validated={validatedEmail}
        />
        <FormHelperText>
          <HelperText>
            <HelperTextItem
              variant={validatedEmail}
              {...(validatedEmail === 'error' && { icon: <ExclamationCircleIcon /> })}
            >
              {emailHelperText}
            </HelperTextItem>
          </HelperText>
        </FormHelperText>
      </FormGroup>
      <FormGroup
        label="Options"
        isStack
        isRequired
        fieldId="horizontal-form-checkbox-group"
        role="group"
        labelHelp={<FormGroupLabelHelp aria-label="Help" />}
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
        labelHelp={<FormGroupLabelHelp aria-label="Help" />}
      >
        <TextArea id="horizontal-form-select" autoResize value={description} onChange={handleDescriptionChange} />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="link" onClick={handleCancel}>
          Cancel
        </Button>
      </ActionGroup>
    </Form>
  );

  const drawer = (
    <>
      <NotificationDrawer>
        <NotificationDrawerHeader count={3} onClose={onDrawerClose}>
          <Dropdown
            onSelect={onSelect}
            isOpen={isOpen0}
            onOpenChange={() => setIsOpenMap(new Array(7).fill(false))}
            popperProps={{ position: 'right' }}
            toggle={(toggleRef: Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                isExpanded={isOpen0}
                onClick={onToggle(0)}
                variant="plain"
                aria-label={`Basic example header kebab toggle`}
                icon={<EllipsisVIcon />}
              />
            )}
          >
            <DropdownList>{dropdownItems}</DropdownList>
          </Dropdown>
        </NotificationDrawerHeader>
        <NotificationDrawerBody>
          <NotificationDrawerList aria-label="Notifications in the basic example">
            <NotificationDrawerListItem variant="info">
              <NotificationDrawerListItemHeader
                variant="info"
                title="Unread info notification title"
                srTitle="Info notification:"
              >
                <Dropdown
                  onSelect={onSelect}
                  isOpen={isOpen1}
                  onOpenChange={() => setIsOpenMap(new Array(7).fill(false))}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: Ref<MenuToggleElement>) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isOpen0}
                      onClick={onToggle(1)}
                      variant="plain"
                      aria-label={`Basic example notification 1 kebab toggle`}
                      icon={<EllipsisVIcon />}
                    />
                  )}
                >
                  <DropdownList>{dropdownItems}</DropdownList>
                </Dropdown>
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="5 minutes ago">
                This is an info notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem variant="danger">
              <NotificationDrawerListItemHeader
                variant="danger"
                title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                srTitle="Danger notification:"
              >
                <Dropdown
                  onSelect={onSelect}
                  isOpen={isOpen2}
                  onOpenChange={() => setIsOpenMap(new Array(7).fill(false))}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: Ref<MenuToggleElement>) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isOpen2}
                      onClick={onToggle(2)}
                      variant="plain"
                      aria-label={`Basic example notification 2 kebab toggle`}
                      icon={<EllipsisVIcon />}
                    />
                  )}
                >
                  <DropdownList>{dropdownItems}</DropdownList>
                </Dropdown>
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="10 minutes ago">
                This is a danger notification description. This is a long description to show how the title will wrap if
                it is long and wraps to multiple lines.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem variant="danger">
              <NotificationDrawerListItemHeader
                truncateTitle={1}
                variant="danger"
                title="Unread danger notification title. This is a long title to show how the title will be truncated if it is long and will be shown in a single line."
                srTitle="Danger notification:"
              >
                <Dropdown
                  onSelect={onSelect}
                  isOpen={isOpen3}
                  onOpenChange={() => setIsOpenMap(new Array(7).fill(false))}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: Ref<MenuToggleElement>) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isOpen3}
                      onClick={onToggle(3)}
                      variant="plain"
                      aria-label={`Basic example notification 3 kebab toggle`}
                      icon={<EllipsisVIcon />}
                    />
                  )}
                >
                  <DropdownList>{dropdownItems}</DropdownList>
                </Dropdown>
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="10 minutes ago">
                This is a danger notification description. This is a long description to show how the title will wrap if
                it is long and wraps to multiple lines.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem variant="warning" isRead>
              <NotificationDrawerListItemHeader
                variant="warning"
                title="Read warning notification title"
                srTitle="Warning notification:"
              >
                <Dropdown
                  onSelect={onSelect}
                  isOpen={isOpen4}
                  onOpenChange={() => setIsOpenMap(new Array(7).fill(false))}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: Ref<MenuToggleElement>) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isOpen4}
                      onClick={onToggle(4)}
                      variant="plain"
                      aria-label={`Basic example notification 4 kebab toggle`}
                      icon={<EllipsisVIcon />}
                    />
                  )}
                >
                  <DropdownList>{dropdownItems}</DropdownList>
                </Dropdown>
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="20 minutes ago">
                This is a warning notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem variant="success" isRead>
              <NotificationDrawerListItemHeader
                variant="success"
                title="Read success notification title"
                srTitle="Success notification:"
              >
                <Dropdown
                  onSelect={onSelect}
                  isOpen={isOpen5}
                  onOpenChange={() => setIsOpenMap(new Array(7).fill(false))}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: Ref<MenuToggleElement>) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isOpen5}
                      onClick={onToggle(5)}
                      variant="plain"
                      aria-label={`Basic example notification 5 kebab toggle`}
                      icon={<EllipsisVIcon />}
                    />
                  )}
                >
                  <DropdownList>{dropdownItems}</DropdownList>
                </Dropdown>
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="30 minutes ago">
                This is a success notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem isRead>
              <NotificationDrawerListItemHeader title="Read (default) notification title" srTitle="notification:">
                <Dropdown
                  onSelect={onSelect}
                  isOpen={isOpen6}
                  onOpenChange={() => setIsOpenMap(new Array(7).fill(false))}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: Ref<MenuToggleElement>) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isOpen6}
                      onClick={onToggle(6)}
                      variant="plain"
                      aria-label={`Basic example notification 6 kebab toggle`}
                      icon={<EllipsisVIcon />}
                    />
                  )}
                >
                  <DropdownList>{dropdownItems}</DropdownList>
                </Dropdown>
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="35 minutes ago">
                This is a default notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
          </NotificationDrawerList>
        </NotificationDrawerBody>
      </NotificationDrawer>
    </>
  );

  const [activeItem, setActiveItem] = useState(4);
  const onNavSelect = (_event: FormEvent<HTMLInputElement>, result: any) => {
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

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Administrator');

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
                toggle={(toggleRef: RefObject<any>) => (
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
                  <Button aria-label="Settings" variant={ButtonVariant.plain} icon={<CogIcon />} />
                </ToolbarItem>
                <ToolbarItem>
                  <Button aria-label="Help" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
                </ToolbarItem>
              </ToolbarGroup>
            </ToolbarGroup>
            <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
              <Dropdown
                isOpen={isUserDropdownOpen}
                onSelect={onUserDropdownSelect}
                onOpenChange={setIsUserDropdownOpen}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef: RefObject<any>) => (
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
            {validatedEmail === 'error' && (
              <Alert isInline variant="danger" title={generateAlertContent()} ouiaId="DangerAlert" />
            )}
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
