import * as React from 'react';
import { shallow } from 'enzyme';
import SkipToContent from './SkipToContent';

const props = {};

test('replace with useful test name', () => {
  const view = shallow(<SkipToContent href='#main-content' {...props} />);
  // Add a useful assertion here.
  expect(view).toBe(false);
});
