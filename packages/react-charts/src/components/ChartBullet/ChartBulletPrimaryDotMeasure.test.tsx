import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletPrimaryDotMeasure } from './ChartBulletPrimaryDotMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletPrimaryDotMeasure', () => {
    const view = render(<ChartBulletPrimaryDotMeasure />);
    expect(view.container).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = render(
    <ChartBulletPrimaryDotMeasure data={[{ y: 50 }, { y: 85 }, { y: 150 }]} domain={{ x: [0, 200] }} />
  );
  expect(view.container).toMatchSnapshot();
});
