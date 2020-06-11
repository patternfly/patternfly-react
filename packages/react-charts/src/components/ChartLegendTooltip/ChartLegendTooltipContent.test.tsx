import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartLegendTooltipContent } from './ChartLegendTooltipContent';

Object.values([true, false]).forEach(() => {
  test('ChartLegendTooltipContent', () => {
    const view = shallow(<ChartLegendTooltipContent />);
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
  const view = shallow(<ChartLegendTooltipContent data={legendData} text={['1, 2, 3, 4']} />);
  expect(view).toMatchSnapshot();
});
