import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletPrimaryDotMeasure } from './ChartBulletPrimaryDotMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletPrimaryDotMeasure', () => {
    const { asFragment } = render(<ChartBulletPrimaryDotMeasure />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <ChartBulletPrimaryDotMeasure data={[{ y: 50 }, { y: 85 }, { y: 150 }]} domain={{ x: [0, 200] }} />
  );
  expect(asFragment()).toMatchSnapshot();
});
