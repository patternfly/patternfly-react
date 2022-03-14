import * as React from 'react';
import { render } from '@testing-library/react';
import { ChartDonutThreshold } from './ChartDonutThreshold';

Object.values([true, false]).forEach(() => {
  test('ChartDonutThreshold', () => {
    const view = render(<ChartDonutThreshold />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = render(
    <ChartDonutThreshold
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
