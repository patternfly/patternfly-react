import React from 'react';
import { shallow } from 'enzyme';
import ChartDonut from './ChartDonut';

Object.values([true, false]).forEach(isRead => {
  test(`Chart`, () => {
    const view = shallow(<ChartDonut/>);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(
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
  expect(view).toMatchSnapshot();
});
