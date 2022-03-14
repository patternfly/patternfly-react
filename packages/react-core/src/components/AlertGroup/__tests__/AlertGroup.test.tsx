import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Alert } from '../../Alert';
import { AlertGroup } from '../../AlertGroup';
import { AlertActionCloseButton } from '../../../components/Alert/AlertActionCloseButton';

describe('AlertGroup', () => {
  test('Alert Group renders without children', () => {
    const view = render(<AlertGroup />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('Alert Group works with n children', () => {
    const view = render(
      <AlertGroup>
        <Alert variant="success" title="alert title" />
        <Alert variant="warning" title="another alert title" />
      </AlertGroup>
    );
    expect(view).toBeTruthy();
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

  test('alertgroup closes when alerts are closed', () => {
    const onClose = jest.fn();

    render(
      <AlertGroup isToast appendTo={document.body}>
        <Alert
          isLiveRegion
          title={'Test Alert'}
          actionClose={<AlertActionCloseButton aria-label="Close" onClose={onClose} />}
        />
      </AlertGroup>
    );

    userEvent.click(screen.getByLabelText('Close'));
    expect(onClose).toBeCalled();
  });
});
