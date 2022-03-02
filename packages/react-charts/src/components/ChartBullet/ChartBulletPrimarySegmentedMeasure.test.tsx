import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletPrimarySegmentedMeasure } from './ChartBulletPrimarySegmentedMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletPrimarySegmentedMeasure', () => {
    const view = render(<ChartBulletPrimarySegmentedMeasure />);
    expect(view.container).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = render(
    <ChartBulletPrimarySegmentedMeasure data={[{ y: 50 }, { y: 85 }, { y: 150 }]} domain={{ x: [0, 200] }} />
  );
  expect(view.container).toMatchSnapshot();
});
