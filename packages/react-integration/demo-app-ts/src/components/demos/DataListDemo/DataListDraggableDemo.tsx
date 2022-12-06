import React from 'react';
import {
  DataList,
  DataListItem,
  DataListCell,
  DataListItemRow,
  DataListControl,
  DataListDragButton,
  DataListItemCells,
  DragDrop,
  Draggable,
  Droppable
} from '@patternfly/react-core';

interface ItemType {
  id: string;
  content: string;
}

const getItems = (count: number) =>
  Array.from({ length: count }, (_, idx) => idx).map(idx => ({
    id: `draggable-item-${idx}`,
    content: `item ${idx} `
  }));

const reorder = (list: ItemType[], startIndex: number, endIndex: number) => {
  const result = list;
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export class DataListDraggableDemo extends React.Component {
  static displayName = 'DataListDraggableDemo';
  state = {
    liveText: '',
    items: getItems(5)
  };

  onDrag = (source: any) => {
    this.setState({
      liveText: `Started dragging ${this.state.items[source.index].content}`
    });
    // Return true to allow drag
    return true;
  };

  onDragMove = (source: any, dest: any) => {
    const { liveText, items } = this.state;
    const newText = dest ? `Move ${items[source.index].content} to ${items[dest.index].content}` : 'Invalid drop zone';
    if (newText !== liveText) {
      this.setState({
        liveText: newText
      });
    }
  };

  onDrop = (source: any, dest: any) => {
    if (dest) {
      const newItems = reorder(this.state.items, source.index, dest.index);
      this.setState({
        items: newItems,
        liveText: 'Dragging finished.'
      });
      return true; // Signal that this is a valid drop and not to animate the item returning home.
    } else {
      this.setState({
        liveText: 'Dragging cancelled. List unchanged.'
      });
    }
  };

  render() {
    const { liveText, items } = this.state;
    return (
      <DragDrop onDrag={this.onDrag} onDragMove={this.onDragMove} onDrop={this.onDrop}>
        <Droppable hasNoWrapper>
          <DataList aria-label="draggable data list example" isCompact>
            {items.map(({ id, content }) => (
              <Draggable key={id} hasNoWrapper>
                <DataListItem id={id} aria-labelledby={`${id}-content`}>
                  <DataListItemRow>
                    <DataListControl>
                      <DataListDragButton
                        aria-label="Reorder"
                        aria-labelledby={`${id}-content`}
                        aria-pressed="false"
                        id={`${id}-drag-button`}
                      />
                    </DataListControl>
                    <DataListItemCells
                      dataListCells={[
                        <DataListCell key={id}>
                          <span id={`${id}-content`}>{content}</span>
                        </DataListCell>
                      ]}
                    />
                  </DataListItemRow>
                </DataListItem>
              </Draggable>
            ))}
          </DataList>
        </Droppable>
        <div className="pf-screen-reader" aria-live="assertive">
          {liveText}
        </div>
      </DragDrop>
    );
  }
}
