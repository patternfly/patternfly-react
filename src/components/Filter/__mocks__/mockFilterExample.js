import React from 'react';
import { Filter, FormControl, Toolbar } from '../../../index';
import { bindMethods } from '../../../common/helpers';

export const mockFilterExampleFields = [
  {
    id: 'name',
    title: 'Name',
    placeholder: 'Filter by Name',
    filterType: 'text'
  },
  {
    id: 'address',
    title: 'Address',
    placeholder: 'Filter by Address',
    filterType: 'text'
  },
  {
    id: 'birthMonth',
    title: 'Birth Month',
    placeholder: 'Filter by Birth Month',
    filterType: 'select',
    filterValues: [
      { title: 'January', id: 'jan' },
      { title: 'February', id: 'feb' },
      { title: 'March', id: 'mar' },
      { title: 'April', id: 'apr' },
      { title: 'May', id: 'may' },
      { title: 'June', id: 'jun' },
      { title: 'July', id: 'jul' },
      { title: 'August', id: 'aug' },
      { title: 'September', id: 'sep' },
      { title: 'October', id: 'oct' },
      { title: 'November', id: 'nov' },
      { title: 'December', id: 'dec' }
    ]
  },
  {
    id: 'car',
    title: 'Car',
    placeholder: 'Filter by Car Make',
    filterType: 'complex-select',
    filterValues: [{ title: 'Subaru', id: 'subie' }, 'Toyota'],
    filterCategoriesPlaceholder: 'Filter by Car Model',
    filterCategories: [
      {
        id: 'subie',
        title: 'Subaru',
        filterValues: [
          {
            title: 'Outback',
            id: 'out'
          },
          'Crosstrek',
          'Impreza'
        ]
      },
      {
        id: 'toyota',
        title: 'Toyota',
        filterValues: [
          {
            title: 'Prius',
            id: 'pri'
          },
          'Corolla',
          'Echo'
        ]
      }
    ]
  }
];

export class MockFilterExample extends React.Component {
  constructor() {
    super();

    bindMethods(this, [
      'updateCurrentValue',
      'onValueKeyPress',
      'selectFilterType',
      'filterValueSelected',
      'filterCategorySelected',
      'categoryValueSelected',
      'removeFilter',
      'clearFilters'
    ]);

    this.state = {
      currentFilterType: mockFilterExampleFields[0],
      activeFilters: [],
      currentValue: ''
    };
  }

  filterAdded = (field, value) => {
    let filterText = '';
    if (field.title) {
      filterText = field.title;
    } else {
      filterText = field;
    }
    filterText += ': ';

    if (value.filterCategory) {
      filterText += `${value.filterCategory.title ||
        value.filterCategory}-${value.filterValue.title || value.filterValue}`;
    } else if (value.title) {
      filterText += value.title;
    } else {
      filterText += value;
    }

    const activeFilters = [...this.state.activeFilters, { label: filterText }];
    this.setState({ activeFilters });
  };

  selectFilterType(filterType) {
    const { currentFilterType } = this.state;
    if (currentFilterType !== filterType) {
      this.setState(prevState => ({
        currentValue: '',
        currentFilterType: filterType,
        filterCategory:
          filterType.filterType === 'complex-select'
            ? undefined
            : prevState.filterCategory,
        categoryValue:
          filterType.filterType === 'complex-select'
            ? ''
            : prevState.categoryValue
      }));
    }
  }

  filterValueSelected(filterValue) {
    const { currentFilterType, currentValue } = this.state;

    if (filterValue !== currentValue) {
      this.setState({ currentValue: filterValue });
      if (filterValue) {
        this.filterAdded(currentFilterType, filterValue);
      }
    }
  }

  filterCategorySelected(category) {
    const { filterCategory } = this.state;
    if (filterCategory !== category) {
      this.setState({ filterCategory: category, currentValue: '' });
    }
  }

  categoryValueSelected(value) {
    const { currentValue, currentFilterType, filterCategory } = this.state;

    if (filterCategory && currentValue !== value) {
      this.setState({ currentValue: value });
      if (value) {
        const filterValue = {
          filterCategory,
          filterValue: value
        };
        this.filterAdded(currentFilterType, filterValue);
      }
    }
  }

  updateCurrentValue(event) {
    this.setState({ currentValue: event.target.value });
  }

  onValueKeyPress(keyEvent) {
    const { currentValue, currentFilterType } = this.state;

    if (keyEvent.key === 'Enter' && currentValue && currentValue.length > 0) {
      this.setState({ currentValue: '' });
      this.filterAdded(currentFilterType, currentValue);
      keyEvent.stopPropagation();
      keyEvent.preventDefault();
    }
  }

  removeFilter(filter) {
    const { activeFilters } = this.state;

    const index = activeFilters.indexOf(filter);
    if (index > -1) {
      const updated = [
        ...activeFilters.slice(0, index),
        ...activeFilters.slice(index + 1)
      ];
      this.setState({ activeFilters: updated });
    }
  }

