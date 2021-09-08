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
    content: `item ${k} `.repeat(k === 5 ? 20 : 1)
  }));

Basic = () => {
  const [items, setItems] = React.useState(getItems(10));

  function onDrop(sourceDroppableIndex, sourceDraggableIndex, destDroppableIndex, destDraggableIndex) {
    console.log('onDrop', arguments);
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
    content: `item ${k + start} `.repeat(k === 5 ? 20 : 1)
  }));

Basic = () => {
  const [items1, setItems1] = React.useState(getItems(10, 0));
  const [items2, setItems2] = React.useState(getItems(5, 10));

  return (
    <DragDrop>
      <Split hasGutter>
        <SplitItem>
          <Droppable zone="multizone" droppableId="items1">
            {items1.map(({ id, content }) =>
              <Draggable key={id} draggableId={id} style={{ padding: '8px' }}>
                {content}
              </Draggable>
            )}
          </Droppable>
        </SplitItem>
        <SplitItem>
          <Droppable zone="multizone" droppableId="items2">
            {items2.map(({ id, content }) =>
              <Draggable key={id} draggableId={id} style={{ padding: '8px' }}>
                {content}
              </Draggable>
            )}
          </Droppable>
        </SplitItem>
      </Split>
    </DragDrop>
  );
}
```

