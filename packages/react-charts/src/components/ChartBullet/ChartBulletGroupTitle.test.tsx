import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartBulletGroupTitle } from './ChartBulletGroupTitle';
import { ChartLabel } from '../ChartLabel';

Object.values([true, false]).forEach(() => {
  test('ChartBulletGroupTitle', () => {
    const { asFragment } = render(<ChartBulletGroupTitle titleComponent={<ChartLabel id="test" />} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <ChartBulletGroupTitle title="Text label" subTitle="Measure details" titleComponent={<ChartLabel id="test2" />} />
  );
  expect(asFragment()).toMatchSnapshot();
});
