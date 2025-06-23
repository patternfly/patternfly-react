import {
  Fragment,
  useRef,
  useState,
  useEffect,
  ReactNode,
  FunctionComponent,
  FormEvent,
  RefObject,
  MouseEvent,
  TransitionEvent
} from 'react';
import {
  AlertGroup,
  Alert,
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Content,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ContentVariants,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownList,
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateVariant,
  Flex,
  FlexItem,
  Form,
  FormGroup,
  FormHelperText,
  FormAlert,
  FormGroupLabelHelp,
  Gallery,
  GalleryItem,
  HelperText,
  HelperTextItem,
  Icon,
  Label,
  MenuToggle,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadToggle,
  MastheadContent,
  MastheadLogo,
  Nav,
  NavItem,
  NavList,
  NavExpandable,
  NotificationBadge,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  NotificationDrawerGroup,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
  Select,
  SelectList,
  SelectOption,
  Spinner,
  SkipToContent,
  Toolbar,
  TextInput,
  ToolbarItem,
  ToolbarGroup,
  ToolbarContent,
  Tabs,
  Tab,
  TabTitleText,
  Title,
  Timestamp,
  Popover,
  ActionGroup,
  Grid,
  GridItem
} from '@patternfly/react-core';
import { Table, Thead, Tbody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import PowerOffIcon from '@patternfly/react-icons/dist/esm/icons/power-off-icon';
import PortIcon from '@patternfly/react-icons/dist/esm/icons/port-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import AutomationIcon from '@patternfly/react-icons/dist/esm/icons/automation-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.PF-HorizontalLogo-Color.svg';
import MultiContentCard from '@patternfly/react-component-groups/dist/dynamic/MultiContentCard';
import { applicationsData } from './ResourceTableData';
import SkeletonTable from '@patternfly/react-component-groups/dist/dynamic/SkeletonTable';

export const Animations: FunctionComponent = () => {
  const drawerRef = useRef<HTMLElement | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = useState(false);
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);

  interface UnreadMap {
    [notificationId: string]: boolean;
  }

  const [activeItem, setActiveItem] = useState<number | string>(0);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [isUnreadMap, setIsUnreadMap] = useState<UnreadMap | null>({
    'notification-1': true,
    'notification-2': true,
    'notification-3': false,
    'notification-4': false
  });

  const [shouldShowNotifications, setShouldShowNotifications] = useState(true);

  interface ActionsMenu {
    [toggleId: string]: boolean;
  }

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const [isActionsMenuOpen, setIsActionsMenuOpen] = useState<ActionsMenu | {}>({});

  const [selectedTab, setSelectedTab] = useState(0);

  const [shouldNotify, setShouldNotify] = useState(false);
  const prevUnreadCountRef = useRef(0);

  const getNumberUnread = () => {
    if (!isUnreadMap) {
      return 0;
    }
    return Object.values(isUnreadMap).filter(Boolean).length;
  };

  const onNavSelect = (
    _event: FormEvent<HTMLInputElement>,
    selectedItem: {
      groupId: number | string | null;
      itemId: number | string;
      to: string;
    }
  ) => {
    setActiveItem(selectedItem.itemId);
    setActiveGroup(selectedItem.groupId as string | null);
  };

  const onDropdownToggle = () => setIsDropdownOpen((prevState) => !prevState);
  const onDropdownSelect = () => setIsDropdownOpen(false);
  const onKebabDropdownToggle = () => setIsKebabDropdownOpen((prevState) => !prevState);
  const onKebabDropdownSelect = () => setIsKebabDropdownOpen(false);
  const onCloseNotificationDrawer = (_event: any) => setIsDrawerExpanded((prevState) => !prevState);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsAlertVisible(true);
      setIsUnreadMap((prevUnreadMap) => {
        const newNotificationId = `notification-${Object.keys(prevUnreadMap || {}).length + 1}`;

        return {
          ...prevUnreadMap,
          [newNotificationId]: true
        };
      });
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    const currentUnread = getNumberUnread();
    if (currentUnread > prevUnreadCountRef.current) {
      setShouldNotify(true);
      setTimeout(() => setShouldNotify(false), 1000); // Reset after animation
    }
    prevUnreadCountRef.current = currentUnread;
  }, [isUnreadMap, getNumberUnread]);

  useEffect(() => {
    prevUnreadCountRef.current = getNumberUnread();
  }, [getNumberUnread]);

  const onToggle = (id: string) => {
    setIsActionsMenuOpen({ [id]: !isActionsMenuOpen[id] });
  };

  const closeActionsMenu = () => setIsActionsMenuOpen({});

  const onListItemClick = (id: string) => {
    if (!isUnreadMap) {
      return;
    }
    setIsUnreadMap({ ...isUnreadMap, [id]: false });
  };

  const markAllRead = () => setIsUnreadMap(null);

  const showNotifications = (showNotifications: boolean) => {
    setIsUnreadMap(null);
    setShouldShowNotifications(showNotifications);
  };

  const focusDrawer = (_event: any) => {
    if (drawerRef.current === null) {
      return;
    }
    const firstTabbableItem = drawerRef.current.querySelector('a, button') as
      | HTMLAnchorElement
      | HTMLButtonElement
      | null;
    firstTabbableItem?.focus();
  };

  const cards = [
    // Card 1: Performance
    <Card isFullHeight isPlain key="card-1">
      <CardHeader>
        <Content>
          <Label variant="outline" color="blue" icon={<PortIcon />}>
            Performance
          </Label>
        </Content>
      </CardHeader>
      <CardBody>
        <Content component={ContentVariants.p} className="pf-v6-u-mb-sm">
          Upgrade your kernel version to remediate ntpd time sync issues, kernel panics, network instabilities and
          issues with system performance
        </Content>
        <Content className="pf-v6-u-mb-md">
          <a href="#">378 systems</a>
        </Content>
        <Content className="pf-v6-u-mb-md">
          <Label status="danger" variant="outline">
            Incident
          </Label>
        </Content>
        <Content className="pf-v6-u-mb-md">
          <Icon size="md" isInline>
            <PowerOffIcon />
          </Icon>
          <span>
            {' '}
            System reboot <b>is not</b> required
          </span>
        </Content>
      </CardBody>
      <CardFooter>
        <Button variant="link" icon={<ArrowRightIcon />} iconPosition="end" isInline>
          View pathway
        </Button>
      </CardFooter>
    </Card>,
    // Card 2: Stability
    <Card isFullHeight isPlain key="card-2">
      <CardHeader>
        <Content>
          <Label variant="outline" color="blue" icon={<CubeIcon />}>
            Stability
          </Label>
        </Content>
      </CardHeader>
      <CardBody>
        <Content component={ContentVariants.p} className="pf-v6-u-mb-sm">
          Adjust your networking configuration to get ahead of network performance degradations and packet losses.
        </Content>
        <Content className="pf-v6-u-mb-md">
          <a href="#">211 systems</a>
        </Content>
        <Content className="pf-v6-u-mb-md">
          <Label status="danger" variant="outline">
            Incident
          </Label>
        </Content>
        <Content className="pf-v6-u-mb-md">
          <Icon size="md" isInline>
            <PowerOffIcon />
          </Icon>
          <span>
            {' '}
            System reboot <b>is</b> required
          </span>
        </Content>
      </CardBody>
      <CardFooter>
        <Button variant="link" icon={<ArrowRightIcon />} iconPosition="end" isInline>
          View pathway
        </Button>
      </CardFooter>
    </Card>,
    // Card 3: Availability
    <Card isFullHeight isPlain key="card-3">
      <CardHeader>
        <Content>
          <Label variant="outline" color="blue" icon={<AutomationIcon />}>
            Availability
          </Label>
        </Content>
      </CardHeader>
      <CardBody>
        <Content component={ContentVariants.p} className="pf-v6-u-mb-sm">
          Fine tune your Oracle DB configuration to improve database performance and avoid process failure
        </Content>
        <Content className="pf-v6-u-mb-md">
          <a href="#">166 systems</a>
        </Content>
        <Content className="pf-v6-u-mb-md">
          <Label status="danger" variant="outline">
            Incident
          </Label>
        </Content>
        <Content className="pf-v6-u-mb-md">
          <Icon size="md" isInline>
            <PowerOffIcon />
          </Icon>
          <span>
            {' '}
            System reboot <b>is not</b> required
          </span>
        </Content>
      </CardBody>
      <CardFooter>
        <Button variant="link" icon={<ArrowRightIcon />} iconPosition="end" isInline>
          View pathway
        </Button>
      </CardFooter>
    </Card>
  ];

  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Sidebar navigation">
      <NavList>
        <NavItem preventDefault id="dashboard" to="#dashboard" itemId="dashboard" isActive={activeItem === 'dashboard'}>
          Dashboard
        </NavItem>
        <NavExpandable title="Resources" groupId="resources-group" isActive={activeGroup === 'resources-group'}>
          <NavItem
            preventDefault
            id="overview"
            to="#overview"
            groupId="resources-group"
            itemId="overview"
            isActive={activeItem === 'overview'}
          >
            Overview
          </NavItem>
          <NavItem
            preventDefault
            id="health"
            to="#health"
            groupId="resources-group"
            itemId="health"
            isActive={activeItem === 'health'}
          >
            Health
          </NavItem>
        </NavExpandable>
      </NavList>
    </Nav>
  );
  const kebabDropdownItems = (
    <>
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
      <DropdownItem>
        <HelpIcon /> Help
      </DropdownItem>
    </>
  );
  const userDropdownItems = (
    <>
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user">User management</DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </>
  );
  const headerToolbar = (
    <Toolbar>
      <ToolbarContent>
        <ToolbarGroup align={{ default: 'alignEnd' }}>
          <ToolbarGroup variant="action-group-plain">
            <ToolbarItem visibility={{ default: 'visible' }} selected={isDrawerExpanded}>
              <NotificationBadge
                variant={getNumberUnread() === 0 ? 'read' : 'unread'}
                onClick={(event: any) => onCloseNotificationDrawer(event)}
                aria-label="Notifications"
                isExpanded={isDrawerExpanded}
                count={getNumberUnread()}
                shouldNotify={shouldNotify}
              />
            </ToolbarItem>
            <ToolbarGroup
              variant="action-group-plain"
              visibility={{
                default: 'hidden',
                lg: 'visible'
              }} /** the settings and help icon buttons are only visible on desktop sizes and replaced by a kebab dropdown for other sizes */
            >
              <ToolbarItem>
                <Button
                  aria-label="Settings actions"
                  className="pf-m-settings"
                  variant={ButtonVariant.plain}
                  icon={<CogIcon />}
                />
              </ToolbarItem>
              <ToolbarItem>
                <Button aria-label="Help actions" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
              </ToolbarItem>
            </ToolbarGroup>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarItem
              visibility={{
                default: 'hidden'
              }} /** this kebab dropdown replaces the icon buttons and is hidden for desktop sizes */
            >
              <Dropdown
                isOpen={isKebabDropdownOpen}
                onSelect={onKebabDropdownSelect}
                onOpenChange={setIsKebabDropdownOpen}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef: RefObject<any>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isKebabDropdownOpen}
                    onClick={onKebabDropdownToggle}
                    variant="plain"
                    aria-label="Settings and help"
                    icon={<EllipsisVIcon />}
                  />
                )}
              >
                <DropdownList>{kebabDropdownItems}</DropdownList>
              </Dropdown>
            </ToolbarItem>
            <ToolbarItem
              visibility={{ default: 'hidden', md: 'visible' }} /** this user dropdown is hidden on mobile sizes */
            >
              <Dropdown
                isOpen={isDropdownOpen}
                onSelect={onDropdownSelect}
                onOpenChange={setIsDropdownOpen}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef: RefObject<any>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isDropdownOpen}
                    onClick={onDropdownToggle}
                    icon={<Avatar src={imgAvatar} alt="" size="sm" />}
                  >
                    Username
                  </MenuToggle>
                )}
              >
                <DropdownList>{userDropdownItems}</DropdownList>
              </Dropdown>
            </ToolbarItem>
          </ToolbarGroup>
        </ToolbarGroup>
      </ToolbarContent>
    </Toolbar>
  );

  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton variant="plain" aria-label="Global navigation" isHamburgerButton />
        </MastheadToggle>
        <MastheadBrand>
          <MastheadLogo>
            <Brand src={pfLogo} alt="PatternFly" heights={{ default: '36px' }} />
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );
  const Sidebar = (
    <PageSidebar>
      <PageSidebarBody>{PageNav}</PageSidebarBody>
    </PageSidebar>
  );
  const pageId = 'main-content-page-layout-default-nav';

  const handleClick = (event) => {
    event.preventDefault();

    const mainContentElement = document.getElementById(pageId);
    if (mainContentElement) {
      mainContentElement.focus();
    }
  };

  const PageSkipToContent = (
    <SkipToContent onClick={handleClick} href={`#${pageId}`}>
      Skip to content
    </SkipToContent>
  );

  const notificationDrawerActions = (
    <>
      <DropdownItem key="markAllRead" onClick={markAllRead}>
        Mark all read
      </DropdownItem>
      <DropdownItem key="clearAll" onClick={() => showNotifications(false)}>
        Clear all
      </DropdownItem>
      <DropdownItem key="unclearLast" onClick={() => showNotifications(true)}>
        Unclear last
      </DropdownItem>
      <DropdownItem key="settings">Settings</DropdownItem>
    </>
  );
  const notificationDrawerDropdownItems = (
    <>
      <DropdownItem
        key="link"
        to="#"
        // Prevent default onClick behavior for demo purposes
        onClick={(ev: any) => ev.preventDefault()}
      >
        Link
      </DropdownItem>
      <DropdownItem key="action">Action</DropdownItem>
      <Divider component="li" key="separator" />
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>
    </>
  );
  const notificationDrawer = (
    <NotificationDrawer ref={drawerRef}>
      <NotificationDrawerHeader count={getNumberUnread()} onClose={onCloseNotificationDrawer}>
        <Dropdown
          onSelect={closeActionsMenu}
          isOpen={isActionsMenuOpen['toggle-id-0'] || false}
          id="notification-0"
          onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
          popperProps={{ position: 'right' }}
          toggle={(toggleRef: RefObject<any>) => (
            <MenuToggle
              ref={toggleRef}
              id="toggle-id-0"
              aria-label="Notification drawer actions"
              variant="plain"
              onClick={() => onToggle('toggle-id-0')}
              isExpanded={isActionsMenuOpen['toggle-id-0'] || false}
              icon={<EllipsisVIcon />}
            />
          )}
        >
          <DropdownList>{notificationDrawerActions}</DropdownList>
        </Dropdown>
      </NotificationDrawerHeader>
      <NotificationDrawerBody>
        {shouldShowNotifications && (
          <NotificationDrawerList>
            {isAlertVisible && (
              <NotificationDrawerListItem
                variant="danger"
                onClick={() => onListItemClick(`notification-${Object.keys(isUnreadMap || {}).length}`)}
                isRead={isUnreadMap === null || !isUnreadMap[`notification-${Object.keys(isUnreadMap || {}).length}`]}
              >
                <NotificationDrawerListItemHeader
                  variant="danger"
                  title="Animated alert"
                  srTitle="Danger notification:"
                >
                  <Dropdown
                    onSelect={closeActionsMenu}
                    isOpen={isActionsMenuOpen[`toggle-id-${Object.keys(isUnreadMap || {}).length}`] || false}
                    id={`notification-${Object.keys(isUnreadMap || {}).length}`}
                    onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
                    popperProps={{ position: 'right' }}
                    toggle={(toggleRef: RefObject<any>) => (
                      <MenuToggle
                        ref={toggleRef}
                        id={`toggle-id-${Object.keys(isUnreadMap || {}).length}`}
                        aria-label="Notification drawer actions"
                        variant="plain"
                        onClick={() => onToggle(`toggle-id-${Object.keys(isUnreadMap || {}).length}`)}
                        isExpanded={isActionsMenuOpen[`toggle-id-${Object.keys(isUnreadMap || {}).length}`] || false}
                        icon={<EllipsisVIcon />}
                      />
                    )}
                  >
                    <DropdownList>{notificationDrawerDropdownItems}</DropdownList>
                  </Dropdown>
                </NotificationDrawerListItemHeader>
                <NotificationDrawerListItemBody timestamp="Just now">
                  A system alert has been triggered. Please review the alert details.
                </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
            )}
            <NotificationDrawerListItem
              variant="info"
              onClick={() => onListItemClick('notification-1')}
              isRead={isUnreadMap === null || !isUnreadMap['notification-1']}
            >
              <NotificationDrawerListItemHeader
                variant="info"
                title="Unread info notification title"
                srTitle="Info notification:"
              >
                <Dropdown
                  onSelect={closeActionsMenu}
                  isOpen={isActionsMenuOpen['toggle-id-1'] || false}
                  id="notification-1"
                  onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: RefObject<any>) => (
                    <MenuToggle
                      ref={toggleRef}
                      id="toggle-id-1"
                      aria-label="Notification drawer actions"
                      variant="plain"
                      onClick={() => onToggle('toggle-id-1')}
                      isExpanded={isActionsMenuOpen['toggle-id-1'] || false}
                      icon={<EllipsisVIcon />}
                    />
                  )}
                >
                  <DropdownList>{notificationDrawerDropdownItems}</DropdownList>
                </Dropdown>
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="5 minutes ago">
                This is an info notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem
              variant="danger"
              onClick={() => onListItemClick('notification-2')}
              isRead={isUnreadMap === null || !isUnreadMap['notification-2']}
            >
              <NotificationDrawerListItemHeader
                variant="danger"
                title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                srTitle="Danger notification:"
              >
                <Dropdown
                  onSelect={closeActionsMenu}
                  isOpen={isActionsMenuOpen['toggle-id-2'] || false}
                  id="notification-2"
                  onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: RefObject<any>) => (
                    <MenuToggle
                      ref={toggleRef}
                      id="toggle-id-2"
                      aria-label="Notification drawer actions"
                      variant="plain"
                      onClick={() => onToggle('toggle-id-2')}
                      isExpanded={isActionsMenuOpen['toggle-id-2'] || false}
                      icon={<EllipsisVIcon />}
                    />
                  )}
                >
                  <DropdownList>{notificationDrawerDropdownItems}</DropdownList>
                </Dropdown>
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="10 minutes ago">
                This is a danger notification description. This is a long description to show how the title will wrap if
                it is long and wraps to multiple lines.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem
              variant="warning"
              onClick={() => onListItemClick('notification-3')}
              isRead={isUnreadMap === null || !isUnreadMap['notification-3']}
            >
              <NotificationDrawerListItemHeader
                variant="warning"
                title="Read warning notification title"
                srTitle="Warning notification:"
              >
                <Dropdown
                  onSelect={closeActionsMenu}
                  isOpen={isActionsMenuOpen['toggle-id-3'] || false}
                  id="notification-3"
                  onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: RefObject<any>) => (
                    <MenuToggle
                      ref={toggleRef}
                      id="toggle-id-3"
                      aria-label="Notification drawer actions"
                      variant="plain"
                      onClick={() => onToggle('toggle-id-3')}
                      isExpanded={isActionsMenuOpen['toggle-id-3'] || false}
                      icon={<EllipsisVIcon />}
                    />
                  )}
                >
                  <DropdownList>{notificationDrawerDropdownItems}</DropdownList>
                </Dropdown>
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="20 minutes ago">
                This is a warning notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem
              variant="success"
              onClick={() => onListItemClick('notification-4')}
              isRead={isUnreadMap === null || !isUnreadMap['notification-4']}
            >
              <NotificationDrawerListItemHeader
                variant="success"
                title="Read success notification title"
                srTitle="Success notification:"
              >
                <Dropdown
                  onSelect={closeActionsMenu}
                  isOpen={isActionsMenuOpen['toggle-id-4'] || false}
                  id="notification-4"
                  onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: RefObject<any>) => (
                    <MenuToggle
                      ref={toggleRef}
                      id="toggle-id-4"
                      aria-label="Notification drawer actions"
                      variant="plain"
                      onClick={() => onToggle('toggle-id-4')}
                      isExpanded={isActionsMenuOpen['toggle-id-4'] || false}
                      icon={<EllipsisVIcon />}
                    />
                  )}
                >
                  <DropdownList>{notificationDrawerDropdownItems}</DropdownList>
                </Dropdown>
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="30 minutes ago">
                This is a success notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
          </NotificationDrawerList>
        )}
        {!shouldShowNotifications && (
          <EmptyState headingLevel="h2" titleText="No alerts found" icon={SearchIcon} variant={EmptyStateVariant.full}>
            <EmptyStateBody>
              There are currently no alerts. There may be silenced critical alerts however.
            </EmptyStateBody>
            <EmptyStateFooter>
              <EmptyStateActions>
                <Button variant="link">Action</Button>
              </EmptyStateActions>
            </EmptyStateFooter>
          </EmptyState>
        )}
      </NotificationDrawerBody>
    </NotificationDrawer>
  );
  const EventsCard: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const selectItems = (
      <SelectList>
        <SelectOption value="Success" key="option1">
          Success
        </SelectOption>
        <SelectOption value="Error" key="option2">
          Error
        </SelectOption>
        <SelectOption value="Warning" key="option3">
          Warning
        </SelectOption>
      </SelectList>
    );

    const toggle = (toggleRef) => (
      <MenuToggle ref={toggleRef} onClick={() => setIsOpen(!isOpen)} isExpanded={isOpen} variant="plainText">
        Status
      </MenuToggle>
    );

    const headerActions = (
      <Select onSelect={() => setIsOpen(!isOpen)} onOpenChange={setIsOpen} isOpen={isOpen} toggle={toggle}>
        {selectItems}
      </Select>
    );

    return (
      <Fragment>
        <Card id="card-events-view-example">
          <CardHeader actions={{ actions: headerActions, hasNoOffset: true }}>
            <CardTitle>
              <Title headingLevel="h4" size="xl">
                Events
              </Title>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <DescriptionList>
              <DescriptionListGroup>
                <DescriptionListTerm>
                  <Flex flexWrap={{ default: 'nowrap' }}>
                    <FlexItem>
                      <Icon status="danger">
                        <ExclamationCircleIcon />
                      </Icon>
                    </FlexItem>
                    <FlexItem>
                      <span>Readiness probe failed</span>
                    </FlexItem>
                  </Flex>
                </DescriptionListTerm>
                <DescriptionListDescription>
                  Readiness probe failed: Get https://10.131.0.7:5000/healthz: dial tcp 10.131.0.7:5000: connect:
                  connection refused
                </DescriptionListDescription>
                <DescriptionListDescription>
                  <Timestamp date={new Date('2023-06-17T11:02')} dateFormat="medium" timeFormat="short" />
                </DescriptionListDescription>
              </DescriptionListGroup>
              <DescriptionListGroup>
                <DescriptionListTerm>
                  <Flex flexWrap={{ default: 'nowrap' }}>
                    <FlexItem>
                      <Icon status="success">
                        <CheckCircleIcon />
                      </Icon>
                    </FlexItem>
                    <FlexItem>
                      <span>Successful assignment</span>
                    </FlexItem>
                  </Flex>
                </DescriptionListTerm>
                <DescriptionListDescription>
                  Successfully assigned default/example to ip-10-0-130-149.ec2.internal
                </DescriptionListDescription>
                <DescriptionListDescription>
                  <Timestamp date={new Date('2023-06-17T11:13')} dateFormat="medium" timeFormat="short" />
                </DescriptionListDescription>
              </DescriptionListGroup>
              <DescriptionListGroup>
                <DescriptionListTerm>
                  <Flex flexWrap={{ default: 'nowrap' }}>
                    <FlexItem>
                      <Spinner size="md" aria-label="loading spinner" />
                    </FlexItem>
                    <FlexItem>
                      <span>Pulling image</span>
                    </FlexItem>
                  </Flex>
                </DescriptionListTerm>
                <DescriptionListDescription>Pulling image "openshift/hello-openshift"</DescriptionListDescription>
                <DescriptionListDescription>
                  <Timestamp date={new Date('2023-06-17T10:59')} dateFormat="medium" timeFormat="short" />
                </DescriptionListDescription>
              </DescriptionListGroup>
              <DescriptionListGroup>
                <DescriptionListTerm>
                  <Flex flexWrap={{ default: 'nowrap' }}>
                    <FlexItem>
                      <Icon status="success">
                        <CheckCircleIcon />
                      </Icon>
                    </FlexItem>
                    <FlexItem>
                      <span>Created container</span>
                    </FlexItem>
                  </Flex>
                </DescriptionListTerm>
                <DescriptionListDescription>Created container hello-openshift</DescriptionListDescription>
                <DescriptionListDescription>
                  <Timestamp date={new Date('2023-06-17T10:45')} dateFormat="medium" timeFormat="short" />
                </DescriptionListDescription>
              </DescriptionListGroup>
            </DescriptionList>
          </CardBody>
          <Divider />
          <CardFooter>
            <a href="#">View all events</a>
          </CardFooter>
        </Card>
      </Fragment>
    );
  };

  const CardStatus: FunctionComponent = () => {
    const [drawerExpanded, setDrawerExpanded] = useState(false);
    const handleDrawerToggleClick = () => {
      setDrawerExpanded(!drawerExpanded);
    };

    const [rowsExpanded, setRowsExpanded] = useState([false, false, false]);
    const handleToggleExpand = (_: any, rowIndex: number) => {
      const newRowsExpanded = [...rowsExpanded];
      newRowsExpanded[rowIndex] = !rowsExpanded[rowIndex];
      setRowsExpanded(newRowsExpanded);
    };

    const header = (
      <CardHeader>
        <Title headingLevel="h4" size="lg">
          Status
        </Title>
      </CardHeader>
    );

    const columns = ['Components', 'Response Rate'];

    const rows = [
      {
        content: ['API Servers', '20%'],
        child: (
          <Alert
            title="This is a critical alert that can be associated with the control panel."
            variant="danger"
            isInline
          ></Alert>
        )
      },
      {
        content: ['Controller Managers', '100%'],
        child: (
          <Alert
            title="This is a critical alert that can be associated with the control panel."
            variant="danger"
            isInline
          ></Alert>
        )
      },
      {
        content: ['etcd', '91%'],
        child: (
          <Alert
            title="This is a critical alert that can be associated with the control panel."
            variant="danger"
            isInline
          ></Alert>
        )
      }
    ];

    const popoverBodyContent = (
      <>
        <div>
          Components of the Control Panel are responsible for maintaining and reconciling the state of the cluster.
        </div>
        <Table variant="compact">
          <Thead>
            <Tr>
              <Th screenReaderText="Row expansion" />
              {columns.map((column, columnIndex) => (
                <Th key={columnIndex} modifier="fitContent">
                  {column}
                </Th>
              ))}
            </Tr>
          </Thead>
          {rows.map((row, rowIndex) => {
            const parentRow = (
              <Tr key={rowIndex}>
                <Td
                  key={`${rowIndex}_0`}
                  expand={row.child && { isExpanded: rowsExpanded[rowIndex], rowIndex, onToggle: handleToggleExpand }}
                />
                {row.content.map((cell, cellIndex) => (
                  <Td key={`${rowIndex}_${cellIndex}`} dataLabel={columns[cellIndex]} modifier="fitContent">
                    {cell}
                  </Td>
                ))}
              </Tr>
            );
            const childRow = row.child ? (
              <Tr key={`${rowIndex}_child`} isExpanded={rowsExpanded[rowIndex]}>
                <Td key={`${rowIndex}_1`} colSpan={3} dataLabel={`${rowIndex}_child`}>
                  <ExpandableRowContent>{row.child}</ExpandableRowContent>
                </Td>
              </Tr>
            ) : null;
            return (
              <Tbody key={rowIndex} isExpanded={rowsExpanded[rowIndex]}>
                {parentRow}
                {childRow}
              </Tbody>
            );
          })}
        </Table>
      </>
    );

    const body = (
      <CardBody>
        <Grid hasGutter sm={6} lg={3}>
          <GridItem>
            <Flex spaceItems={{ default: 'spaceItemsSm' }}>
              <FlexItem>
                <Icon status="success">
                  <CheckCircleIcon />
                </Icon>
              </FlexItem>
              <FlexItem>
                <span>Cluster</span>
              </FlexItem>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex spaceItems={{ default: 'spaceItemsSm' }}>
              <FlexItem>
                <Icon status="danger">
                  <ExclamationCircleIcon />
                </Icon>
              </FlexItem>
              <FlexItem>
                <Popover headerContent="Control Panel Status" bodyContent={popoverBodyContent} minWidth="400px">
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Control Panel
                  </a>
                </Popover>
              </FlexItem>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex spaceItems={{ default: 'spaceItemsSm' }}>
              <FlexItem>
                <Icon status="danger">
                  <ExclamationCircleIcon />
                </Icon>
              </FlexItem>
              <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsNone' }}>
                <FlexItem>
                  <a href="#">Operators</a>
                </FlexItem>
                <FlexItem>
                  <span>1 degraded</span>
                </FlexItem>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex spaceItems={{ default: 'spaceItemsSm' }}>
              <FlexItem>
                <Icon status="success">
                  <CheckCircleIcon />
                </Icon>
              </FlexItem>
              <Flex direction={{ default: 'column' }} spaceItems={{ default: 'spaceItemsNone' }}>
                <FlexItem>
                  <a href="#">Image Vulnerabilities</a>
                </FlexItem>
                <FlexItem>
                  <span>0 vulnerabilities</span>
                </FlexItem>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </CardBody>
    );

    const drawerTitle = (
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <FlexItem spacer={{ default: 'spacerMd' }}>
          <span>Notifications</span>
        </FlexItem>
        <Label color="red" icon={<ExclamationCircleIcon />}>
          1
        </Label>
        <Label color="orange" icon={<ExclamationTriangleIcon />}>
          3
        </Label>
        <Label color="green" icon={<CheckCircleIcon />}>
          3
        </Label>
        <Label color="blue" icon={<ExclamationCircleIcon />}>
          3
        </Label>
        <Label color="green" icon={<BellIcon />}>
          3
        </Label>
      </Flex>
    );

    const drawer = (
      <NotificationDrawer>
        <NotificationDrawerBody>
          <NotificationDrawerGroup
            count={2}
            onExpand={handleDrawerToggleClick}
            isExpanded={drawerExpanded}
            title={drawerTitle}
            headingLevel="h4"
          >
            <NotificationDrawerList isHidden={!drawerExpanded}>
              <NotificationDrawerListItem variant="danger">
                <NotificationDrawerListItemHeader
                  variant="danger"
                  headingLevel="h5"
                  title="Critical alert regarding control plane"
                />
                <NotificationDrawerListItemBody>
                  This is a long description to show how the title will wrap if it is long and wraps to multiple lines.
                </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
              <NotificationDrawerListItem variant="warning">
                <NotificationDrawerListItemHeader variant="warning" headingLevel="h5" title="Warning alert" />
                <NotificationDrawerListItemBody>
                  This is a warning notification description.
                </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
            </NotificationDrawerList>
          </NotificationDrawerGroup>
        </NotificationDrawerBody>
      </NotificationDrawer>
    );

    return (
      <Card>
        {header}
        {body}
        <Divider />
        {drawer}
      </Card>
    );
  };

  const detailStatusEvents = (
    <Gallery hasGutter style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <GalleryItem>
        <Card>
          <CardTitle>
            <Title headingLevel="h4" size="xl">
              Details
            </Title>
          </CardTitle>
          <CardBody>
            <DescriptionList>
              <DescriptionListGroup>
                <DescriptionListTerm>Cluster API Address</DescriptionListTerm>
                <DescriptionListDescription>
                  <a href="#">https://api1.devcluster.openshift.com</a>
                </DescriptionListDescription>
              </DescriptionListGroup>
              <DescriptionListGroup>
                <DescriptionListTerm>Cluster ID</DescriptionListTerm>
                <DescriptionListDescription>63b97ac1-b850-41d9-8820-239becde9e86</DescriptionListDescription>
              </DescriptionListGroup>
              <DescriptionListGroup>
                <DescriptionListTerm>Provide</DescriptionListTerm>
                <DescriptionListDescription>AWS</DescriptionListDescription>
              </DescriptionListGroup>
              <DescriptionListGroup>
                <DescriptionListTerm>OpenShift Version</DescriptionListTerm>
                <DescriptionListDescription>4.5.0.ci-2020-06-16-015028</DescriptionListDescription>
              </DescriptionListGroup>
              <DescriptionListGroup>
                <DescriptionListTerm>Update Channel</DescriptionListTerm>
                <DescriptionListDescription>stable-4.5</DescriptionListDescription>
              </DescriptionListGroup>
            </DescriptionList>
          </CardBody>
          <Divider />
          <CardFooter>
            <a href="#">View Settings</a>
          </CardFooter>
        </Card>
      </GalleryItem>
      <GalleryItem>
        <CardStatus />
      </GalleryItem>
      <GalleryItem>
        <EventsCard />
      </GalleryItem>
    </Gallery>
  );

  const expandableColumns = ['Applications', 'Server', 'Branch', 'Status'];

  interface Application {
    name: string;
    header: string;
    branch: string;
    status: string;
    details?: ReactNode;
  }

  const initialExpandedServerNames = ['Cost Management']; // Default to expanded

  const TableExpandCollapseAll: FunctionComponent = () => {
    const [areAllExpanded, setAreAllExpanded] = useState(false);
    const [collapseAllAriaLabel, setCollapseAllAriaLabel] = useState('Expand all');
    const [expandedAppNames, setExpandedAppNames] = useState<string[]>(initialExpandedServerNames);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      const allExpanded = expandedAppNames.length === applicationsData.length;
      setAreAllExpanded(allExpanded);
      setCollapseAllAriaLabel(allExpanded ? 'Collapse all' : 'Expand all');
    }, [expandedAppNames]);

    const setAppExpanded = (app: Application, isExpanding: boolean) => {
      const others = expandedAppNames.filter((n) => n !== app.name);
      setExpandedAppNames(isExpanding ? [...others, app.name] : others);
    };

    const isAppExpanded = (app: Application) => expandedAppNames.includes(app.name);

    const onCollapseAll = (_event: any, _rowIndex: number, isOpen: boolean) => {
      setExpandedAppNames(isOpen ? applicationsData.map((app) => app.name) : []);
    };

    return (
      <Fragment>
        {loading ? (
          <SkeletonTable columns={['', ...expandableColumns]} rows={8} />
        ) : (
          <Table aria-label="Collapsible table">
            <Thead>
              <Tr>
                <Th
                  expand={{
                    areAllExpanded: !areAllExpanded,
                    collapseAllAriaLabel,
                    onToggle: onCollapseAll
                  }}
                  aria-label="Row expansion"
                />
                {expandableColumns.map((column) => (
                  <Th key={column}>{column}</Th>
                ))}
              </Tr>
            </Thead>

            {applicationsData.map((app, idx) => (
              <Tbody key={app.name} isExpanded={isAppExpanded(app)}>
                <Tr>
                  <Td
                    expand={
                      app.details
                        ? {
                            rowIndex: idx,
                            isExpanded: isAppExpanded(app),
                            onToggle: () => setAppExpanded(app, !isAppExpanded(app))
                          }
                        : undefined
                    }
                  />
                  <Td>{app.name}</Td>
                  <Td>{app.header}</Td>
                  <Td>{app.branch}</Td>
                  <Td>
                    {app.status === 'Running' && <Label status="success">Running</Label>}
                    {app.status === 'Degraded' && <Label status="warning">Degraded</Label>}
                    {app.status === 'Stopped' && <Label status="danger">Stopped</Label>}
                    {app.status !== 'Running' && app.status !== 'Degraded' && app.status !== 'Stopped' && app.status}
                  </Td>
                </Tr>
                {app.details && isAppExpanded(app) && (
                  <Tr isExpanded>
                    <Td />
                    <Td colSpan={expandableColumns.length}>
                      <ExpandableRowContent>{app.details}</ExpandableRowContent>
                    </Td>
                  </Tr>
                )}
              </Tbody>
            ))}
          </Table>
        )}
      </Fragment>
    );
  };

  const EmptyStateNoMatchFound: FunctionComponent = () => (
    <EmptyState titleText="No databases found" headingLevel="h4" icon={SearchIcon}>
      <EmptyStateBody>No results match the filter criteria. Clear all filters and try again.</EmptyStateBody>
      <EmptyStateFooter>
        <EmptyStateActions>
          <Button variant="primary" onClick={handleShowForm}>
            Create a database
          </Button>
        </EmptyStateActions>
      </EmptyStateFooter>
    </EmptyState>
  );

  const CreateDatabaseForm: FunctionComponent = () => {
    const [name, setName] = useState('');
    const [isNameValid, setIsNameValid] = useState('default');
    const [email, setEmail] = useState('');
    const [version, setVersion] = useState('');
    const [isTimeZoneOpen, setIsTimeZoneOpen] = useState(false);
    const [selectedTimeZone, setSelectedTimeZone] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState('default');
    const [isSuccess, setIsSuccess] = useState(false);
    const [actionCompleted, setActionCompleted] = useState(false);

    const labelHelpRef = useRef(null);

    const handleNameChange = (_event, name: string) => {
      setName(name);
      setIsNameValid(name.length > 0 && /^[a-z0-9-]+$/.test(name) ? 'success' : 'error');
    };

    const handleEmailChange = (_event, email: string) => {
      setEmail(email);
    };

    const handleVersionChange = (_event, version: string) => {
      setVersion(version);
    };

    const handlePasswordChange = (_event, password: string) => {
      setPassword(password);
      setIsPasswordValid(
        password.length > 12 && /[0-9]/.test(password) && /[A-Z]/.test(password) ? 'success' : 'error'
      );
    };

    const onTimeZoneSelect = (_event, selection) => {
      setSelectedTimeZone(selection);
      setIsTimeZoneOpen(false);
    };

    const timeZoneToggle = (toggleRef) => (
      <MenuToggle ref={toggleRef} onClick={() => setIsTimeZoneOpen(!isTimeZoneOpen)} isExpanded={isTimeZoneOpen}>
        {selectedTimeZone || 'Select time zone'}
      </MenuToggle>
    );

    const handleSubmit = () => {
      setActionCompleted(true);
      if (
        isPasswordValid === 'success' &&
        isNameValid === 'success' &&
        selectedTimeZone.length > 0 &&
        email.includes('@') &&
        version.length > 0
      ) {
        setIsSuccess(true);
        setTimeout(() => {
          setActionCompleted(false);
          setIsSuccess(false);
        }, 4000);
      } else {
        setIsSuccess(false);
        setTimeout(() => {
          setActionCompleted(false);
          setIsSuccess(false);
        }, 4000);
      }
    };

    return (
      <Form isWidthLimited>
        {actionCompleted &&
          (isSuccess ? (
            <FormAlert>
              <AlertGroup hasAnimations>
                <Alert
                  variant="success"
                  title="Successfully created database"
                  isInline
                  timeout={3000}
                  timeoutAnimation={3000}
                />
              </AlertGroup>
            </FormAlert>
          ) : (
            <FormAlert>
              <AlertGroup hasAnimations>
                <Alert
                  variant="danger"
                  title="Failed to create database. Please ensure all fields are filled out correctly."
                  isInline
                  timeout={3000}
                  timeoutAnimation={3000}
                />
              </AlertGroup>
            </FormAlert>
          ))}
        <FormGroup
          label="Database Instance name"
          labelHelp={
            <Popover
              triggerRef={labelHelpRef}
              headerContent={<div>The name of your database</div>}
              bodyContent={
                <div>
                  <p>
                    The name of your database is used to identify it in the system. It must be unique and cannot be
                    changed later.
                  </p>
                </div>
              }
            >
              <FormGroupLabelHelp ref={labelHelpRef} aria-label="More info for name field" />
            </Popover>
          }
          isRequired
          fieldId="simple-form-name-01"
        >
          <TextInput
            isRequired
            type="text"
            id="simple-form-name-01"
            name="simple-form-name-01"
            aria-describedby="simple-form-name-01-helper"
            value={name}
            onChange={handleNameChange}
            validated={isNameValid as 'success' | 'warning' | 'error' | 'default'}
          />
          <FormHelperText>
            <HelperText>
              <HelperTextItem
                icon={isNameValid === 'success' ? <CheckCircleIcon /> : <ExclamationCircleIcon />}
                variant={isNameValid as 'success' | 'warning' | 'error' | 'default'}
              >
                Must be unique. Can only contain letters, numbers, and hyphens.
              </HelperTextItem>
            </HelperText>
          </FormHelperText>
        </FormGroup>
        <FormGroup label="Admin email" isRequired fieldId="simple-form-email-01">
          <TextInput
            isRequired
            type="email"
            id="simple-form-email-01"
            name="simple-form-email-01"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>
        <FormGroup label="Database version" fieldId="simple-form-version-01">
          <TextInput
            type="text"
            id="simple-form-version-01"
            name="simple-form-version-01"
            placeholder="12c"
            value={version}
            onChange={handleVersionChange}
          />
        </FormGroup>
        <FormGroup isRequired label="Time zone" fieldId="timezone-select">
          <Select
            id="timezone-select"
            aria-label="Select time zone"
            isOpen={isTimeZoneOpen}
            selected={selectedTimeZone}
            onSelect={onTimeZoneSelect}
            onOpenChange={setIsTimeZoneOpen}
            toggle={timeZoneToggle}
          >
            <SelectList>
              <SelectOption value="Eastern" key="eastern">
                Eastern
              </SelectOption>
              <SelectOption value="Central" key="central">
                Central
              </SelectOption>
              <SelectOption value="Pacific" key="pacific">
                Pacific
              </SelectOption>
            </SelectList>
          </Select>
        </FormGroup>
        <FormGroup label="Admin password" isRequired fieldId="simple-form-password-01">
          <TextInput
            isRequired
            type="password"
            id="simple-form-password-01"
            name="simple-form-password-01"
            placeholder="********"
            value={password}
            onChange={handlePasswordChange}
            validated={isPasswordValid as 'success' | 'warning' | 'error' | 'default'}
          />
          <FormHelperText>
            <HelperText>
              <HelperTextItem
                icon={isPasswordValid === 'success' ? <CheckCircleIcon /> : <ExclamationCircleIcon />}
                variant={isPasswordValid as 'success' | 'warning' | 'error' | 'default'}
              >
                Password must be at least 12 characters and include one uppercase letter and one number.
              </HelperTextItem>
            </HelperText>
          </FormHelperText>
        </FormGroup>
        <ActionGroup>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="link" onClick={handleShowForm}>
            Cancel
          </Button>
        </ActionGroup>
      </Form>
    );
  };

  return (
    <Fragment>
      <Page
        masthead={masthead}
        sidebar={Sidebar}
        isManagedSidebar
        notificationDrawer={notificationDrawer}
        onNotificationDrawerExpand={(
          event: MouseEvent<Element, MouseEvent> | KeyboardEvent | TransitionEvent<Element>
        ) => focusDrawer(event)}
        isNotificationDrawerExpanded={isDrawerExpanded}
        skipToContent={PageSkipToContent}
        // breadcrumb={PageBreadcrumb}
        mainContainerId={pageId}
      >
        <PageSection aria-labelledby="main-title">
          {isAlertVisible && (
            <AlertGroup hasAnimations isToast isLiveRegion>
              <Alert variant="danger" title="Animated alert" timeout timeoutAnimation={3000}>
                Something wicked this way comes
              </Alert>
            </AlertGroup>
          )}
          <Content component={ContentVariants.h1}>Resources</Content>
          <Content className="pf-v6-u-mb-md">Everything you need to know about your application</Content>
          <Tabs activeKey={selectedTab} onSelect={(_e, key) => setSelectedTab(Number(key))} aria-label="Primary tabs">
            <Tab eventKey={0} title={<TabTitleText>Overview</TabTitleText>} tabContentId="overview" />
            <Tab eventKey={1} title={<TabTitleText>Resources</TabTitleText>} tabContentId="resources" />
            <Tab eventKey={2} title={<TabTitleText>Database</TabTitleText>} tabContentId="database" />
          </Tabs>
        </PageSection>
        {selectedTab === 0 && (
          <Fragment>
            <PageSection id="overview">
              <MultiContentCard isExpandable={true} cards={cards} toggleText="Improve recommended pathways" />
            </PageSection>
            <PageSection aria-label="Detail status events">{detailStatusEvents}</PageSection>
          </Fragment>
        )}

        {selectedTab === 1 && (
          <PageSection id="resources">
            <TableExpandCollapseAll />
          </PageSection>
        )}

        {selectedTab === 2 && (
          <PageSection>{showForm ? <CreateDatabaseForm /> : <EmptyStateNoMatchFound />}</PageSection>
        )}
      </Page>
    </Fragment>
  );
};
