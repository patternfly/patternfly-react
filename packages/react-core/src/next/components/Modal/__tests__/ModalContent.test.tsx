import * as React from 'react';
import { render } from '@testing-library/react';

import { ModalContent } from '../ModalContent';

const modalContentProps = {
  boxId: 'boxId',
  labelId: 'labelId',
  descriptorId: 'descriptorId',
  disableFocusTrap: true
};
test('Modal Content Test only body', () => {
  const { asFragment } = render(
    <ModalContent isOpen {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Modal Content Test isOpen', () => {
  const { asFragment } = render(
    <ModalContent isOpen {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Modal Content Test description', () => {
  const { asFragment } = render(
    <ModalContent isOpen {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('Modal Content Test with onclose', () => {
  const { asFragment } = render(
    <ModalContent variant="large" onClose={() => undefined} isOpen {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(asFragment()).toMatchSnapshot();
});
