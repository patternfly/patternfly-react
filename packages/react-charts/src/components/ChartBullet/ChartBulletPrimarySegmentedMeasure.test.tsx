import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletPrimarySegmentedMeasure } from './ChartBulletPrimarySegmentedMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletPrimarySegmentedMeasure', () => {
    const { asFragment } = render(<ChartBulletPrimarySegmentedMeasure />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <ChartBulletPrimarySegmentedMeasure data={[{ y: 50 }, { y: 85 }, { y: 150 }]} domain={{ x: [0, 200] }} />
  );
  expect(asFragment()).toMatchSnapshot();
});
