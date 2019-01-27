import React from 'react';
import { Title, Button, EmptyState, EmptyStateIcon, EmptyStateBody, EmptyStateSecondary } from '@patternfly/react-core';
import { CubesIcon } from '@patternfly/react-icons';

class SimpleEmptyState extends React.Component {
  render() {
    return (
      <EmptyState>
        <EmptyStateIcon icon={CubesIcon} />
        <Title size="lg">Empty State</Title>
        <EmptyStateBody>
          This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
          enough to meet a variety of needs.
        </EmptyStateBody>
        <Button variant="primary">Primary action</Button>
        <EmptyStateSecondary>
          <Button variant="link">
            Multiple
          </Button>
          <Button variant="link">
            Action Buttons
          </Button>
          <Button variant="link">
            Can
          </Button>
          <Button variant="link">
            Go here
          </Button>
          <Button variant="link">
            In the secondary
          </Button>
          <Button variant="link">
            Action area
          </Button>
        </EmptyStateSecondary>
      </EmptyState>
    );
  }
}

export default SimpleEmptyState;
