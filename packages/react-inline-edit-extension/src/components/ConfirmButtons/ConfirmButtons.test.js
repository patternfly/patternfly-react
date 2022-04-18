import React from 'react';
import { render } from '@testing-library/react';

import { ConfirmButtons } from './ConfirmButtons';

const getConfirmButtons = () => (
  <ConfirmButtons
    onCancel={jest.fn()}
    onConfirm={jest.fn()}
    buttonsOnTop
    boldBorder
    messages={{
      confirmButtonLabel: 'Confirm',
      cancelButtonLabel: 'Discard'
    }}
    environment={{
      window: {
        width: 500,
        height: 500
      },
      row: {
        top: 100,
        bottom: 90,
        left: 30,
        right: 40
      }
    }}
  />
);

describe('ConfirmButtons', () => {
  test('renders correctly', () => {
    const { asFragment } = render(getConfirmButtons());
    expect(asFragment()).toMatchSnapshot();
  });
});
