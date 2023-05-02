import React from 'react';
import {
  Button,
  EmptyState,
  EmptyStateHeader,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateVariant,
  NotificationDrawer,
  NotificationDrawerProps,
  NotificationDrawerBody,
  NotificationDrawerHeader,
  NotificationDrawerGroup,
  NotificationDrawerGroupList,
  NotificationDrawerList,
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader,
  EmptyStateActions,
  EmptyStateFooter,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle,
  Divider
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

interface GroupsNotificationDrawerDemoState {
  isDrawerOpen: boolean;
  isOpenMap: { [x: string]: boolean };
  firstGroupExpanded: boolean;
  secondGroupExpanded: boolean;
  thirdGroupExpanded: boolean;
}

export class GroupsNotificationDrawerDemo extends React.Component<
  NotificationDrawerProps,
  GroupsNotificationDrawerDemoState
> {
  static displayName = 'GroupsNotificationDrawerDemo';
  constructor(props: NotificationDrawerProps) {
    super(props);
    this.state = {
      isDrawerOpen: false,
      isOpenMap: {},
      firstGroupExpanded: false,
      secondGroupExpanded: true,
      thirdGroupExpanded: false
    };
  }

  onDrawerClose = (_event: KeyboardEvent | React.MouseEvent<Element, MouseEvent>) => {
    this.setState({
      isDrawerOpen: false
    });
  };

  onToggle = (id: string) => {
    this.setState((prevState) => ({
      isOpenMap: { [id]: !prevState.isOpenMap[id] }
    }));
  };
  onSelect = () => {
    this.setState({
      isOpenMap: {}
    });
  };
  toggleFirstDrawer = (event: React.SyntheticEvent<HTMLElement>, value: boolean) => {
    this.setState({
      firstGroupExpanded: value
    });
  };
  toggleSecondDrawer = (event: React.SyntheticEvent<HTMLElement>, value: boolean) => {
    this.setState({
      secondGroupExpanded: value
    });
  };
  toggleThirdDrawer = (event: React.SyntheticEvent<HTMLElement>, value: boolean) => {
    this.setState({
      thirdGroupExpanded: value
    });
  };

  render() {
    const { isOpenMap, firstGroupExpanded, secondGroupExpanded, thirdGroupExpanded } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <Divider component="li" key="separator" />,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>
    ];
    return (
      <NotificationDrawer>
        <NotificationDrawerHeader count={4} onClose={this.onDrawerClose}>
          <Dropdown
            onSelect={this.onSelect}
            isOpen={isOpenMap['toggle-id-0'] || false}
            onOpenChange={(_isOpen) => this.setState({ isOpenMap: {} })}
            id="notification-0"
            popperProps={{ position: 'right' }}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                id="toggle-id-0"
                variant="plain"
                onClick={() => this.onToggle('toggle-id-0')}
                isExpanded={isOpenMap['toggle-id-0'] || false}
              >
                <EllipsisVIcon aria-hidden="true" />
              </MenuToggle>
            )}
          >
            <DropdownList>{dropdownItems}</DropdownList>
          </Dropdown>
        </NotificationDrawerHeader>
        <NotificationDrawerBody>
          <NotificationDrawerGroupList>
            <NotificationDrawerGroup
              id="short-group-title"
              title="First notification group"
              isExpanded={firstGroupExpanded}
              count={2}
              onExpand={this.toggleFirstDrawer}
              truncateTitle={1}
            >
              <NotificationDrawerList isHidden={!firstGroupExpanded}>
                <NotificationDrawerListItem variant="info">
                  <NotificationDrawerListItemHeader
                    variant="info"
                    title="Unread info notification title"
                    srTitle="Info notification:"
                  >
                    <Dropdown
                      onSelect={this.onSelect}
                      isOpen={isOpenMap['toggle-id-5'] || false}
                      onOpenChange={(_isOpen) => this.setState({ isOpenMap: {} })}
                      id="notification-5"
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-5"
                          variant="plain"
                          onClick={() => this.onToggle('toggle-id-5')}
                          isExpanded={isOpenMap['toggle-id-5'] || false}
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
                <NotificationDrawerListItem variant="danger">
                  <NotificationDrawerListItemHeader
                    variant="danger"
                    title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                    srTitle="Danger notification:"
                  >
                    <Dropdown
                      onSelect={this.onSelect}
                      isOpen={isOpenMap['toggle-id-6'] || false}
                      onOpenChange={(_isOpen) => this.setState({ isOpenMap: {} })}
                      id="notification-6"
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-6"
                          variant="plain"
                          onClick={() => this.onToggle('toggle-id-6')}
                          isExpanded={isOpenMap['toggle-id-6'] || false}
                        >
                          <EllipsisVIcon aria-hidden="true" />
                        </MenuToggle>
                      )}
                    >
                      <DropdownList>{dropdownItems}</DropdownList>
                    </Dropdown>
                  </NotificationDrawerListItemHeader>
                  <NotificationDrawerListItemBody timestamp="10 minutes ago">
                    This is a danger notification description. This is a long description to show how the title will
                    wrap if it is long and wraps to multiple lines.
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
                      isOpen={isOpenMap['toggle-id-7'] || false}
                      onOpenChange={(_isOpen) => this.setState({ isOpenMap: {} })}
                      id="notification-7"
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-7"
                          variant="plain"
                          onClick={() => this.onToggle('toggle-id-7')}
                          isExpanded={isOpenMap['toggle-id-7'] || false}
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
                    variant="success"
                    title="Read success notification title"
                    srTitle="Success notification:"
                  >
                    <Dropdown
                      onSelect={this.onSelect}
                      isOpen={isOpenMap['toggle-id-8'] || false}
                      onOpenChange={(_isOpen) => this.setState({ isOpenMap: {} })}
                      id="notification-8"
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-8"
                          variant="plain"
                          onClick={() => this.onToggle('toggle-id-8')}
                          isExpanded={isOpenMap['toggle-id-8'] || false}
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
              </NotificationDrawerList>
            </NotificationDrawerGroup>
            <NotificationDrawerGroup
              id="long-group-title"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo."
              isExpanded={secondGroupExpanded}
              count={2}
              onExpand={this.toggleSecondDrawer}
              truncateTitle={1}
              tooltipPosition="bottom"
            >
              <NotificationDrawerList isHidden={!secondGroupExpanded}>
                <NotificationDrawerListItem variant="info">
                  <NotificationDrawerListItemHeader
                    variant="info"
                    title="Unread info notification title"
                    srTitle="Info notification:"
                  >
                    <Dropdown
                      onSelect={this.onSelect}
                      isOpen={isOpenMap['toggle-id-9'] || false}
                      onOpenChange={(_isOpen) => this.setState({ isOpenMap: {} })}
                      id="notification-9"
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-9"
                          variant="plain"
                          onClick={() => this.onToggle('toggle-id-9')}
                          isExpanded={isOpenMap['toggle-id-9'] || false}
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
                <NotificationDrawerListItem variant="danger">
                  <NotificationDrawerListItemHeader
                    variant="danger"
                    title="Unread danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                    srTitle="Danger notification:"
                  >
                    <Dropdown
                      onSelect={this.onSelect}
                      isOpen={isOpenMap['toggle-id-10'] || false}
                      onOpenChange={(_isOpen) => this.setState({ isOpenMap: {} })}
                      id="notification-10"
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-10"
                          variant="plain"
                          onClick={() => this.onToggle('toggle-id-10')}
                          isExpanded={isOpenMap['toggle-id-10'] || false}
                        >
                          <EllipsisVIcon aria-hidden="true" />
                        </MenuToggle>
                      )}
                    >
                      <DropdownList>{dropdownItems}</DropdownList>
                    </Dropdown>
                  </NotificationDrawerListItemHeader>
                  <NotificationDrawerListItemBody timestamp="10 minutes ago">
                    This is a danger notification description. This is a long description to show how the title will
                    wrap if it is long and wraps to multiple lines.
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
                      isOpen={isOpenMap['toggle-id-11'] || false}
                      onOpenChange={(_isOpen) => this.setState({ isOpenMap: {} })}
                      id="notification-11"
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-11"
                          variant="plain"
                          onClick={() => this.onToggle('toggle-id-11')}
                          isExpanded={isOpenMap['toggle-id-11'] || false}
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
                    variant="success"
                    title="Read success notification title"
                    srTitle="Success notification:"
                  >
                    <Dropdown
                      onSelect={this.onSelect}
                      isOpen={isOpenMap['toggle-id-12'] || false}
                      onOpenChange={(_isOpen) => this.setState({ isOpenMap: {} })}
                      id="notification-12"
                      popperProps={{ position: 'right' }}
                      toggle={(toggleRef) => (
                        <MenuToggle
                          ref={toggleRef}
                          id="toggle-id-12"
                          variant="plain"
                          onClick={() => this.onToggle('toggle-id-12')}
                          isExpanded={isOpenMap['toggle-id-12'] || false}
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
              </NotificationDrawerList>
            </NotificationDrawerGroup>
            <NotificationDrawerGroup
              id="long-title-no-truncate-prop"
              title="Third notification group. This is a long title to show how the title will be truncated if it is long and will be shown in a single line."
              isExpanded={thirdGroupExpanded}
              count={0}
              onExpand={this.toggleThirdDrawer}
            >
              <NotificationDrawerList isHidden={!thirdGroupExpanded}>
                <EmptyState variant={EmptyStateVariant.full}>
                  <EmptyStateHeader
                    titleText="No alerts found"
                    headingLevel="h2"
                    icon={<EmptyStateIcon icon={SearchIcon} />}
                  />
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
  }
}
