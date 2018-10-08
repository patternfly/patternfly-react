import React from 'react';
import { mount } from 'enzyme';
import { Filter, FormControl, Toolbar, DropdownButton } from '../../index';
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

test('Selectors are rendered if at least two filters exist or a placeholder is given', () => {
  [
    {
      Selector: Filter.TypeSelector,
      props: {
        currentFilterType: 'a',
        filterTypes: ['a']
      },
      expected: {
        length: 0
      }
    },
    {
      Selector: Filter.TypeSelector,
      props: {
        currentFilterType: 'a',
        filterTypes: []
      },
      expected: {
        length: 0
      }
    },
    {
      Selector: Filter.TypeSelector,
      props: {
        currentFilterType: 'a',
        filterTypes: ['a', 'b']
      },
      expected: {
        length: 1,
        title: 'a'
      }
    },
    {
      Selector: Filter.TypeSelector,
      props: {
        currentFilterType: 'a',
        filterTypes: [],
        placeholder: 'placeholder'
      },
      expected: {
        length: 1,
        title: 'a'
      }
    },
    {
      Selector: Filter.ValueSelector,
      props: {
        currentValue: { title: 'a' },
        filterValues: ['a', 'b']
      },
      expected: {
        length: 1,
        title: 'a'
      }
    },
    {
      Selector: Filter.ValueSelector,
      props: {
        currentValue: 'a',
        filterValues: ['a']
      },
      expected: {
        length: 0
      }
    },
    {
      Selector: Filter.ValueSelector,
      props: {
        currentValue: 'a',
        filterValues: [],
        placeholder: 'placeholder'
      },
      expected: {
        length: 1,
        title: 'a'
      }
    },
    {
      Selector: Filter.ValueSelector,
      props: {
        currentValue: 'a',
        filterValues: []
      },
      expected: {
        length: 0
      }
    },
    {
      Selector: Filter.CategorySelector,
      props: {
        currentCategory: 'b',
        filterCategories: ['a', 'b']
      },
      expected: {
        length: 1,
        title: 'b'
      }
    },
    {
      Selector: Filter.CategorySelector,
      props: {
        currentCategory: 'a',
        filterCategories: ['a']
      },
      expected: {
        length: 0
      }
    },
    {
      Selector: Filter.CategorySelector,
      props: {
        currentCategory: '',
        filterCategories: [],
        placeholder: 'placeholder'
      },
      expected: {
        length: 1,
        title: 'placeholder'
      }
    },
    {
      Selector: Filter.CategorySelector,
      props: {
        currentCategory: 'a',
        filterCategories: []
      },
      expected: {
        length: 0
      }
    },
    {
      Selector: Filter.CategoryValueSelector,
      props: {
        currentValue: 'a',
        categoryValues: ['a', 'b']
      },
      expected: {
        length: 1,
        title: 'a'
      }
    },
    {
      Selector: Filter.CategoryValueSelector,
      props: {
        currentValue: 'a',
        categoryValues: ['a']
      },
      expected: {
        length: 0
      }
    },
    {
      Selector: Filter.CategoryValueSelector,
      props: {
        currentValue: 'a',
        categoryValues: [],
        placeholder: 'placeholder'
      },
      expected: {
        length: 1,
        title: 'a'
      }
    },
    {
      Selector: Filter.CategoryValueSelector,
      props: {
        currentValue: 'a',
        categoryValues: []
      },
      expected: {
        length: 0
      }
    }
  ].forEach(({ Selector, props, expected }) => {
    const view = mount(<Selector {...props} />).find(DropdownButton);
    expect(view).toHaveLength(expected.length);
    if (expected.length) {
      expect(view.props().title).toBe(expected.title);
    }
  });
});
