import React from 'react';
import {
  DataList,
  DataListProps,
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,
  DataListAction,
  DataListWrapModifier
} from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownItem as DropdownItemDeprecated,
  DropdownPosition,
  KebabToggle
} from '@patternfly/react-core/deprecated';

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

  onSelectDataListItem = (_event: React.MouseEvent | React.KeyboardEvent, id: string) => {
    this.setState({ selectedDataListItemId: id });
  };

  onToggle = (_event: any, isOpen: boolean) => {
    this.setState({ isOpen });
  };

  onSelect = () => {
    this.setState((prevState) => ({
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
              <DropdownDeprecated
                isPlain
                position={DropdownPosition.right}
                isOpen={this.state.isOpen}
                onSelect={this.onSelect}
                toggle={<KebabToggle id="toggle-id" onToggle={this.onToggle} />}
                dropdownItems={[
                  <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
                  <DropdownItemDeprecated key="action" component="button">
                    Action
                  </DropdownItemDeprecated>,
                  <DropdownItemDeprecated key="disabled link" isDisabled>
                    Disabled Link
                  </DropdownItemDeprecated>
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
