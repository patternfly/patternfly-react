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
  isOpen: boolean;
  isActive: string;
}

export class BasicNotificationDrawerDemo extends React.Component<
  NotificationDrawerProps,
  BasicNotificationDrawerDemoState
> {
  constructor(props: NotificationDrawerProps) {
    super(props);
    this.state = {
      isOpen: false,
      isActive: ''
    };
  }

  onToggle = isOpen => {
    this.setState({
      isOpen
    });
  };

  onSelect = event => {
    this.setState({
      isOpen: !this.state.isOpen,
      isActive: ''
    });
    this.onFocus(event.target.id);
  };

  onClick = event => {
    this.setState({
      isActive: event.target.id
    });
    this.onFocus(event.target.id);
  };

  onFocus = id => {
    if (id) {
      const element = document.getElementById(id);
      element.focus();
    }
  };

  render() {
    const { isOpen, isActive } = this.state;
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
        <NotificationDrawerHeader count={2}>
          <Dropdown
            onClick={this.onClick}
            onSelect={this.onSelect}
            toggle={<KebabToggle onToggle={this.onToggle} id="toggle-id-0" />}
            isOpen={isOpen && isActive === 'toggle-id-0'}
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
                  onClick={this.onClick}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle} id="toggle-id-1" />}
                  isOpen={isOpen && isActive === 'toggle-id-1'}
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
                  onClick={this.onClick}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle} id="toggle-id-2" />}
                  isOpen={isOpen && isActive === 'toggle-id-2'}
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
                  onClick={this.onClick}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle} id="toggle-id-3" />}
                  isOpen={isOpen && isActive === 'toggle-id-3'}
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
                  onClick={this.onClick}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle} id="toggle-id-4" />}
                  isOpen={isOpen && isActive === 'toggle-id-4'}
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
