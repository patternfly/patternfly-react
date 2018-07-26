import Modal from './Modal';
import React from 'react';
import { shallow } from 'enzyme';

test('Modal Test', () => {
  const view = shallow(
    <Modal title="Test Modal title" id="id">
      This is a ModalBox header
    </Modal>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Test isLarge', () => {
  const view = shallow(
    <Modal title="Test Modal title" id="id" isLarge>
      This is a ModalBox header
    </Modal>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Test isOpen', () => {
  const view = shallow(
    <Modal title="Test Modal title" id="id" isOpen>
      This is a ModalBox header
    </Modal>
  );
  expect(view).toMatchSnapshot();
});
