import React from 'react';
import { shallow } from 'enzyme';
import ChartLegend from '../ChartDonut/ChartDonut';

Object.values([true, false]).forEach(isRead => {
  test(`Chart`, () => {
    const view = shallow(<ChartLegend/>);
    expect(view).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const view = shallow(
    <ChartLegend
      data={[
        { name: 'Cats' }, { name: 'Dogs' }
      ]}
      title="Average number of pets"
      height={50}
      width={200}
    />
  );
  expect(view).toMatchSnapshot();
});
