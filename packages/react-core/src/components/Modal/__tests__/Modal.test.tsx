import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { css } from '../../../../../react-styles/dist/js';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';

import { Modal } from '../Modal';
import { KeyTypes } from '../../../../helpers';

jest.spyOn(document, 'createElement');
jest.spyOn(document.body, 'addEventListener');

const props = {
  onClose: jest.fn(),
  isOpen: false,
  children: 'modal content'
};

const target = document.createElement('div');

const ModalWithSiblings = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isModalMounted, setIsModalMounted] = useState(true);
  const modalProps = { ...props, isOpen, appendTo: target, onClose: () => setIsOpen(false) };

  return (
    <>
      <aside>Aside sibling</aside>
      <article>Section sibling</article>
      {isModalMounted && (
        <Modal {...modalProps}>
          <button onClick={() => setIsModalMounted(false)}>Unmount Modal</button>
        </Modal>
      )}
    </>
  );
};

const ModalWithAdjacentModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isModalMounted, setIsModalMounted] = useState(true);
  const modalProps = { ...props, isOpen, appendTo: target, onClose: () => setIsOpen(false) };

  return (
    <>
      <aside>Aside sibling</aside>
      <article>Section sibling</article>
      {isModalMounted && (
        <>
          <Modal {...modalProps}>
            <button onClick={() => setIsModalMounted(false)}>Unmount Modal</button>
          </Modal>
          <Modal isOpen={false} onClose={() => {}}>
            Modal closed for test
          </Modal>
          <Modal isOpen={false} onClose={() => {}}>
            modal closed for test
          </Modal>
        </>
      )}
    </>
  );
};

const MultipleOpenModals = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  return (
    <>
      <aside>Aside sibling</aside>
      <Modal isOpen={isFirstOpen} appendTo={target} onClose={() => setIsFirstOpen(false)} aria-label="First modal">
        <button onClick={() => setIsSecondOpen(true)}>Open second modal</button>
      </Modal>
      <Modal isOpen={isSecondOpen} appendTo={target} onClose={() => setIsSecondOpen(false)} aria-label="Second modal">
        Second modal content
      </Modal>
    </>
  );
};

