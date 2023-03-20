import React from 'react';
import {
  NotificationDrawer,
  NotificationDrawerProps,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader
} from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownItem as DropdownItemDeprecated,
  DropdownDirection,
  DropdownPosition,
  DropdownSeparator,
  KebabToggle
} from '@patternfly/react-core/deprecated';

interface BasicNotificationDrawerDemoState {
  isDrawerOpen: boolean;
  isOpen: boolean[];
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
      isOpen: new Array(6).fill(false)
    };
  }
  onDrawerClose = () => {
    this.setState({
      isDrawerOpen: false
    });
  };
  onToggle = (id: number) => (_event: any, isOpen: boolean) => {
    this.setState({
      isOpen: [...this.state.isOpen.slice(0, id), isOpen, ...this.state.isOpen.slice(id + 1)]
    });
  };
  onSelect = () => {
    this.setState({ isOpen: new Array(6).fill(false) });
  };

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
      <DropdownItemDeprecated key="action" component="button">
        Action
      </DropdownItemDeprecated>,
      <DropdownSeparator key="separator" />,
      <DropdownItemDeprecated key="disabled link" isDisabled>
        Disabled Link
      </DropdownItemDeprecated>
    ];
    return (
      <NotificationDrawer>
        <NotificationDrawerHeader count={2} onClose={this.onDrawerClose}>
          <DropdownDeprecated
            onSelect={this.onSelect}
            toggle={<KebabToggle onToggle={this.onToggle(0)} id="toggle-id-0" />}
            isOpen={isOpen[0]}
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
                id="info-alert-item"
                variant="info"
                title="Unread info notification title"
                srTitle="Info notification:"
                truncateTitle={10}
              >
                <DropdownDeprecated
                  position={DropdownPosition.right}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle(1)} id="toggle-id-1" />}
                  isOpen={isOpen[1]}
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
                <DropdownDeprecated
                  position={DropdownPosition.right}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle(2)} id="toggle-id-2" />}
                  isOpen={isOpen[2]}
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
                <DropdownDeprecated
                  position={DropdownPosition.right}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle(3)} id="toggle-id-3" />}
                  isOpen={isOpen[3]}
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
                id="long-title-item"
                variant="success"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo."
                srTitle="Success notification:"
                truncateTitle={1}
                tooltipPosition="bottom"
              >
                <DropdownDeprecated
                  position={DropdownPosition.right}
                  direction={DropdownDirection.up}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle(4)} id="toggle-id-4" />}
                  isOpen={isOpen[4]}
                  isPlain
                  dropdownItems={dropdownItems}
                  id="notification-4"
                />
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="30 minutes ago">
                This is a success notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem isRead>
              <NotificationDrawerListItemHeader title="Read default notification title" srTitle="Default notification:">
                <DropdownDeprecated
                  position={DropdownPosition.right}
                  direction={DropdownDirection.up}
                  onSelect={this.onSelect}
                  toggle={<KebabToggle onToggle={this.onToggle(5)} id="toggle-id-5" />}
                  isOpen={isOpen[5]}
                  isPlain
                  dropdownItems={dropdownItems}
                  id="notification-5"
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
  }
}
