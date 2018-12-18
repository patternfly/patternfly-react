import React from 'react';
import {
  Button,
  Dropdown,
  KebabToggle,
  DropdownItem,
  DataList,
  DataListItem,
  DataListCell,
  DataListCheck,
  DataListAction
} from '@patternfly/react-core';

class ActionsDataList extends React.Component {
  state = { isOpen: false, isDeleted: false };
  render() {
    return (
      <React.Fragment>
        <DataList aria-label="single action data list example ">
          {!this.state.isDeleted && (
            <DataListItem aria-labelledby="single-action-item1">
              <DataListCell>
                <span id="single-action-item1">Single actionable Primary content</span>
              </DataListCell>
              <DataListCell>Single actionable Secondary content</DataListCell>
              <DataListAction
                aria-labelledby="single-action-item1 single-action-action1"
                id="single-action-action1"
                aria-label="Actions"
              >
                <Button
                  onClick={() => {
                    if (confirm('Are you sure?')) {
                      this.setState({ isDeleted: true });
                    }
                  }}
                  variant="primary"
                  key="delete-action"
                >
                  Delete
                </Button>
              </DataListAction>
            </DataListItem>
          )}
          <DataListItem aria-labelledby="multi-actions-item1">
            <DataListCell>
              <span id="multi-actions-item1">Multi actions Primary content</span>
            </DataListCell>
            <DataListCell>Multi actions Secondary content</DataListCell>
            <DataListAction
              aria-labelledby="multi-actions-item1 multi-actions-action1"
              id="multi-actions-action1"
              aria-label="Actions"
              actions={[
                <DropdownItem key="link">Link</DropdownItem>,
                <DropdownItem key="action" component="button">
                  Action
                </DropdownItem>,
                <DropdownItem key="disabled link" isDisabled>
                  Disabled Link
                </DropdownItem>
              ]}
            />
            } />
          </DataListItem>
        </DataList>
      </React.Fragment>
    );
  }
}

export default ActionsDataList;
