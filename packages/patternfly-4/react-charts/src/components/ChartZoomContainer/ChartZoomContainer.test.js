import React from 'react';
import { shallow } from 'enzyme';
import Chart from '../Chart/Chart';
import ChartLine from '../ChartLine/ChartLine';
import ChartZoomContainer from './ChartZoomContainer';

Object.values([true, false]).forEach(isRead => {
  test(`ChartZoomContainer`, () => {
    const view = shallow(<ChartZoomContainer />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(
    <Chart containerComponent={<ChartZoomContainer/>} minDomain={{ y: 0 }} height={200} width={200}>
      <ChartLine data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }, { x: 4, y: 3 }]} />
    </Chart>
  );
  expect(view).toMatchSnapshot();
});
