import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletComparativeErrorMeasure } from './ChartBulletComparativeErrorMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletComparativeErrorMeasure', () => {
    const view = shallow(<ChartBulletComparativeErrorMeasure />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(<ChartBulletComparativeErrorMeasure data={[{ y: 88 }]} domain={{ x: [0, 200] }} width={450} />);
  expect(view).toMatchSnapshot();
});
