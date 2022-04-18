import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartLegendTooltipContent } from './ChartLegendTooltipContent';

Object.values([true, false]).forEach(() => {
  test('ChartLegendTooltipContent', () => {
    const { asFragment } = render(<ChartLegendTooltipContent />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component text', () => {
  const legendData = [
    { name: 'Cats' },
    { name: 'Dogs', symbol: { type: 'dash' } },
    { name: 'Birds' },
    { name: 'Mice' }
  ];
  const { asFragment } = render(<ChartLegendTooltipContent legendData={legendData} text={['1, 2, 3, 4']} />);
  expect(asFragment()).toMatchSnapshot();
});
