import * as React from 'react';
import { render } from '@testing-library/react';
import { Chart } from '../Chart';
import { ChartGroup } from '../ChartGroup';
import { ChartThreshold } from './ChartThreshold';

Object.values([true, false]).forEach(() => {
  test('ChartThreshold', () => {
    const view = render(<ChartThreshold />);
    expect(view.container).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const data = [
    { name: 'Birds Threshold', x: 0, y: 2 },
    { name: 'Birds Threshold', x: 2, y: 2 },
    { name: 'Birds Threshold', x: 2, y: 3 },
    { name: 'Birds Threshold', x: 5, y: 3 }
  ];
  const view = render(
    <Chart minDomain={{ y: 0 }} height={200} width={200}>
      <ChartGroup>
        <ChartThreshold data={data} />
      </ChartGroup>
    </Chart>
  );
  expect(view.container).toMatchSnapshot();
});
