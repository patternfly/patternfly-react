import React from 'react';
import { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell } from '@patternfly/react-core';

export class DataListDemo extends React.Component {
  render() {
    return (
      <DataList aria-label="Simple data list example">
        <DataListItem aria-labelledby="simple-item1">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content">
                  <span id="simple-item1">Primary content</span>
                </DataListCell>,
                <DataListCell key="secondary content">
                  <span id="simple-item2">Secondary content</span>
                </DataListCell>
              ]}
            />
          </DataListItemRow>
        </DataListItem>
        <DataListItem aria-labelledby="simple-item2">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell isFilled={false} key="secondary content fill">
                  <span id="simple-item3">Secondary content (pf-m-no-fill)</span>
                </DataListCell>,
                <DataListCell isFilled={false} alignRight key="secondary content align">
                  <span id="simple-item4">Secondary content (pf-m-align-right pf-m-no-fill)</span>
                </DataListCell>
              ]}
            />
          </DataListItemRow>
        </DataListItem>
      </DataList>
    );
  }
}
