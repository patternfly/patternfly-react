import * as React from 'react';
import { shallow } from 'enzyme';

import { ModalBoxHeader } from '../ModalBoxHeader';

test('ModalBoxHeader Test', () => {
  const view = shallow(<ModalBoxHeader>This is a ModalBox header</ModalBoxHeader>);
  expect(view).toMatchSnapshot();
});

test('ModalBoxHeader help renders', () => {
  const view = shallow(<ModalBoxHeader help={<div>test</div>}>This is a ModalBox header</ModalBoxHeader>);
  expect(view).toMatchSnapshot();
});
