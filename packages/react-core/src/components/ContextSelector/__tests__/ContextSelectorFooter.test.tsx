import React from 'react';
import { shallow, mount } from 'enzyme';
import { ContextSelectorFooter } from '../ContextSelectorFooter';

test('Renders ContextSelectorFooter', () => {
  const view = shallow(<ContextSelectorFooter>testing text</ContextSelectorFooter>);
  expect(view).toMatchSnapshot();
});
