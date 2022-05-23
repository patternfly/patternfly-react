import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartLegend } from '../ChartLegend';
import { ChartPoint } from './ChartPoint';

Object.values([true, false]).forEach(() => {
  test('ChartPoint', () => {
    const { asFragment } = render(<ChartLegend dataComponent={<ChartPoint />} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <ChartLegend
      data={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }]}
      title="Average number of pets"
      height={50}
      width={200}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
