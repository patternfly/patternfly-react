import React from 'react';
import { CardExpandableContent } from '../CardExpandableContent';
import { shallow } from 'enzyme';

test('renders successfully', () => {
  const view = shallow(<CardExpandableContent />);
  expect(view).toMatchSnapshot();
});
