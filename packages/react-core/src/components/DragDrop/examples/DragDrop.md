---
id: Drag and drop
section: components
propComponents: [DragDrop, Draggable, Droppable, DraggableItemPosition]
beta: true
---

You can use `DragDrop` to move items in or between lists. `DragDrop`s should contain `Droppable`s which contain `Draggable`s.

```ts noLive
import React from 'react';
import { DragDrop, Draggable, Droppable } from '@patternfly/react-core';

const DragDropCodeSample: React.FunctionComponent = () => (
  <DragDrop> {/* DragDrop houses the context for dragging and dropping */}
    <Droppable>
      <Draggable>You can put anything here! It will be wrapped in a styled div.</Draggable>
      <Draggable>You can have as many Draggables as you like.</Draggable>
    </Droppable>
    <Droppable> {/* You can also have many droppables! */}
      <Draggable />
    </Droppable>
  </DragDrop>
);
```

Note: Keyboard accessibility and screen reader accessibility are still in development.

## Examples

### Basic

```ts file="./DragDropBasic.tsx"
```

### Multiple lists

```ts file="./DragDropMultipleLists.tsx"
```
