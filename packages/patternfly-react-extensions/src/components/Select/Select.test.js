import React from 'react';
import { mount } from 'enzyme';
import Select from './Select';
import { createItemProps } from './SelectHelper';
import { optionsArray } from './Select.fixtures';

test('Select renders properly', () => {
  const component = mount(
    <Select
      open
      options={optionsArray}
      placeholder="Filter..."
      searchValue="one"
      selectedItem={{ id: '3', name: 'selected' }}
    />
  ).getElement();

  expect(component).toMatchSnapshot();
});

test('Select functionality', () => {
  const onSearchClear = jest.fn();
  const onItemClick = jest.fn();
  const onToggle = jest.fn();

  const component = mount(
    <Select
      open
      options={optionsArray}
      placeholder="Filter..."
      searchValue="one"
      selectedItem={{ id: '3', name: 'selected' }}
      onToggle={onToggle}
      onItemClick={onItemClick}
      onSearchClear={onSearchClear}
    />
  );

  component.find('.fa-close').simulate('click');
  expect(onSearchClear).toHaveBeenCalled();
  component
    .find('.select-dropdown-toggle')
    .at(0)
    .simulate('click');
  expect(onToggle).toHaveBeenCalled();
  component
    .find('.list-group-item')
    .at(0)
    .simulate('click');
  expect(onItemClick).toHaveBeenCalled();
});

test('Select Helper', () => {
  const host = optionsArray[0];
  const itemProps = createItemProps(host, optionsArray[1], 'className', () => {});

  expect(itemProps).toMatchSnapshot();
});
