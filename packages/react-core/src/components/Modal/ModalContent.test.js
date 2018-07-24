import React from 'react';
import { shallow } from 'enzyme';
import ModalContent from './ModalContent';

test('Modal Content Test only body', () => {
  const view = shallow(
    <ModalContent label="Test Modal Content label">
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test isOpen', () => {
  const view = shallow(
    <ModalContent label="Test Modal Content label" isOpen>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test with header', () => {
  const view = shallow(
    <ModalContent label="Test Modal Content label" header="Testing">
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test with footer', () => {
  const view = shallow(
    <ModalContent label="Test Modal Content label" footer="Testing">
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test with header and footer', () => {
  const view = shallow(
    <ModalContent
      label="Test Modal Content label"
      header="Testing header"
      footer="Testing footer"
    >
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test with onlose', () => {
  const view = shallow(
    <ModalContent
      label="Test Modal Content label"
      header="Testing header"
      footer="Testing footer"
      isLarge
      onclose={() => undefined}
    >
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});
