import { FunctionComponent, useState } from 'react';
import { DragDropSort, DraggableObject } from '@patternfly/react-drag-drop';

export const BasicSorting: FunctionComponent = () => {
  const [items, setItems] = useState<DraggableObject[]>([
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
