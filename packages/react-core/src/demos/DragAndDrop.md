---
id: Drag and drop
section: demos
---

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

### Basic
```js
import React from 'react';
import { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell, DataListControl, DataListDragButton } from '@patternfly/react-core';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  background: isDragging ? "lightgreen" : "transparent",
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "transparent"
});

Basic = () => {
  const [items, setItems] = React.useState(getItems(10));
  
  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(newItems);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <DataList
            {...provided.droppableProps}
            innerRef={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <DataListItem
                    innerRef={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <DataListItemRow>
                    <DataListControl>
                      <DataListDragButton
                        aria-label="Reorder"
                        aria-labelledby="simple-item1"
                        aria-describedby="Press space or enter to begin dragging, and use the arrow keys to navigate up or down. Press enter to confirm the drag, or any other key to cancel the drag operation."
                        aria-pressed="false"
                      />
                    </DataListControl>
                      <DataListItemCells
                        dataListCells={
                          <DataListCell>
                            {item.content}
                          </DataListCell>
                        }
                      />
                    </DataListItemRow>
                  </DataListItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </DataList>
        )}
      </Droppable>
    </DragDropContext>
  );
}
```

### Two lists
```js
import React from 'react';
import { DataList, DataListItem, DataListItemRow, DataListItemCells, DataListCell, Split, SplitItem } from '@patternfly/react-core';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const getItems = (count, offset) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  background: isDragging ? "lightgreen" : "transparent",
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "transparent"
});

TwoLists = () => {
  const [list1, setList1] = React.useState(getItems(10, 0));
  const [list2, setList2] = React.useState(getItems(5, 10));
  
  const onDragEnd = result => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const newItems = reorder(
        source.droppableId === 'droppable1' ? list1 : list2,
        source.index,
        destination.index
      );

      if (source.droppableId === 'droppable1') {
        setList1(newItems);
      } else {
        setList2(newItems);
      }
    } else {
      const result = move(
        source.droppableId === 'droppable1'      ? list1 : list2,
        destination.droppableId === 'droppable1' ? list1 : list2,
        source,
        destination
      );

      setList1(result.droppable1);
      setList2(result.droppable2);
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Split hasGutter>
        <SplitItem>
          <Droppable droppableId="droppable1">
            {(provided, snapshot) => (
              <DataList
                {...provided.droppableProps}
                innerRef={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {list1.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <DataListItem
                        innerRef={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <DataListItemRow>
                          <DataListItemCells
                            dataListCells={
                              <DataListCell>
                                {item.content}
                              </DataListCell>
                            }
                          />
                        </DataListItemRow>
                      </DataListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </DataList>
            )}
          </Droppable>
        </SplitItem>
        <SplitItem>
          <Droppable droppableId="droppable2">
            {(provided, snapshot) => (
              <DataList
                {...provided.droppableProps}
                innerRef={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {list2.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <DataListItem
                        innerRef={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <DataListItemRow>
                          <DataListItemCells
                            dataListCells={
                              <DataListCell>
                                {item.content}
                              </DataListCell>
                            }
                          />
                        </DataListItemRow>
                      </DataListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </DataList>
            )}
          </Droppable>
        </SplitItem>
      </Split>
    </DragDropContext>
  );
}
```

