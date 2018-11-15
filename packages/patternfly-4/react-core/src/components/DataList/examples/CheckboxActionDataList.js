import React from 'react';
import { DataList, DataListItem, DataListCell, DataListCheck, DataListAction } from '@patternfly/react-core';

class CheckboxActionDataList extends React.Component {
  render() {
    return (
      <DataList aria-label="Checkbox and action data list example">
        <DataListItem aria-labelledby="check-action-item1">
          <DataListCheck aria-labelledby="check-action-item1" name="check-action-check1" />
          <DataListCell>
            <span id="check-action-item1">Primary content</span>
          </DataListCell>
          <DataListCell>Secondary content</DataListCell>
          <DataListAction
            aria-labelledby="check-action-item1 check-action-action1"
            id="check-action-action1"
            aria-label="Actions"
          />
        </DataListItem>
        <DataListItem aria-labelledby="check-action-item2">
          <DataListCheck aria-labelledby="check-action-item2" name="check-action-check2" />
          <DataListCell>
            <span id="check-action-item2">Primary content - Lorem ipsum</span> dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod.
          </DataListCell>
          <DataListCell>Secondary content</DataListCell>
          <DataListAction
            aria-labelledby="check-action-item2 check-action-action2"
            id="check-action-action2"
            aria-label="Actions"
          />
        </DataListItem>
      </DataList>
    );
  }
}

export default CheckboxActionDataList;
