import React from 'react';
import renderer from 'react-test-renderer';

import AutoComplete from './AutoComplete';
import { getActiveItems } from './helpers';
import AutoCompleteItems from './AutoCompleteItems';
import { getSearchItems } from './AutoComplete.fixtures';

describe('Autocomplete component', () => {
  it('should render input but not items on initial render', () => {
    const component = renderer.create(
      <AutoComplete
        items={getSearchItems()}
        onInputUpdate={() => {}}
        onSearch={() => {}}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renderItems should render the items', () => {
    const items = getSearchItems();
    const activeItems = getActiveItems(items);

    const component = renderer.create(
      <AutoCompleteItems
        {...{
          items,
          activeItems,
          highlightedIndex: items.indexOf(activeItems[0]),
          selectedItem: '',
          getItemProps: () => {}
        }}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
