import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  DropdownDirection,
  DropdownSeparator,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStatePrimary,
  KebabToggle,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerGroup,
  NotificationDrawerGroupList,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  Title,
  EmptyStateVariant
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

export const NotificationDrawerGroups: React.FunctionComponent = () => {
  const [firstGroupExpanded, setFirstGroupExpanded] = React.useState(false);
  const [secondGroupExpanded, setSecondGroupExpanded] = React.useState(true);
  const [thirdGroupExpanded, setThirdGroupExpanded] = React.useState(false);
  const [isOpenMap, setIsOpenMap] = React.useState({});

  const onToggle = (id, isOpen) => {
    setIsOpenMap({ [id]: isOpen });
  };

  const onSelect = () => {
    setIsOpenMap({});
  };

  const toggleFirstDrawer = (event, value) => {
    setFirstGroupExpanded(value);
    setSecondGroupExpanded(false);
    setThirdGroupExpanded(false);
  };

  const toggleSecondDrawer = (event, value) => {
    setSecondGroupExpanded(value);
    setFirstGroupExpanded(false);
    setThirdGroupExpanded(false);
  };

  const toggleThirdDrawer = (event, value) => {
    setThirdGroupExpanded(value);
    setSecondGroupExpanded(false);
    setFirstGroupExpanded(false);
  };

  const dropdownItems = [
    <DropdownItem key="link">Link</DropdownItem>,
    <DropdownItem key="action" component="button">
      Action
    </DropdownItem>,
    <DropdownSeparator key="separator" />,
    <DropdownItem key="disabled link" isDisabled>
      Disabled link
    </DropdownItem>
  ];

  return (
    <NotificationDrawer>
      <NotificationDrawerHeader count={4}>
        <Dropdown
          onSelect={onSelect}
          toggle={<KebabToggle onToggle={isOpen => onToggle('toggle-id-0', isOpen)} id="toggle-id-0" />}
          isOpen={isOpenMap && isOpenMap['toggle-id-0']}
          isPlain
          dropdownItems={dropdownItems}
          id="notification-0"
          position={DropdownPosition.right}
        />
      </NotificationDrawerHeader>
      <NotificationDrawerBody>
        <NotificationDrawerGroupList>
          <NotificationDrawerGroup
            title="First notification group"
            isExpanded={firstGroupExpanded}
            count={2}
            onExpand={toggleFirstDrawer}
          >
            <NotificationDrawerList isHidden={!firstGroupExpanded}>
              <NotificationDrawerListItem variant="info">
                <NotificationDrawerListItemHeader
                  variant="info"
                  title="Unread info notification title"
                  srTitle="Info notification:"
                >
                  <Dropdown
                    position={DropdownPosition.right}
                    onSelect={onSelect}
                    toggle={<KebabToggle onToggle={isOpen => onToggle('toggle-id-5', isOpen)} id="toggle-id-5" />}
                    isOpen={isOpenMap && isOpenMap['toggle-id-5']}
                    isPlain
                    dropdownItems={dropdownItems}
                    id="notification-5"
                  />
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
                    position={DropdownPosition.right}
                    onSelect={onSelect}
                    toggle={<KebabToggle onToggle={isOpen => onToggle('toggle-id-6', isOpen)} id="toggle-id-6" />}
                    isOpen={isOpenMap && isOpenMap['toggle-id-6']}
                    isPlain
                    dropdownItems={dropdownItems}
                    id="notification-6"
                  />
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
                    position={DropdownPosition.right}
                    onSelect={onSelect}
                    toggle={<KebabToggle onToggle={isOpen => onToggle('toggle-id-7', isOpen)} id="toggle-id-7" />}
                    isOpen={isOpenMap && isOpenMap['toggle-id-7']}
                    isPlain
                    dropdownItems={dropdownItems}
                    id="notification-7"
                  />
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
                    position={DropdownPosition.right}
                    direction={DropdownDirection.up}
                    onSelect={onSelect}
                    toggle={<KebabToggle onToggle={isOpen => onToggle('toggle-id-8', isOpen)} id="toggle-id-8" />}
                    isOpen={isOpenMap && isOpenMap['toggle-id-8']}
                    isPlain
                    dropdownItems={dropdownItems}
                    id="notification-8"
                  />
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
            <NotificationDrawerList isHidden={!secondGroupExpanded}>
              <NotificationDrawerListItem variant="info">
                <NotificationDrawerListItemHeader
                  variant="info"
                  title="Unread info notification title"
                  srTitle="Info notification:"
                >
                  <Dropdown
                    position={DropdownPosition.right}
                    onSelect={onSelect}
                    toggle={<KebabToggle onToggle={isOpen => onToggle('toggle-id-9', isOpen)} id="toggle-id-9" />}
                    isOpen={isOpenMap && isOpenMap['toggle-id-9']}
                    isPlain
                    dropdownItems={dropdownItems}
                    id="notification-9"
                  />
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
                    position={DropdownPosition.right}
                    onSelect={onSelect}
                    toggle={<KebabToggle onToggle={isOpen => onToggle('toggle-id-10', isOpen)} id="toggle-id-10" />}
                    isOpen={isOpenMap && isOpenMap['toggle-id-10']}
                    isPlain
                    dropdownItems={dropdownItems}
                    id="notification-10"
                  />
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
                    position={DropdownPosition.right}
                    onSelect={onSelect}
                    toggle={<KebabToggle onToggle={isOpen => onToggle('toggle-id-11', isOpen)} id="toggle-id-11" />}
                    isOpen={isOpenMap && isOpenMap['toggle-id-11']}
                    isPlain
                    dropdownItems={dropdownItems}
                    id="notification-11"
                  />
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
                    position={DropdownPosition.right}
                    direction={DropdownDirection.up}
                    onSelect={onSelect}
                    toggle={<KebabToggle onToggle={isOpen => onToggle('toggle-id-12', isOpen)} id="toggle-id-12" />}
                    isOpen={isOpenMap && isOpenMap['toggle-id-12']}
                    isPlain
                    dropdownItems={dropdownItems}
                    id="notification-12"
                  />
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
            <NotificationDrawerList isHidden={!thirdGroupExpanded}>
              <EmptyState variant={EmptyStateVariant.full}>
                <EmptyStateIcon icon={SearchIcon} />
                <Title headingLevel="h2" size="lg">
                  No alerts found
                </Title>
                <EmptyStateBody>
                  There are currently no critical alerts firing. There may be firing alerts of other severities or
                  silenced critical alerts however.
                </EmptyStateBody>
                <EmptyStatePrimary>
                  <Button variant="link">Action</Button>
                </EmptyStatePrimary>
              </EmptyState>
            </NotificationDrawerList>
          </NotificationDrawerGroup>
        </NotificationDrawerGroupList>
      </NotificationDrawerBody>
    </NotificationDrawer>
  );
};
