import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartLegend } from './ChartLegend';

Object.values([true, false]).forEach(() => {
  test('ChartLegend', () => {
    const { asFragment } = render(<ChartLegend />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <ChartLegend data={[{ name: 'Cats' }, { name: 'Dogs' }]} title="Average number of pets" height={50} width={200} />
  );
  expect(asFragment()).toMatchSnapshot();
});
