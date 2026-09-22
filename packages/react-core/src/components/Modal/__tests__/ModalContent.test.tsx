import { act, render, screen } from '@testing-library/react';

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

test('Modal content is hidden from assistive technologies during its closing animation', () => {
  const { rerender } = render(
    <ModalContent isOpen hasAnimations backdropId="backdropId" {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  const backdrop = document.getElementById('backdropId');

  expect(backdrop).not.toHaveAttribute('aria-hidden');

  rerender(
    <ModalContent isOpen={false} hasAnimations backdropId="backdropId" {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(backdrop).toHaveAttribute('aria-hidden', 'true');

  rerender(
    <ModalContent isOpen hasAnimations backdropId="backdropId" {...modalContentProps}>
      This is a ModalBox header
    </ModalContent>
  );
  expect(backdrop).not.toHaveAttribute('aria-hidden');
});

test('Modal content unmounts if its closing transition does not end', () => {
  jest.useFakeTimers();
  try {
    const { rerender } = render(
      <ModalContent isOpen hasAnimations backdropId="backdropId" {...modalContentProps}>
        This is a ModalBox header
      </ModalContent>
    );

    rerender(
      <ModalContent isOpen={false} hasAnimations backdropId="backdropId" {...modalContentProps}>
        This is a ModalBox header
      </ModalContent>
    );
    expect(document.getElementById('backdropId')).toBeInTheDocument();

    act(() => jest.runOnlyPendingTimers());
    expect(document.getElementById('backdropId')).not.toBeInTheDocument();
  } finally {
    jest.useRealTimers();
  }
});

test('Modal content unmounts immediately with reduced motion', () => {
  const matchMedia = window.matchMedia;
  window.matchMedia = jest.fn().mockReturnValue({ matches: true } as MediaQueryList);
  try {
    const { rerender } = render(
      <ModalContent isOpen hasAnimations backdropId="backdropId" {...modalContentProps}>
        This is a ModalBox header
      </ModalContent>
    );

    rerender(
      <ModalContent isOpen={false} hasAnimations backdropId="backdropId" {...modalContentProps}>
        This is a ModalBox header
      </ModalContent>
    );
    expect(document.getElementById('backdropId')).not.toBeInTheDocument();
  } finally {
    window.matchMedia = matchMedia;
  }
});
