import React from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownDirection,
  DropdownPosition,
  DropdownSeparator,
  KebabToggle,
  NotificationDrawer,
  NotificationDrawerProps,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader
} from '@patternfly/react-core';

interface BasicNotificationDrawerDemoState {
  isDrawerOpen: boolean;
  isOpen0: boolean;
  isOpen1: boolean;
  isOpen2: boolean;
  isOpen3: boolean;
  isOpen4: boolean;
}

export class BasicNotificationDrawerDemo extends React.Component<
  NotificationDrawerProps,
  BasicNotificationDrawerDemoState
> {
  static displayName = 'BasicNotificationDrawerDemo';
  constructor(props: NotificationDrawerProps) {
    super(props);
    this.state = {
      isDrawerOpen: true,
      isOpen0: false,
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false
    };
  }
  onDrawerClose = () => {
    this.setState({
      isDrawerOpen: false
    });
  };
  onToggle0 = (isOpen0: boolean) => {
    this.setState({
      isOpen0
    });
  };
  onToggle1 = (isOpen1: boolean) => {
    this.setState({
      isOpen1
    });
  };
  onToggle2 = (isOpen2: boolean) => {
    this.setState({
      isOpen2
    });
  };
  onToggle3 = (isOpen3: boolean) => {
    this.setState({
      isOpen3
    });
  };
  onToggle4 = (isOpen4: boolean) => {
    this.setState({
      isOpen4
    });
  };
  onSelect = (event: React.SyntheticEvent<HTMLElement>) => {
    this.setState({
      isOpen0: false,
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false
    });
  };

  render() {
    const { isOpen0, isOpen1, isOpen2, isOpen3, isOpen4 } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>
    ];
    return (
      <NotificationDrawer>
        <NotificationDrawerHeader count={2} onClose={this.onDrawerClose}>
          <Dropdown
            onSelect={this.onSelect}
            toggle={<KebabToggle onToggle={this.onToggle0} id="toggle-id-0" />}
            isOpen={isOpen0}
            isPlain
            dropdownItems={dropdownItems}
            id="notification-0"
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
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle1} id="toggle-id-1" />}
                  isOpen={isOpen1}
                  isPlain
                  dropdownItems={dropdownItems}
                  id="notification-1"
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
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle2} id="toggle-id-2" />}
                  isOpen={isOpen2}
                  isPlain
                  dropdownItems={dropdownItems}
                  id="notification-2"
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
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle3} id="toggle-id-3" />}
                  isOpen={isOpen3}
                  isPlain
                  dropdownItems={dropdownItems}
                  id="notification-3"
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
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle4} id="toggle-id-4" />}
                  isOpen={isOpen4}
                  isPlain
                  dropdownItems={dropdownItems}
                  id="notification-4"
                />
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="30 minutes ago">
                This is a success notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
          </NotificationDrawerList>
        </NotificationDrawerBody>
      </NotificationDrawer>
    );
  }
}
