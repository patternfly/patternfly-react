import * as React from 'react';
import { shallow } from 'enzyme';
import { Chart } from '../Chart/Chart';
import { ChartGroup } from '../ChartGroup/ChartGroup';
import { ChartScatter } from './ChartScatter';

Object.values([true, false]).forEach(isRead => {
  test('ChartScatter', () => {
    const view = shallow(<ChartScatter />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(
    <Chart minDomain={{ y: 0 }} height={200} width={200}>
      <ChartGroup>
        <ChartScatter data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }]} />
        <ChartScatter data={[{ x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }]} />
        <ChartScatter data={[{ x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }]} />
        <ChartScatter data={[{ x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]} />
      </ChartGroup>
    </Chart>
  );
  expect(view).toMatchSnapshot();
});
