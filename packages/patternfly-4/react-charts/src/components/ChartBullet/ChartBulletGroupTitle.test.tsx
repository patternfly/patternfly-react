import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletGroupTitle } from './ChartBulletGroupTitle';

Object.values([true, false]).forEach(isRead => {
  test('ChartBulletGroupTitle', () => {
    const view = shallow(<ChartBulletGroupTitle />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(<ChartBulletGroupTitle title="Text label" subTitle="Measure details" />);
  expect(view).toMatchSnapshot();
});
