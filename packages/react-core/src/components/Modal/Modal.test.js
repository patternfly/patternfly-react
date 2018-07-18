import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

test('Modal Test', () => {
  const view = shallow(
    <Modal label="Test Modal label">This is a ModalBox header</Modal>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Test isLarge', () => {
  const view = shallow(
    <Modal label="Test Modal label" isLarge>
      This is a ModalBox header
    </Modal>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Test show', () => {
  const view = shallow(
    <Modal label="Test Modal label" show>
      This is a ModalBox header
    </Modal>
  );
  expect(view).toMatchSnapshot();
});
