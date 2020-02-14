import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletPrimarySegmentedMeasure } from './ChartBulletPrimarySegmentedMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletPrimarySegmentedMeasure', () => {
    const view = shallow(<ChartBulletPrimarySegmentedMeasure />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(
    <ChartBulletPrimarySegmentedMeasure data={[{ y: 50 }, { y: 85 }, { y: 150 }]} domain={{ x: [0, 200] }} />
  );
  expect(view).toMatchSnapshot();
});
