import { useState } from 'react';
import { DataList, DataListCell, DataListCheck, DataListControl, DataListItemCells } from '@patternfly/react-core';
import { DragDropSort, DraggableObject } from '@patternfly/react-drag-drop';

const getItems = (count: number): DraggableObject[] =>
  Array.from({ length: count }, (_, idx) => idx).map((idx) => ({
    id: `data-list-item-${idx}`,
    content: (
      <>
        <DataListControl>
          <DataListCheck id={`check-drag-${idx}`} aria-labelledby={`item-${idx}`} name={`item-${idx}`} otherControls />
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

export const DataListDraggable: React.FunctionComponent = (props) => {
  const [items, setItems] = useState<DraggableObject[]>(getItems(10));

  return (
    <DragDropSort
      items={items}
      onDrop={(_, newItems) => {
        setItems(newItems);
      }}
      variant="DataList"
      overlayProps={{ isCompact: true }}
    >
      <DataList aria-label="draggable data list example" isCompact {...props} />
    </DragDropSort>
  );
};
