import React from 'react';
import { shallow } from 'enzyme';
import ModalContent from './ModalContent';

test('Modal Content Test only body', () => {
  const view = shallow(
    <ModalContent title="Test Modal Content title" id="id" isOpen>
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
    <ModalContent title="Test Modal Content title" id="id" isOpen header="Testing">
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test with footer', () => {
  const view = shallow(
    <ModalContent title="Test Modal Content title" id="id" isOpen actions={["Testing"]}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content test without footer', () => {
  const view = shallow(
    <ModalContent title="Test Modal Content title" id="id" isOpen>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test with header and footer', () => {
  const view = shallow(
    <ModalContent title="Test Modal Content title" header="Testing header" id="id" isOpen actions={["Testing footer"]}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test with onclose', () => {
  const view = shallow(
    <ModalContent
      title="Test Modal Content title"
      header="Testing header"
      actions={["Testing footer"]}
      isLarge
      onclose={() => undefined}
      id="id"
      isOpen
    >
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});
