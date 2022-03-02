import React from 'react';
import { render } from '@testing-library/react';
import { Truncate } from '../Truncate';

test('renders default truncation', () => {
  const view = render(<Truncate content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'} />);
  expect(view.container).toMatchSnapshot();
});

test('renders start truncation', () => {
  const view = render(<Truncate content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'} position={'start'} />);
  expect(view.container).toMatchSnapshot();
});

test('renders middle truncation', () => {
  const view = render(<Truncate content={'Vestibulum interdum risus et enim faucibus, sit amet molestie est accumsan.'} position={'middle'} />);
  expect(view.container).toMatchSnapshot();
});
