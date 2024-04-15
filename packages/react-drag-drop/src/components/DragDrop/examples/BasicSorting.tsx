import React from 'react';
import { DragDropSort, DraggableObject } from '@patternfly/react-drag-drop';

export const BasicSorting: React.FunctionComponent = () => {
  const [items, setItems] = React.useState<DraggableObject[]>([
    { id: 'basic-1', content: 'one' },
    { id: 'basic-2', content: 'two' },
    { id: 'basic-3', content: 'three' }
  ]);

  return (
    <DragDropSort
      items={items}
      onDrop={(_, newItems) => {
        setItems(newItems);
      }}
    />
  );
};
