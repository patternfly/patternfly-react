import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartDonutUtilization } from './ChartDonutUtilization';

Object.values([true, false]).forEach(() => {
  test('ChartDonutUtilization', () => {
    const view = render(<ChartDonutUtilization />);
    expect(view.container).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = render(<ChartDonutUtilization data={{ x: 'Cats', y: 35 }} height={200} width={200} />);
  expect(view.container).toMatchSnapshot();
});
