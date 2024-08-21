import React from 'react';
import {
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const NotificationDrawerBasic: React.FunctionComponent = () => {
  const [isOpenMap, setIsOpenMap] = React.useState(new Array(7).fill(false));

  const onToggle = (index: number) => () => {
    const newState = [...isOpenMap.slice(0, index), !isOpenMap[index], ...isOpenMap.slice(index + 1)];
    setIsOpenMap(newState);
  };

  const onSelect = () => {
    setIsOpenMap(new Array(7).fill(false));
  };

  const onDrawerClose = (_event: React.MouseEvent<Element, MouseEvent> | KeyboardEvent) => {
    setIsOpenMap(new Array(7).fill(false));
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

  return (
    <NotificationDrawer>
      <NotificationDrawerHeader count={3} onClose={onDrawerClose}>
        <Dropdown
          onSelect={onSelect}
          isOpen={isOpen0}
          onOpenChange={() => setIsOpenMap(new Array(7).fill(false))}
          popperProps={{ position: 'right' }}
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              ref={toggleRef}
              isExpanded={isOpen0}
              onClick={onToggle(0)}
              variant="plain"
              aria-label={`Basic example header kebab toggle`}
              icon={<EllipsisVIcon aria-hidden="true" />}
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
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isOpen0}
                    onClick={onToggle(1)}
                    variant="plain"
                    aria-label={`Basic example notification 1 kebab toggle`}
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
                isOpen={isOpen2}
                onOpenChange={() => setIsOpenMap(new Array(7).fill(false))}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isOpen2}
                    onClick={onToggle(2)}
                    variant="plain"
                    aria-label={`Basic example notification 2 kebab toggle`}
                    icon={<EllipsisVIcon aria-hidden="true" />}
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
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isOpen3}
                    onClick={onToggle(3)}
                    variant="plain"
                    aria-label={`Basic example notification 3 kebab toggle`}
                    icon={<EllipsisVIcon aria-hidden="true" />}
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
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isOpen4}
                    onClick={onToggle(4)}
                    variant="plain"
                    aria-label={`Basic example notification 4 kebab toggle`}
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
                isOpen={isOpen5}
                onOpenChange={() => setIsOpenMap(new Array(7).fill(false))}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isOpen5}
                    onClick={onToggle(5)}
                    variant="plain"
                    aria-label={`Basic example notification 5 kebab toggle`}
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
          <NotificationDrawerListItem isRead>
            <NotificationDrawerListItemHeader title="Read (default) notification title" srTitle="notification:">
              <Dropdown
                onSelect={onSelect}
                isOpen={isOpen6}
                onOpenChange={() => setIsOpenMap(new Array(7).fill(false))}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isOpen6}
                    onClick={onToggle(6)}
                    variant="plain"
                    aria-label={`Basic example notification 6 kebab toggle`}
                    icon={<EllipsisVIcon aria-hidden="true" />}
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
  );
};
