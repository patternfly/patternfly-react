import React from 'react';
import { shallow } from 'enzyme';
import { CancelButton } from './index';

test('it renders properly', () => {
  const component = shallow(<CancelButton />);

  expect(component).toMatchSnapshot();
});
