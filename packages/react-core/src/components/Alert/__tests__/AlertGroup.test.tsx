import * as React from 'react';

import { render, screen } from '@testing-library/react';
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

test('alertgroup closes when alerts are closed', async () => {
  const onClose = jest.fn();
  const user = userEvent.setup();

  render(
    <AlertGroup isToast appendTo={document.body}>
      <Alert
        isLiveRegion
        title={'Test Alert'}
        actionClose={<AlertActionCloseButton aria-label="Close" onClose={onClose} />}
      />
    </AlertGroup>
  );

  await user.click(screen.getByLabelText('Close'));
  expect(onClose).toHaveBeenCalled();
});
