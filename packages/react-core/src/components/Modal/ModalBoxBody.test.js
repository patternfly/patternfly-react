import React from 'react';
import { shallow } from 'enzyme';
import ModalBoxBody from './ModalBoxBody';

test('ModalBoxBody Test', () => {
  const view = shallow(<ModalBoxBody>This is a ModalBox header</ModalBoxBody>);
  expect(view).toMatchSnapshot();
});
