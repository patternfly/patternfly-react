import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartLegendTooltipLabel } from './ChartLegendTooltipLabel';

Object.values([true, false]).forEach(() => {
  test('ChartLegendTooltipLabel', () => {
    const view = shallow(<ChartLegendTooltipLabel />);
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
  const view = shallow(<ChartLegendTooltipLabel legendData={legendData} text={['1, 2, 3, 4']} />);
  expect(view).toMatchSnapshot();
});
