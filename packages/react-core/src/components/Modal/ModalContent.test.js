import React from 'react';
import { shallow } from 'enzyme';
import ModalContent from './ModalContent';

test('Modal Test', () => {
  const view = shallow(
    <ModalContent label="Test Modal Content label">
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});
