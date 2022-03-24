import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletComparativeWarningMeasure } from './ChartBulletComparativeWarningMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletComparativeZeroMeasure', () => {
    const view = render(<ChartBulletComparativeWarningMeasure />);
    expect(view.container).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = render(
    <ChartBulletComparativeWarningMeasure data={[{ y: 100 }]} domain={{ x: [0, 200] }} width={450} />
  );
  expect(view.container).toMatchSnapshot();
});
