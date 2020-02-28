import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletPrimaryDotMeasure } from './ChartBulletPrimaryDotMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletPrimaryDotMeasure', () => {
    const view = shallow(<ChartBulletPrimaryDotMeasure />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(
    <ChartBulletPrimaryDotMeasure data={[{ y: 50 }, { y: 85 }, { y: 150 }]} domain={{ x: [0, 200] }} />
  );
  expect(view).toMatchSnapshot();
});
