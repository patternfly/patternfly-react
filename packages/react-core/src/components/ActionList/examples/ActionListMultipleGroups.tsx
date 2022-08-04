import React from 'react';
import { ActionList, ActionListGroup, ActionListItem, Button } from '@patternfly/react-core';

export const ActionListMultipleGroups: React.FunctionComponent = () => (
  <ActionList>
    <ActionListGroup>
      <ActionListItem>
        <Button variant="primary" id="multi-group-next-button">
          Next
        </Button>
      </ActionListItem>
      <ActionListItem>
        <Button variant="secondary" id="multi-group-back-button">
          Back
        </Button>
      </ActionListItem>
    </ActionListGroup>
    <ActionListGroup>
      <ActionListItem>
        <Button variant="primary" id="multi-group-submit-button">
          Submit
        </Button>
      </ActionListItem>
      <ActionListItem>
        <Button variant="link" id="multi-group-cancel-button">
          Cancel
        </Button>
      </ActionListItem>
    </ActionListGroup>
  </ActionList>
);
