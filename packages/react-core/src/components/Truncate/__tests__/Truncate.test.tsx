import React from 'react';
import { shallow } from 'enzyme';
import { Truncate } from '../Truncate';

test('renders default truncation', () => {
  const view = shallow(<Truncate content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'} />);
  expect(view).toMatchSnapshot();
});

test('renders start truncation', () => {
  const view = shallow(<Truncate content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'} position={'start'} />);
  expect(view).toMatchSnapshot();
});

test('renders middle truncation', () => {
  const view = shallow(<Truncate content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'} position={'middle'} />);
  expect(view).toMatchSnapshot();
});
