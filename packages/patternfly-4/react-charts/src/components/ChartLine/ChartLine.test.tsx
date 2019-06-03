import * as React from 'react';
import { shallow } from 'enzyme';
import { Chart } from '../Chart/Chart';
import { ChartGroup } from '../ChartGroup/ChartGroup';
import { ChartLine } from './ChartLine';

Object.values([true, false]).forEach(isRead => {
  test(`Chart`, () => {
    const view = shallow(<ChartLine />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(
    <Chart minDomain={{ y: 0 }} height={200} width={200}>
      <ChartGroup>
        <ChartLine data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }, { x: 4, y: 3 }]} />
        <ChartLine data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }, { x: 4, y: 4 }]} />
        <ChartLine data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }, { x: 4, y: 5 }]} />
        <ChartLine data={[{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 8 }, { x: 4, y: 7 }]} />
      </ChartGroup>
    </Chart>
  );
  expect(view).toMatchSnapshot();
});
