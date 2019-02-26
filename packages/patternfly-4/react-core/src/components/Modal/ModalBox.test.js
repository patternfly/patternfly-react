import ModalBox from './ModalBox';
import React from 'react';
import { shallow } from 'enzyme';

test('ModalBox Test', () => {
  const view = shallow(
    <ModalBox titleId="titleId" ariaDescribedById="bodyId">
      This is a ModalBox
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBox Test isLarge', () => {
  const view = shallow(
    <ModalBox titleId="titleId" ariaDescribedById="bodyId" isLarge>
      This is a ModalBox
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});

test('ModalBox Test isOpen', () => {
  const view = shallow(
    <ModalBox titleId="titleId" ariaDescribedById="bodyId" isLarge isOpen>
      This is a ModalBox
    </ModalBox>
  );
  expect(view).toMatchSnapshot();
});
