import React from 'react';
import { shallow } from 'enzyme';
import Chart from '../Chart/Chart';
import ChartBar from './ChartBar';
import ChartGroup from '../ChartGroup/ChartGroup';

Object.values([true, false]).forEach(isRead => {
  test(`Chart`, () => {
    const view = shallow(<ChartBar/>);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(
    <Chart
      domainPadding={{ x: [30, 25] }}
      height={200}
      width={300}
    >
      <ChartGroup offset={11}>
        <ChartBar data={[{ x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 }]}/>
        <ChartBar data={[{ x: 'Cats', y: 2 }, { x: 'Dogs', y: 1 }, { x: 'Birds', y: 7 }, { x: 'Mice', y: 4 }]}/>
        <ChartBar data={[{ x: 'Cats', y: 4 }, { x: 'Dogs', y: 4 }, { x: 'Birds', y: 9 }, { x: 'Mice', y: 7 }]}/>
        <ChartBar data={[{ x: 'Cats', y: 3 }, { x: 'Dogs', y: 3 }, { x: 'Birds', y: 8 }, { x: 'Mice', y: 5 }]}/>
      </ChartGroup>
    </Chart>
  );
  expect(view).toMatchSnapshot();
});
