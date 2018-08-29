import ModalBoxHeader from './ModalBoxHeader';
import React from 'react';
import { shallow } from 'enzyme';

test('ModalBoxHeader Test', () => {
  const view = shallow(<ModalBoxHeader>This is a ModalBox header</ModalBoxHeader>);
  expect(view).toMatchSnapshot();
});
