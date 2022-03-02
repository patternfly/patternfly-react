import React from 'react';
import { render } from '@testing-library/react';
import { DragDrop, Draggable, Droppable } from '../';

test('renders some divs', () => {
  const view = render(
    <DragDrop>
      <Droppable droppableId="dropzone">
        <Draggable draggableId="draggable1">
          item 1
        </Draggable>
        <Draggable draggableId="draggable2">
          item 2
        </Draggable>
      </Droppable>
    </DragDrop>
  );
  expect(view.container).toMatchSnapshot();
});
