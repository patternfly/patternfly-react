import React from 'react';
import {
  DataList,
  DataListProps,
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,
  DataListAction,
  DataListWrapModifier,
  Dropdown,
  DropdownItem,
  DropdownPosition,
  KebabToggle
} from '@patternfly/react-core';

interface DataListState {
  selectedDataListItemId: string;
  isOpen: boolean;
}

export class DataListDemo extends React.Component<DataListProps, DataListState> {
  static displayName = 'DataListDemo';
  constructor(props: DataListProps) {
    super(props);
    this.state = {
      selectedDataListItemId: '',
      isOpen: false
    };
  }

  onSelectDataListItem = (id: string) => {
    this.setState({ selectedDataListItemId: id });
  };

  onToggle = (isOpen: boolean) => {
    this.setState({ isOpen });
  };

  onSelect = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
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
            <DataListAction
              aria-labelledby="selectable-action-item1 selectable-action-action1"
              id="selectable-action-action1"
              aria-label="Actions"
              isPlainButtonAction
            >
              <Dropdown
                isPlain
                position={DropdownPosition.right}
                isOpen={this.state.isOpen}
                onSelect={this.onSelect}
                toggle={<KebabToggle id="toggle-id" onToggle={this.onToggle} />}
                dropdownItems={[
                  <DropdownItem key="link">Link</DropdownItem>,
                  <DropdownItem key="action" component="button">
                    Action
                  </DropdownItem>,
                  <DropdownItem key="disabled link" isDisabled>
                    Disabled Link
                  </DropdownItem>
                ]}
                id="dropdown"
              />
            </DataListAction>
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
        <DataListItem aria-labelledby="simple-item3">
          <DataListItemRow>
            <DataListItemCells
              dataListCells={[
                <DataListCell key="primary content" wrapModifier={DataListWrapModifier.breakWord}>
                  <span id="simple-item1">Primary content</span>
                </DataListCell>,
                <DataListCell
                  id="truncate-content"
                  key="secondary content"
                  wrapModifier={DataListWrapModifier.truncate}
                >
                  Really really really really really really really really really really really really really really
                  really really really really really really really really really really really really really really long
                  description that should be truncated before it ends
                </DataListCell>
              ]}
            />
          </DataListItemRow>
        </DataListItem>
      </DataList>
    );
  }
}
