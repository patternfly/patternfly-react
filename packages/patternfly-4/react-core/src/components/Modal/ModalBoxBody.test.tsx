import ModalBoxBody from './ModalBoxBody';
import * as React from 'react';
import { shallow } from 'enzyme';

test('ModalBoxBody Test', () => {
  const view = shallow(<ModalBoxBody id="id" className="test-box-class">This is a ModalBox header</ModalBoxBody>);
  expect(view).toMatchSnapshot();
});
