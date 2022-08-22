import React from 'react';
import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStatePrimary,
  EmptyStateVariant,
  NotificationDrawer,
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
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';

export const NotificationDrawerLightweight: React.FunctionComponent = () => {
  const [firstGroupExpanded, setFirstGroupExpanded] = React.useState(false);
  const [secondGroupExpanded, setSecondGroupExpanded] = React.useState(true);
  const [thirdGroupExpanded, setThirdGroupExpanded] = React.useState(false);

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

  const onDrawerClose = () => {
    // do something cool in a callback
  };

  return (
    <NotificationDrawer>
      <NotificationDrawerHeader onClose={onDrawerClose} />
      <NotificationDrawerBody>
        <NotificationDrawerGroupList>
          <NotificationDrawerGroup
            title="First notification group"
            isExpanded={firstGroupExpanded}
            count={4}
            isRead={true}
            onExpand={toggleFirstDrawer}
          >
            <NotificationDrawerList isHidden={!firstGroupExpanded}>
              <NotificationDrawerListItem variant="info">
                <NotificationDrawerListItemHeader
                  variant="info"
                  title="Info notification title"
                  srTitle="Info notification:"
                />
                <NotificationDrawerListItemBody timestamp="5 minutes ago">
                  This is an info notification description.
                </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
              <NotificationDrawerListItem variant="danger">
                <NotificationDrawerListItemHeader
                  variant="danger"
                  title="Danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                  srTitle="Danger notification:"
                />
                <NotificationDrawerListItemBody timestamp="10 minutes ago">
                  This is a danger notification description. This is a long description to show how the title will wrap
                  if it is long and wraps to multiple lines.
                </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
              <NotificationDrawerListItem variant="warning">
                <NotificationDrawerListItemHeader
                  variant="warning"
                  title="Warning notification title"
                  srTitle="Warning notification:"
                />
                <NotificationDrawerListItemBody timestamp="20 minutes ago">
                  This is a warning notification description.
                </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
              <NotificationDrawerListItem variant="success">
                <NotificationDrawerListItemHeader
                  variant="success"
                  title="Success notification title"
                  srTitle="Success notification:"
                />
                <NotificationDrawerListItemBody timestamp="30 minutes ago">
                  This is a success notification description.
                </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
            </NotificationDrawerList>
          </NotificationDrawerGroup>
          <NotificationDrawerGroup
            title="Second notification group"
            isExpanded={secondGroupExpanded}
            count={4}
            isRead={true}
            onExpand={toggleSecondDrawer}
          >
            <NotificationDrawerList isHidden={!secondGroupExpanded}>
              <NotificationDrawerListItem variant="info">
                <NotificationDrawerListItemHeader
                  variant="info"
                  title="Info notification title w/action"
                  srTitle="Info notification:"
                >
                  <Button variant="link">Action</Button>
                </NotificationDrawerListItemHeader>
                <NotificationDrawerListItemBody timestamp="5 minutes ago">
                  This is an info notification description.
                </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
              <NotificationDrawerListItem variant="danger">
                <NotificationDrawerListItemHeader
                  variant="danger"
                  title="Danger notification title. This is a long title to show how the title will wrap if it is long and wraps to multiple lines."
                  srTitle="Danger notification:"
                />
                <NotificationDrawerListItemBody timestamp="10 minutes ago">
                  This is a danger notification description. This is a long description to show how the title will wrap
                  if it is long and wraps to multiple lines.
                </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
              <NotificationDrawerListItem variant="warning">
                <NotificationDrawerListItemHeader
                  variant="warning"
                  title="Warning notification title"
                  srTitle="Warning notification:"
                />
                <NotificationDrawerListItemBody timestamp="20 minutes ago">
                  This is a warning notification description.
                </NotificationDrawerListItemBody>
              </NotificationDrawerListItem>
              <NotificationDrawerListItem variant="success">
                <NotificationDrawerListItemHeader
                  variant="success"
                  title="Success notification title"
                  srTitle="Success notification:"
                />
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
            isRead={true}
            onExpand={toggleThirdDrawer}
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
