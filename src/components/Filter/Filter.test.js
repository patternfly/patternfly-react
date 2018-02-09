import React from 'react';
import renderer from 'react-test-renderer';
import { Filter, FormControl, Toolbar } from '../../index';
import { mockFilterExampleFields } from './__mocks__/mockFilterExample';

test('Filter input renders properly', () => {
  const component = renderer.create(
    <Filter>
      <Filter.TypeSelector
        filterTypes={mockFilterExampleFields}
        currentFilterType={mockFilterExampleFields[0]}
      />
      <FormControl
        type={mockFilterExampleFields[0].filterType}
        id="filterInput"
        value=""
        placeholder="Filter by Name"
      />
    </Filter>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Filter select renders properly', () => {
  const component = renderer.create(
    <Filter>
      <Filter.TypeSelector
        filterTypes={mockFilterExampleFields}
        currentFilterType={mockFilterExampleFields[2]}
      />
      <Filter.ValueSelector
        filterValues={mockFilterExampleFields[2].filterValues}
        currentValue={mockFilterExampleFields[2].filterValues[4]}
      />
    </Filter>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Filter categories renders properly', () => {
  const component = renderer.create(
    <Filter>
      <Filter.TypeSelector
        filterTypes={mockFilterExampleFields}
        currentFilterType={mockFilterExampleFields[3]}
      />
      <Filter.CategorySelector
        filterCategories={mockFilterExampleFields[3].filterCategories}
        currentCategory={mockFilterExampleFields[3].filterCategories[0]}
        placeholder={mockFilterExampleFields[3].placeholder}
      >
        <Filter.CategoryValueSelector
          categoryValues={
            mockFilterExampleFields[3].filterCategories[0].filterValues
          }
          currentValue={
            mockFilterExampleFields[3].filterCategories[0].filterValues[0]
          }
          placeholder={mockFilterExampleFields[3].filterCategoriesPlaceholder}
        />
      </Filter.CategorySelector>
    </Filter>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Filter renders properly in a Toolbar', () => {
  const component = renderer.create(
    <Toolbar>
      <Filter>
        <Filter.TypeSelector
          filterTypes={mockFilterExampleFields}
          currentFilterType={mockFilterExampleFields[0]}
        />
        <FormControl
          type={mockFilterExampleFields[0].filterType}
          id="filterInput"
          value=""
          placeholder="Filter by Name"
        />
      </Filter>
    </Toolbar>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Filter active components render properly', () => {
  const component = renderer.create(
    <Toolbar.Results>
      <Filter.ActiveLabel title="Active Filters:" />
      <Filter.List>
        <Filter.Item label="Name: John" />
        <Filter.Item label="Address: Westford" />
      </Filter.List>
    </Toolbar.Results>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
