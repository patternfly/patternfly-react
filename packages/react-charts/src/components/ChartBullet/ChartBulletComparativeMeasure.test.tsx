import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletComparativeMeasure } from './ChartBulletComparativeMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletComparativeMeasure', () => {
    const view = render(<ChartBulletComparativeMeasure />);
    expect(view.container).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = render(<ChartBulletComparativeMeasure data={[{ y: 100 }]} domain={{ x: [0, 200] }} width={450} />);
  expect(view.container).toMatchSnapshot();
});
