import React from 'react';
import { mount } from 'enzyme';
import { Slider } from './index';
import BootstrapSlider from './BootstrapSlider';

test('horizontal slider match snapshot and respond to simulated events', () => {
  const props = {
    id: 'slider-pf',
    label: 'Size',
    value: 50,
    min: 0,
    max: 100,
    tooltip: 'show',
    inputFormat: 'MB',
    dropdownList: ['MB', 'GB']
  };
  const wrapper = mount(<Slider dropup input showBoundaries {...props} />);
  expect(wrapper).toMatchSnapshot();

  const inputValue = 5;
  wrapper
    .find('.slider-input-pf')
    .at(0)
    .simulate('change', { target: { value: inputValue } });

  const { value } = wrapper.state();
  expect(value).toEqual(inputValue);

  const BSSlider = mount(<BootstrapSlider {...props} />);
  const componentWillReceiveProps = jest.spyOn(
    BSSlider.instance(),
    'componentWillReceiveProps'
  );
  BSSlider.setProps({ value: 60 });
  expect(componentWillReceiveProps).toHaveBeenCalled();
});
