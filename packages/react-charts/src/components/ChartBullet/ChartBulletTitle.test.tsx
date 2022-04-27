import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletTitle } from './ChartBulletTitle';

Object.values([true, false]).forEach(() => {
  test('ChartBulletTitle', () => {
    const { asFragment } = render(<ChartBulletTitle />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(<ChartBulletTitle title="Text label" subTitle="Measure details" />);
  expect(asFragment()).toMatchSnapshot();
});
