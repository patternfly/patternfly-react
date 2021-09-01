---
id: Drag and drop
section: components
---

You can use Draggable and Droppable components to move items in or between lists.

## Examples
### Basic

```js
import React from 'react';
import { Draggable, Droppable } from '@patternfly/react-core';

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

Basic = () => {
  const [items, setItems] = React.useState(getItems(10));

  return (
    <Droppable id="todolist">
      {items.map(({ id, content }) =>
        <Draggable key={id} style={{ padding: '8px' }}>
          {content}
        </Draggable>
      )}
    </Droppable>
  );
}
```

