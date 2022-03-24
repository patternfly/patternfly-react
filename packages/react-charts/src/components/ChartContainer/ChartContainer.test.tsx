import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartContainer } from './ChartContainer';
import { ChartLegend } from '../ChartLegend';

Object.values([true, false]).forEach(() => {
  test('ChartContainer', () => {
    const view = render(<ChartContainer />);
    expect(view.container).toMatchSnapshot();
  });
});

test('renders container via ChartLegend', () => {
  const view = render(
    <ChartContainer>
      <ChartLegend
        data={[{ name: 'Cats' }, { name: 'Dogs' }]}
        height={50}
        standalone={false}
        title="Average number of pets"
        width={200}
      />
    </ChartContainer>
  );
  expect(view.container).toMatchSnapshot();
});
