import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartArea } from '../ChartArea';

Object.values([true, false]).forEach(isRead => {
  test('ChartArea', () => {
    const view = shallow(<ChartArea />);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(
    <ChartArea
      data={[
        { name: 'Cats', x: 1, y: 1 },
        { name: 'Cats', x: 2, y: 2 },
        { name: 'Cats', x: 3, y: 3.2 },
        { name: 'Cats', x: 4, y: 3.5 }
      ]}
    />
  );
  expect(view).toMatchSnapshot();
});
