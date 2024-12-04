import React from 'react';
import {
  Avatar,
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonVariant,
  Content,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownList,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateVariant,
  MenuToggle,
  Nav,
  NavItem,
  NavList,
  NotificationBadge,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerGroup,
  NotificationDrawerGroupList,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  PageToggleButton,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadToggle,
  MastheadContent,
  MastheadLogo,
  Toolbar,
  ToolbarItem,
  ToolbarGroup,
  ToolbarContent
} from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.PF-HorizontalLogo-Color.svg';

export const NotificationDrawerGrouped: React.FunctionComponent = () => {
  const drawerRef = React.useRef<HTMLElement | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);
  const [isDrawerExpanded, setIsDrawerExpanded] = React.useState(false);
  const [firstDrawerGroupExpanded, setFirstDrawerGroupExpanded] = React.useState(false);
  const [secondDrawerGroupExpanded, setSecondDrawerGroupExpanded] = React.useState(true);
  const [thirdDrawerGroupExpanded, setThirdDrawerGroupExpanded] = React.useState(false);

  interface UnreadMap {
    [groupName: string]: {
      [notificationId: string]: boolean;
    } | null;
  }

  const [activeItem, setActiveItem] = React.useState<number | string>(0);
  const [isUnreadMap, setIsUnreadMap] = React.useState<UnreadMap | null>({
    'group-1': {
      'notification-5': true,
      'notification-6': true
    },
    'group-2': {
      'notification-9': true,
      'notification-10': true
    },
    'group-3': null
  });

  const [shouldShowNotifications, setShouldShowNotifications] = React.useState(true);

  interface ActionsMenu {
    [toggleId: string]: boolean;
  }

  const [isActionsMenuOpen, setIsActionsMenuOpen] = React.useState<ActionsMenu | {}>({});

  const onNavSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    selectedItem: {
      groupId: number | string;
      itemId: number | string;
      to: string;
    }
  ) => setActiveItem(selectedItem.itemId);

  const onDropdownToggle = () => setIsDropdownOpen((prevState) => !prevState);
  const onDropdownSelect = () => setIsDropdownOpen(false);
  const onKebabDropdownToggle = () => setIsKebabDropdownOpen((prevState) => !prevState);
  const onKebabDropdownSelect = () => setIsKebabDropdownOpen(false);
  const onCloseNotificationDrawer = (_event: any) => setIsDrawerExpanded((prevState) => !prevState);

  const onToggle = (id: string) => {
    setIsActionsMenuOpen({ [id]: !isActionsMenuOpen[id] });
  };

  const closeActionsMenu = () => setIsActionsMenuOpen({});

  const onListItemClick = (groupId: string, id: string) => {
    if (isUnreadMap === null) {
      return;
    }
    if (!isUnreadMap[groupId]) {
      setIsUnreadMap({ ...isUnreadMap, [groupId]: { [id]: false } });
    } else {
      setIsUnreadMap({ ...isUnreadMap, [groupId]: { ...isUnreadMap[groupId], [id]: false } });
    }
  };

  const isUnread = (groupId: string, id: string) =>
    isUnreadMap && isUnreadMap[groupId] !== null && isUnreadMap[groupId][id];

  const getNumberUnread = (groupId: string | null) => {
    if (!isUnreadMap) {
      return 0;
    }

    if (groupId) {
      const group = isUnreadMap[groupId];
      if (!group) {
        return 0;
      }
      return Object.values(group).reduce((count, value) => (value ? count + 1 : count), 0);
    }

    return Object.keys(isUnreadMap).reduce((count, groupId) => {
      const group = isUnreadMap[groupId];
      if (!group) {
        return count;
      }

      return Object.values(group).reduce((groupCount, value) => (value ? groupCount + 1 : groupCount), count);
    }, 0);
  };

  const markAllRead = () => setIsUnreadMap(null);

  const showNotifications = (showNotifications: boolean) => {
    setIsUnreadMap(null);
    setShouldShowNotifications(showNotifications);
  };

  const toggleFirstDrawer = (_event: any, value: boolean | ((prevState: boolean) => boolean)) => {
    setFirstDrawerGroupExpanded(value);
  };

  const toggleSecondDrawer = (_event: any, value: boolean | ((prevState: boolean) => boolean)) => {
    setSecondDrawerGroupExpanded(value);
  };

  const toggleThirdDrawer = (_event: any, value: boolean | ((prevState: boolean) => boolean)) => {
    setThirdDrawerGroupExpanded(value);
  };

  const focusDrawer = (_event: any) => {
    if (drawerRef.current === null) {
      return;
    }
    // Prevent the NotificationDrawer from receiving focus if a drawer group item is opened
    if (!document.activeElement?.closest(`.${drawerRef.current.className}`)) {
      const firstTabbableItem = drawerRef.current.querySelector('a, button') as
        | HTMLAnchorElement
        | HTMLButtonElement
        | null;
      firstTabbableItem?.focus();
    }
  };

  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav">
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0}>
          System Panel
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1}>
          Policy
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2}>
          Authentication
        </NavItem>
        <NavItem itemId={3} isActive={activeItem === 3}>
          Network Services
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4}>
          Server
        </NavItem>
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
                variant={getNumberUnread(null) === 0 ? 'read' : 'unread'}
                onClick={(event: any) => onCloseNotificationDrawer(event)}
                aria-label="Notifications"
                isExpanded={isDrawerExpanded}
              >
                <BellIcon />
              </NotificationBadge>
            </ToolbarItem>
            <ToolbarGroup
              variant="action-group-plain"
              visibility={{
                default: 'hidden',
                lg: 'visible'
              }} /** the settings and help icon buttons are only visible on desktop sizes and replaced by a kebab dropdown for other sizes */
            >
              <ToolbarItem>
                <Button aria-label="Settings actions" variant={ButtonVariant.plain} icon={<CogIcon />} />
              </ToolbarItem>
              <ToolbarItem>
                <Button aria-label="Help actions" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
              </ToolbarItem>
            </ToolbarGroup>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarItem
              visibility={{
                lg: 'hidden'
              }} /** this kebab dropdown replaces the icon buttons and is hidden for desktop sizes */
            >
              <Dropdown
                isOpen={isKebabDropdownOpen}
                onSelect={onKebabDropdownSelect}
                onOpenChange={setIsKebabDropdownOpen}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef: React.RefObject<any>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isKebabDropdownOpen}
                    onClick={onKebabDropdownToggle}
                    variant="plain"
                    aria-label="Settings and help"
                    icon={<EllipsisVIcon aria-hidden="true" />}
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
                toggle={(toggleRef: React.RefObject<any>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isDropdownOpen}
                    onClick={onDropdownToggle}
                    icon={<Avatar src={imgAvatar} alt="" size="sm" />}
                  >
                    John Smith
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
          <PageToggleButton variant="plain" aria-label="Global navigation">
            <BarsIcon />
          </PageToggleButton>
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

  const PageBreadcrumb = (
    <Breadcrumb>
      <BreadcrumbItem>Section home</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>
        Section landing
      </BreadcrumbItem>
    </Breadcrumb>
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
      <NotificationDrawerHeader count={getNumberUnread(null)} onClose={onCloseNotificationDrawer}>
        <Dropdown
          onSelect={closeActionsMenu}
          isOpen={isActionsMenuOpen['toggle-id-0'] || false}
          id="notification-0"
          onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
          popperProps={{ position: 'right' }}
          toggle={(toggleRef: React.RefObject<any>) => (
            <MenuToggle
              ref={toggleRef}
              id="toggle-id-0"
              aria-label="Notification drawer actions"
              variant="plain"
              onClick={() => onToggle('toggle-id-0')}
              isExpanded={isActionsMenuOpen['toggle-id-0'] || false}
              icon={<EllipsisVIcon aria-hidden="true" />}
            />
          )}
        >
          <DropdownList>{notificationDrawerActions}</DropdownList>
        </Dropdown>
      </NotificationDrawerHeader>
      <NotificationDrawerBody>
        {shouldShowNotifications && (
          <NotificationDrawerGroupList>
            <NotificationDrawerGroup
              title="First notification group"
              isExpanded={firstDrawerGroupExpanded}
              count={getNumberUnread('group-1')}
              onExpand={toggleFirstDrawer}
            >
              <NotificationDrawerList isHidden={!firstDrawerGroupExpanded}>
                <NotificationDrawerListItem
                  variant="info"
                  onClick={() => onListItemClick('group-1', 'notification-5')}
                  isRead={!isUnread('group-1', 'notification-5')}
                >
                  <NotificationDrawerListItemHeader
                    variant="info"
                    title="Unread info notification title"
                    srTitle="Info notification:"
                  >
                    <Dropdown
                      onSelect={closeActionsMenu}
                      isOpen={isActionsMenuOpen['toggle-id-5'] || false}
                      id="notification-5"
                      onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef: React.RefObject<any>) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-5"
                          aria-label="Notification drawer actions"
                          variant="plain"
                          onClick={() => onToggle('toggle-id-5')}
                          isExpanded={isActionsMenuOpen['toggle-id-5'] || false}
                          icon={<EllipsisVIcon aria-hidden="true" />}
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
                  onClick={() => onListItemClick('group-1', 'notification-6')}
                  isRead={!isUnread('group-1', 'notification-6')}
                >
                  <NotificationDrawerListItemHeader
                    variant="danger"
                    title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                    srTitle="Danger notification:"
                  >
                    <Dropdown
                      onSelect={closeActionsMenu}
                      isOpen={isActionsMenuOpen['toggle-id-6'] || false}
                      id="notification-6"
                      onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef: React.RefObject<any>) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-6"
                          aria-label="Notification drawer actions"
                          variant="plain"
                          onClick={() => onToggle('toggle-id-6')}
                          isExpanded={isActionsMenuOpen['toggle-id-6'] || false}
                          icon={<EllipsisVIcon aria-hidden="true" />}
                        />
                      )}
                    >
                      <DropdownList>{notificationDrawerDropdownItems}</DropdownList>
                    </Dropdown>
                  </NotificationDrawerListItemHeader>
                  <NotificationDrawerListItemBody timestamp="10 minutes ago">
                    This is a danger notification description. This is a long description to show how the title will
                    wrap if it is long and wraps to multiple lines.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem
                  variant="warning"
                  onClick={() => onListItemClick('group-1', 'notification-7')}
                  isRead={!isUnread('group-1', 'notification-7')}
                >
                  <NotificationDrawerListItemHeader
                    variant="warning"
                    title="Read warning notification title"
                    srTitle="Warning notification:"
                  >
                    <Dropdown
                      onSelect={closeActionsMenu}
                      isOpen={isActionsMenuOpen['toggle-id-7'] || false}
                      id="notification-7"
                      onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef: React.RefObject<any>) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-7"
                          aria-label="Notification drawer actions"
                          variant="plain"
                          onClick={() => onToggle('toggle-id-7')}
                          isExpanded={isActionsMenuOpen['toggle-id-7'] || false}
                          icon={<EllipsisVIcon aria-hidden="true" />}
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
                  onClick={() => onListItemClick('group-1', 'notification-8')}
                  isRead={!isUnread('group-1', 'notification-8')}
                >
                  <NotificationDrawerListItemHeader
                    variant="success"
                    title="Read success notification title"
                    srTitle="Success notification:"
                  >
                    <Dropdown
                      onSelect={closeActionsMenu}
                      isOpen={isActionsMenuOpen['toggle-id-8'] || false}
                      id="notification-8"
                      onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef: React.RefObject<any>) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-8"
                          aria-label="Notification drawer actions"
                          variant="plain"
                          onClick={() => onToggle('toggle-id-8')}
                          isExpanded={isActionsMenuOpen['toggle-id-8'] || false}
                          icon={<EllipsisVIcon aria-hidden="true" />}
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
            </NotificationDrawerGroup>
            <NotificationDrawerGroup
              title="Second notification group"
              isExpanded={secondDrawerGroupExpanded}
              count={getNumberUnread('group-2')}
              onExpand={toggleSecondDrawer}
            >
              <NotificationDrawerList isHidden={!secondDrawerGroupExpanded}>
                <NotificationDrawerListItem
                  variant="info"
                  onClick={() => onListItemClick('group-2', 'notification-9')}
                  isRead={!isUnread('group-2', 'notification-9')}
                >
                  <NotificationDrawerListItemHeader
                    variant="info"
                    title="Unread info notification title"
                    srTitle="Info notification:"
                  >
                    <Dropdown
                      onSelect={closeActionsMenu}
                      isOpen={isActionsMenuOpen['toggle-id-9'] || false}
                      id="notification-9"
                      onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef: React.RefObject<any>) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-9"
                          aria-label="Notification drawer actions"
                          variant="plain"
                          onClick={() => onToggle('toggle-id-9')}
                          isExpanded={isActionsMenuOpen['toggle-id-9'] || false}
                          icon={<EllipsisVIcon aria-hidden="true" />}
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
                  onClick={() => onListItemClick('group-2', 'notification-10')}
                  isRead={!isUnread('group-2', 'notification-10')}
                >
                  <NotificationDrawerListItemHeader
                    variant="danger"
                    title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                    srTitle="Danger notification:"
                  >
                    <Dropdown
                      onSelect={closeActionsMenu}
                      isOpen={isActionsMenuOpen['toggle-id-10'] || false}
                      id="notification-10"
                      onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef: React.RefObject<any>) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-10"
                          aria-label="Notification drawer actions"
                          variant="plain"
                          onClick={() => onToggle('toggle-id-10')}
                          isExpanded={isActionsMenuOpen['toggle-id-10'] || false}
                          icon={<EllipsisVIcon aria-hidden="true" />}
                        />
                      )}
                    >
                      <DropdownList>{notificationDrawerDropdownItems}</DropdownList>
                    </Dropdown>
                  </NotificationDrawerListItemHeader>
                  <NotificationDrawerListItemBody timestamp="10 minutes ago">
                    This is a danger notification description. This is a long description to show how the title will
                    wrap if it is long and wraps to multiple lines.
                  </NotificationDrawerListItemBody>
                </NotificationDrawerListItem>
                <NotificationDrawerListItem
                  variant="warning"
                  onClick={() => onListItemClick('group-2', 'notification-11')}
                  isRead={!isUnread('group-2', 'notification-11')}
                >
                  <NotificationDrawerListItemHeader
                    variant="warning"
                    title="Read warning notification title"
                    srTitle="Warning notification:"
                  >
                    <Dropdown
                      onSelect={closeActionsMenu}
                      isOpen={isActionsMenuOpen['toggle-id-11'] || false}
                      id="notification-11"
                      onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef: React.RefObject<any>) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-11"
                          aria-label="Notification drawer actions"
                          variant="plain"
                          onClick={() => onToggle('toggle-id-11')}
                          isExpanded={isActionsMenuOpen['toggle-id-11'] || false}
                          icon={<EllipsisVIcon aria-hidden="true" />}
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
                  onClick={() => onListItemClick('group-2', 'notification-12')}
                  isRead={!isUnread('group-2', 'notification-12')}
                >
                  <NotificationDrawerListItemHeader
                    variant="success"
                    title="Read success notification title"
                    srTitle="Success notification:"
                  >
                    <Dropdown
                      onSelect={closeActionsMenu}
                      isOpen={isActionsMenuOpen['toggle-id-12'] || false}
                      id="notification-12"
                      onOpenChange={(isOpen: boolean) => !isOpen && closeActionsMenu()}
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef: React.RefObject<any>) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-12"
                          aria-label="Notification drawer actions"
                          variant="plain"
                          onClick={() => onToggle('toggle-id-12')}
                          isExpanded={isActionsMenuOpen['toggle-id-12'] || false}
                          icon={<EllipsisVIcon aria-hidden="true" />}
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
            </NotificationDrawerGroup>
            <NotificationDrawerGroup
              title="Third notification group"
              isExpanded={thirdDrawerGroupExpanded}
              count={getNumberUnread('group-3')}
              onExpand={toggleThirdDrawer}
            >
              <NotificationDrawerList isHidden={!thirdDrawerGroupExpanded}>
                <EmptyState
                  headingLevel="h2"
                  titleText="No alerts found"
                  icon={SearchIcon}
                  variant={EmptyStateVariant.full}
                >
                  <EmptyStateBody>
                    There are currently no critical alerts firing. There may be firing alerts of other severities or
                    silenced critical alerts however.
                  </EmptyStateBody>
                  <EmptyStateFooter>
                    <EmptyStateActions>
                      <Button variant="link">Action</Button>
                    </EmptyStateActions>
                  </EmptyStateFooter>
                </EmptyState>
              </NotificationDrawerList>
            </NotificationDrawerGroup>
          </NotificationDrawerGroupList>
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

  return (
    <React.Fragment>
      <Page
        masthead={masthead}
        sidebar={Sidebar}
        isManagedSidebar
        notificationDrawer={notificationDrawer}
        isNotificationDrawerExpanded={isDrawerExpanded}
        onNotificationDrawerExpand={(
          event: React.MouseEvent<Element, MouseEvent> | KeyboardEvent | React.TransitionEvent<Element>
        ) => focusDrawer(event)}
        skipToContent={PageSkipToContent}
        breadcrumb={PageBreadcrumb}
        mainContainerId={pageId}
      >
        <PageSection>
          <Content>
            <h1>Main title</h1>
            <p>
              Body text should be Red Hat Text at 1rem(16px). It should have leading of 1.5rem(24px) because <br />
              of its relative line height of 1.5.
            </p>
          </Content>
        </PageSection>
        <PageSection>Panel section content</PageSection>
      </Page>
    </React.Fragment>
  );
};
