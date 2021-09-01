import React from 'react';
import { shallow } from 'enzyme';
import DragDrop from './DragDrop';

test('basic', () => {
  const view = shallow(<DragDrop />);
  // Add a useful assertion here.
  expect(view).toBe(false);
});
