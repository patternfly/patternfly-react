import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletGroupTitle } from './ChartBulletGroupTitle';

Object.values([true, false]).forEach(() => {
  test('ChartBulletGroupTitle', () => {
    const view = render(<ChartBulletGroupTitle />);
    expect(view.container).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = render(<ChartBulletGroupTitle title="Text label" subTitle="Measure details" />);
  expect(view.container).toMatchSnapshot();
});
