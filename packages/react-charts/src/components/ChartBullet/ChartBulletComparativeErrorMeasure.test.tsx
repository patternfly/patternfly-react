import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletComparativeErrorMeasure } from './ChartBulletComparativeErrorMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletComparativeErrorMeasure', () => {
    const { asFragment } = render(<ChartBulletComparativeErrorMeasure />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <ChartBulletComparativeErrorMeasure data={[{ y: 88 }]} domain={{ x: [0, 200] }} width={450} />
  );
  expect(asFragment()).toMatchSnapshot();
});
