import { render, screen } from '@testing-library/react';

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

test('Modal content can add id to focus trap correctly for use with dropdowns', () => {
  render(
    <ModalContent focusTrapId="focus-trap" isOpen {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(screen.getByRole('dialog', { name: /This is a ModalBox header/i }).parentElement).toHaveAttribute(
    'id',
    'focus-trap'
  );
  expect(screen.getByRole('dialog', { name: /This is a ModalBox header/i }).parentElement).toHaveAttribute(
    'class',
    'pf-v6-l-bullseye'
  );
});
