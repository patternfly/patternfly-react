import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartLegend } from './ChartLegend';

Object.values([true, false]).forEach(() => {
  test('ChartLegend', () => {
    const view = render(<ChartLegend />);
    expect(view.container).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = render(
    <ChartLegend data={[{ name: 'Cats' }, { name: 'Dogs' }]} title="Average number of pets" height={50} width={200} />
  );
  expect(view.container).toMatchSnapshot();
});
