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
  DropdownList,
  MenuToggle
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

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

  onToggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  onSelect = () => {
    this.setState({
      isOpen: false
    });
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
                id="dropdown"
                isOpen={this.state.isOpen}
                onSelect={this.onSelect}
                onOpenChange={(isOpen) => this.setState({ isOpen })}
                toggle={(toggleRef) => (
                  <MenuToggle variant="plain" ref={toggleRef} isExpanded={this.state.isOpen} onClick={this.onToggle}>
                    <EllipsisVIcon />
                  </MenuToggle>
                )}
              >
                <DropdownList>
                  <DropdownItem key="link">Link</DropdownItem>
                  <DropdownItem key="action">Action</DropdownItem>
                  <DropdownItem key="disabled link" isDisabled>
                    Disabled Link
                  </DropdownItem>
                </DropdownList>
              </Dropdown>
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
