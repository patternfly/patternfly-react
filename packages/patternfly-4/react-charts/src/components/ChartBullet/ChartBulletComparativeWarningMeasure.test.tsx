import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletComparativeWarningMeasure } from './ChartBulletComparativeWarningMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletComparativeZeroMeasure', () => {
    const view = shallow(<ChartBulletComparativeWarningMeasure />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(
    <ChartBulletComparativeWarningMeasure data={[{ y: 100 }]} domain={{ x: [0, 200] }} width={450} />
  );
  expect(view).toMatchSnapshot();
});
