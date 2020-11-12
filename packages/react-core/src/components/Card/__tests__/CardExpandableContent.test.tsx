import React from 'react';
import { CardContext } from '../Card';
import { CardExpandableContent } from '../CardExpandableContent';
import { mount } from 'enzyme';

test('renders successfully', () => {
  const view = mount(
    <CardContext.Provider value={{ isExpanded: true }}>
      <CardExpandableContent />
    </CardContext.Provider>
  );
  expect(view).toMatchSnapshot();
});
