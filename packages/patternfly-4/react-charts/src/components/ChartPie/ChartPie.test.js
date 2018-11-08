import React from 'react';
import { shallow } from 'enzyme';
import ChartPie from './ChartPie';

Object.values([true, false]).forEach(isRead => {
  test(`Chart`, () => {
    const view = shallow(<ChartPie/>);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(
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
  expect(view).toMatchSnapshot();
});
