import React from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownDirection,
  DropdownPosition,
  DropdownSeparator,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStatePrimary,
  EmptyStateVariant,
  KebabToggle,
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
  Title
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';

interface GroupsNotificationDrawerDemoState {
  isOpen0: boolean;
  isOpen1: boolean;
  isOpen2: boolean;
  isOpen3: boolean;
  isOpen4: boolean;
  isOpen5: boolean;
  isOpen6: boolean;
  isOpen7: boolean;
  isOpen8: boolean;
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
      isOpen0: false,
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpen5: false,
      isOpen6: false,
      isOpen7: false,
      isOpen8: false,
      firstGroupExpanded: false,
      secondGroupExpanded: true,
      thirdGroupExpanded: false
    };
  }

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
  onToggle5 = (isOpen5: boolean) => {
    this.setState({
      isOpen5
    });
  };
  onToggle6 = (isOpen6: boolean) => {
    this.setState({
      isOpen6
    });
  };
  onToggle7 = (isOpen7: boolean) => {
    this.setState({
      isOpen7
    });
  };
  onToggle8 = (isOpen8: boolean) => {
    this.setState({
      isOpen8
    });
  };
  onSelect = (event: any) => {
    this.setState({
      isOpen0: false,
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpen5: false,
      isOpen6: false,
      isOpen7: false,
      isOpen8: false
    });
  };
  toggleFirstDrawer = (event: any, value: boolean) => {
    this.setState({
      firstGroupExpanded: value
    });
  };
  toggleSecondDrawer = (event: any, value: boolean) => {
    this.setState({
      secondGroupExpanded: value
    });
  };
  toggleThirdDrawer = (event: any, value: boolean) => {
    this.setState({
      thirdGroupExpanded: value
    });
  };

  render() {
    const {
      isOpen0,
      isOpen1,
      isOpen2,
      isOpen3,
      isOpen4,
      isOpen5,
      isOpen6,
      isOpen7,
      isOpen8,
      firstGroupExpanded,
      secondGroupExpanded,
      thirdGroupExpanded
    } = this.state;
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
        <NotificationDrawerHeader count={4}>
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
          <NotificationDrawerGroupList>
            <NotificationDrawerGroup
              title="First notification group"
              isExpanded={firstGroupExpanded}
              count={2}
              onExpand={this.toggleFirstDrawer}
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
                      onSelect={this.onSelect}
                      toggle={<KebabToggle onToggle={this.onToggle1} id="toggle-id-5" />}
                      isOpen={isOpen1}
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
                      onSelect={this.onSelect}
                      toggle={<KebabToggle onToggle={this.onToggle2} id="toggle-id-6" />}
                      isOpen={isOpen2}
                      isPlain
                      dropdownItems={dropdownItems}
                      id="notification-6"
                    />
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
                      position={DropdownPosition.right}
                      onSelect={this.onSelect}
                      toggle={<KebabToggle onToggle={this.onToggle3} id="toggle-id-7" />}
                      isOpen={isOpen3}
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
                      onSelect={this.onSelect}
                      toggle={<KebabToggle onToggle={this.onToggle4} id="toggle-id-8" />}
                      isOpen={isOpen4}
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
              onExpand={this.toggleSecondDrawer}
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
                      onSelect={this.onSelect}
                      toggle={<KebabToggle onToggle={this.onToggle5} id="toggle-id-9" />}
                      isOpen={isOpen5}
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
                      onSelect={this.onSelect}
                      toggle={<KebabToggle onToggle={this.onToggle6} id="toggle-id-10" />}
                      isOpen={isOpen6}
                      isPlain
                      dropdownItems={dropdownItems}
                      id="notification-10"
                    />
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
                      position={DropdownPosition.right}
                      onSelect={this.onSelect}
                      toggle={<KebabToggle onToggle={this.onToggle7} id="toggle-id-11" />}
                      isOpen={isOpen7}
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
                      onSelect={this.onSelect}
                      toggle={<KebabToggle onToggle={this.onToggle8} id="toggle-id-12" />}
                      isOpen={isOpen8}
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
              title="Third notification group"
              isExpanded={thirdGroupExpanded}
              count={0}
              onExpand={this.toggleThirdDrawer}
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
  }
}
