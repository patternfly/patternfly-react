import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartLegendTooltipLabel } from './ChartLegendTooltipLabel';

Object.values([true, false]).forEach(() => {
  test('ChartLegendTooltipLabel', () => {
    const view = render(<ChartLegendTooltipLabel />);
    expect(view.container).toMatchSnapshot();
  });
});

test('renders component text', () => {
  const legendData = [
    { name: 'Cats' },
    { name: 'Dogs', symbol: { type: 'dash' } },
    { name: 'Birds' },
    { name: 'Mice' }
  ];
  const view = render(<ChartLegendTooltipLabel legendData={legendData} text={['1, 2, 3, 4']} />);
  expect(view.container).toMatchSnapshot();
});
