import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import { Slider } from './index';
import BootstrapSlider from './BootstrapSlider';

Enzyme.configure({ adapter: new Adapter() });

test('horizontal slider match snapshot and respond to simulated events', () => {
  const props = {
    id: 'slider-pf',
    label: 'Size',
    value: 50,
    min: 0,
    max: 100,
    tooltip: 'show',
    showBoundaries: true,
    input: true,
    inputFormat: 'MB',
    dropdownList: ['MB', 'GB'],
    dropup: true
  };
  const wrapper = mount(<Slider {...props} />);
  expect(toJSON(wrapper)).toMatchSnapshot();

  wrapper
    .find('.slider-input-pf')
    .at(0)
    .simulate('change', { target: { value: 5 } });

  const { value } = wrapper.state();
  expect(value).toEqual(5);

  const innerSlider = mount(<BootstrapSlider {...props} />);
  const componentWillUpdate = jest.spyOn(
    innerSlider.instance(),
    'componentWillUpdate'
  );
  innerSlider.setProps({ value: 60 });
  expect(componentWillUpdate).toHaveBeenCalled();
});
