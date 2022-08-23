import React from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownPosition,
  DropdownDirection,
  DropdownSeparator,
  KebabToggle,
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader
} from '@patternfly/react-core';

export const NotificationDrawerBasic: React.FunctionComponent = () => {
  const [isOpenMap, setIsOpenMap] = React.useState(new Array(7).fill(false));

  const onToggle = (index: number) => (isOpen: boolean) => {
    const newState = [...isOpenMap.slice(0, index), isOpen, ...isOpenMap.slice(index + 1)];
    setIsOpenMap(newState);
  };

  const onSelect = () => {
    setIsOpenMap(new Array(7).fill(false));
  };

  const onDrawerClose = () => {
    setIsOpenMap(new Array(7).fill(false));
  };

  const [isOpen0, isOpen1, isOpen2, isOpen3, isOpen4, isOpen5, isOpen6] = isOpenMap;

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
      <NotificationDrawerHeader count={3} onClose={onDrawerClose}>
        <Dropdown
          onSelect={onSelect}
          toggle={<KebabToggle onToggle={onToggle(0)} id="basic-kebab-toggle" />}
          isOpen={isOpen0}
          isPlain
          dropdownItems={dropdownItems}
          id="basic-notification-0"
          position={DropdownPosition.right}
        />
      </NotificationDrawerHeader>
      <NotificationDrawerBody>
        <NotificationDrawerList>
          <NotificationDrawerListItem variant="info">
            <NotificationDrawerListItemHeader
              variant="info"
              title="Unread info notification title"
              srTitle="Info notification:"
            >
              <Dropdown
                position={DropdownPosition.right}
                onSelect={onSelect}
                toggle={<KebabToggle onToggle={onToggle(1)} id="basic-toggle-id-1" />}
                isOpen={isOpen1}
                isPlain
                dropdownItems={dropdownItems}
                id="basic-notification-1"
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
                toggle={<KebabToggle onToggle={onToggle(2)} id="basic-toggle-id-2" />}
                isOpen={isOpen2}
                isPlain
                dropdownItems={dropdownItems}
                id="basic-notification-2"
              />
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
                position={DropdownPosition.right}
                onSelect={onSelect}
                toggle={<KebabToggle onToggle={onToggle(3)} id="basic-toggle-id-3" />}
                isOpen={isOpen3}
                isPlain
                dropdownItems={dropdownItems}
                id="basic-notification-3"
              />
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
                position={DropdownPosition.right}
                onSelect={onSelect}
                toggle={<KebabToggle onToggle={onToggle(4)} id="basic-toggle-id-4" />}
                isOpen={isOpen4}
                isPlain
                dropdownItems={dropdownItems}
                id="basic-notification-4"
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
                toggle={<KebabToggle onToggle={onToggle(5)} id="basic-toggle-id-5" />}
                isOpen={isOpen5}
                isPlain
                dropdownItems={dropdownItems}
                id="basic-notification-5"
              />
            </NotificationDrawerListItemHeader>
            <NotificationDrawerListItemBody timestamp="30 minutes ago">
              This is a success notification description.
            </NotificationDrawerListItemBody>
          </NotificationDrawerListItem>
          <NotificationDrawerListItem isRead>
            <NotificationDrawerListItemHeader title="Read (default) notification title" srTitle="notification:">
              <Dropdown
                position={DropdownPosition.right}
                onSelect={onSelect}
                toggle={<KebabToggle onToggle={onToggle(6)} id="basic-toggle-id-6" />}
                isOpen={isOpen6}
                isPlain
                dropdownItems={dropdownItems}
                id="basic-notification-6"
              />
            </NotificationDrawerListItemHeader>
            <NotificationDrawerListItemBody timestamp="35 minutes ago">
              This is a default notification description.
            </NotificationDrawerListItemBody>
          </NotificationDrawerListItem>
        </NotificationDrawerList>
      </NotificationDrawerBody>
    </NotificationDrawer>
  );
};
