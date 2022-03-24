import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletQualitativeRange } from './ChartBulletQualitativeRange';

Object.values([true, false]).forEach(() => {
  test('ChartBulletQualitativeRange', () => {
    const view = render(<ChartBulletQualitativeRange />);
    expect(view.container).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = render(
    <ChartBulletQualitativeRange data={[{ y: 50 }, { y: 85 }, { y: 150 }]} domain={{ x: [0, 200] }} />
  );
  expect(view.container).toMatchSnapshot();
});
