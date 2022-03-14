import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartLabel } from './ChartLabel';

Object.values([true, false]).forEach(() => {
  test('ChartLabel', () => {
    const view = render(<ChartLabel />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});

test('renders component text', () => {
  const view = render(<ChartLabel text="This is a test" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});
