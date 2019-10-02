import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartLabel } from './ChartLabel';

Object.values([true, false]).forEach(isRead => {
  test('ChartLabel', () => {
    const view = shallow(<ChartLabel />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component text', () => {
  const view = shallow(<ChartLabel text="This is a test" />);
  expect(view).toMatchSnapshot();
});
