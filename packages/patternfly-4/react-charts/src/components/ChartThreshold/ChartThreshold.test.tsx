import * as React from 'react';
import { shallow } from 'enzyme';
import { Chart } from '../Chart';
import { ChartGroup } from '../ChartGroup';
import { ChartThreshold } from './ChartThreshold';
import { ChartThemeColor, ChartThemeVariant } from '../ChartTheme';

Object.values([true, false]).forEach(isRead => {
  test('ChartThreshold', () => {
    const view = shallow(<ChartThreshold />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const data = [
    { name: 'Birds Threshold', x: 0, y: 2 },
    { name: 'Birds Threshold', x: 2, y: 2 },
    { name: 'Birds Threshold', x: 2, y: 3 },
    { name: 'Birds Threshold', x: 5, y: 3 }
  ];
  const view = shallow(
    <Chart minDomain={{ y: 0 }} height={200} width={200}>
      <ChartGroup>
        <ChartThreshold data={data} themeColor={ChartThemeColor.orange} themeVariant={ChartThemeVariant.light} />
      </ChartGroup>
    </Chart>
  );
  expect(view).toMatchSnapshot();
});
