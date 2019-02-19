import React from 'react';
import { mount } from 'enzyme';
import Select from './Select';
import SelectOption from './SelectOption';

const selectOptions = [
  <SelectOption value="Mr" key="0" />,
  <SelectOption value="Mrs" key="1" />,
  <SelectOption value="Ms" key="2" />,
  <SelectOption value="Other" key="3" />
];

describe('select', () => {
  describe('single select', () => {
    test('renders closed successfully', () => {
      const view = mount(
        <Select variant="single" onSelect={jest.fn()} onToggle={jest.fn()}>
          {selectOptions}
        </Select>
      );
      expect(view).toMatchSnapshot();
    });

    test('renders expanded successfully', () => {
      const view = mount(
        <Select variant="single" onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
          {selectOptions}
        </Select>
      );
      expect(view).toMatchSnapshot();
    });
  });
});

describe('API', () => {
  test('click on item', () => {
    const mockToggle = jest.fn();
    const mockSelect = jest.fn();
    const view = mount(
      <Select variant="single" onToggle={mockToggle} onSelect={mockSelect} isExpanded>
        {selectOptions}
      </Select>
    );
    view
      .find('button')
      .at(1)
      .simulate('click');
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(mockSelect.mock.calls).toHaveLength(1);
  });

  test('children only, no console error', () => {
    const myMock = jest.fn();
    global.console = { error: myMock };
    mount(
      <Select variant="single" onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {selectOptions}
      </Select>
    );
    expect(myMock).not.toBeCalled();
  });
});
