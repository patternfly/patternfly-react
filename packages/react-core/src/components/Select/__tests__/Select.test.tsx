import * as React from 'react';
import { mount } from 'enzyme';
import { Select } from '../Select';
import { SelectOption, SelectOptionObject } from '../SelectOption';
import { SelectGroup } from '../SelectGroup';
import { SelectVariant, SelectDirection } from '../selectConstants';

class User implements SelectOptionObject {
  private firstName: string;
  private lastName: string;
  private title: string;

  constructor(title: string, firstName: string, lastName: string) {
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  toString = (): string => `${this.title}: ${this.firstName} ${this.lastName}`;
  compareTo = (value: string): boolean => this.toString().includes(value);
}

const selectOptions = [
  <SelectOption id="option-1" value="Mr" key="00" />,
  <SelectOption id="option-2" value="Mrs" key="01" />,
  <SelectOption id="option-3" value="Ms" key="02" />,
  <SelectOption id="option-4" value="Other" key="03" />
];

const selectOptionsCustom = [
  <SelectOption id="option-1" value={new User('Mr', 'User', 'One')} key="0" />,
  <SelectOption id="option-2" value={new User('Mrs', 'New', 'User')} key="1" />,
  <SelectOption id="option-3" value={new User('Ms', 'Test', 'Three')} key="2" />
];

describe('select', () => {
  describe('single select', () => {
    test('renders closed successfully', () => {
      const view = mount(
        <Select toggleId="single-select-closed" variant={SelectVariant.single} onSelect={jest.fn()}
                onToggle={jest.fn()}>
          {selectOptions}
        </Select>
      );
      expect(view).toMatchSnapshot();
    });

    test('renders disabled successfully', () => {
      const view = mount(
        <Select toggleId="single-select-disabled" variant={SelectVariant.single}
                onSelect={jest.fn()} onToggle={jest.fn()} isDisabled>
          {selectOptions}
        </Select>
      );
      expect(view).toMatchSnapshot();
    });

    test('renders expanded successfully', () => {
      const view = mount(
        <Select variant={SelectVariant.single} onSelect={jest.fn()} onToggle={jest.fn()} isOpen>
          {selectOptions}
        </Select>
      );
      expect(view).toMatchSnapshot();
    });
    test('renders expanded successfully with custom objects', () => {
      const view = mount(
        <Select variant={SelectVariant.single} onSelect={jest.fn()} onToggle={jest.fn()} isOpen>
          {selectOptionsCustom}
        </Select>
      );
      expect(view).toMatchSnapshot();
    });
  });

  test('renders up direction successfully', () => {
    const view = mount(
      <Select toggleId="select-up" variant={SelectVariant.single} direction={SelectDirection.up}
              onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
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
        const typeaheadFilteredChildren =
          e.target.value !== ''
            ? selectOptions.filter((child: React.ReactNode) => input.test((child as React.ReactElement).props.value))
            : selectOptions;
        return typeaheadFilteredChildren;
      };
      const view = mount(
        <Select
          toggleId="custom-select-filters"
          variant={SelectVariant.typeahead}
          onSelect={jest.fn()}
          onToggle={jest.fn()}
          onFilter={customFilter}
          isOpen
        >
          {selectOptions}
        </Select>
      );
      view.find('input').simulate('change', { target: { value: 'r' } });
      view.update();
      expect((view.find('Select').state('typeaheadFilteredChildren') as []).length).toBe(3);
      expect(view).toMatchSnapshot();
    });
  });

  test('renders select groups successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.single} onSelect={jest.fn()} onToggle={jest.fn()} isOpen isGrouped>
        <SelectGroup label="group 1">{selectOptions}</SelectGroup>
        <SelectGroup label="group 2">{selectOptions}</SelectGroup>
      </Select>
    );
    expect(view).toMatchSnapshot();
  });
});

