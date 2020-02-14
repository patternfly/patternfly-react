import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletQualitativeRange } from './ChartBulletQualitativeRange';

Object.values([true, false]).forEach(() => {
  test('ChartBulletQualitativeRange', () => {
    const view = shallow(<ChartBulletQualitativeRange />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(
    <ChartBulletQualitativeRange data={[{ y: 50 }, { y: 85 }, { y: 150 }]} domain={{ x: [0, 200] }} />
  );
  expect(view).toMatchSnapshot();
});