  clearFilters() {
    this.setState({ activeFilters: [] });
  }

  renderInput() {
    const { currentFilterType, currentValue, filterCategory } = this.state;
    if (!currentFilterType) {
      return null;
    }

    if (currentFilterType.filterType === 'select') {
      return (
        <Filter.ValueSelector
          filterValues={currentFilterType.filterValues}
          placeholder={currentFilterType.placeholder}
          currentValue={currentValue}
          onFilterValueSelected={this.filterValueSelected}
        />
      );
    } else if (currentFilterType.filterType === 'complex-select') {
      return (
        <Filter.CategorySelector
          filterCategories={currentFilterType.filterCategories}
          currentCategory={filterCategory}
          placeholder={currentFilterType.placeholder}
          onFilterCategorySelected={this.filterCategorySelected}
        >
          <Filter.CategoryValueSelector
            categoryValues={filterCategory && filterCategory.filterValues}
            currentValue={currentValue}
            placeholder={currentFilterType.filterCategoriesPlaceholder}
            onCategoryValueSelected={this.categoryValueSelected}
          />
        </Filter.CategorySelector>
      );
    }
    return (
      <FormControl
        type={currentFilterType.filterType}
        value={currentValue}
        placeholder={currentFilterType.placeholder}
        onChange={e => this.updateCurrentValue(e)}
        onKeyPress={e => this.onValueKeyPress(e)}
      />
    );
  }

  render() {
    const { currentFilterType, activeFilters } = this.state;

    return (
      <div>
        <div style={{ width: 300 }}>
          <Filter>
            <Filter.TypeSelector
              filterTypes={mockFilterExampleFields}
              currentFilterType={currentFilterType}
              onFilterTypeSelected={this.selectFilterType}
            />
            {this.renderInput()}
          </Filter>
        </div>
        {activeFilters &&
          activeFilters.length > 0 && (
            <Toolbar.Results>
              <Filter.ActiveLabel>Active Filters:</Filter.ActiveLabel>
              <Filter.List>
                {activeFilters.map((item, index) => (
                  <Filter.Item
                    key={index}
                    onRemove={this.removeFilter}
                    filterData={item}
                  >
                    {item.label}
                  </Filter.Item>
                ))}
              </Filter.List>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  this.clearFilters();
                }}
              >
                Clear All Filters
              </a>
            </Toolbar.Results>
          )}
      </div>
    );
  }
}

