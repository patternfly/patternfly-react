import { Divider } from './Divider';
import * as React from 'react';
import { shallow } from 'enzyme';

test('divider using hr', () => {
  const view = shallow(<Divider/>);
  expect(view).toMatchSnapshot();
});

test('divider using li', () => {
  const view = shallow(<Divider variant="li" role="separator"/>);
  expect(view).toMatchSnapshot();
});

test('divider using div', () => {
  const view = shallow(<Divider variant="div" role="separator"/>);
  expect(view).toMatchSnapshot();
});
