import React from 'react';
import {
  DataList,
  DataListProps,
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell
} from '@patternfly/react-core';

interface DataListState {
  selectedDataListItemId: string;
}

export class DataListDemo extends React.Component<DataListProps, DataListState> {
  constructor(props: DataListProps) {
    super(props);
    this.state = {
      selectedDataListItemId: ''
    };
  }

  onSelectDataListItem = (id: string) => {
    this.setState({ selectedDataListItemId: id });
  };

  render() {
    return (
      <DataList
        aria-label="Simple data list example"
        selectedDataListItemId={this.state.selectedDataListItemId}
        onSelectDataListItem={this.onSelectDataListItem}
      >
        <DataListItem aria-labelledby="simple-item1" id="row1">
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
        <DataListItem aria-labelledby="simple-item2" id="row2">
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
