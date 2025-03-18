import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Alert } from '../../Alert';
import { AlertGroup } from '../../Alert';
import { AlertActionCloseButton } from '../../../components/Alert/AlertActionCloseButton';

test('Alert Group renders without children', () => {
  render(
    <div data-testid="container">
      <AlertGroup data-testid="alertgroup" />
    </div>
  );

  expect(screen.getByTestId('container').firstChild).toBeVisible();
  expect(screen.getByTestId('alertgroup').children.length).toBe(0);
});

test('Alert Group works with n children', () => {
  render(
    <AlertGroup data-testid="container">
      <Alert variant="success" title="alert title" />
      <Alert variant="warning" title="another alert title" />
    </AlertGroup>
  );
  expect(screen.getByTestId('container').children.length).toBe(2);
});

test('Alert group overflow shows up', async () => {
  const overflowMessage = 'View 2 more alerts';
  const onOverflowClick = jest.fn();
  const user = userEvent.setup();

  render(
    <AlertGroup overflowMessage={overflowMessage} onOverflowClick={onOverflowClick}>
      <Alert variant="danger" title="alert title" />
    </AlertGroup>
  );

  expect(screen.getAllByRole('listitem')).toHaveLength(2);

  const overflowButton = screen.getByRole('button', { name: 'View 2 more alerts' });
  expect(overflowButton).toBeInTheDocument();

  await user.click(overflowButton);
  expect(onOverflowClick).toHaveBeenCalled();
});

test('Standard Alert Group is not a toast alert group', () => {
  render(
    <AlertGroup>
      <Alert variant="danger" title="alert title" />
    </AlertGroup>
  );

  expect(screen.getByText('alert title').parentElement).not.toHaveClass('pf-m-toast');
});

test('Toast Alert Group contains expected modifier class', () => {
  render(
    <AlertGroup isToast aria-label="group label">
      <Alert variant="warning" title="alert title" />
    </AlertGroup>
  );

  expect(screen.getByLabelText('group label')).toHaveClass('pf-m-toast');
});

test('Calls the callback set by updateTransitionEnd when transition ends and animations are enabled', async () => {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true
  });
  const mockCallback = jest.fn();
  const user = userEvent.setup();

  render(
    <AlertGroup hasAnimations isToast appendTo={document.body}>
      <Alert
        isLiveRegion
        title={'Test Alert'}
        actionClose={<AlertActionCloseButton aria-label="Close" onClose={mockCallback} />}
      />
    </AlertGroup>
  );

  await user.click(screen.getByLabelText('Close'));
  expect(mockCallback).not.toHaveBeenCalled();
  fireEvent.transitionEnd(screen.getByText('Test Alert').closest('.pf-v6-c-alert-group__item') as HTMLElement);
  expect(mockCallback).toHaveBeenCalled();
});

test('Does not call the callback set by updateTransitionEnd when transition ends and animations are disabled', async () => {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true
  });
  const mockCallback = jest.fn();
  const user = userEvent.setup();

  render(
    <AlertGroup isToast appendTo={document.body}>
      <Alert
        isLiveRegion
        title={'Test Alert'}
        actionClose={<AlertActionCloseButton aria-label="Close" onClose={mockCallback} />}
      />
    </AlertGroup>
  );

  await user.click(screen.getByLabelText('Close'));
  expect(mockCallback).toHaveBeenCalledTimes(1);
  // The transitionend event firing should not cause the callback to be called again
  fireEvent.transitionEnd(screen.getByText('Test Alert').closest('.pf-v6-c-alert-group__item') as HTMLElement);
  expect(mockCallback).toHaveBeenCalledTimes(1);
});
