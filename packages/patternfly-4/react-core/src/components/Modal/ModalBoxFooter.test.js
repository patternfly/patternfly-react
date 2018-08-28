import React from 'react';
import { shallow } from 'enzyme';
import ModalBoxFooter from './ModalBoxFooter';

test('ModalBoxFooter Test', () => {
  const view = shallow(<ModalBoxFooter>This is a ModalBox Footer</ModalBoxFooter>);
  expect(view).toMatchSnapshot();
});
