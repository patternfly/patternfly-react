import React from 'react';
import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateFooter,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerGroup,
  NotificationDrawerGroupList,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  EmptyStateVariant,
  EmptyStateActions,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

export const NotificationDrawerGroups: React.FunctionComponent = () => {
  const [firstGroupExpanded, setFirstGroupExpanded] = React.useState(false);
  const [secondGroupExpanded, setSecondGroupExpanded] = React.useState(true);
  const [thirdGroupExpanded, setThirdGroupExpanded] = React.useState(false);
  const [isOpenMap, setIsOpenMap] = React.useState({});

  const onToggle = (id: string) => {
    setIsOpenMap((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const onSelect = () => {
    setIsOpenMap({});
  };

  const toggleFirstDrawer = (_event: any, value: boolean) => {
    setFirstGroupExpanded(value);
    setSecondGroupExpanded(false);
    setThirdGroupExpanded(false);
  };

  const toggleSecondDrawer = (_event: any, value: boolean) => {
    setSecondGroupExpanded(value);
    setFirstGroupExpanded(false);
    setThirdGroupExpanded(false);
  };

  const toggleThirdDrawer = (_event: any, value: boolean) => {
    setThirdGroupExpanded(value);
    setSecondGroupExpanded(false);
    setFirstGroupExpanded(false);
  };

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

  return (
    <NotificationDrawer>
      <NotificationDrawerHeader count={4}>
        <Dropdown
          onSelect={onSelect}
          isOpen={isOpenMap['groups-kebab-toggle-1'] || false}
          onOpenChange={() => setIsOpenMap({})}
          popperProps={{ position: 'right' }}
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              ref={toggleRef}
              id="groups-kebab-toggle-1"
              isExpanded={isOpenMap['groups-kebab-toggle-1'] || false}
              onClick={() => onToggle('groups-kebab-toggle-1')}
              variant="plain"
              aria-label={`Groups example header kebab toggle`}
              icon={<EllipsisVIcon aria-hidden="true" />}
            />
          )}
        >
          <DropdownList>{dropdownItems}</DropdownList>
        </Dropdown>
      </NotificationDrawerHeader>
      <NotificationDrawerBody>
        <NotificationDrawerGroupList>
          <NotificationDrawerGroup
            title="First notification group"
            isExpanded={firstGroupExpanded}
            count={2}
            onExpand={toggleFirstDrawer}
          >
            <NotificationDrawerList isHidden={!firstGroupExpanded} aria-label="Notifications in the first group">
              <NotificationDrawerListItem variant="info">
                <NotificationDrawerListItemHeader
                  variant="info"
                  title="Unread info notification title"
                  srTitle="Info notification:"
                >
                  <Dropdown
                    onSelect={onSelect}
                    isOpen={isOpenMap['groups-kebab-toggle-2'] || false}
                    onOpenChange={() => setIsOpenMap({})}
                    popperProps={{ position: 'right' }}
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        id="groups-kebab-toggle-2"
                        isExpanded={isOpenMap['groups-kebab-toggle-2'] || false}
                        onClick={() => onToggle('groups-kebab-toggle-2')}
                        variant="plain"
                        aria-label={`Groups example group 1 notification 1 kebab toggle`}
                        icon={<EllipsisVIcon aria-hidden="true" />}
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
                    isOpen={isOpenMap['groups-kebab-toggle-3'] || false}
                    onOpenChange={() => setIsOpenMap({})}
                    popperProps={{ position: 'right' }}
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        id="groups-kebab-toggle-3"
                        isExpanded={isOpenMap['groups-kebab-toggle-3'] || false}
                        onClick={() => onToggle('groups-kebab-toggle-3')}
                        variant="plain"
                        aria-label={`Groups example group 1 notification 2 kebab toggle`}
                        icon={<EllipsisVIcon aria-hidden="true" />}
                      />
                    )}
                  >
                    <DropdownList>{dropdownItems}</DropdownList>
                  </Dropdown>
                </NotificationDrawerListItemHeader>
                <NotificationDrawerListItemBody timestamp="10 minutes ago">
                  This is a danger notification description. This is a long description to show how the title will wrap
                  if it is long and wraps to multiple lines.
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
                    isOpen={isOpenMap['groups-kebab-toggle-4'] || false}
                    onOpenChange={() => setIsOpenMap({})}
                    popperProps={{ position: 'right' }}
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        id="groups-kebab-toggle-4"
                        isExpanded={isOpenMap['groups-kebab-toggle-4'] || false}
                        onClick={() => onToggle('groups-kebab-toggle-4')}
                        variant="plain"
                        aria-label={`Groups example group 1 notification 3 kebab toggle`}
                        icon={<EllipsisVIcon aria-hidden="true" />}
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
                    isOpen={isOpenMap['groups-kebab-toggle-5'] || false}
                    onOpenChange={() => setIsOpenMap({})}
                    popperProps={{ position: 'right' }}
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        id="groups-kebab-toggle-5"
                        isExpanded={isOpenMap['groups-kebab-toggle-5'] || false}
                        onClick={() => onToggle('groups-kebab-toggle-5')}
                        variant="plain"
                        aria-label={`Groups example group 1 notification 4 kebab toggle`}
                        icon={<EllipsisVIcon aria-hidden="true" />}
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
            </NotificationDrawerList>
          </NotificationDrawerGroup>
          <NotificationDrawerGroup
            title="Second notification group"
            isExpanded={secondGroupExpanded}
            count={2}
            onExpand={toggleSecondDrawer}
          >
            <NotificationDrawerList isHidden={!secondGroupExpanded} aria-label="Notifications in the second group">
              <NotificationDrawerListItem variant="info">
                <NotificationDrawerListItemHeader
                  variant="info"
                  title="Unread info notification title"
                  srTitle="Info notification:"
                >
                  <Dropdown
                    onSelect={onSelect}
                    isOpen={isOpenMap['groups-kebab-toggle-6'] || false}
                    onOpenChange={() => setIsOpenMap({})}
                    popperProps={{ position: 'right' }}
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        id="groups-kebab-toggle-6"
                        isExpanded={isOpenMap['groups-kebab-toggle-6'] || false}
                        onClick={() => onToggle('groups-kebab-toggle-6')}
                        variant="plain"
                        aria-label={`Groups example group 2 notification 1 kebab toggle`}
                        icon={<EllipsisVIcon aria-hidden="true" />}
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
                    isOpen={isOpenMap['groups-kebab-toggle-7'] || false}
                    onOpenChange={() => setIsOpenMap({})}
                    popperProps={{ position: 'right' }}
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        id="groups-kebab-toggle-7"
                        isExpanded={isOpenMap['groups-kebab-toggle-7'] || false}
                        onClick={() => onToggle('groups-kebab-toggle-7')}
                        variant="plain"
                        aria-label={`Groups example group 2 notification 2 kebab toggle`}
                        icon={<EllipsisVIcon aria-hidden="true" />}
                      />
                    )}
                  >
                    <DropdownList>{dropdownItems}</DropdownList>
                  </Dropdown>
                </NotificationDrawerListItemHeader>
                <NotificationDrawerListItemBody timestamp="10 minutes ago">
                  This is a danger notification description. This is a long description to show how the title will wrap
                  if it is long and wraps to multiple lines.
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
                    isOpen={isOpenMap['groups-kebab-toggle-8'] || false}
                    onOpenChange={() => setIsOpenMap({})}
                    popperProps={{ position: 'right' }}
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        id="groups-kebab-toggle-8"
                        isExpanded={isOpenMap['groups-kebab-toggle-8'] || false}
                        onClick={() => onToggle('groups-kebab-toggle-8')}
                        variant="plain"
                        aria-label={`Groups example group 2 notification 3 kebab toggle`}
                        icon={<EllipsisVIcon aria-hidden="true" />}
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
                    isOpen={isOpenMap['groups-kebab-toggle-9'] || false}
                    onOpenChange={() => setIsOpenMap({})}
                    popperProps={{ position: 'right' }}
                    toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                      <MenuToggle
                        ref={toggleRef}
                        id="groups-kebab-toggle-9"
                        isExpanded={isOpenMap['groups-kebab-toggle-9'] || false}
                        onClick={() => onToggle('groups-kebab-toggle-9')}
                        variant="plain"
                        aria-label={`Groups example group 2 notification 4 kebab toggle`}
                        icon={<EllipsisVIcon aria-hidden="true" />}
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
            </NotificationDrawerList>
          </NotificationDrawerGroup>
          <NotificationDrawerGroup
            title="Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line."
            isExpanded={thirdGroupExpanded}
            count={0}
            onExpand={toggleThirdDrawer}
            truncateTitle={1}
          >
            <NotificationDrawerList isHidden={!thirdGroupExpanded} aria-label="Notifications in the third group">
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
      </NotificationDrawerBody>
    </NotificationDrawer>
  );
};
