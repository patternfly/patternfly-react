import React from 'react';
import { CardContext } from '../Card';
import { CardExpandableContent } from '../CardExpandableContent';
import { render } from '@testing-library/react';

test('renders successfully', () => {
  const view = render(
    <CardContext.Provider value={{ isExpanded: true }}>
      <CardExpandableContent />
    </CardContext.Provider>
  );
  expect(view.container).toMatchSnapshot();
});
