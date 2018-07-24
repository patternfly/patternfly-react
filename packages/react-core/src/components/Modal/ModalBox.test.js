import React from 'react';
import { shallow } from 'enzyme';
import ModalBox from './ModalBox';

test('ModalBox Test', () => {
  const view = shallow(
    <ModalBox label="test label">This is a ModalBox </ModalBox>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBox Test isLarge', () => {
  const view = shallow(
    <ModalBox label="Test Modal label" isLarge>
      This is a ModalBox header
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBox Test isOpen', () => {
  const view = shallow(
    <ModalBox label="Test Modal label" isLarge isOpen>
      This is a ModalBox header
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});
