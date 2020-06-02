import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartLegendTooltipLegend } from './ChartLegendTooltipLegend';

Object.values([true, false]).forEach(() => {
  test('ChartLegendTooltipLegend', () => {
    const view = shallow(<ChartLegendTooltipLegend />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component text', () => {
  const legendData = [
    { name: 'Cats' },
    { name: 'Dogs', symbol: { type: 'dash' } },
    { name: 'Birds' },
    { name: 'Mice' }
  ];
  const view = shallow(<ChartLegendTooltipLegend data={legendData} text={['1, 2, 3, 4']} />);
  expect(view).toMatchSnapshot();
});
