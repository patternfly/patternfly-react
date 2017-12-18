import React from 'react';
import renderer from 'react-test-renderer';
import {
  Filter,
  FilterTypeSelector,
  FilterValueSelector,
  FilterCategorySelector,
  FilterCategoryValueSelector
} from '../../index';
import { mockFilterExampleFields } from './__mocks__/mockFilterExample';

test('Filter input renders properly', () => {
  const component = renderer.create(
    <Filter>
      <FilterTypeSelector
        filterTypes={mockFilterExampleFields}
        currentFilterType={mockFilterExampleFields[0]}
      />
      <input
        className="form-control"
        type={mockFilterExampleFields[0].filterType}
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
      <FilterTypeSelector
        filterTypes={mockFilterExampleFields}
        currentFilterType={mockFilterExampleFields[2]}
      />
      <FilterValueSelector
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
      <FilterTypeSelector
        filterTypes={mockFilterExampleFields}
        currentFilterType={mockFilterExampleFields[3]}
      />
      <FilterCategorySelector
        filterCategories={mockFilterExampleFields[3].filterCategories}
        currentCategory={mockFilterExampleFields[3].filterCategories[0]}
        placeholder={mockFilterExampleFields[3].placeholder}
      >
        <FilterCategoryValueSelector
          categoryValues={
            mockFilterExampleFields[3].filterCategories[0].filterValues
          }
          currentValue={
            mockFilterExampleFields[3].filterCategories[0].filterValues[0]
          }
          placeholder={mockFilterExampleFields[3].filterCategoriesPlaceholder}
        />
      </FilterCategorySelector>
    </Filter>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
