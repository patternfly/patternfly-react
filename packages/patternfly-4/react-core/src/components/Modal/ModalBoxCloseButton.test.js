import React from 'react';
import { shallow } from 'enzyme';
import ModalBoxCloseButton from './ModalBoxCloseButton';

test('ModalBoxCloseButton Test', () => {
  const view = shallow(<ModalBoxCloseButton />);
  expect(view).toMatchSnapshot();
});
