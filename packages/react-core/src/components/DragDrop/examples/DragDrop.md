---
id: Drag and drop
section: components
propComponents: [
  DragDrop,
  Draggable,
  Droppable,
  DraggableItemPosition
]
beta: true
---

You can use `DragDrop` to move items in or between lists. `DragDrop`s should contain `Droppable`s which contain `Draggable`s.

```js noLive
import React from 'react';
import { DragDrop, Draggable, Droppable } from '@patternfly/react-core';

<DragDrop> {/* DragDrop houses the context for dragging and dropping */}
  <Droppable>
    <Draggable>
      You can put anything here! It will be wrapped in a styled div.
    </Draggable>
    <Draggable>
      You can have as many Draggables as you like.
    </Draggable>
  </Droppable>
  <Droppable> {/* You can also have many droppables! */}
    <Draggable />
  </Droppable>
</DragDrop>
```
Note: Keyboard accessibility and screen reader accessibility are still in development.

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

  function onDrop(source, dest) {
    if (dest) {
      const newItems = reorder(
        items,
        source.index,
        dest.index
      );
      setItems(newItems);

      return true;
    }
    return false;
  }

  return (
    <DragDrop onDrop={onDrop}>
      <Droppable>
        {items.map(({ id, content }, i) =>
          <Draggable key={i} style={{ padding: '8px' }}>
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

  function onDrop(source, dest) {
    console.log(source, dest);
    if (dest) {
      if (source.droppableId === dest.droppableId) {
        const newItems = reorder(
          source.droppableId === 'items1' ? items.items1 : items.items2,
          source.index,
          dest.index
        );
        if (source.droppableId === 'items1') {
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
          source.droppableId === 'items1' ? items.items1 : items.items2,
          dest.droppableId   === 'items1' ? items.items1 : items.items2,
          source.index,
          dest.index
        );
        setItems({
          items1: source.droppableId === 'items1' ? newItems1 : newItems2,
          items2: dest.droppableId   === 'items1' ? newItems1 : newItems2
        });
      }
      return true;
    }
    return false;
  }

  return (
    <DragDrop onDrop={onDrop}>
      <Split hasGutter>
        {Object.entries(items).map(([key, subitems]) =>
          <SplitItem key={key} style={{ flex: 1 }}>
            <Droppable zone="multizone" droppableId={key}>
              {subitems.map(({ id, content }, i) =>
                <Draggable key={id} style={{ padding: '8px' }}>
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

