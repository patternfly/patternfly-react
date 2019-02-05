import React from 'react';
import { mount } from 'enzyme';
import Select from './Select';
import SelectOption from './SelectOption';

const selectOptions = [
  <SelectOption value="Mr" />,
  <SelectOption value="Mrs" />,
  <SelectOption value="Ms" />,
  <SelectOption value="Other" />
];

describe('select', () => {
  describe('single select', () => {
    test('renders closed successfully', () => {
      const view = mount(<Select variant="single">{selectOptions}</Select>);
      expect(view).toMatchSnapshot();
    });

    test('renders expanded successfully', () => {
      const view = mount(
        <Select variant="single" isExpanded>
          {selectOptions}
        </Select>
      );
      expect(view).toMatchSnapshot();
    });

    test('renders with selectOptions parameter', () => {
      const view = mount(<Select variant="single" selectOptions={selectOptions} />);
      expect(view).toMatchSnapshot();
    });
  });
});

describe('API', () => {
  test('click on item', () => {
    const mockToggle = jest.fn();
    const mockSelect = jest.fn();
    const view = mount(
      <Select variant="single" onToggle={mockToggle} onSelect={mockSelect} selectOptions={selectOptions} isExpanded />
    );
    view
      .find('button')
      .first()
      .simulate('click');
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(mockSelect.mock.calls).toHaveLength(1);
  });

  test('selectOptions and children console error ', () => {
    const myMock = jest.fn();
    global.console = { error: myMock };
    mount(
      <Select variant="single" selectOptions={selectOptions} isExpanded>
        <div> child test </div>
        <div> child test </div>
      </Select>
    );
    expect(myMock).toBeCalled();
  });

  test('selectOptions only, no console error ', () => {
    const myMock = jest.fn();
    global.console = { error: myMock };
    mount(<Select variant="single" selectOptions={selectOptions} isExpanded />);
    expect(myMock).not.toBeCalled();
  });

  test('children only, no console error', () => {
    const myMock = jest.fn();
    global.console = { error: myMock };
    mount(
      <Select variant="single" isExpanded>
        {selectOptions}
      </Select>
    );
    expect(myMock).not.toBeCalled();
  });
});
