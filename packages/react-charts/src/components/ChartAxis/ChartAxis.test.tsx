import * as React from 'react';
import { render } from '@testing-library/react';
import { Chart } from '../Chart';
import { ChartAxis } from './ChartAxis';
import { ChartGroup } from '../ChartGroup';
import { ChartLine } from '../ChartLine';

Object.values([true, false]).forEach(() => {
  test('ChartAxis', () => {
    const { asFragment } = render(<ChartAxis />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <Chart domainPadding={{ x: [30, 25] }} height={200} width={300}>
      <ChartGroup>
        <ChartLine
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 5 },
            { x: 4, y: 3 }
          ]}
        />
        <ChartLine
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 1 },
            { x: 3, y: 7 },
            { x: 4, y: 4 }
          ]}
        />
        <ChartLine
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 5 }
          ]}
        />
        <ChartLine
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 3 },
            { x: 3, y: 8 },
            { x: 4, y: 7 }
          ]}
        />
      </ChartGroup>
      <ChartAxis tickValues={[2, 3, 4]} />
      <ChartAxis dependentAxis tickValues={[2, 5, 8]} />
    </Chart>
  );
  expect(asFragment()).toMatchSnapshot();
});
