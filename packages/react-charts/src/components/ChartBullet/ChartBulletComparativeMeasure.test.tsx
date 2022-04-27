import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletComparativeMeasure } from './ChartBulletComparativeMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletComparativeMeasure', () => {
    const { asFragment } = render(<ChartBulletComparativeMeasure />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <ChartBulletComparativeMeasure data={[{ y: 100 }]} domain={{ x: [0, 200] }} width={450} />
  );
  expect(asFragment()).toMatchSnapshot();
});
