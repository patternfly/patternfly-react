import React from 'react';

import {
  Button,
  DropdownKebab,
  Filter,
  Icon,
  MenuItem,
  Sort,
  Toolbar
} from '../../../index';

import { mockFilterExampleFields } from '../../Filter/__mocks__/mockFilterExample';
import { mockSortFields } from '../../Sort/__mocks__/mockSortExample';

const bindMethods = (context, methods) => {
  methods.forEach(method => {
    context[method] = context[method].bind(context);
  });
};

export class MockToolbarExample extends React.Component {
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
      'clearFilters',
      'updateCurrentSortType',
      'toggleCurrentSortDirection'
    ]);

    this.state = {
      currentFilterType: mockFilterExampleFields[0],
      activeFilters: [],
      currentValue: '',
      currentSortType: mockSortFields[0],
      isSortNumeric: mockSortFields[0].isNumeric,
      isSortAscending: true,
      currentViewType: 'list'
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
      this.setState({ currentValue: '', currentFilterType: filterType });

      if (filterType.filterType === 'complex-select') {
        this.setState({ filterCategory: undefined, categoryValue: '' });
      }
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
      this.setState({ filterCategory: category, categoryValue: '' });
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

  updateCurrentSortType(sortType) {
    const { currentSortType } = this.state;
    if (currentSortType !== sortType) {
      this.setState({
        currentSortType: sortType,
        isSortNumeric: sortType.isNumeric,
        isSortAscending: true
      });
    }
  }

  toggleCurrentSortDirection() {
    const { isSortAscending } = this.state;

    this.setState({ isSortAscending: !isSortAscending });
  }

  setViewType(viewType) {
    this.setState({ currentViewType: viewType });
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
        <input
          className="form-control"
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
    const {
      currentFilterType,
      activeFilters,
      currentSortType,
      isSortNumeric,
      isSortAscending,
      currentViewType
    } = this.state;

    return (
      <Toolbar>
        <Filter>
          <Filter.TypeSelector
            filterTypes={mockFilterExampleFields}
            currentFilterType={currentFilterType}
            onFilterTypeSelected={this.selectFilterType}
          />
          {this.renderInput()}
        </Filter>
        <Sort>
          <Sort.TypeSelector
            sortTypes={mockSortFields}
            currentSortType={currentSortType}
            onSortTypeSelected={this.updateCurrentSortType}
          />
          <Sort.DirectionSelector
            isNumeric={isSortNumeric}
            isAscending={isSortAscending}
            onClick={() => this.toggleCurrentSortDirection()}
          />
        </Sort>
        <div className="form-group">
          <Button>Action 1</Button>
          <Button>Action 2</Button>
          <DropdownKebab id="toolbarActionKebab">
            <MenuItem>Action</MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem>Something Else Here</MenuItem>
            <MenuItem role="separator" className="divider" />
            <MenuItem>Separated Link</MenuItem>
          </DropdownKebab>
        </div>
        <Toolbar.RightContent>
          <Toolbar.Find
            placeholder="Find By Keyword..."
            currentIndex={1}
            totalCount={3}
          />
          <Toolbar.ViewSelector>
            <Button
              title="List View"
              bsStyle="link"
              className={{ active: currentViewType === 'list' }}
              onClick={() => {
                this.setViewType('list');
              }}
            >
              <Icon type="fa" name="th-list" />
            </Button>
            <Button
              title="Card View"
              bsStyle="link"
              className={{ active: currentViewType === 'card' }}
              onClick={() => {
                this.setViewType('card');
              }}
            >
              <Icon type="fa" name="th" />
            </Button>
            <Button
              title="Table View"
              bsStyle="link"
              className={{ active: currentViewType === 'table' }}
              onClick={() => {
                this.setViewType('table');
              }}
            >
              <Icon type="fa" name="table" />
            </Button>
          </Toolbar.ViewSelector>
        </Toolbar.RightContent>
        {!activeFilters ||
          (activeFilters.length === 0 && (
            <Toolbar.Results>
              <h5>40 Results</h5>
            </Toolbar.Results>
          ))}
        {activeFilters &&
          activeFilters.length > 0 && (
            <Toolbar.Results>
              <h5>40 Results</h5>
              <Filter.ActiveLabel title={'Active Filters:'} />
              <Filter.List>
                {activeFilters.map((item, index) => {
                  return (
                    <Filter.Item
                      label={item.label}
                      key={index}
                      onRemove={this.removeFilter}
                      filterData={item}
                    />
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
      </Toolbar>
    );
  }
}

export const mockToolbarExampleSource = `
import React from 'react';

import {
  Button,
  DropdownKebab,
  Filter,
  Icon,
  MenuItem,
  Sort,
  Toolbar
} from '../../../index';

import { mockFilterExampleFields } from '../../Filter/__mocks__/mockFilterExample';
import { mockSortFields } from '../../Sort/__mocks__/mockSortExample';

const bindMethods = (context, methods) => {
  methods.forEach(method => {
    context[method] = context[method].bind(context);
  });
};

export class MockToolbarExample extends React.Component {
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
      'clearFilters',
      'updateCurrentSortType',
      'toggleCurrentSortDirection'
    ]);

    this.state = {
      currentFilterType: mockFilterExampleFields[0],
      activeFilters: [],
      currentValue: '',
      currentSortType: mockSortFields[0],
      isSortNumeric: mockSortFields[0].isNumeric,
      isSortAscending: true,
      currentViewType: 'list'
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
      this.setState({ currentValue: '', currentFilterType: filterType });

      if (filterType.filterType === 'complex-select') {
        this.setState({ filterCategory: undefined, categoryValue: '' });
      }
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
      this.setState({ filterCategory: category, categoryValue: '' });
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

  updateCurrentSortType(sortType) {
    const { currentSortType } = this.state;
    if (currentSortType !== sortType) {
      this.setState({
        currentSortType: sortType,
        isSortNumeric: sortType.isNumeric,
        isSortAscending: true
      });
    }
  }

  toggleCurrentSortDirection() {
    const { isSortAscending } = this.state;

    this.setState({ isSortAscending: !isSortAscending });
  }

  setViewType(viewType) {
    this.setState({ currentViewType: viewType });
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
        <input
          className="form-control"
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
    const {
      currentFilterType,
      activeFilters,
      currentSortType,
      isSortNumeric,
      isSortAscending,
      currentViewType
    } = this.state;

    return (
      <Toolbar>
        <Filter>
          <Filter.TypeSelector
            filterTypes={mockFilterExampleFields}
            currentFilterType={currentFilterType}
            onFilterTypeSelected={this.selectFilterType}
          />
          {this.renderInput()}
        </Filter>
        <Sort>
          <Sort.TypeSelector
            sortTypes={mockSortFields}
            currentSortType={currentSortType}
            onSortTypeSelected={this.updateCurrentSortType}
          />
          <Sort.DirectionSelector
            isNumeric={isSortNumeric}
            isAscending={isSortAscending}
            onClick={() => this.toggleCurrentSortDirection()}
          />
        </Sort>
        <div className="form-group">
          <Button>Action 1</Button>
          <Button>Action 2</Button>
          <DropdownKebab id="toolbarActionKebab">
            <MenuItem>Action</MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem>Something Else Here</MenuItem>
            <MenuItem role="separator" className="divider" />
            <MenuItem>Separated Link</MenuItem>
          </DropdownKebab>
        </div>
        <Toolbar.RightContent>
          <Toolbar.Find
            placeholder="Find By Keyword..."
            currentIndex={1}
            totalCount={3}
          />
          <Toolbar.ViewSelector>
            <Button
              title="List View"
              bsStyle="link"
              className={{ active: currentViewType === 'list' }}
              onClick={() => {
                this.setViewType('list');
              }}
            >
              <Icon type="fa" name="th-list" />
            </Button>
            <Button
              title="Card View"
              bsStyle="link"
              className={{ active: currentViewType === 'card' }}
              onClick={() => {
                this.setViewType('card');
              }}
            >
              <Icon type="fa" name="th" />
            </Button>
            <Button
              title="Table View"
              bsStyle="link"
              className={{ active: currentViewType === 'table' }}
              onClick={() => {
                this.setViewType('table');
              }}
            >
              <Icon type="fa" name="table" />
            </Button>
          </Toolbar.ViewSelector>
        </Toolbar.RightContent>
        {!activeFilters ||
          (activeFilters.length === 0 && (
            <Toolbar.Results>
              <h5>40 Results</h5>
            </Toolbar.Results>
          ))}
        {activeFilters &&
          activeFilters.length > 0 && (
            <Toolbar.Results>
              <h5>40 Results</h5>
              <Filter.ActiveLabel title={'Active Filters:'} />
              <Filter.List>
                {activeFilters.map((item, index) => {
                  return (
                    <Filter.Item
                      label={item.label}
                      key={index}
                      onRemove={this.removeFilter}
                      filterData={item}
                    />
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
      </Toolbar>
    );
  }
}
`;
