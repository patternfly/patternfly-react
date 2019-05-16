import ModalBoxBody from './ModalBoxBody';
import React from 'react';
import { shallow } from 'enzyme';

test('ModalBoxBody Test', () => {
  const view = shallow(<ModalBoxBody id="id">This is a ModalBox header</ModalBoxBody>);
  expect(view).toMatchSnapshot();
});
