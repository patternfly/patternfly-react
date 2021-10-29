import * as React from 'react';
import { shallow } from 'enzyme';

import { ModalContent } from '../ModalContent';

const modalContentProps = {
  boxId: "boxId",
  labelId: "labelId",
  descriptorId: "descriptorId"
}
test('Modal Content Test only body', () => {
  const view = shallow(
    <ModalContent title="Test Modal Content title" isOpen {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test isOpen', () => {
  const view = shallow(
    <ModalContent title="Test Modal Content title" isOpen {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test description', () => {
  const view = shallow(
    <ModalContent title="Test Modal Content title" isOpen description="This is a test description." {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test with footer', () => {
  const view = shallow(
    <ModalContent title="Test Modal Content title" isOpen actions={['Testing']} {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content test without footer', () => {
  const view = shallow(
    <ModalContent title="Test Modal Content title" isOpen {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Content Test with onclose', () => {
  const view = shallow(
    <ModalContent
      title="Test Modal Content title"
      actions={['Testing footer']}
      variant="large"
      onClose={() => undefined}
      isOpen
      {...modalContentProps}
    >
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Test with custom header', () => {
  const header = <span id="test-custom-header">TEST</span>;

  const view = shallow(
    <ModalContent
      header={header}
      title="test-custom-header-modal"
      actions={['Testing footer']}
      variant="large"
      onClose={() => undefined}
      isOpen
      {...modalContentProps}
    >
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});

test('Modal Test with custom footer', () => {
  const footer = <span id="test-custom-footer">TEST</span>;

  const view = shallow(
    <ModalContent footer={footer} title="Test Modal Custom Footer" variant="large" onClose={() => undefined} isOpen {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(view).toMatchSnapshot();
});
