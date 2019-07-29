import React from 'react';
import { mount } from 'enzyme';
import { Select } from './Select';
import { SelectOption } from './SelectOption';
import { CheckboxSelectOption } from './CheckboxSelectOption';
import { SelectGroup } from './SelectGroup';
import { CheckboxSelectGroup } from './CheckboxSelectGroup';
import { SelectVariant } from './selectConstants';

const selectOptions = [
  <SelectOption value="Mr" key="0" />,
  <SelectOption value="Mrs" key="1" />,
  <SelectOption value="Ms" key="2" />,
  <SelectOption value="Other" key="3" />
];

const checkboxSelectOptions = [
  <CheckboxSelectOption value="Mr" key="0" />,
  <CheckboxSelectOption value="Mrs" key="1" />,
  <CheckboxSelectOption value="Ms" key="2" />,
  <CheckboxSelectOption value="Other" key="3" />
];

describe('select', () => {
  describe('single select', () => {
    test('renders closed successfully', () => {
      const view = mount(
        <Select variant={SelectVariant.single} onSelect={jest.fn()} onToggle={jest.fn()}>
          {selectOptions}
        </Select>
      );
      expect(view).toMatchSnapshot();
    });

    test('renders expanded successfully', () => {
      const view = mount(
        <Select variant={SelectVariant.single} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
          {selectOptions}
        </Select>
      );
      expect(view).toMatchSnapshot();
    });
  });

  describe('custom select filter', () => {
    test('filters properly', () => {
      const customFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input: RegExp;
        try {
          input = new RegExp(e.target.value, 'i');
        } catch (err) {
          input = new RegExp(e.target.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        }
        let typeaheadFilteredChildren =
          e.target.value !== ''
            ? selectOptions.filter(
                (child: React.ReactNode) => input.test((child as React.ReactElement).props.value)
              )
            : selectOptions;
        return typeaheadFilteredChildren;
      }
      const view = mount(
        <Select 
          variant={SelectVariant.typeahead} 
          onSelect={jest.fn()} 
          onToggle={jest.fn()} 
          onFilter={customFilter}
          isExpanded={true}
        >
          {selectOptions}
        </Select>
      );
      view.find('input').simulate('change', {target: { value: 'r' }});
      view.update();
      expect((view.state('typeaheadFilteredChildren') as []).length).toBe(3);
      expect(view).toMatchSnapshot();
    });
  });

  test('renders select groups successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.single} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded isGrouped>
        <SelectGroup label="group 1">{selectOptions}</SelectGroup>
        <SelectGroup label="group 2">{selectOptions}</SelectGroup>
      </Select>
    );
    expect(view).toMatchSnapshot();
  });
});

describe('checkbox select', () => {
  test('renders closed successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders closed successfully - old classes', () => {
    const view = mount(
      <Select variant={SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()}>
        {checkboxSelectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders expanded successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders expanded successfully - old classes', () => {
    const view = mount(
      <Select variant={SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {checkboxSelectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders checkbox select groups successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded isGrouped>
        <SelectGroup label="group 1">{selectOptions}</SelectGroup>
        <SelectGroup label="group 2">{selectOptions}</SelectGroup>
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders checkbox select groups successfully - old classes', () => {
    const view = mount(
      <Select variant={SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded isGrouped>
        <CheckboxSelectGroup label="group 1">{checkboxSelectOptions}</CheckboxSelectGroup>
        <CheckboxSelectGroup label="group 2">{checkboxSelectOptions}</CheckboxSelectGroup>
      </Select>
    );
    expect(view).toMatchSnapshot();
  });
});

describe('typeahead select', () => {
  test('renders closed successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.typeahead} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders expanded successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.typeahead} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders selected successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.typeahead} selections="Mr" onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('test onChange', () => {
    const mockEvent = { target: { value: 'test' } } as React.ChangeEvent<HTMLInputElement>;
    const view = mount(
      <Select
        variant={SelectVariant.typeahead}
        onSelect={jest.fn()}
        onToggle={jest.fn()}
        onClear={jest.fn()}
        isExpanded
      >
        {selectOptions}
      </Select>
    );
    const inst = view.instance() as Select;
    inst.onChange(mockEvent);
    view.update();
    expect(view).toMatchSnapshot();
  });
});

describe('typeahead multi select', () => {
  test('renders closed successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.typeaheadMulti} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders expanded successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.typeaheadMulti} onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders selected successfully', () => {
    const view = mount(
      <Select
        variant={SelectVariant.typeaheadMulti}
        selections={['Mr', 'Mrs']}
        onSelect={jest.fn()}
        onToggle={jest.fn()}
        isExpanded
      >
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('test onChange', () => {
    const mockEvent = { target: { value: 'test' } } as React.ChangeEvent<HTMLInputElement>;
    const view = mount(
      <Select
        variant={SelectVariant.typeahead}
        onSelect={jest.fn()}
        onToggle={jest.fn()}
        onClear={jest.fn()}
        isExpanded
      >
        {selectOptions}
      </Select>
    );
    const inst = view.instance() as Select;
    inst.onChange(mockEvent);
    view.update();
    expect(view).toMatchSnapshot();
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
    global.console = { ...global.console, error: myMock };
    mount(
      <Select variant="single" onSelect={jest.fn()} onToggle={jest.fn()} isExpanded>
        {selectOptions}
      </Select>
    );
    expect(myMock).not.toBeCalled();
  });
});
