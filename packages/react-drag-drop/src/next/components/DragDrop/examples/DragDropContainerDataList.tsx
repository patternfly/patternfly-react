import React from 'react';
import {
  DataList,
  DataListCell,
  DataListCheck,
  DataListControl,
  DataListItemCells,
  Grid,
  GridItem
} from '@patternfly/react-core';
import { DragDropContainer, DraggableObject, Droppable as NewDroppable } from '@patternfly/react-drag-drop';

const getItems = (from: number, count: number): DraggableObject[] =>
  Array.from({ length: count }, (_, idx) => from + idx).map((idx) => ({
    id: `data-list-item-${idx}`,
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

export const DataListDraggable: React.FunctionComponent = (props) => {
  const [items, setItems] = React.useState<Record<string, DraggableObject[]>>({
    group1: getItems(0, 5),
    group2: getItems(5, 5)
  });

  return (
    <DragDropContainer
      items={items}
      onDrop={(_, newItems) => {
        setItems(newItems);
      }}
      onContainerMove={(_, newItems) => {
        setItems(newItems);
      }}
      onCancel={(_, prevItems) => {
        setItems(prevItems);
      }}
      variant="DataList"
      overlayProps={{ isCompact: true }}
    >
      <Grid hasGutter>
        <GridItem span={6}>
          <h1>group 1</h1>
          <NewDroppable
            id="group1"
            items={items.group1}
            variant="DataList"
            wrapper={<DataList aria-label="draggable data list example" isCompact {...props} />}
          />
        </GridItem>
        <GridItem span={6}>
          <h1>group 2</h1>
          <NewDroppable
            id="group2"
            items={items.group2}
            variant="DataList"
            wrapper={<DataList aria-label="draggable data list example" isCompact {...props} />}
          />
        </GridItem>
      </Grid>
    </DragDropContainer>
  );
};
