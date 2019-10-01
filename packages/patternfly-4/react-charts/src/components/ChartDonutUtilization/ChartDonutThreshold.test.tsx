import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartDonutThreshold } from './ChartDonutThreshold';

Object.values([true, false]).forEach(isRead => {
  test('ChartDonutThreshold', () => {
    const view = shallow(<ChartDonutThreshold />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(
    <ChartDonutThreshold
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={200}
      width={200}
    />
  );
  expect(view).toMatchSnapshot();
});