describe('Modal', () => {
  beforeEach(() => {
    Modal.openModalStack = [];
  });

  test('Modal creates a container element once for div', () => {
    render(<Modal {...props} />);
    expect(document.createElement).toHaveBeenCalledWith('div');
  });

  test('modal closes with escape', async () => {
    const user = userEvent.setup();

    render(<Modal {...props} isOpen appendTo={document.body} aria-label="modal-div" />);

    await user.type(screen.getByLabelText('modal-div'), `{${KeyTypes.Escape}}`);
    expect(props.onClose).toHaveBeenCalled();
  });

  test('modal does not call onClose for esc key if it is not open', () => {
    render(<Modal {...props} />);
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(props.onClose).not.toHaveBeenCalled();
  });

  test('modal has body backdropOpen class when open', () => {
    render(<Modal {...props} isOpen />);
    expect(document.body).toHaveClass(css(styles.backdropOpen));
  });

  test('modal has no body backdropOpen class when not open', () => {
    render(<Modal {...props} />);
    expect(document.body).not.toHaveClass(css(styles.backdropOpen));
  });

  test('modal shows the close button when onClose prop is passed (true by default)', () => {
    render(<Modal {...props} isOpen />);
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  test('modal does not show the close button when onClose not passed', () => {
    render(
      <Modal isOpen disableFocusTrap>
        No close button{' '}
      </Modal>
    );
    expect(screen.queryByRole('button', { name: 'Close' })).toBeNull();
  });

  test('modal adds aria-hidden attribute to its siblings when open', () => {
    render(<ModalWithSiblings />, { container: document.body.appendChild(target) });

    const asideSibling = screen.getByRole('complementary', { hidden: true });
    const articleSibling = screen.getByRole('article', { hidden: true });

    expect(asideSibling).toHaveAttribute('aria-hidden');
    expect(articleSibling).toHaveAttribute('aria-hidden');
  });

  test('modal removes the aria-hidden attribute from its siblings when closed', async () => {
    const user = userEvent.setup();

    render(<ModalWithSiblings />, { container: document.body.appendChild(target) });

    const asideSibling = screen.getByRole('complementary', { hidden: true });
    const articleSibling = screen.getByRole('article', { hidden: true });
    const closeButton = screen.getByRole('button', { name: 'Close' });

    expect(articleSibling).toHaveAttribute('aria-hidden');
    expect(asideSibling).toHaveAttribute('aria-hidden');

    await user.click(closeButton);

    expect(articleSibling).not.toHaveAttribute('aria-hidden');
    expect(asideSibling).not.toHaveAttribute('aria-hidden');
  });

  test('modal removes the aria-hidden attribute from its siblings when unmounted', async () => {
    const user = userEvent.setup();

    render(<ModalWithSiblings />, { container: document.body.appendChild(target) });

    const asideSibling = screen.getByRole('complementary', { hidden: true });
    const articleSibling = screen.getByRole('article', { hidden: true });
    const unmountButton = screen.getByRole('button', { name: 'Unmount Modal' });

    expect(asideSibling).toHaveAttribute('aria-hidden');
    expect(articleSibling).toHaveAttribute('aria-hidden');

    await user.click(unmountButton);

    expect(asideSibling).not.toHaveAttribute('aria-hidden');
    expect(articleSibling).not.toHaveAttribute('aria-hidden');
  });

  test('modal siblings have the aria-hidden attribute when it has adjacent modals', async () => {
    const user = userEvent.setup();

    render(<ModalWithAdjacentModal />, { container: document.body.appendChild(target) });

    const asideSibling = screen.getByRole('complementary', { hidden: true });
    const articleSibling = screen.getByRole('article', { hidden: true });
    const unmountButton = screen.getByRole('button', { name: 'Unmount Modal' });

    expect(asideSibling).toHaveAttribute('aria-hidden');
    expect(articleSibling).toHaveAttribute('aria-hidden');

    await user.click(unmountButton);

    expect(asideSibling).not.toHaveAttribute('aria-hidden');
    expect(articleSibling).not.toHaveAttribute('aria-hidden');
  });

  test('Modal can add id to focus trap correctly for use with dropdowns', () => {
    render(<Modal focusTrapId="focus-trap" isOpen onClose={jest.fn()} children="modal content" />);
    expect(screen.getByRole('dialog', { name: /modal content/i }).parentElement).toHaveAttribute('id', 'focus-trap');
    expect(screen.getByRole('dialog', { name: /modal content/i }).parentElement).toHaveAttribute(
      'class',
      'pf-v6-l-bullseye'
    );
  });

  test('backdropOpen class remains when closing one of multiple open modals', async () => {
    const user = userEvent.setup();

    render(<MultipleOpenModals />, { container: document.body.appendChild(target) });

    await user.click(screen.getByRole('button', { name: 'Open second modal' }));

    expect(target).toHaveClass(css(styles.backdropOpen));

    const closeButtons = screen.getAllByRole('button', { name: 'Close', hidden: true });
    await user.click(closeButtons[closeButtons.length - 1]);

    expect(target).toHaveClass(css(styles.backdropOpen));
  });

  test('backdropOpen class is removed when all modals are closed', async () => {
    const user = userEvent.setup();

    render(<MultipleOpenModals />, { container: document.body.appendChild(target) });

    await user.click(screen.getByRole('button', { name: 'Open second modal' }));

    const closeButtons = screen.getAllByRole('button', { name: 'Close', hidden: true });
    await user.click(closeButtons[closeButtons.length - 1]);
    await user.click(screen.getByRole('button', { name: 'Close' }));

    expect(target).not.toHaveClass(css(styles.backdropOpen));
  });

  test('only the most recent modal does not have aria-hidden when multiple modals are open', async () => {
    const user = userEvent.setup();

    render(<MultipleOpenModals />, { container: document.body.appendChild(target) });

    const firstBackdrop = screen.getByLabelText('First modal').closest('[class*="backdrop"]');

    await user.click(screen.getByRole('button', { name: 'Open second modal' }));

    const secondBackdrop = screen.getByLabelText('Second modal').closest('[class*="backdrop"]');

    expect(firstBackdrop).toHaveAttribute('aria-hidden', 'true');
    expect(secondBackdrop).not.toHaveAttribute('aria-hidden');
  });

  test('closing the active modal reveals the previous modal', async () => {
    const user = userEvent.setup();

    render(<MultipleOpenModals />, { container: document.body.appendChild(target) });

    await user.click(screen.getByRole('button', { name: 'Open second modal' }));

    const firstBackdrop = screen
      .getByLabelText('First modal', { selector: '[role="dialog"]' })
      .closest('[class*="backdrop"]');

    expect(firstBackdrop).toHaveAttribute('aria-hidden', 'true');

    const closeButtons = screen.getAllByRole('button', { name: 'Close', hidden: true });
    await user.click(closeButtons[closeButtons.length - 1]);

    expect(firstBackdrop).not.toHaveAttribute('aria-hidden');
  });
});
