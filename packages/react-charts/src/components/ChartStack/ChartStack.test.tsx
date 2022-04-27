import * as React from 'react';
import { render } from '@testing-library/react';
import { Chart } from '../Chart';
import { ChartBar } from '../ChartBar';
import { ChartStack } from './ChartStack';

Object.values([true, false]).forEach(() => {
  test('ChartStack', () => {
    const { asFragment } = render(<ChartStack />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <Chart domainPadding={{ x: [30, 25] }} height={200} width={300}>
      <ChartStack>
        <ChartBar
          data={[
            { x: 'Cats', y: 1 },
            { x: 'Dogs', y: 2 },
            { x: 'Birds', y: 5 },
            { x: 'Mice', y: 3 }
          ]}
        />
        <ChartBar
          data={[
            { x: 'Cats', y: 2 },
            { x: 'Dogs', y: 1 },
            { x: 'Birds', y: 7 },
            { x: 'Mice', y: 4 }
          ]}
        />
        <ChartBar
          data={[
            { x: 'Cats', y: 4 },
            { x: 'Dogs', y: 4 },
            { x: 'Birds', y: 9 },
            { x: 'Mice', y: 7 }
          ]}
        />
        <ChartBar
          data={[
            { x: 'Cats', y: 3 },
            { x: 'Dogs', y: 3 },
            { x: 'Birds', y: 8 },
            { x: 'Mice', y: 5 }
          ]}
        />
      </ChartStack>
    </Chart>
  );
  expect(asFragment()).toMatchSnapshot();
});
