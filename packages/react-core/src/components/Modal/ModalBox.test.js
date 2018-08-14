import ModalBox from './ModalBox';
import React from 'react';
import { shallow } from 'enzyme';

test('ModalBox Test', () => {
  const view = shallow(
    <ModalBox title="test title" id="id">
      This is a ModalBox
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBox Test isLarge', () => {
  const view = shallow(
    <ModalBox title="Test Modal title" id="id" isLarge>
      This is a ModalBox
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBox Test isOpen', () => {
  const view = shallow(
    <ModalBox title="Test Modal title" id="id" isLarge isOpen>
      This is a ModalBox
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});
