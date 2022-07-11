import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletTitle } from './ChartBulletTitle';
import { ChartLabel } from '../ChartLabel';

Object.values([true, false]).forEach(() => {
  test('ChartBulletTitle', () => {
    const { asFragment } = render(<ChartBulletTitle titleComponent={<ChartLabel id="test" />} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <ChartBulletTitle title="Text label" subTitle="Measure details" titleComponent={<ChartLabel id="test2" />} />
  );
  expect(asFragment()).toMatchSnapshot();
});
