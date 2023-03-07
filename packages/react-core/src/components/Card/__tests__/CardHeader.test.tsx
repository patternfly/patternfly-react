import React from 'react';
import { render } from '@testing-library/react';
import { CardHeader } from '../CardHeader';

describe('CardHeader', () => {
  test('onExpand adds the toggle button', () => {
    const { asFragment } = render(<CardHeader onExpand={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('actions are rendered', () => {
    const { asFragment } = render(<CardHeader actions="test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
