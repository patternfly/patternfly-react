import React from 'react';
import { render } from '@testing-library/react';
import { ContextSelectorFooter } from '../ContextSelectorFooter';

test('Renders ContextSelectorFooter', () => {
  const view = render(<ContextSelectorFooter>testing text</ContextSelectorFooter>);
  expect(view.container.outerHTML).toMatchSnapshot();
});
