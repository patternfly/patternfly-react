import React from 'react';
import { shallow } from 'enzyme';
import { ConfirmButton } from './index';

test('it renders properly', () => {
  const component = shallow(<ConfirmButton />);

  expect(component).toMatchSnapshot();
});
