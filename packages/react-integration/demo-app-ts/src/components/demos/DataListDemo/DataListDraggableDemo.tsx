import React from 'react';
import {
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListCheck,
  DataListControl,
  DataListDragButton,
  DataListItemCells
} from '@patternfly/react-core';

export class DataListDraggableDemo extends React.Component {
  static displayName = 'DataListDraggableDemo';
  state = {
    liveText: '',
    id: '',
    itemOrder: ['data1', 'data2', 'data3', 'data4']
  };

  onDragStart = (id: string) => {
    this.setState({
      id,
      liveText: `Dragging started for item id: ${id}.`
    });
  };

  onDragMove = (_oldIndex: number, _newIndex: number) => {
    const { id } = this.state;
    this.setState({
      liveText: `Dragging item ${id}.`
    });
  };

  onDragCancel = () => {
    this.setState({
      liveText: `Dragging cancelled. List is unchanged.`
    });
  };

  onDragFinish = (itemOrder: string[]) => {
    this.setState({
      liveText: `Dragging finished`,
      itemOrder
    });
  };

  render() {
    const { liveText, itemOrder } = this.state;
    return (
      <React.Fragment>
        <DataList
          aria-label="draggable data list example"
          isCompact
          onDragFinish={this.onDragFinish}
          onDragStart={this.onDragStart}
          onDragMove={this.onDragMove}
          onDragCancel={this.onDragCancel}
          itemOrder={itemOrder}
        >
          <DataListItem aria-labelledby="simple-item1" id="data1" key="1">
            <DataListItemRow>
              <DataListControl>
                <DataListDragButton
                  id="drag1"
                  aria-label="Reorder"
                  aria-labelledby="simple-item1"
                  aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                  aria-pressed="false"
                />
                <DataListCheck aria-labelledby="simple-item1" name="check1" otherControls />
              </DataListControl>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="item1">
                    <span id="simple-item1">Item 1</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="simple-item2" id="data2" key="2">
            <DataListItemRow>
              <DataListControl>
                <DataListDragButton
                  aria-label="Reorder"
                  aria-labelledby="simple-item2"
                  aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                  aria-pressed="false"
                />
                <DataListCheck aria-labelledby="simple-item2" name="check2" otherControls />
              </DataListControl>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="item2">
                    <span id="simple-item2">Item 2</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="simple-item3" id="data3" key="3">
            <DataListItemRow>
              <DataListControl>
                <DataListDragButton
                  aria-label="Reorder"
                  aria-labelledby="simple-item3"
                  aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                  aria-pressed="false"
                />
                <DataListCheck aria-labelledby="simple-item3" name="check3" otherControls />
              </DataListControl>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="item3">
                    <span id="simple-item3">Item 3</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
          <DataListItem aria-labelledby="simple-item4" id="data4" key="4">
            <DataListItemRow>
              <DataListControl>
                <DataListDragButton
                  aria-label="Reorder"
                  aria-labelledby="simple-item4"
                  aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                  aria-pressed="false"
                />
                <DataListCheck aria-labelledby="simple-item4" name="check4" otherControls />
              </DataListControl>
              <DataListItemCells
                dataListCells={[
                  <DataListCell key="item4">
                    <span id="simple-item4">Item 4</span>
                  </DataListCell>
                ]}
              />
            </DataListItemRow>
          </DataListItem>
        </DataList>
        <div className="pf-screen-reader" aria-live="assertive">
          {liveText}
        </div>
      </React.Fragment>
    );
  }
}
