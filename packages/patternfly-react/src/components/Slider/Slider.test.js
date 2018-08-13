import React from 'react';
import { shallow, mount } from 'enzyme';
import BSSlider from 'bootstrap-slider-without-jquery';
import Slider from './Slider';
import BSSliderWrapper from './BootstrapSlider';

jest.mock('bootstrap-slider-without-jquery');

beforeEach(() => {
  BSSlider.mockClear();
});

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

test('listens for slide', () => {
  shallow(<BSSliderWrapper {...props} />);
  expect(BSSlider.mock.instances[0].on).toBeCalledWith('slide', expect.any(Function));
});

test('listens for slideStop', () => {
  shallow(<BSSliderWrapper {...props} />);
  expect(BSSlider.mock.instances[0].on).toBeCalledWith('slideStop', expect.any(Function));
});

test('listens for input change', () => {
  const wrapper = mount(<Slider dropup input showBoundaries {...props} />);
  const inputValue = 5;
  wrapper
    .find('.slider-input-pf')
    .at(0)
    .simulate('change', { target: { value: inputValue } });

  const { value } = wrapper.state();
  expect(value).toEqual(inputValue);
});

test('listens for dropdown change', () => {
  const wrapper = mount(<Slider dropup input showBoundaries {...props} />);
  const formatValue = 'ZB';
  wrapper
    .find('a[role="menuitem"]')
    .at(0)
    .simulate('click', { target: { text: formatValue } });

  const { tooltipFormat } = wrapper.state();
  expect(tooltipFormat).toEqual(formatValue);
});

test('Slider match snapshot', () => {
  const wrapper = shallow(<Slider {...props} />);
  expect(wrapper).toMatchSnapshot();
});
