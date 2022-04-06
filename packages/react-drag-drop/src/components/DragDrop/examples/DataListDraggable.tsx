import React from 'react';
import { DataList, DataListCell, DataListCheck, DataListControl, DataListItemCells } from '@patternfly/react-core';
import { DragDropSort, DraggableObject } from '@patternfly/react-drag-drop';

const getItems = (count: number): DraggableObject[] =>
  Array.from({ length: count }, (_, idx) => idx).map(idx => ({
    id: `item-${idx}`,
    content: (
      <>
        <DataListControl>
          <DataListCheck aria-labelledby={`item-${idx}`} name={`item-${idx}`} otherControls />
        </DataListControl>
        <DataListItemCells
          dataListCells={[
            <DataListCell key={`item-${idx}`}>
              <span id={`item-${idx}`}>{`item-${idx}`}</span>
            </DataListCell>
          ]}
        />
      </>
    )
  }));

export const DataListDraggable: React.FunctionComponent = props => {
  const [items, setItems] = React.useState<DraggableObject[]>(getItems(10));
  const [dragging, setDragging] = React.useState(false);

  return (
    <DataList
      aria-label="draggable data list example"
      isCompact
      className={`pf-c-droppable ${dragging ? 'pf-m-dragging' : ''}`}
      {...props}
    >
      <DragDropSort
        items={items}
        onDrop={newItems => {
          setItems(newItems);
          setDragging(false);
        }}
        onDrag={() => setDragging(true)}
        variant="DataList"
      />
    </DataList>
  );
};
