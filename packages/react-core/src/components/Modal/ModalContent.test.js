import React from 'react';
import { shallow } from 'enzyme';
import ModalContent from './ModalContent';

test('Modal Content Test only body', () => {
  const view = shallow(
    <ModalContent title="Test Modal Content title" id="id">
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test isOpen', () => {
  const view = shallow(
    <ModalContent title="Test Modal Content title" id="id" isOpen>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test with header', () => {
  const view = shallow(
    <ModalContent title="Test Modal Content title" id="id" header="Testing">
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test with footer', () => {
  const view = shallow(
    <ModalContent title="Test Modal Content title" id="id" footer="Testing">
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test with header and footer', () => {
  const view = shallow(
    <ModalContent title="Test Modal Content title" header="Testing header" footer="Testing footer" id="id">
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test with onlose', () => {
  const view = shallow(
    <ModalContent
      title="Test Modal Content title"
      header="Testing header"
      footer="Testing footer"
      isLarge
      onclose={() => undefined}
      id="id"
    >
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});