test('renders select with favorites successfully', () => {
  const selectOptionsFavorites = [
    <SelectOption id="option-1" value="Mr" key="00" />,
    <SelectOption id="option-2" value="Mrs" key="01" />,
    <SelectOption id="option-2" value="Ms" key="02" />,
    <SelectOption id="option-4"  value="Other" key="03" />
  ];
  const view = mount(
    <Select variant={SelectVariant.single} onSelect={jest.fn()} onToggle={jest.fn()} isOpen isGrouped onFavorite={jest.fn()}
    favorites={["option-1"]}>
      <SelectGroup key="group-1" label="group 1">{selectOptionsFavorites}</SelectGroup>
      <SelectGroup key="group-2" label="group 2">{selectOptionsFavorites}</SelectGroup>
    </Select>
  );
  expect(view).toMatchSnapshot();
});

describe('checkbox select', () => {
  test('renders closed successfully', () => {
    const view = mount(
      <Select toggleId="checkbox-select-closed" variant={SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders checkbox select selections properly', () => {
    const view = mount(
      <Select toggleId="checkbox-select-selections" variant={SelectVariant.checkbox} onToggle={jest.fn()} selections={[selectOptions[0]]}>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders checkbox select selections properly when isCheckboxSelectionBadgeHidden is true', () => {
    const view = mount(
      <Select toggleId="checkbox-select-hidden-badge" variant={SelectVariant.checkbox} onToggle={jest.fn()} isCheckboxSelectionBadgeHidden selections={[selectOptions[0]]}>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders expanded successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()} isOpen>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders expanded with filtering successfully', () => {
    const view = mount(
      <Select
        variant={SelectVariant.checkbox}
        onSelect={jest.fn()}
        onToggle={jest.fn()}
        onClear={jest.fn()}
        isOpen
        hasInlineFilter
      >
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders expanded with filtering successfully', () => {
    const view = mount(
      <Select
        toggleId="checkbox-select-expanded-filtered"
        variant={SelectVariant.checkbox}
        onSelect={jest.fn()}
        onToggle={jest.fn()}
        onClear={jest.fn()}
        isOpen
        hasInlineFilter
      >
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders expanded successfully with custom objects', () => {
    const view = mount(
      <Select variant={SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()} isOpen>
        {selectOptionsCustom}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders checkbox select groups successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()} isOpen isGrouped>
        <SelectGroup label="group 1">{selectOptions}</SelectGroup>
        <SelectGroup label="group 2">{selectOptions}</SelectGroup>
      </Select>
    );
    expect(view).toMatchSnapshot();
  });
});

describe('typeahead select', () => {
  test('renders closed successfully', () => {
    const view = mount(
      <Select toggleId="typeahead-select-closed" variant={SelectVariant.typeahead} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders expanded successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.typeahead} onSelect={jest.fn()} onToggle={jest.fn()} isOpen>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders selected successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.typeahead} selections="Mr" onSelect={jest.fn()} onToggle={jest.fn()} isOpen>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  xtest('test onChange', () => {
    const mockEvent = { target: { value: 'test' } } as React.ChangeEvent<HTMLInputElement>;
    const view = mount(
      <Select variant={SelectVariant.typeahead} onSelect={jest.fn()} onToggle={jest.fn()} onClear={jest.fn()} isOpen>
        {selectOptions}
      </Select>
    );
    const inst = view.find('Select').instance() as any;
    inst.onChange(mockEvent);
    view.update();
    expect(view).toMatchSnapshot();
  });

  test('test select existing option on a non-creatable select', () => {
    const mockEvent = { target: { value: 'Oth' } } as React.ChangeEvent<HTMLInputElement>;
    const view = mount(
      <Select variant={SelectVariant.typeahead} onToggle={jest.fn()} isOpen>
        {selectOptions}
      </Select>
    );
    const inst = view.find('Select').instance() as any;
    inst.onChange(mockEvent);
    inst.handleTypeaheadKeys('enter');
    view.update();
    expect(view).toMatchSnapshot();
  });

  xtest('test select non-existing option on a non-creatable select', () => {
    const mockEvent = { target: { value: 'NonExistingOption' } } as React.ChangeEvent<HTMLInputElement>;
    const view = mount(
      <Select variant={SelectVariant.typeahead} onToggle={jest.fn()} isOpen>
        {selectOptions}
      </Select>
    );
    const inst = view.find('Select').instance() as any;
    inst.onChange(mockEvent);
    inst.handleTypeaheadKeys('enter');
    view.update();
    expect(view).toMatchSnapshot();
  });

  xtest('test creatable option', () => {
    const mockEvent = { target: { value: 'test' } } as React.ChangeEvent<HTMLInputElement>;
    const view = mount(
      <Select variant={SelectVariant.typeahead} onToggle={jest.fn()} isOpen isCreatable>
        {selectOptions}
      </Select>
    );
    const inst = view.find('Select').instance() as any;
    inst.onChange(mockEvent);
    view.update();
    expect(view).toMatchSnapshot();
  });
});

describe('typeahead multi select', () => {
  test('renders closed successfully', () => {
    const view = mount(
      <Select toggleId="typeahead-multi-select-closed" variant={SelectVariant.typeaheadMulti} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders expanded successfully', () => {
    const view = mount(
      <Select variant={SelectVariant.typeaheadMulti} onSelect={jest.fn()} onToggle={jest.fn()} isOpen>
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  test('renders selected successfully', () => {
    const view = mount(
      <Select
        toggleId="typeahead-multi-select-selected"
        variant={SelectVariant.typeaheadMulti}
        selections={['Mr', 'Mrs']}
        onSelect={jest.fn()}
        onToggle={jest.fn()}
        isOpen
      >
        {selectOptions}
      </Select>
    );
    expect(view).toMatchSnapshot();
  });

  xtest('test onChange', () => {
    const mockEvent = { target: { value: 'test' } } as React.ChangeEvent<HTMLInputElement>;
    const view = mount(
      <Select variant={SelectVariant.typeahead} onSelect={jest.fn()} onToggle={jest.fn()} onClear={jest.fn()} isOpen>
        {selectOptions}
      </Select>
    );
    const inst = view.find('Select').instance() as any;
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
      <Select variant="single" onToggle={mockToggle} onSelect={mockSelect} isOpen>
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
      <Select variant="single" onSelect={jest.fn()} onToggle={jest.fn()} isOpen>
        {selectOptions}
      </Select>
    );
    expect(myMock).not.toBeCalled();
  });
});


describe('toggle icon', () => {
  const ToggleIcon = <div>Icon</div>;
  test('select single', () => {
    const view = mount(
      <Select toggleId="select-toggle-icon-single" toggleIcon={ToggleIcon} variant={SelectVariant.single} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select>
    );
    expect(view.find('span.pf-c-select__toggle-icon')).toMatchSnapshot();
  });

  test('select checkbox', () => {
    const view = mount(
      <Select toggleId="checkbox-select-toggle-icon" toggleIcon={ToggleIcon} variant={SelectVariant.checkbox} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select>
    );
    expect(view.find('span.pf-c-select__toggle-icon')).toMatchSnapshot();
  });

  test('typeahead select', () => {
    const view = mount(
      <Select toggleId="typeahead-select-toggle-icon" toggleIcon={ToggleIcon} variant={SelectVariant.typeahead} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select>
    );
    expect(view.find('span.pf-c-select__toggle-icon')).toMatchSnapshot();
  });

  test('typeahead multi select', () => {
    const view = mount(
      <Select toggleId="multi-typeahead-select-toggle-icon" toggleIcon={ToggleIcon} variant={SelectVariant.typeaheadMulti} onSelect={jest.fn()} onToggle={jest.fn()}>
        {selectOptions}
      </Select>
    );
    expect(view.find('span.pf-c-select__toggle-icon')).toMatchSnapshot();
  });
});

describe('select with custom content', () => {
  test('renders closed successfully', () => {
    const view = mount(<Select toggleId="select-custom-content" customContent="testing custom" onToggle={jest.fn()} />);
    expect(view).toMatchSnapshot();
  });
  test('renders expanded successfully', () => {
    const view = mount(<Select customContent="testing custom" onToggle={jest.fn()} isOpen />);
    expect(view).toMatchSnapshot();
  });
});
