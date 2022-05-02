import * as React from 'react';
import { render } from '@testing-library/react';
import { Chart } from '../Chart/Chart';
import { ChartGroup } from '../ChartGroup/ChartGroup';
import { ChartScatter } from './ChartScatter';

Object.values([true, false]).forEach(() => {
  test('ChartScatter', () => {
    const { asFragment } = render(<ChartScatter />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <Chart minDomain={{ y: 0 }} height={200} width={200}>
      <ChartGroup>
        <ChartScatter
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 },
            { x: 4, y: 4 }
          ]}
        />
        <ChartScatter
          data={[
            { x: 2, y: 2 },
            { x: 3, y: 3 },
            { x: 4, y: 4 },
            { x: 5, y: 5 }
          ]}
        />
        <ChartScatter
          data={[
            { x: 3, y: 3 },
            { x: 4, y: 4 },
            { x: 5, y: 5 },
            { x: 6, y: 6 }
          ]}
        />
        <ChartScatter
          data={[
            { x: 4, y: 4 },
            { x: 5, y: 5 },
            { x: 6, y: 6 },
            { x: 7, y: 7 }
          ]}
        />
      </ChartGroup>
    </Chart>
  );
  expect(asFragment()).toMatchSnapshot();
});
