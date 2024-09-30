import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletComparativeWarningMeasure } from './ChartBulletComparativeWarningMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletComparativeZeroMeasure', () => {
    const { asFragment } = render(<ChartBulletComparativeWarningMeasure />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <ChartBulletComparativeWarningMeasure data={[{ y: 100 }]} domain={{ x: [0, 200] }} width={450} />
  );
  expect(asFragment()).toMatchSnapshot();
});
