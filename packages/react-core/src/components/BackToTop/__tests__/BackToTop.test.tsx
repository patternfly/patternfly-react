import React from 'react';
import { shallow } from 'enzyme';
import { BackToTop } from '../BackToTop';

test('BackToTop test', () => {
  const view = shallow(<BackToTop />);
  expect(view).toMatchSnapshot();
});
