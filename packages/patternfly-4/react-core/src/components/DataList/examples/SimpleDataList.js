import React from 'react';
import { DataList, DataListItem, DataListCell } from '@patternfly/react-core';

class SimpleDataList extends React.Component {
  render() {
    return (
      <DataList aria-label="Simple data list example">
        <DataListItem aria-labelledby="simple-item1">
          <DataListCell>
            <span id="simple-item1">Primary content</span>
          </DataListCell>
          <DataListCell>Secondary content</DataListCell>
        </DataListItem>
        <DataListItem aria-labelledby="simple-item2">
          <DataListCell>
            <span id="simple-item2">Second list item title</span>
          </DataListCell>
          <DataListCell>Secondary content</DataListCell>
        </DataListItem>
      </DataList>
    );
  }
}

export default SimpleDataList;
