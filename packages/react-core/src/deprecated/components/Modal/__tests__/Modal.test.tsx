import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { css } from '../../../../../../react-styles/dist/js';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';

import { Modal } from '../Modal';
import { KeyTypes } from '../../../../helpers';

jest.spyOn(document, 'createElement');
jest.spyOn(document.body, 'addEventListener');

const props = {
  title: 'Modal',
  onClose: jest.fn(),
  isOpen: false,
  children: 'modal content'
};

const target = document.createElement('div');

const ModalWithSiblings = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isModalMounted, setIsModalMounted] = React.useState(true);
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
  const [isOpen, setIsOpen] = React.useState(true);
  const [isModalMounted, setIsModalMounted] = React.useState(true);
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

describe('Modal', () => {
  test('Modal creates a container element once for div', () => {
    render(<Modal {...props} />);
    expect(document.createElement).toHaveBeenCalledWith('div');
  });

  test('modal closes with escape', async () => {
    const user = userEvent.setup();

    render(<Modal {...props} isOpen appendTo={document.body} />);

    await user.type(screen.getByText(props.title), `{${KeyTypes.Escape}}`);
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

  test('modal shows the close button when showClose is true (true by default)', () => {
    render(<Modal {...props} isOpen />);
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  test('modal does not show the close button when showClose is false', () => {
    render(<Modal {...props} isOpen showClose={false} tabIndex={0} />);
    expect(screen.queryByRole('button', { name: 'Close' })).toBeNull();
  });

  test('modal generates console error when no accessible name is provided', () => {
    const props = {
      onClose: jest.fn(),
      isOpen: true,
      children: 'modal content'
    };
    const consoleErrorMock = jest.fn();
    global.console = { error: consoleErrorMock } as any;

    render(<Modal {...props} />);

    expect(consoleErrorMock).toHaveBeenCalled();
  });

  test('modal generates console warning when conflicting accessible name strategies are provided', () => {
    const props = {
      hasNoBodyWrapper: true,
      onClose: jest.fn(),
      isOpen: true,
      children: 'modal content'
    };
    const consoleErrorMock = jest.fn();
    global.console = { error: consoleErrorMock } as any;

    render(<Modal {...props} />);

    expect(consoleErrorMock).toHaveBeenCalled();
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

  test('The modalBoxBody has no aria-label when bodyAriaLabel is not passed', () => {
    const props = {
      isOpen: true
    };

    render(<Modal {...props}>This is a ModalBox</Modal>);

    const modalBoxBody = screen.getByText('This is a ModalBox');
    expect(modalBoxBody).not.toHaveAccessibleName('modal box body aria label');
  });

  test('The modalBoxBody has the expected aria-label when bodyAriaLabel is passed', () => {
    const props = {
      isOpen: true
    };

    render(
      <Modal bodyAriaLabel="modal box body aria label" {...props}>
        This is a ModalBox
      </Modal>
    );

    const modalBoxBody = screen.getByText('This is a ModalBox');
    expect(modalBoxBody).toHaveAccessibleName('modal box body aria label');
  });

  test('The modalBoxBody has the expected aria role when bodyAriaLabel is passed and bodyAriaRole is not', () => {
    const props = {
      isOpen: true
    };

    render(
      <Modal bodyAriaLabel="modal box body aria label" {...props}>
        This is a ModalBox
      </Modal>
    );

    const modalBoxBody = screen.getByRole('region', { name: 'modal box body aria label' });
    expect(modalBoxBody).toBeInTheDocument();
  });

  test('The modalBoxBody has the expected aria role when bodyAriaRole is passed', () => {
    const props = {
      isOpen: true
    };

    render(
      <Modal bodyAriaLabel="modal box body aria label" bodyAriaRole="article" {...props}>
        This is a ModalBox
      </Modal>
    );

    const modalBoxBody = screen.getByRole('article', { name: 'modal box body aria label' });
    expect(modalBoxBody).toBeInTheDocument();
  });
});
