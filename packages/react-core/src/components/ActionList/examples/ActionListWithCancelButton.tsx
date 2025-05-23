import { Fragment } from 'react';
import { ActionList, ActionListGroup, ActionListItem, Button } from '@patternfly/react-core';

export const ActionListWithCancelButton: React.FunctionComponent = () => (
  <Fragment>
    In modals, forms, data lists
    <ActionList>
      <ActionListGroup>
        <ActionListItem>
          <Button variant="primary" id="with-cancel-save-button">
            Save
          </Button>
        </ActionListItem>
        <ActionListItem>
          <Button variant="link" id="with-cancel-cancel-button">
            Cancel
          </Button>
        </ActionListItem>
      </ActionListGroup>
    </ActionList>
    <br />
    In wizards
    <ActionList>
      <ActionListGroup>
        <ActionListItem>
          <Button variant="primary" id="with-cancel-next-button">
            Next
          </Button>
        </ActionListItem>
        <ActionListItem>
          <Button variant="secondary" id="with-cancel-back-button">
            Back
          </Button>
        </ActionListItem>
      </ActionListGroup>
      <ActionListGroup>
        <ActionListItem>
          <Button variant="link" id="with-cancel-cancel-button2">
            Cancel
          </Button>
        </ActionListItem>
      </ActionListGroup>
    </ActionList>
  </Fragment>
);
