import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletGroupTitle } from './ChartBulletGroupTitle';

Object.values([true, false]).forEach(() => {
  test('ChartBulletGroupTitle', () => {
    const { asFragment } = render(<ChartBulletGroupTitle />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(<ChartBulletGroupTitle title="Text label" subTitle="Measure details" />);
  expect(asFragment()).toMatchSnapshot();
});
