import * as React from 'react';
import { render } from '@testing-library/react';
import { Chart } from '../Chart/Chart';
import { ChartBoxPlot } from './ChartBoxPlot';

Object.values([true, false]).forEach(() => {
  test('ChartBar', () => {
    const { asFragment } = render(<ChartBoxPlot />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <Chart domainPadding={{ x: [30, 25] }} height={200} width={300}>
      <ChartBoxPlot
        data={[
          { name: 'Cats', x: '2015', y: [1, 2, 3, 5] },
          { name: 'Cats', x: '2016', y: [3, 2, 8, 10] },
          { name: 'Cats', x: '2017', y: [2, 8, 6, 5] },
          { name: 'Cats', x: '2018', y: [1, 3, 2, 9] }
        ]}
      />
    </Chart>
  );
  expect(asFragment()).toMatchSnapshot();
});
