---
id: Drag and drop
section: components
propComponents: [
  DragDrop,
  Draggable,
  Droppable
]
beta: true
---

You can use Draggable and Droppable components to move items in or between lists.

## Examples
### Basic

```js
import React from 'react';
import { DragDrop, Draggable, Droppable } from '@patternfly/react-core';

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k} `.repeat(k === 4 ? 20 : 1)
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

Basic = () => {
  const [items, setItems] = React.useState(getItems(10));

  function onDrop(_sourceDroppableId, sourceDraggableId, destDroppableId, destDraggableId) {
    if (destDroppableId) {
      const sourceIndex = items.findIndex(item => item.id === sourceDraggableId);
      const destIndex = items.findIndex(item => item.id === destDraggableId);
      const newItems = reorder(
        items,
        sourceIndex,
        destIndex
      );
      setItems(newItems);

      return true;
    }
  }

  return (
    <DragDrop onDrop={onDrop}>
      <Droppable zone="basic">
        {items.map(({ id, content }) =>
          <Draggable key={id} draggableId={id} style={{ padding: '8px' }}>
            {content}
          </Draggable>
        )}
      </Droppable>
    </DragDrop>
  );
}
```

### Multiple lists

```js
import React from 'react';
import { DragDrop, Draggable, Droppable, Split, SplitItem } from '@patternfly/react-core';

const getItems = (count, start) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + start}`,
    content: `item ${k + start} `.repeat(k === 4 ? 20 : 1)
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const move = (source, destination, sourceIndex, destIndex) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(sourceIndex, 1);
  destClone.splice(destIndex, 0, removed);
  return [sourceClone, destClone];
};

MultiList = () => {
  const [items, setItems] = React.useState({
    items1: getItems(10, 0),
    items2: getItems(5, 10)
  });
  console.log('items', items);

  function onDrop(sourceDroppableId, sourceDraggableId, destDroppableId, destDraggableId) {
    console.log(sourceDroppableId, sourceDraggableId, destDroppableId, destDraggableId);
    if (destDroppableId) {
      const sourceIndex = items[sourceDroppableId].findIndex(item => item.id === sourceDraggableId);
      const destIndex = items[destDroppableId].findIndex(item => item.id === destDraggableId);
      if (sourceDroppableId === destDroppableId) {
        const newItems = reorder(
          sourceDroppableId === 'items1' ? items.items1 : items.items2,
          sourceIndex,
          destIndex
        );
        if (sourceDroppableId === 'items1') {
          setItems({
            items1: newItems,
            items2: items.items2
          });
        } else {
          setItems({
            items1: items.items1,
            items2: newItems
          });
        }
      } else {
        const [newItems1, newItems2] = move(
          sourceDroppableId === 'items1' ? items.items1 : items.items2,
          destDroppableId   === 'items1' ? items.items1 : items.items2,
          sourceIndex,
          destIndex
        );
        setItems({
          items1: newItems1,
          items2: newItems2
        });
      }
      return true;
    }
  }

  return (
    <DragDrop onDrop={onDrop}>
      <Split hasGutter>
        {Object.entries(items).map(([key, subitems]) =>
          <SplitItem key={key} style={{ flex: 1 }}>
            <Droppable zone="multizone" droppableId={key}>
              {subitems.map(({ id, content }) =>
                <Draggable key={key + id} draggableId={id} style={{ padding: '8px' }}>
                  {content}
                </Draggable>
              )}
            </Droppable>
          </SplitItem>
        )}
      </Split>
    </DragDrop>
  );
}
```

