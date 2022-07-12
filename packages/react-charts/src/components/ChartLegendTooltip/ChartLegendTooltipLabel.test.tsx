import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartLegendTooltipLabel } from './ChartLegendTooltipLabel';
import { ChartLabel } from '../ChartLabel';

Object.values([true, false]).forEach(() => {
  test('ChartLegendTooltipLabel', () => {
    const { asFragment } = render(<ChartLegendTooltipLabel legendLabelComponent={<ChartLabel id="test" />} />);
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
  const { asFragment } = render(
    <ChartLegendTooltipLabel
      legendData={legendData}
      text={['1, 2, 3, 4']}
      legendLabelComponent={<ChartLabel id="test2" />}
      valueLabelComponent={<ChartLabel id="test3" />}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
