import React from 'react';
import {
  Droppable as NewDroppable,
  DraggableObject,
  DragDropContainer,
  DragDropContainerDragOverEvent,
  DragDropContainerDragEndEvent,
  DragDropContainerDragCancelEvent
} from '@patternfly/react-drag-drop';

export const DragDropContainerBasic: React.FunctionComponent = () => {
  const [allItems, setAllItems] = React.useState<Record<string, DraggableObject[]>>({
    container1: [
      { id: 'button-1', content: 'one' },
      { id: 'button-2', content: 'two' },
      { id: 'button-3', content: 'three' }
    ],
    container2: [
      { id: 'button-4', content: 'four' },
      { id: 'button-5', content: 'five' },
      { id: 'button-6', content: 'six' }
    ]
  });

  return (
    <DragDropContainer
      items={allItems}
      onDrop={(_event: DragDropContainerDragEndEvent, newItems: Record<string, DraggableObject[]>) => {
        setAllItems(newItems);
      }}
      onContainerMove={(_event: DragDropContainerDragOverEvent, newItems: Record<string, DraggableObject[]>) => {
        setAllItems(newItems);
      }}
      onCancel={(_event: DragDropContainerDragCancelEvent, prevItems: Record<string, DraggableObject[]>) => {
        setAllItems(prevItems);
      }}
    >
      <h1>group 1</h1>
      <NewDroppable items={allItems.container1} id="container1" />
      <br />
      <h1>group 2</h1>
      <NewDroppable items={allItems.container2} id="container2" />
    </DragDropContainer>
  );
};
