---
id: Drag and drop
section: components
propComponents: [
  DragDrop,
  Draggable,
  Droppable
]
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
    content: `item ${k}`
  }));

Basic = () => {
  const [items, setItems] = React.useState(getItems(10));

  return (
    <DragDrop>
      <Droppable zone="basic">
        {items.map(({ id, content }) =>
          <Draggable key={id} style={{ padding: '8px' }}>
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

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

Basic = () => {
  const [items, setItems] = React.useState(getItems(10));

  return (
    <DragDrop>
      <Split hasGutter>
        <SplitItem>
          <Droppable zone="multizone">
            {items.map(({ id, content }) =>
              <Draggable key={id} style={{ padding: '8px' }}>
                {content}
              </Draggable>
            )}
          </Droppable>
        </SplitItem>
        <SplitItem>
          <Droppable zone="multizone">
            {items.map(({ id, content }) =>
              <Draggable key={id} style={{ padding: '8px' }}>
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

