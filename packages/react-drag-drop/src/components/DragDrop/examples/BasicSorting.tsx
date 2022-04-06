import React from 'react';
import { DragDropSort, DraggableObject } from '@patternfly/react-drag-drop';

export const BasicSorting: React.FunctionComponent = () => {
  const [items, setItems] = React.useState<DraggableObject[]>([
    { id: '1', content: 'one' },
    { id: '2', content: 'two' },
    { id: '3', content: 'three' }
  ]);
  const [dragging, setDragging] = React.useState(false);

  return (
    <div className={`pf-c-droppable ${dragging ? 'pf-m-dragging' : ''}`}>
      <DragDropSort
        items={items}
        onDrop={newItems => {
          setItems(newItems);
          setDragging(false);
        }}
        onDrag={() => setDragging(true)}
      />
    </div>
  );
};