export const mockFilterExampleSource = `
import React from 'react';
import { Filter, FormControl, Toolbar } from '../../../index';
import { bindMethods } from '../../../common/helpers';

export const mockFilterExampleFields = [
  {
    id: 'name',
    title: 'Name',
    placeholder: 'Filter by Name',
    filterType: 'text'
  },
  {
    id: 'address',
    title: 'Address',
    placeholder: 'Filter by Address',
    filterType: 'text'
  },
  {
    id: 'birthMonth',
    title: 'Birth Month',
    placeholder: 'Filter by Birth Month',
    filterType: 'select',
    filterValues: [
      { title: 'January', id: 'jan' },
      { title: 'February', id: 'feb' },
      { title: 'March', id: 'mar' },
      { title: 'April', id: 'apr' },
      { title: 'May', id: 'may' },
      { title: 'June', id: 'jun' },
      { title: 'July', id: 'jul' },
      { title: 'August', id: 'aug' },
      { title: 'September', id: 'sep' },
      { title: 'October', id: 'oct' },
      { title: 'November', id: 'nov' },
      { title: 'December', id: 'dec' }
    ]
  },
  {
    id: 'car',
    title: 'Car',
    placeholder: 'Filter by Car Make',
    filterType: 'complex-select',
    filterValues: [{ title: 'Subaru', id: 'subie' }, 'Toyota'],
    filterCategoriesPlaceholder: 'Filter by Car Model',
    filterCategories: [
      {
        id: 'subie',
        title: 'Subaru',
        filterValues: [
          {
            title: 'Outback',
            id: 'out'
          },
          'Crosstrek',
          'Impreza'
        ]
      },
      {
        id: 'toyota',
        title: 'Toyota',
        filterValues: [
          {
            title: 'Prius',
            id: 'pri'
          },
          'Corolla',
          'Echo'
        ]
      }
    ]
  }
];

export class MockFilterExample extends React.Component {
  constructor() {
    super();

    bindMethods(this, [
      'updateCurrentValue',
      'onValueKeyPress',
      'selectFilterType',
      'filterValueSelected',
      'filterCategorySelected',
      'categoryValueSelected',
      'removeFilter',
      'clearFilters'
    ]);

    this.state = {
      currentFilterType: mockFilterExampleFields[0],
      activeFilters: [],
      currentValue: ''
    };
  }

  filterAdded = (field, value) => {
    let filterText = '';
    if (field.title) {
      filterText = field.title;
    } else {
      filterText = field;
    }
    filterText += ': ';

    if (value.filterCategory) {
      filterText +=
        (value.filterCategory.title || value.filterCategory) +
        '-' +
        (value.filterValue.title || value.filterValue);
    } else if (value.title) {
      filterText += value.title;
    } else {
      filterText += value;
    }

    let activeFilters = [...this.state.activeFilters, { label: filterText }];
    this.setState({ activeFilters: activeFilters });
  };

  selectFilterType(filterType) {
    const { currentFilterType } = this.state;
    if (currentFilterType !== filterType) {
      this.setState(prevState => {
        return {
          currentValue: '',
          currentFilterType: filterType,
          filterCategory:
            filterType.filterType === 'complex-select'
              ? undefined
              : prevState.filterCategory,
          categoryValue:
            filterType.filterType === 'complex-select'
              ? ''
              : prevState.categoryValue
        };
      });
    }
  }

  filterValueSelected(filterValue) {
    const { currentFilterType, currentValue } = this.state;

    if (filterValue !== currentValue) {
      this.setState({ currentValue: filterValue });
      if (filterValue) {
        this.filterAdded(currentFilterType, filterValue);
      }
    }
  }

  filterCategorySelected(category) {
    const { filterCategory } = this.state;
    if (filterCategory !== category) {
      this.setState({ filterCategory: category, currentValue: '' });
    }
  }

  categoryValueSelected(value) {
    const { currentValue, currentFilterType, filterCategory } = this.state;

    if (filterCategory && currentValue !== value) {
      this.setState({ currentValue: value });
      if (value) {
        let filterValue = {
          filterCategory: filterCategory,
          filterValue: value
        };
        this.filterAdded(currentFilterType, filterValue);
      }
    }
  }

  updateCurrentValue(event) {
    this.setState({ currentValue: event.target.value });
  }

  onValueKeyPress(keyEvent) {
    const { currentValue, currentFilterType } = this.state;

    if (keyEvent.key === 'Enter' && currentValue && currentValue.length > 0) {
      this.setState({ currentValue: '' });
      this.filterAdded(currentFilterType, currentValue);
      keyEvent.stopPropagation();
      keyEvent.preventDefault();
    }
  }

  removeFilter(filter) {
    const { activeFilters } = this.state;

    let index = activeFilters.indexOf(filter);
    if (index > -1) {
      let updated = [
        ...activeFilters.slice(0, index),
        ...activeFilters.slice(index + 1)
      ];
      this.setState({ activeFilters: updated });
    }
  }

  clearFilters() {
    this.setState({ activeFilters: [] });
  }

  renderInput() {
    const { currentFilterType, currentValue, filterCategory } = this.state;
    if (!currentFilterType) {
      return null;
    }

    if (currentFilterType.filterType === 'select') {
      return (
        <Filter.ValueSelector
          filterValues={currentFilterType.filterValues}
          placeholder={currentFilterType.placeholder}
          currentValue={currentValue}
          onFilterValueSelected={this.filterValueSelected}
        />
      );
    } else if (currentFilterType.filterType === 'complex-select') {
      return (
        <Filter.CategorySelector
          filterCategories={currentFilterType.filterCategories}
          currentCategory={filterCategory}
          placeholder={currentFilterType.placeholder}
          onFilterCategorySelected={this.filterCategorySelected}
        >
          <Filter.CategoryValueSelector
            categoryValues={filterCategory && filterCategory.filterValues}
            currentValue={currentValue}
            placeholder={currentFilterType.filterCategoriesPlaceholder}
            onCategoryValueSelected={this.categoryValueSelected}
          />
        </Filter.CategorySelector>
      );
    } else {
      return (
        <FormControl
          type={currentFilterType.filterType}
          value={currentValue}
          placeholder={currentFilterType.placeholder}
          onChange={e => this.updateCurrentValue(e)}
          onKeyPress={e => this.onValueKeyPress(e)}
        />
      );
    }
  }

  render() {
    const { currentFilterType, activeFilters } = this.state;

    return (
      <div>
        <div style={{ width: 300 }}>
          <Filter>
            <Filter.TypeSelector
              filterTypes={mockFilterExampleFields}
              currentFilterType={currentFilterType}
              onFilterTypeSelected={this.selectFilterType}
            />
            {this.renderInput()}
          </Filter>
        </div>
        {activeFilters &&
          activeFilters.length > 0 && (
            <Toolbar.Results>
              <Filter.ActiveLabel>{'Active Filters:'}</Filter.ActiveLabel>
              <Filter.List>
                {activeFilters.map((item, index) => {
                  return (
                    <Filter.Item
                      key={index}
                      onRemove={this.removeFilter}
                      filterData={item}
                    >
                      {item.label}
                    </Filter.Item>
                  );
                })}
              </Filter.List>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  this.clearFilters();
                }}
              >
                Clear All Filters
              </a>
            </Toolbar.Results>
          )}
      </div>
    );
  }
}
`;
