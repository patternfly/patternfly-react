import React from 'react';
import { shallow } from 'enzyme';
import { DragDrop, Draggable, Droppable } from '../';

test('renders some divs', () => {
  const view = shallow(
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
  expect(view).toMatchSnapshot();
});
