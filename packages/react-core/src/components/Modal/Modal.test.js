import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

test('Modal Test', () => {
  const view = shallow(
    <Modal label="Test Modal label">This is a ModalBox header</Modal>
  );
  expect(view).toMatchSnapshot();
});
