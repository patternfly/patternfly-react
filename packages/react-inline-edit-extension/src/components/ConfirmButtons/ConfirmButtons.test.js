import React from 'react';
import { mount } from 'enzyme/build';

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
    const view = mount(getConfirmButtons());
    expect(view).toMatchSnapshot();
  });
});
