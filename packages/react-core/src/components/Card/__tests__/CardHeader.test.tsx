import React from 'react';
import { render } from '@testing-library/react';
import { CardHeader } from '../CardHeader';

describe('CardHeader', () => {
  test('onExpand adds the toggle button', () => {
    const view = render(<CardHeader onExpand={jest.fn()} />);
    expect(view.container).toMatchSnapshot();
  });
});
