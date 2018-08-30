import React from 'react';
import { mount } from 'enzyme';
import { FilterSidePanel } from './index';
import { FormControl } from 'patternfly-react';

test('Filter input renders properly', () => {
  const component = mount(
    <FilterSidePanel id="filter-panel" className="test-class">
      <FilterSidePanel.Category>
        <FormControl type="text" placeholder="Filter by name" bsClass="form-control" />
      </FilterSidePanel.Category>
      <FilterSidePanel.Category title="Type">
        <FilterSidePanel.CategoryItem count={23}>SUV</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={11}>Sedan</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={5}>Pickup Truck</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={3}>Sports Car</FilterSidePanel.CategoryItem>
      </FilterSidePanel.Category>
      <FilterSidePanel.Category title="Type" maxShowCount={2}>
        <FilterSidePanel.CategoryItem count={23}>SUV</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={11}>Sedan</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={5}>Pickup Truck</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={3}>Sports Car</FilterSidePanel.CategoryItem>
      </FilterSidePanel.Category>
      <FilterSidePanel.Category title="Type" maxShowCount={2} leeway={0}>
        <FilterSidePanel.CategoryItem count={23}>SUV</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={11}>Sedan</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={5}>Pickup Truck</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={3}>Sports Car</FilterSidePanel.CategoryItem>
      </FilterSidePanel.Category>
      <FilterSidePanel.Category title="Type" maxShowCount={2} leeway={0} showText="TEST SHOW">
        <FilterSidePanel.CategoryItem count={23}>SUV</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={11}>Sedan</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={5}>Pickup Truck</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={3}>Sports Car</FilterSidePanel.CategoryItem>
      </FilterSidePanel.Category>
      <FilterSidePanel.Category title="Type" maxShowCount={2} leeway={0} showAll hideText="TEST HIDE">
        <FilterSidePanel.CategoryItem count={23}>SUV</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={11}>Sedan</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={5}>Pickup Truck</FilterSidePanel.CategoryItem>
        <FilterSidePanel.CategoryItem count={3}>Sports Car</FilterSidePanel.CategoryItem>
      </FilterSidePanel.Category>
    </FilterSidePanel>
  );
  expect(component.render()).toMatchSnapshot();
});
