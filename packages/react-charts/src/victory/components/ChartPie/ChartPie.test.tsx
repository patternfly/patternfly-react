import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartPie } from './ChartPie';

Object.values([true, false]).forEach(() => {
  test('ChartPie', () => {
    const { asFragment } = render(<ChartPie />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <ChartPie
      data={[
        { x: 'Cats', y: 35 },
        { x: 'Dogs', y: 55 },
        { x: 'Birds', y: 10 }
      ]}
      height={200}
      width={200}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
