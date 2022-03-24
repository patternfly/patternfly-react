import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartLegendTooltipContent } from './ChartLegendTooltipContent';

Object.values([true, false]).forEach(() => {
  test('ChartLegendTooltipContent', () => {
    const view = render(<ChartLegendTooltipContent />);
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
  const view = render(<ChartLegendTooltipContent data={legendData} text={['1, 2, 3, 4']} />);
  expect(view.container).toMatchSnapshot();
});
