import React from 'react';
import {
  NotificationDrawer,
  NotificationDrawerProps,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle,
  MenuToggleElement,
  Divider
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

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
  onDrawerClose = (_event: KeyboardEvent | React.MouseEvent<Element, MouseEvent>) => {
    this.setState({
      isDrawerOpen: false
    });
  };
  onToggle = (index: number) => {
    this.setState((prevState) => ({
      isOpen: [...this.state.isOpen.slice(0, index), !prevState.isOpen[index], ...this.state.isOpen.slice(index + 1)]
    }));
  };
  onSelect = () => {
    this.setState({ isOpen: new Array(6).fill(false) });
  };

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action">Action</DropdownItem>,
      <Divider component="li" key="separator" />,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>
    ];
    return (
      <NotificationDrawer>
        <NotificationDrawerHeader count={2} id="notification-0" onClose={this.onDrawerClose}>
          <Dropdown
            onSelect={this.onSelect}
            isOpen={isOpen[0]}
            onOpenChange={(_isOpen) => this.setState({ isOpen: new Array(6).fill(false) })}
            popperProps={{ position: 'right' }}
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                isExpanded={isOpen[0]}
                onClick={() => this.onToggle(0)}
                id="toggle-id-0"
                variant="plain"
              >
                <EllipsisVIcon aria-hidden="true" />
              </MenuToggle>
            )}
          >
            <DropdownList>{dropdownItems}</DropdownList>
          </Dropdown>
        </NotificationDrawerHeader>
        <NotificationDrawerBody>
          <NotificationDrawerList>
            <NotificationDrawerListItem id="notification-1" variant="info">
              <NotificationDrawerListItemHeader
                id="info-alert-item"
                variant="info"
                title="Unread info notification title"
                srTitle="Info notification:"
                truncateTitle={10}
              >
                <Dropdown
                  onSelect={this.onSelect}
                  isOpen={isOpen[1]}
                  onOpenChange={(_isOpen) => this.setState({ isOpen: new Array(6).fill(false) })}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isOpen[1]}
                      onClick={() => this.onToggle(1)}
                      id="toggle-id-1"
                      variant="plain"
                    >
                      <EllipsisVIcon aria-hidden="true" />
                    </MenuToggle>
                  )}
                >
                  <DropdownList>{dropdownItems}</DropdownList>
                </Dropdown>
              </NotificationDrawerListItemHeader>
              <NotificationDrawerListItemBody timestamp="5 minutes ago">
                This is an info notification description.
              </NotificationDrawerListItemBody>
            </NotificationDrawerListItem>
            <NotificationDrawerListItem variant="danger" id="notification-2">
              <NotificationDrawerListItemHeader
                variant="danger"
                title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                srTitle="Danger notification:"
              >
                <Dropdown
                  onSelect={this.onSelect}
                  isOpen={isOpen[2]}
                  onOpenChange={(_isOpen) => this.setState({ isOpen: new Array(6).fill(false) })}
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isOpen[2]}
                      onClick={() => this.onToggle(2)}
                      id="toggle-id-2"
                      variant="plain"
                    >
                      <EllipsisVIcon aria-hidden="true" />
                    </MenuToggle>
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
                  onSelect={this.onSelect}
                  isOpen={isOpen[3]}
                  onOpenChange={(_isOpen) => this.setState({ isOpen: new Array(6).fill(false) })}
                  id="notification-3"
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isOpen[3]}
                      onClick={() => this.onToggle(3)}
                      id="toggle-id-3"
                      variant="plain"
                    >
                      <EllipsisVIcon aria-hidden="true" />
                    </MenuToggle>
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
                id="long-title-item"
                variant="success"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo."
                srTitle="Success notification:"
                truncateTitle={1}
                tooltipPosition="bottom"
              >
                <Dropdown
                  onSelect={this.onSelect}
                  isOpen={isOpen[4]}
                  onOpenChange={(_isOpen) => this.setState({ isOpen: new Array(6).fill(false) })}
                  id="notification-4"
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isOpen[4]}
                      onClick={() => this.onToggle(4)}
                      id="toggle-id-4"
                      variant="plain"
                    >
                      <EllipsisVIcon aria-hidden="true" />
                    </MenuToggle>
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
              <NotificationDrawerListItemHeader title="Read default notification title" srTitle="Default notification:">
                <Dropdown
                  onSelect={this.onSelect}
                  isOpen={isOpen[5]}
                  onOpenChange={(_isOpen) => this.setState({ isOpen: new Array(6).fill(false) })}
                  id="notification-5"
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                    <MenuToggle
                      ref={toggleRef}
                      isExpanded={isOpen[5]}
                      onClick={() => this.onToggle(5)}
                      id="toggle-id-5"
                      variant="plain"
                    >
                      <EllipsisVIcon aria-hidden="true" />
                    </MenuToggle>
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
  }
}
