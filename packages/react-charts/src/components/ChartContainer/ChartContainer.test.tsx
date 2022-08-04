import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartContainer } from './ChartContainer';
import { ChartLegend } from '../ChartLegend';
import { ChartLabel } from '../ChartLabel';

Object.values([true, false]).forEach(() => {
  test('ChartContainer', () => {
    const { asFragment } = render(<ChartContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders container via ChartLegend', () => {
  const { asFragment } = render(
    <ChartContainer>
      <ChartLegend
        data={[{ name: 'Cats' }, { name: 'Dogs' }]}
        height={50}
        standalone={false}
        title="Average number of pets"
        width={200}
        labelComponent={<ChartLabel id="test" />}
      />
    </ChartContainer>
  );
  expect(asFragment()).toMatchSnapshot();
});
