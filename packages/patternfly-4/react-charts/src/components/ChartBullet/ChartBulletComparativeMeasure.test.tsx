import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletComparativeMeasure } from './ChartBulletComparativeMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletComparativeMeasure', () => {
    const view = shallow(<ChartBulletComparativeMeasure />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(<ChartBulletComparativeMeasure data={[{ y: 100 }]} domain={{ x: [0, 200] }} width={450} />);
  expect(view).toMatchSnapshot();
});
