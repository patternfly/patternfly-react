import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartDonut } from './ChartDonut';

Object.values([true, false]).forEach(() => {
  test('ChartDonut', () => {
    const view = render(<ChartDonut />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = render(
    <ChartDonut
      data={[
        { x: 'Cats', y: 35 },
        { x: 'Dogs', y: 55 },
        { x: 'Birds', y: 10 }
      ]}
      height={200}
      width={200}
    />
  );
  expect(view.container.outerHTML).toMatchSnapshot();
});
