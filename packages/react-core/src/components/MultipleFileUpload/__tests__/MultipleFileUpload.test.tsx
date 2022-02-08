import React from 'react';
import { shallow } from 'enzyme';
import { MultipleFileUpload } from '../MultipleFileUpload';

test.skip('basic', () => {
  const view = shallow(<MultipleFileUpload />);
  // Add a useful assertion here.
  expect(view).toBe(false);
});
