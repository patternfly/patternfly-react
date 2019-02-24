import React from 'react';
import {
  Title,
  Button,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions
} from '@patternfly/react-core';
import { CommentDollarIcon } from '@patternfly/react-icons';

class IconSize extends React.Component {
  render() {
    return (
      <EmptyState>
        <EmptyStateIcon icon={CommentDollarIcon} size="xl" />
        <Title size="xl">Title</Title>
        <EmptyStateBody>This represents an empty state pattern in Patternfly 4.</EmptyStateBody>
        <Button variant="primary">Primary Action</Button>
        <EmptyStateSecondaryActions>
          <Button variant="link">Secondary Action</Button>
        </EmptyStateSecondaryActions>
      </EmptyState>
    );
  }
}

export default IconSize;
