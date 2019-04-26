import React from 'react';
import { shallow } from 'enzyme';
import ExpandedContent from './ExpandedContent';

const props = {
  className: 'class-1',
  id: 'id-1'
};

test('expanded content render', () => {
  const view = shallow(<ExpandedContent {...props} onChange={() => {}}>This is my text</ExpandedContent>);
  expect(view).toMatchSnapshot();
});
