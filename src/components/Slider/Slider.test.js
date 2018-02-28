import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import { Slider } from './index';

Enzyme.configure({ adapter: new Adapter() });

test('horizontal slider match snapshot', () => {
  const wrapper = mount(
    <Slider
      id="slider-pf"
      min={0}
      max={100}
      tooltip="show"
      showBoundaries
      input
      dropdownList={['MB', 'GB']}
      dropup
    />
  );

  expect(toJSON(wrapper)).toMatchSnapshot();
});
