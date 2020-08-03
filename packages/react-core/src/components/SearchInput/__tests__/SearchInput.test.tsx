import React from 'react';
import { mount, shallow } from 'enzyme';
import { SearchInput } from '../SearchInput';


const props = {
  onChange: jest.fn(),
  value: 'test input',
  onNextClick: jest.fn(),
  onPreviousClick: jest.fn(),
  onClear: jest.fn()
};

test('input passes value and event to onChange handler', () => {
  const newValue = 'new test input';
  const event = {
    currentTarget: { value: newValue }
  };
  const view = shallow(<SearchInput {...props} aria-label="test input" />);

  view.find('input').simulate('change', event);
  expect(props.onChange).toBeCalledWith(newValue, event);
});

test('simple search input', () => {
  const view = mount(<SearchInput {...props} aria-label="simple text input" />);
  expect(view.find('input')).toMatchSnapshot();
});

test('result count', () => {
  const view = mount(<SearchInput {...props} resultsCount={3} aria-label="simple text input" />);
  expect(view.find('.pf-c-badge')).toMatchSnapshot();
});

test('navigable search results', () => {
  const view = mount(
    <SearchInput
      {...props}
      resultsCount='3 / 7'
      aria-label="simple text input"
    />);
  expect(view.find('.pf-c-search-input__nav')).toMatchSnapshot();
  expect(view.find('.pf-c-badge')).toMatchSnapshot();

  view.find('.pf-c-button').at(0).simulate('click', {});
  expect(props.onPreviousClick).toBeCalled();
  view.find('.pf-c-button').at(1).simulate('click', {});
  expect(props.onNextClick).toBeCalled();
  view.find('.pf-c-button').at(2).simulate('click', {});
  expect(props.onClear).toBeCalled();
});



