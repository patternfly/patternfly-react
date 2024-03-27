import { FunctionComponent, useState } from 'react';
import { DragDropSort, DraggableObject } from '@patternfly/react-drag-drop';

export const BasicSortingWithDragButton: FunctionComponent = () => {
  const [items, setItems] = useState<DraggableObject[]>([
    { id: 'with-button-1', content: 'one' },
    { id: 'with-button-2', content: 'two' },
    { id: 'with-button-3', content: 'three' }
  ]);

  return (
    <DragDropSort
      items={items}
      variant="defaultWithHandle"
      onDrop={(_, newItems) => {
        setItems(newItems);
      }}
    />
  );
};
