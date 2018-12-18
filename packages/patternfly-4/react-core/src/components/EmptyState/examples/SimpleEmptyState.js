import React from 'react';
import { Title, Button, EmptyState, EmptyStateIcon, EmptyStateBody, EmptyStateAction } from '@patternfly/react-core';
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
        <EmptyStateAction>
          <Button variant="primary">Buy more ideas</Button>
          <Button variant="link" aria-label="Buy something else action">
            Buy something else
          </Button>
        </EmptyStateAction>
      </EmptyState>
    );
  }
}

export default SimpleEmptyState;
