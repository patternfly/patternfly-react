import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletTitle } from './ChartBulletTitle';

Object.values([true, false]).forEach(() => {
  test('ChartBulletTitle', () => {
    const view = render(<ChartBulletTitle />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = render(<ChartBulletTitle title="Text label" subTitle="Measure details" />);
  expect(view.container.outerHTML).toMatchSnapshot();
});
