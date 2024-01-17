import React from 'react';
import {
  EmptyState,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateActions,
  EmptyStateStatus,
  Button
} from '@patternfly/react-core';

export const EmptyStateWithStatus: React.FunctionComponent = () => {
  const [status, setStatus] = React.useState<EmptyStateStatus>(EmptyStateStatus.success);

  const toggleStatus = () => {
    interface StatusToggleMap {
      [status: string]: EmptyStateStatus;
    }

    const statusToggleMap: StatusToggleMap = {
      success: EmptyStateStatus.danger,
      danger: EmptyStateStatus.warning,
      warning: EmptyStateStatus.info,
      info: EmptyStateStatus.custom,
      custom: EmptyStateStatus.success
    };

    setStatus((prevStatus: EmptyStateStatus) => statusToggleMap[prevStatus]);
  };

  const titleMap = {
    success: "You're all set",
    danger: "You're not set",
    warning: "You're probably not set",
    info: 'You might be set',
    custom: "You're custom"
  };

  return (
    <EmptyState status={status} titleText={titleMap[status]} headingLevel="h4">
      <EmptyStateBody>
        This represents an the empty state pattern in PatternFly. Hopefully it's simple enough to use but flexible
        enough to meet a variety of needs.
      </EmptyStateBody>
      <EmptyStateFooter>
        <EmptyStateActions>
          <Button variant="primary" onClick={toggleStatus}>
            Toggle status
          </Button>
        </EmptyStateActions>
        <EmptyStateActions>
          <Button variant="link">Multiple</Button>
          <Button variant="link">Action Buttons</Button>
          <Button variant="link">Can</Button>
          <Button variant="link">Go here</Button>
          <Button variant="link">In the secondary</Button>
          <Button variant="link">Action area</Button>
        </EmptyStateActions>
      </EmptyStateFooter>
    </EmptyState>
  );
};
