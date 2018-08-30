import React from 'react';
import { mount } from 'enzyme';
import { Filter, FormControl, Toolbar } from '../../index';
import { mockFilterExampleFields } from './__mocks__/mockFilterExample';

test('Filter input renders properly', () => {
  const component = mount(
    <Filter>
      <Filter.TypeSelector filterTypes={mockFilterExampleFields} currentFilterType={mockFilterExampleFields[0]} />
      <FormControl
        type={mockFilterExampleFields[0].filterType}
        id="filterInput"
        value=""
        placeholder="Filter by Name"
      />
    </Filter>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Filter select renders properly', () => {
  const component = mount(
    <Filter>
      <Filter.TypeSelector filterTypes={mockFilterExampleFields} currentFilterType={mockFilterExampleFields[2]} />
      <Filter.ValueSelector
        filterValues={mockFilterExampleFields[2].filterValues}
        currentValue={mockFilterExampleFields[2].filterValues[4]}
      />
    </Filter>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Filter categories renders properly', () => {
  const component = mount(
    <Filter>
      <Filter.TypeSelector filterTypes={mockFilterExampleFields} currentFilterType={mockFilterExampleFields[3]} />
      <Filter.CategorySelector
        filterCategories={mockFilterExampleFields[3].filterCategories}
        currentCategory={mockFilterExampleFields[3].filterCategories[0]}
        placeholder={mockFilterExampleFields[3].placeholder}
      >
        <Filter.CategoryValueSelector
          categoryValues={mockFilterExampleFields[3].filterCategories[0].filterValues}
          currentValue={mockFilterExampleFields[3].filterCategories[0].filterValues[0]}
          placeholder={mockFilterExampleFields[3].filterCategoriesPlaceholder}
        />
      </Filter.CategorySelector>
    </Filter>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Filter renders properly in a Toolbar', () => {
  const component = mount(
    <Toolbar>
      <Filter>
        <Filter.TypeSelector filterTypes={mockFilterExampleFields} currentFilterType={mockFilterExampleFields[0]} />
        <FormControl
          type={mockFilterExampleFields[0].filterType}
          id="filterInput"
          value=""
          placeholder="Filter by Name"
        />
      </Filter>
    </Toolbar>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Filter active components render properly', () => {
  const component = mount(
    <Toolbar.Results>
      <Filter.ActiveLabel title="Active Filters:" />
      <Filter.List>
        <Filter.Item label="Name: John" />
        <Filter.Item label="Address: Westford" />
      </Filter.List>
    </Toolbar.Results>
  );

  expect(component.render()).toMatchSnapshot();
});
